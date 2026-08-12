export default function TermsAndConditions() {
  return (
    <main className="flex-grow w-full max-w-[1000px] mx-auto px-margin-edge md:px-[40px] px-[20px] py-stack-lg md:py-[120px] py-[80px]">
      <div className="mb-stack-lg border-b border-outline-variant pb-8">
        <h1 className="font-display-lg text-display-lg text-on-surface uppercase mb-4 tracking-tighter text-[48px] md:text-[64px]">
          Terms & Conditions
        </h1>
        <p className="font-label-bold text-label-bold text-muted-gray uppercase tracking-widest">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="prose prose-invert prose-p:font-body-md prose-p:text-on-surface-variant prose-headings:font-headline-lg prose-headings:text-on-surface prose-headings:uppercase prose-a:text-electric-purple max-w-none space-y-8">
        <section>
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Jacy Records ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
          </p>
          <p>
            You agree that by accessing the site, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these terms and conditions, then you are expressly prohibited from using the site and you must discontinue use immediately.
          </p>
        </section>

        <section>
          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>
        </section>

        <section>
          <h2>3. User Submissions</h2>
          <p>
            When you submit audio stems, mixes, portfolios, or any other content to Jacy Records for review or audition purposes (whether through the Site or our Discord server), you retain full ownership of your work. By submitting, you grant us permission to review and listen to your material solely for the purpose of evaluation for our collective.
          </p>
        </section>

        <section>
          <h2>4. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that: 
            (1) all registration information you submit will be true, accurate, current, and complete; 
            (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; 
            (3) you have the legal capacity and you agree to comply with these Terms and Conditions; 
            (4) you will not use the Site for any illegal or unauthorized purpose.
          </p>
        </section>

        <section>
          <h2>5. Prohibited Activities</h2>
          <p>
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>
        </section>

        <section>
          <h2>6. Third-Party Websites and Content</h2>
          <p>
            The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties. Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site.
          </p>
        </section>

        <section>
          <h2>7. Contact Information</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us via our Discord server or our official social media channels.
          </p>
        </section>
      </div>
    </main>
  );
}
