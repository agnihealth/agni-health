import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Notice of Privacy Practices | Agni Health",
  description: "HIPAA Notice of Privacy Practices for Agni Health, a telehealth practice operated by Sohan Japa MD LLC.",
};

export default function Privacy() {
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

      <main className="max-w-3xl mx-auto px-8 py-12 pb-24">
        <h1 className="text-4xl font-bold mb-2">Notice of Privacy Practices</h1>
        <p className="text-zinc-400 mb-10">Effective Date: May 6, 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed">

          <div className="bg-[#0d1c30] border border-zinc-700 rounded-xl p-6 text-sm">
            <p className="font-semibold text-white mb-1">THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Who We Are</h2>
            <p>This Notice of Privacy Practices applies to Agni Health, a telehealth medical practice operated by Sohan Japa MD LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), located at 447 Sutter St Ste 506 - 1024, San Francisco, CA 94108. We are a covered entity under the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and are required by law to maintain the privacy of your protected health information (PHI), provide you with notice of our legal duties and privacy practices, and follow the terms of the notice currently in effect.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How We May Use and Disclose Your Health Information</h2>
            <p className="mb-4">The following describes the ways we may use and disclose health information that identifies you. Not every use or disclosure will be listed, but all of the ways we are permitted to use and disclose information will fall within one of these categories.</p>

            <h3 className="text-lg font-medium text-white mb-2">Treatment</h3>
            <p className="mb-4">We may use your health information to provide, coordinate, or manage your medical care. For example, a physician treating you may share information with other health professionals who are providing services to you or who may be treating you in the future.</p>

            <h3 className="text-lg font-medium text-white mb-2">Payment</h3>
            <p className="mb-4">We may use and disclose your health information so that services you receive may be billed to and payment may be collected from you or from a third party. For example, we may need to provide your health plan with information about a service you received so your health plan will pay us or reimburse you for the service.</p>

            <h3 className="text-lg font-medium text-white mb-2">Health Care Operations</h3>
            <p className="mb-4">We may use and disclose your health information in connection with our health care operations. Health care operations include quality assessment and improvement activities, reviewing and evaluating provider performance, training, licensing, and other business activities.</p>

            <h3 className="text-lg font-medium text-white mb-2">Other Permitted Uses and Disclosures</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>As required by law (e.g., court orders, subpoenas)</li>
              <li>Public health activities (e.g., reporting communicable diseases)</li>
              <li>Health oversight activities (e.g., audits, investigations)</li>
              <li>To avert a serious threat to health or safety</li>
              <li>Workers&apos; compensation as authorized by and to the extent necessary to comply with laws</li>
              <li>Law enforcement purposes under specific circumstances</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Uses and Disclosures Requiring Your Authorization</h2>
            <p className="mb-4">Other uses and disclosures of your health information not described in this Notice will be made only with your written authorization, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Most uses and disclosures of psychotherapy notes</li>
              <li>Uses and disclosures for marketing purposes</li>
              <li>Disclosures that constitute a sale of your health information</li>
            </ul>
            <p className="mt-4">You may revoke any authorization you give us at any time in writing, except to the extent that we have already taken action in reliance on your authorization.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Your Rights Regarding Your Health Information</h2>
            <p className="mb-4">You have the following rights with respect to your protected health information:</p>

            <h3 className="text-lg font-medium text-white mb-2">Right to Inspect and Copy</h3>
            <p className="mb-4">You have the right to inspect and obtain a copy of your health information that we maintain in a designated record set. We may charge a reasonable fee for copies. We may deny your request in limited circumstances.</p>

            <h3 className="text-lg font-medium text-white mb-2">Right to Amend</h3>
            <p className="mb-4">You have the right to request that we amend your health information if you believe it is inaccurate or incomplete. We may deny your request under certain circumstances.</p>

            <h3 className="text-lg font-medium text-white mb-2">Right to an Accounting of Disclosures</h3>
            <p className="mb-4">You have the right to request a list of the disclosures we have made of your health information for purposes other than treatment, payment, health care operations, and certain other activities.</p>

            <h3 className="text-lg font-medium text-white mb-2">Right to Request Restrictions</h3>
            <p className="mb-4">You have the right to request restrictions on how we use or disclose your health information for treatment, payment, or health care operations. We are not required to agree to your request except in limited circumstances required by law.</p>

            <h3 className="text-lg font-medium text-white mb-2">Right to Request Confidential Communications</h3>
            <p className="mb-4">You have the right to request that we communicate with you about your health information in a certain way or at a certain location.</p>

            <h3 className="text-lg font-medium text-white mb-2">Right to a Paper Copy of This Notice</h3>
            <p>You have the right to a paper copy of this Notice at any time, even if you have agreed to receive this Notice electronically. Contact us at the address below to request a copy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Our Duties</h2>
            <p>We are required by law to maintain the privacy of your protected health information, to provide you with notice of our legal duties and privacy practices with respect to health information, and to notify you following a breach of your unsecured protected health information. We reserve the right to change the terms of this Notice and to make the new Notice provisions effective for all health information we maintain. We will post the current Notice on our website at agnihealth.co/privacy and will provide a copy upon request.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Complaints</h2>
            <p className="mb-4">If you believe your privacy rights have been violated, you may file a complaint with us or with the Secretary of the U.S. Department of Health and Human Services. We will not retaliate against you for filing a complaint.</p>
            <p>To file a complaint with us, contact us at: <a href="mailto:privacy@agnihealth.co" className="text-[#d4a088] hover:underline">privacy@agnihealth.co</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
            <p>For questions about this Notice or to exercise your rights, contact our Privacy Officer:</p>
            <div className="mt-3 space-y-1 text-zinc-400">
              <p>Agni Health / Sohan Japa MD LLC</p>
              <p>447 Sutter St Ste 506 - 1024</p>
              <p>San Francisco, CA 94108</p>
              <p><a href="mailto:privacy@agnihealth.co" className="text-[#d4a088] hover:underline">privacy@agnihealth.co</a></p>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm text-zinc-500">
          © 2026 Agni Health. All rights reserved. · 
          <Link href="/privacy" className="hover:text-zinc-300 ml-1">Privacy Practices</Link>
        </div>
      </footer>
    </div>
  );
}
