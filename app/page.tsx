import ChatInterface from '@/components/ChatInterface'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ChatInterface />
      
      {/* Appointment Information Section */}
      <section id="appointment" className="bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Book Your Consultation
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Dr. Muhammad Affan Qaiser
            </h3>
            <div className="text-gray-700 space-y-2 mb-4">
              <p><strong>Qualifications:</strong> MBBS, MRCPS Glasgow, FCPS Pakistan</p>
              <p><strong>Specialization:</strong> Gastroenterology & Transplant Hepatology</p>
              <p><strong>Position:</strong> Assistant Professor</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Appointment Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                <strong>Payment:</strong> Make consultant fee payment to our bank account
                <ul className="list-disc list-inside ml-6 mt-2 text-sm">
                  <li>Contact us for account details and fee information</li>
                  <li>Overseas patients: Special transfer fees apply</li>
                </ul>
              </li>
              <li>
                <strong>Confirmation:</strong> Send payment receipt via WhatsApp to:
                <ul className="list-none ml-6 mt-2 space-y-1">
                  <li className="font-mono text-sm">📱 +92-300-8380707</li>
                  <li className="font-mono text-sm">📱 +92-300-3580709</li>
                  <li className="font-mono text-sm">📱 +92-300-2087778</li>
                </ul>
              </li>
              <li>
                <strong>Scheduling:</strong> Our team will contact you within 24 hours to schedule your consultation
              </li>
              <li>
                <strong>Follow-up:</strong> Follow-up care provided within 7 days of your consultation
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Location & Contact
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Advanced GI & Liver Tower</strong><br />
                Ring Road near DHA Phase 5<br />
                Lahore, Pakistan
              </p>
              <p className="pt-2">
                <strong>Emergency Contact:</strong><br />
                <a href="tel:+923003580709" className="text-blue-600 hover:underline font-mono text-lg">
                  +92-300-3580709
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              For general inquiries or to chat with Dr. Qaiser's AI assistant, use the chat interface above.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
