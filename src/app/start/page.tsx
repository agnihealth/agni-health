"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { trackEvent } from "../components/Analytics";

type Answer = "yes" | "no" | null;

export default function StartPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{
    southAsian: Answer;
    metabolicConcern: Answer;
    inState: Answer;
  }>({
    southAsian: null,
    metabolicConcern: null,
    inState: null,
  });
  const [showNotFit, setShowNotFit] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const questions = [
    {
      key: "southAsian" as const,
      question: "Are you of South Asian heritage?",
      subtext: "Indian, Pakistani, Bangladeshi, Sri Lankan, Nepali, or similar background",
    },
    {
      key: "metabolicConcern" as const,
      question: "Are you concerned about or managing a metabolic condition?",
      subtext: "Prediabetes, type 2 diabetes, high cholesterol, weight, or metabolic syndrome",
    },
    {
      key: "inState" as const,
      question: "Are you located in California, Louisiana, or Massachusetts?",
      subtext: "We're currently licensed in these states",
    },
  ];

  const handleAnswer = (answer: Answer) => {
    const currentQuestion = questions[step];
    const newAnswers = { ...answers, [currentQuestion.key]: answer };
    setAnswers(newAnswers);

    trackEvent("screening_answer", {
      question: currentQuestion.key,
      answer,
      step: step + 1,
    });

    if (answer === "no") {
      trackEvent("screening_not_qualified", {
        failedAt: currentQuestion.key,
        step: step + 1,
      });
      setShowNotFit(true);
      return;
    }

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // All yes - qualified!
      trackEvent("screening_qualified", { answers: newAnswers });
      router.push("/book");
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      trackEvent("waitlist_signup", { email, failedAt: questions[step].key });
      setEmailSubmitted(true);
    }
  };

  if (showNotFit) {
    return (
      <div className="min-h-screen bg-[#0a1628] text-white font-[family-name:var(--font-jakarta)]">
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-v2.png" 
              alt="Agni Health" 
              width={160} 
              height={40} 
              className="h-10 w-auto"
            />
          </Link>
        </nav>

        <main className="max-w-xl mx-auto px-8 pt-16 pb-24 text-center">
          <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">
            We're not the right fit—yet
          </h1>
          
          <p className="text-zinc-400 text-lg mb-8">
            {answers.inState === "no" 
              ? "We're currently only licensed in California, Louisiana, and Massachusetts. We're expanding soon."
              : answers.southAsian === "no"
              ? "Our practice specializes in metabolic health for South Asian patients. We may not be the best fit for your needs right now."
              : "Our practice focuses on metabolic conditions like prediabetes, diabetes, and weight management. We may not be the best fit for your needs right now."}
          </p>

          {!emailSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="max-w-sm mx-auto">
              <p className="text-zinc-500 text-sm mb-4">
                {answers.inState === "no" 
                  ? "Join our waitlist to be notified when we expand to your state."
                  : "Join our waitlist for updates."}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded bg-[#0d1c30] border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#d4a088]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#d4a088] text-[#0a1628] rounded font-medium hover:bg-[#e0b098] transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-[#0d1c30] border border-zinc-700 rounded-lg p-6">
              <svg className="w-8 h-8 text-[#d4a088] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-white">You're on the list. We'll be in touch.</p>
            </div>
          )}

          <Link 
            href="/"
            className="inline-block mt-8 text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </main>
      </div>
    );
  }

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-[family-name:var(--font-jakarta)]">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo-v2.png" 
            alt="Agni Health" 
            width={160} 
            height={40} 
            className="h-10 w-auto"
          />
        </Link>
      </nav>

      <main className="max-w-xl mx-auto px-8 pt-16 pb-24">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between text-sm text-zinc-500 mb-2">
            <span>Quick eligibility check</span>
            <span>{step + 1} of {questions.length}</span>
          </div>
          <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#d4a088] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            {currentQuestion.question}
          </h1>
          <p className="text-zinc-400 text-lg mb-12">
            {currentQuestion.subtext}
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleAnswer("yes")}
              className="px-12 py-4 bg-[#d4a088] text-[#0a1628] rounded text-lg font-medium hover:bg-[#e0b098] transition-colors"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer("no")}
              className="px-12 py-4 bg-zinc-800 text-white rounded text-lg font-medium hover:bg-zinc-700 transition-colors"
            >
              No
            </button>
          </div>
        </div>

        <Link 
          href="/"
          className="block mt-16 text-center text-zinc-500 hover:text-white transition-colors text-sm"
        >
          ← Back to home
        </Link>
      </main>
    </div>
  );
}
