'use client'

import React, { useEffect, useState } from "react"
import { useUser } from '@clerk/nextjs'
import { toast } from "sonner"
import { jsPDF } from "jspdf"
import { Shield, Download } from "lucide-react"
import CreatorBTN from "./CreatorBTN"
import { getUserCreatorAgreementStatus, updateCreatorTerms } from "@/actions/user"

const agreementSections = [
  {
    title: "1. Revenue Sharing",
    content: "Creators receive 70% of revenue from content. Xonnect retains 30% for platform upkeep."
  },
  {
    title: "2. Streaming Events",
    content: `Exclusive concerts or events: revenue split is managed off-platform and settled within 48 hours.
Regular streaming: split agreement will be updated once this feature is officially supported.`
  },
  {
    title: "3. Payment Model",
    content: "Payment is based on a 'pay what you want, when you want' model. No monthly threshold."
  },
  {
    title: "4. Content Guidelines",
    content: "Content must follow community guidelines. Violations may result in removal or termination."
  },
  {
    title: "5. Intellectual Property",
    content: "You retain IP rights. By uploading, you allow Xonnect to display and monetize your content."
  },
  {
    title: "6. Termination",
    content: "Either party may terminate with 30 days’ notice."
  },
  {
    title: "7. Modifications",
    content: "Agreement terms may change. Continued use signifies acceptance of changes."
  },
  {
    title: "8. Dispute Resolution",
    content: "Disputes resolved via arbitration under Xonnect's jurisdiction."
  }
]

export const CreatorAgreement = () => {
  const { user } = useUser()
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hasAccepted, setHasAccepted] = useState(false)

  useEffect(() => {
    const fetchAgreementStatus = async () => {
      if (!user) return
      try {
        const res = await getUserCreatorAgreementStatus()
        if (res?.accepted) {
          setHasAccepted(true)
          setAgreed(true)
        }
      } catch (err) {
        console.error('Failed to fetch user agreement status:', err)
      }
    }

    fetchAgreementStatus()
  }, [user])

  const handleCheckbox = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    if (!user) {
      toast.error("You must log in to accept the agreement.")
      return
    }

    setAgreed(isChecked)

    if (isChecked) {
      setLoading(true)
      try {
        const res = await updateCreatorTerms()
        if (res.success) {
          setHasAccepted(true)
          toast.success('Agreement accepted.')
        } else {
          toast.error('Failed to update agreement.')
          setAgreed(false)
        }
      } catch (err) {
        console.error(err)
        toast.error('An error occurred.')
        setAgreed(false)
      } finally {
        setLoading(false)
      }
    }
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.setFont("Helvetica", "normal")
    doc.setFontSize(12)

    doc.text(`Xonnect Creator Agreement`, 10, 20)
    doc.text(`Creator: ${user?.fullName || 'Unnamed User'}`, 10, 30)

    let y = 40
    agreementSections.forEach(section => {
      doc.setFont("Helvetica", "bold")
      doc.text(section.title, 10, y)
      y += 7
      doc.setFont("Helvetica", "normal")
      const lines = doc.splitTextToSize(section.content, 180)
      doc.text(lines, 10, y)
      y += lines.length * 7 + 5
    })

    doc.save(`Xonnect-Creator-Agreement-${user?.fullName || 'User'}.pdf`)
  }

  return (
    <div id="xonnect">
      <div className="text-black bg-white rounded-lg shadow-lg overflow-hidden font-sans ">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-red-700 mb-6">Xonnect Creator Agreement</h1>
          <p className="mb-4 text-gray-700">Creator: <span className="font-semibold">{user?.fullName || 'Unnamed User'}</span></p>

          <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-8 h-full lg:max-h-[600px] overflow-y-auto text-black space-y-6 text-gray-700">
            {agreementSections.map((section, i) => (
              <div key={i}>
                <h3 className="text-lg font-medium text-primary-500">{section.title}</h3>
                {section.title.includes("Streaming Events") && (
                  <p className="text-red-700 font-semibold">{section.content.split('\n')[0]}</p>
                )}
                {section.title.includes("Streaming Events") && (
                  <p className="text-blue-600 font-semibold">{section.content.split('\n')[1]}</p>
                )}
                {!section.title.includes("Streaming Events") && (
                  <p>{section.content}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-start mb-8">
            <input
              id="agreement-checkbox"
              type="checkbox"
              className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
              checked={agreed}
              onChange={handleCheckbox}
              disabled={hasAccepted || loading}
            />
            <label
              htmlFor="agreement-checkbox"
              className="ml-3 text-gray-700 cursor-pointer hover:text-primary-600"
            >
              I have read and agree to the Xonnect Creator Agreement.
            </label>
          </div>

          <div className="flex justify-between items-center">
            <CreatorBTN disabled={!hasAccepted || !user} />

            {hasAccepted && (
              <button
                onClick={generatePDF}
                className="ml-4 inline-flex items-center gap-2 px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            )}
          </div>
        </div>

        {/* <div className="bg-gray-50 p-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <Shield className="mr-2 size-6" />
              <span>Your information is secure and encrypted</span>
            </div>
            <div className="text-sm text-gray-500">
              <a href="/legal" className="hover:text-primary-600 transition-colors mr-4">
                Privacy Policy
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
