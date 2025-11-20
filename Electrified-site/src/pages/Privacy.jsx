import SEO from "../components/SEO";

export default function Privacy() {
  return (
    <div>
      <SEO 
        title="Privacy Policy - Electrified Engineering Ltd"
        description="Privacy Policy for Electrified Engineering Ltd. Learn how we collect, use, and protect your personal information."
      />

      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-green max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: January 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Electrified Engineering Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and company details when you contact us or request services.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data through cookies and analytics.</li>
                <li><strong>Project Information:</strong> Details about your power requirements, property specifications, and service preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                Email: info@electrifiedengineering.com<br />
                Phone: +234 (0) 808 299 9567<br />
                Address: 77 Awolowo Road, Ikoyi, Lagos, Nigeria
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

