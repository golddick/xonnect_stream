import React from 'react'

const ContactForm = () => {
  return (
    <section className="py-16 px-8 bg-white text-black">
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions or need assistance? Reach out to our support team and we&apos;ll get back to
                you shortly.
            </p>
        </div>

        <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2"></div>
        </div>
    </div>
</section>
  )
}

export default ContactForm
