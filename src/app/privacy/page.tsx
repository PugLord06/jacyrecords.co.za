export default function PrivacyPolicy() {
  return (
    <main className="flex-grow w-full max-w-[1000px] mx-auto px-margin-edge md:px-[40px] px-[20px] py-stack-lg md:py-[120px] py-[80px]">
      <div className="mb-stack-lg border-b border-outline-variant pb-8">
        <h1 className="font-display-lg text-display-lg text-on-surface uppercase mb-4 tracking-tighter text-[48px] md:text-[64px]">
          Privacy Policy
        </h1>
        <p className="font-label-bold text-label-bold text-muted-gray uppercase tracking-widest">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="prose prose-invert prose-p:font-body-md prose-p:text-on-surface-variant prose-headings:font-headline-lg prose-headings:text-on-surface prose-headings:uppercase prose-a:text-electric-purple max-w-none space-y-8">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Jacy Records. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us on our Discord server.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Site (such as posting messages in our online forums) or otherwise contacting us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the Site, the choices you make and the products and features you use. The personal information we collect can include the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-on-surface-variant font-body-md">
            <li>Publicly available Discord information if you join our server.</li>
            <li>Contact details such as email addresses if you reach out to us directly.</li>
            <li>Information you provide when submitting stems, mixes, or portfolios for review.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our Site for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-on-surface-variant font-body-md">
            <li>To evaluate submissions for the Jacy Records collective.</li>
            <li>To respond to user inquiries and offer support to users.</li>
            <li>To send administrative information to you.</li>
          </ul>
        </section>

        <section>
          <h2>4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell or rent your personal information to third parties.
          </p>
        </section>

        <section>
          <h2>5. How Long Do We Keep Your Information?</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
          </p>
        </section>

        <section>
          <h2>6. How Do We Keep Your Information Safe?</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
          </p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may contact us via our official Discord server or through our direct messaging channels on our linked social media platforms.
          </p>
        </section>
      </div>
    </main>
  );
}
