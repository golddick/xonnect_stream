
'use client'

import React, { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { toast } from "sonner"
import { jsPDF } from "jspdf"
import Link from "next/link"
import { Download } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { getUserPlatfromAgreementStatus, updatePlatformTerms } from "@/actions/user"

const legalSections = [
  {
    category: "Privacy Policy",
    items: [
      {
        title: "Personal Data Collection",
        content:
          "We collect personal information such as name, email address, payment details, viewing history, and device data when you use our platform. This data is necessary for account management, recommendations, and improving our services."
      },
      {
        title: "Usage & Analytics",
        content:
          "We track user activity, watch history, search queries, and device data using internal tools and third-party analytics providers to understand and enhance your streaming experience."
      },
      {
        title: "Cookies & Tracking Technologies",
        content:
          "We use cookies and similar technologies to personalize content, remember your preferences, and analyze site traffic. You can control cookie settings in your browser."
      },
      {
        title: "Data Sharing & Disclosure",
        content:
          "We may share data with trusted service providers for billing, analytics, content delivery, and support. We do not sell or rent your personal information."
      },
      {
        title: "International Transfers",
        content:
          "Your data may be stored or processed in locations outside your country. We ensure such transfers comply with data protection regulations like GDPR and CCPA."
      },
      {
        title: "Your Rights",
        content:
          "You have rights to access, correct, or delete your data. You may also request to opt-out of marketing communications or request data portability."
      },
      {
        title: "Data Retention",
        content:
          "We retain your data only as long as necessary to provide services and comply with legal obligations."
      },
      {
        title: "Security Practices",
        content:
          "We use encryption, secure servers, and regular audits to protect your data. However, no method of transmission is completely secure."
      }
    ]
  },
  {
    category: "Terms of Service",
    items: [
      {
        title: "Acceptance of Terms",
        content:
          "By accessing or using our platform, you agree to these Terms of Service, our Privacy Policy, and any additional terms presented to you."
      },
      {
        title: "User Accounts",
        content:
          "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use."
      },
      {
        title: "Subscription & Billing",
        content:
          "Some features require a paid subscription. You agree to pay all applicable fees and understand that subscriptions automatically renew unless canceled."
      },
      {
        title: "Content Licensing",
        content:
          "All content on the platform is licensed or owned by us or our partners. You may not reproduce, distribute, or publicly perform content without authorization."
      },
      {
        title: "User-Generated Content",
        content:
          "If you upload or stream content (e.g., comments, video submissions), you retain ownership but grant us a non-exclusive license to use, host, and display it."
      },
      {
        title: "Prohibited Conduct",
        content:
          "You agree not to misuse the platform, including uploading harmful content, violating copyrights, attempting to reverse-engineer the service, or harassing other users."
      },
      {
        title: "Third-Party Services",
        content:
          "We may integrate services such as payment processors or content delivery networks. Your use of those services is governed by their terms."
      },
      {
        title: "Service Modifications",
        content:
          "We may modify, suspend, or discontinue parts of the platform at any time without notice. We are not liable for any resulting loss."
      },
      {
        title: "Termination",
        content:
          "We reserve the right to suspend or terminate your access for violations of these terms, illegal activity, or at our discretion."
      },
      {
        title: "Limitation of Liability",
        content:
          "We are not liable for any indirect or consequential damages, including loss of data, profits, or access due to outages or platform changes."
      },
      {
        title: "Dispute Resolution",
        content:
          "Any disputes shall be resolved through binding arbitration under local governing laws. You waive the right to a jury trial."
      },
      {
        title: "Changes to Terms",
        content:
          "We may update these terms periodically. Continued use of the platform constitutes acceptance of the updated terms."
      }
    ]
  }
]


export const Legal = () => {
  const { user } = useUser()
  const [hasAccepted, setHasAccepted] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const showToast = searchParams.get('showToast')

  useEffect(() => {
    if (showToast) {
      toast.error('You must accept platform terms to continue.')
    }
  }, [showToast])

  useEffect(() => {
    const fetchStatus = async () => {
      if (!user) return
      try {
        const res = await getUserPlatfromAgreementStatus()
        if (res?.accepted) {
          setHasAccepted(true)
          setIsChecked(true)
        }
      } catch (err) {
        console.error("Failed to fetch agreement status", err)
      }
    }

    fetchStatus()
  }, [user])

  const handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    if (!user) {
      toast.error("You must log in to accept the terms.")
      return
    }

    setIsChecked(checked)

    if (checked) {
      setLoading(true)
      try {
        const res = await updatePlatformTerms()
        if (res?.success) {
          toast.success("Terms accepted.")
          setHasAccepted(true)
        } else {
          toast.error("Something went wrong.")
          setIsChecked(false)
        }
      } catch (err) {
        console.error(err)
        toast.error("Failed to update terms.")
        setIsChecked(false)
      } finally {
        setLoading(false)
      }
    }
  }

  const downloadPDF = () => {
    const doc = new jsPDF()
    doc.setFont("Helvetica", "normal")
    doc.setFontSize(12)

    doc.text("Xonnect Platform Legal Agreement", 10, 20)
    doc.text(`User: ${user?.fullName || 'Unnamed User'}`, 10, 30)

    let y = 40
    legalSections.forEach(section => {
      doc.setFont("Helvetica", "bold")
      doc.text(section.category, 10, y)
      y += 8

      section.items.forEach(item => {
        doc.setFont("Helvetica", "bold")
        doc.text(item.title, 10, y)
        y += 6
        doc.setFont("Helvetica", "normal")
        const lines = doc.splitTextToSize(item.content, 180)
        doc.text(lines, 10, y)
        y += lines.length * 6 + 4
      })

      y += 6
    })

    doc.save(`Xonnect-Legal-Agreement-${user?.fullName || 'User'}.pdf`)
  }

  return (
    <div id="xonnect">
      <div className="w-full text-black bg-white shadow-xl overflow-hidden p-2 md:container">
        <header className="bg-primary-600 py-2 px-8">
          <h1 className="text-3xl font-semibold text-white">Privacy Policy & Terms of Service</h1>
          <p className="text-primary-100 mt-2">
            Please review and accept our legal agreements before proceeding
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-2 md:p-8">
          {legalSections.map((section, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
                <h2 className="text-xl font-medium">{section.category}</h2>
              </div>
              <div className="h-full overflow-y-auto p-5 text-sm leading-relaxed">
                {section.items.map((item, j) => (
                  <div key={j} className="mb-4">
                    <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-2 md:p-8">
          <div className="flex items-start mb-8">
            <input
              id="agree"
              type="checkbox"
              disabled={hasAccepted || loading}
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 transition-all cursor-pointer"
            />
            <label htmlFor="agree" className="ml-3 text-gray-700 cursor-pointer">
              I have read and agree to the Privacy Policy and Terms of Service.
            </label>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <Link href="/">
              <button className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                Go back
              </button>
            </Link>

            <div className="flex items-center gap-4">
              {hasAccepted && (
                <button
                  onClick={downloadPDF}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2 transition"
                >
                  <Download className="w-4 h-4" />
                    <span className=" hidden md:block">Download PDF</span>
                </button>
              )}
              <button
                disabled={!hasAccepted || loading}
                className={`${
                  hasAccepted ? "bg-red-600" : "bg-gray-300"
                } text-white px-6 py-3 rounded-lg shadow-sm transition-all duration-300 hover:shadow`}
              >
                {hasAccepted ? "Accepted" : "Accept & Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
