import SEO from "../components/SEO";

export default function Terms() {
  return (
    <div>
      <SEO 
        title="Terms of Service - Electrified Engineering Ltd"
        description="Terms of Service for Electrified Engineering Ltd. Read our terms and conditions for using our services."
      />

      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-green max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: January 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services of Electrified Engineering Limited, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p>
                Electrified Engineering Limited provides power solutions and facilities management services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Solar panel installation and maintenance</li>
                <li>Backup power systems (UPS and inverters)</li>
                <li>Generator sales and maintenance</li>
                <li>Facilities management services</li>
                <li>E-waste management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Agreements</h2>
              <p>
                Specific terms for each service will be outlined in individual service agreements. These terms supplement but do not replace service-specific agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment terms will be specified in service quotations</li>
                <li>Prices are subject to change with notice</li>
                <li>Late payments may incur additional charges</li>
                <li>Refund policies vary by service type</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Warranties</h2>
              <p>
                We provide warranties as specified in individual service agreements. Warranty terms vary based on equipment and services provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Electrified Engineering Limited shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p>
                All content, trademarks, and intellectual property on our website and in our materials remain the property of Electrified Engineering Limited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p>
                We reserve the right to terminate or suspend services for violation of these terms or for any other reason at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved in Nigerian courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <p>
                For questions about these Terms of Service, contact us at:
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

