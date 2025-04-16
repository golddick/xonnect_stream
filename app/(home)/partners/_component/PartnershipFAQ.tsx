import { ArrowDown } from 'lucide-react'
import React from 'react'

const PartnershipFAQ = () => {
  return (
    <section className="bg-gray-100 rounded-xl p-8 mb-16">
  <h2 className="text-2xl font-semibold text-black mb-6 text-center">Frequently Asked Questions</h2>
  <div className="max-w-3xl mx-auto space-y-4">
    {[
      {
        question: "How can my company become a partner?",
        answer:
          "To become a partner, please fill out the application form on our website. Our partnership team will review your application and contact you within 5 business days.",
      },
      {
        question: "What happens after I submit the partnership form?",
        answer:
          "After you submit the form, a member of our partnership team will reach out to discuss potential opportunities. If there’s alignment, we’ll move forward with a formal agreement.",
      },
      {
        question: "Do I need to sign an agreement to become a partner?",
        answer:
          "Yes, once mutual interest is confirmed, a partnership agreement outlining responsibilities, benefits, and expectations will be drafted and signed by both parties.",
      },
      {
        question: "What are the benefits of partnership?",
        answer:
          "Our partners enjoy exclusive access to co-branded campaigns, technical integrations, joint marketing opportunities, training sessions, and premium support.",
      },
      {
        question: "Can international companies apply for partnership?",
        answer:
          "Absolutely. We welcome partners from around the globe. Just ensure your team can collaborate in English and aligns with our partnership values.",
      },
      {
        question: "How long does the approval process take?",
        answer:
          "Typically, the review and initial discussion process takes 3–5 business days. Complex or strategic partnerships may require additional time for evaluation.",
      },
 
   
    ].map((faq, index) => (
      <details
        key={index}
        className="bg-white rounded-lg shadow overflow-hidden transition-all duration-300 hover:shadow-md group"
      >
        <summary className="px-6 py-4 cursor-pointer text-gray-800 font-medium flex justify-between items-center">
          {faq.question}
          <ArrowDown className="material-symbols-outlined transform group-open:rotate-180 transition-transform text-red-700" />
        </summary>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      </details>
    ))}
  </div>
</section>

  )
}

export default PartnershipFAQ
