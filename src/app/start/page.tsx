"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { trackEvent } from "../components/Analytics";

type Answer = "yes" | "no" | null;

function StartPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tier = searchParams.get("tier");
  const isWaitlist = searchParams.get("waitlist") === "true";
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{
    metabolicConcern: Answer;
    inState: Answer;
  }>({
    metabolicConcern: null,
    inState: null,
  });
  const [showNotFit, setShowNotFit] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const questions = [
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

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      trackEvent("waitlist_signup", { email, failedAt: questions[step].key });
      
      // Save to Airtable
      try {
        await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, type: "state" }),
        });
      } catch (err) {
        console.error("Waitlist save error:", err);
      }
      
      setEmailSubmitted(true);
    }
  };

  // Handle direct waitlist access (?tier=executive or ?waitlist=true)
  if (tier === "executive" || isWaitlist) {
    const isExecutive = tier === "executive";
    
    const handleDirectWaitlist = async (e: React.FormEvent) => {
      e.preventDefault();
      if (email) {
        trackEvent("waitlist_signup", { email, type: isExecutive ? "executive" : "state" });
        
        try {
          await fetch("/api/waitlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, type: isExecutive ? "executive" : "state" }),
          });
        } catch (err) {
          console.error("Waitlist save error:", err);
        }
        
        setEmailSubmitted(true);
      }
    };

    return (
      <div className="min-h-screen bg-[#0a1628] text-white font-[family-name:var(--font-jakarta)]">
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-transparent.png" 
              alt="Agni Health" 
              width={300} 
              height={138} 
              className="h-[75px] sm:h-[113px] md:h-[138px] w-auto"
            />
          </Link>
        </nav>

        <main className="max-w-xl mx-auto px-8 pt-16 pb-24 text-center">
          <div className="w-16 h-16 rounded-full bg-[#d4a088]/20 flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-[#d4a088]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">
            {isExecutive ? "Join the Executive Waitlist" : "Join the Waitlist"}
          </h1>
          
          <p className="text-zinc-400 text-lg mb-8">
            {isExecutive 
              ? "Be the first to know when our Executive tier ($15K/year) opens for enrollment. Priority access to comprehensive metabolic optimization with concierge-level care."
              : "We're expanding to more states soon. Join the waitlist and we'll notify you when we're available in your area."}
          </p>

          {!emailSubmitted ? (
            <form onSubmit={handleDirectWaitlist} className="max-w-sm mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
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
            className="inline-block mt-8 text-zinc-500 hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </main>
      </div>
    );
  }

  if (showNotFit) {
    return (
      <div className="min-h-screen bg-[#0a1628] text-white font-[family-name:var(--font-jakarta)]">
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-transparent.png" 
              alt="Agni Health" 
              width={300} 
              height={138} 
              className="h-[75px] sm:h-[113px] md:h-[138px] w-auto"
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
              : "Our practice focuses on metabolic conditions like prediabetes, diabetes, and weight management. We may not be the best fit for your needs right now."}
          </p>

          {!emailSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="max-w-sm mx-auto">
              <p className="text-zinc-500 text-sm mb-4">
                {answers.inState === "no" 
                  ? "Join our waitlist to be notified when we expand to your state."
                  : "Join our waitlist and we'll follow up when we're a good fit."}
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
            src="/logo-transparent.png" 
            alt="Agni Health" 
            width={300} 
            height={138} 
            className="h-[75px] sm:h-[113px] md:h-[138px] w-auto"
          />
        </Link>
      </nav>

      <main className="max-w-xl mx-auto px-8 pt-16 pb-24">
        {/* Specialty callout */}
        <div className="mb-10 text-center">
          <p className="text-zinc-500 text-sm">
            Agni Health specializes in metabolic health for South Asian patients — a community with clinically documented higher cardiometabolic risk at lower BMI thresholds.
          </p>
        </div>

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

export default function StartPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <StartPageContent />
    </Suspense>
  );
}
