import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service | Agni Health",
  description: "Terms of Service for Agni Health, a telehealth practice operated by Sohan Japa MD LLC.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-[family-name:var(--font-jakarta)]">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-transparent.png"
            alt="Agni Health"
            width={400}
            height={100}
            className="h-[75px] sm:h-[113px] md:h-[138px] w-auto"
          />
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-8 py-12 pb-24">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-zinc-400 mb-10">Effective Date: May 14, 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed">

          <div className="bg-[#0d1c30] border border-zinc-700 rounded-xl p-6 text-sm">
            <p className="font-semibold text-white mb-1">PLEASE READ THESE TERMS CAREFULLY. BY USING OUR SITE OR SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS.</p>
          </div>

          <p>Welcome to Agni Health. These Terms of Service (&quot;Terms&quot;) govern your use of the website located at agnihealth.co (the &quot;Site&quot;) and the telehealth medical services provided by Sohan Japa MD LLC, doing business as Agni Health (&quot;Agni Health,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).</p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. About Our Services</h2>
            <p className="mb-4">Agni Health provides telehealth medical services, including but not limited to medical consultations, metabolic health management, medication management, and ongoing care coordination. Our services are provided by Sohan Japa, MD, a board-certified physician licensed in California, Louisiana, and Massachusetts.</p>
            <p className="mb-4"><strong>Important Limitations:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our services are available only to patients physically located in California, Louisiana, or Massachusetts at the time of consultation</li>
              <li>We provide non-emergency outpatient care only</li>
              <li><strong>We do not provide emergency medical services. If you are experiencing a medical emergency, call 911 or go to your nearest emergency room immediately.</strong></li>
              <li>Our services do not replace your primary care physician or specialist care; we provide targeted metabolic health management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Not for Emergencies</h2>
            <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-4 mb-4">
              <p className="font-semibold text-white">Agni Health is not equipped to handle medical emergencies.</p>
            </div>
            <p className="mb-4">If you believe you are experiencing a medical emergency, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Chest pain or difficulty breathing</li>
              <li>Signs of stroke (sudden numbness, confusion, trouble speaking)</li>
              <li>Severe allergic reactions</li>
              <li>Thoughts of self-harm or suicide</li>
              <li>Any condition requiring immediate attention</li>
            </ul>
            <p><strong>Call 911 or go to your nearest emergency room immediately.</strong> Do not rely on telehealth services for emergency care.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Eligibility</h2>
            <p className="mb-4">To use our services, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years of age</li>
              <li>Be physically located in California, Louisiana, or Massachusetts at the time of any telehealth consultation</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Provide accurate and complete information during registration and throughout your care</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Account and Registration</h2>
            <p className="mb-4">To become a patient, you must complete our intake process, which includes providing personal and health information. You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the confidentiality of your login credentials</li>
              <li>Providing accurate, current, and complete information</li>
              <li>Promptly updating your information if it changes</li>
              <li>All activity that occurs under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Telehealth Consent</h2>
            <p className="mb-4">By using our telehealth services, you acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Telehealth involves the delivery of health care services using electronic communications</li>
              <li>There are potential risks, including technology failures, interruptions in service, and the possibility that the quality of images/audio may affect the consultation</li>
              <li>In some cases, telehealth may not be appropriate, and we may recommend an in-person visit with a local provider</li>
              <li>You have the right to refuse or discontinue telehealth services at any time</li>
            </ul>
            <p className="mt-4">A separate, detailed Telehealth Informed Consent is provided as part of your patient intake.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Payment and Fees</h2>
            <p className="mb-4"><strong>Self-Pay Practice:</strong> Agni Health is a self-pay telehealth practice. We do not bill insurance directly. Fees are disclosed prior to booking and are due at the time of service.</p>
            <p className="mb-4"><strong>Payment Methods:</strong> We accept payment via credit card, debit card, or other methods as displayed during checkout. Payments are processed through Stripe, Inc.</p>
            <p className="mb-4"><strong>Superbills:</strong> Upon request, we can provide superbills (itemized receipts with procedure codes) that you may submit to your insurance for potential reimbursement. We make no guarantee of insurance reimbursement.</p>
            <p><strong>No Refunds for Completed Services:</strong> Once a telehealth consultation has been completed, the service fee is non-refundable. For cancellations, see Section 7.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>24-Hour Notice:</strong> Appointments cancelled at least 24 hours in advance receive a full refund.</li>
              <li><strong>Late Cancellations:</strong> Appointments cancelled with less than 24 hours notice, or no-shows, may be charged the full appointment fee.</li>
              <li><strong>Provider Cancellation:</strong> If we cancel your appointment, you will receive a full refund or may reschedule at no additional charge.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Medical Disclaimer</h2>
            <p className="mb-4">The information provided on our Site is for general educational purposes only and does not constitute medical advice. Content on our Site, including statistics and research citations, is provided for informational purposes and does not establish a doctor-patient relationship.</p>
            <p className="mb-4"><strong>No Doctor-Patient Relationship:</strong> Browsing our Site or communicating with us through general inquiry channels does not create a doctor-patient relationship. A doctor-patient relationship is established only when you have completed our intake process, been accepted as a patient, and received individualized care from Dr. Japa.</p>
            <p><strong>Individual Results Vary:</strong> Population-level statistics do not predict individual health outcomes. Your care is individualized based on your specific clinical factors.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Privacy and HIPAA</h2>
            <p>Your privacy is important to us. Our use of your personal and health information is governed by our <Link href="/privacy" className="text-[#d4a088] hover:underline">Notice of Privacy Practices</Link>. By using our services, you acknowledge that you have received and reviewed our Notice of Privacy Practices. We are a covered entity under HIPAA and comply with all applicable privacy laws, including the California Confidentiality of Medical Information Act (CMIA).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Intellectual Property</h2>
            <p>All content on our Site, including text, graphics, logos, images, and software, is the property of Agni Health or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our content without our prior written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Limitation of Liability</h2>
            <p className="mb-4 text-sm">TO THE FULLEST EXTENT PERMITTED BY LAW, AGNI HEALTH, ITS OWNERS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OUR SITE OR SERVICES.</p>
            <p className="mb-4 text-sm">IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR YOUR USE OF OUR SERVICES EXCEED THE AMOUNT YOU PAID TO US FOR SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</p>
            <p className="mb-4 text-sm">THIS LIMITATION OF LIABILITY DOES NOT APPLY TO LIABILITY ARISING FROM OUR GROSS NEGLIGENCE, WILLFUL MISCONDUCT, OR FRAUD, OR TO ANY LIABILITY THAT CANNOT BE LIMITED BY LAW.</p>
            <p><strong>Medical Malpractice:</strong> Nothing in these Terms limits any claims for medical malpractice or professional negligence, which are governed by applicable state law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Agni Health, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising from: (a) your violation of these Terms; (b) your violation of any applicable law; or (c) any content you submit or transmit through our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Dispute Resolution</h2>
            <p className="mb-4"><strong>Governing Law:</strong> These Terms are governed by the laws of the State of California, without regard to its conflict of law principles.</p>
            <p className="mb-4"><strong>Jurisdiction:</strong> Any dispute arising from these Terms or your use of our services shall be brought exclusively in the state or federal courts located in San Francisco County, California, and you consent to the personal jurisdiction of such courts.</p>
            <p><strong>Informal Resolution:</strong> Before initiating any formal legal action, you agree to contact us at <a href="mailto:legal@agnihealth.co" className="text-[#d4a088] hover:underline">legal@agnihealth.co</a> to attempt to resolve the dispute informally. We will attempt to resolve the matter within 30 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">14. Changes to These Terms</h2>
            <p>We may modify these Terms at any time by posting the revised Terms on our Site. Changes are effective upon posting. Your continued use of our Site or services after changes are posted constitutes your acceptance of the revised Terms. We will make reasonable efforts to notify patients of material changes via email.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">15. Termination</h2>
            <p>We may suspend or terminate your access to our services at any time, with or without cause, and with or without notice. Upon termination, your right to use our services ceases immediately. Provisions that by their nature should survive termination will survive, including ownership provisions, warranty disclaimers, indemnification, and limitation of liability.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">16. Severability</h2>
            <p>If any provision of these Terms is held to be invalid or unenforceable, that provision will be modified to reflect the parties&apos; intention or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">17. Entire Agreement</h2>
            <p>These Terms, together with our <Link href="/privacy" className="text-[#d4a088] hover:underline">Notice of Privacy Practices</Link> and any other agreements incorporated by reference, constitute the entire agreement between you and Agni Health regarding your use of our Site and services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">18. Contact Us</h2>
            <p>If you have questions about these Terms, please contact us:</p>
            <div className="mt-3 space-y-1 text-zinc-400">
              <p>Agni Health / Sohan Japa MD LLC</p>
              <p>447 Sutter St Ste 506 - 1024</p>
              <p>San Francisco, CA 94108</p>
              <p><a href="mailto:legal@agnihealth.co" className="text-[#d4a088] hover:underline">legal@agnihealth.co</a></p>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm text-zinc-500">
          © 2026 Agni Health. All rights reserved. · 
          <Link href="/privacy" className="hover:text-zinc-300 ml-1">Privacy Practices</Link> · 
          <Link href="/terms" className="hover:text-zinc-300 ml-1">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
