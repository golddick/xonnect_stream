


'use client'

import React, { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { toast } from "sonner"
import {  getUserPlatfromAgreementStatus, updatePlatformTerms } from "@/actions/user"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export const Legal = () => {
  const { user } = useUser()
  const [hasAccepted, setHasAccepted] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams();
  const showToast = searchParams.get('showToast');

  useEffect(() => {
    if (showToast) {
      toast.error('You must accept platform terms to continue.');
    }
  }, [showToast]);

  useEffect(() => {
    const fetchTermsStatus = async () => {
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

    fetchTermsStatus()
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

  return (
    <div id="xonnect">
      <div className="w-full text-black bg-white shadow-xl overflow-hidden container">
        <header className="bg-primary-600 py-6 px-8">
          <h1 className="text-3xl font-semibold text-white">Privacy Policy & Terms of Service</h1>
          <p className="text-primary-100 mt-2">
            Please review and accept our legal agreements before proceeding
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-2 md:p-8">
                    <div className="border border-gray-200 rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-md">
                        <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-medium">Privacy Policy</h2>
                        </div>
                        <div className="h-full overflow-y-auto p-5 text-sm leading-relaxed">
                            <h3 className="font-medium text-lg mb-2">Data Collection and Usage</h3>
                            <p className="mb-4">
                                We collect personal information that you voluntarily provide to us when you register on
                                the website, express an interest in obtaining information about us or our products and
                                services, when you participate in activities on the website or otherwise when you
                                contact us.
                            </p>

                            <h3 className="font-medium text-lg mb-2">Information Security</h3>
                            <p className="mb-4">
                                We take steps to ensure that your information is treated securely and in accordance with
                                this Privacy Policy. Unfortunately, no data transmission over the Internet or any
                                wireless network can be guaranteed to be 100% secure.
                            </p>

                            <h3 className="font-medium text-lg mb-2">Cookies Policy</h3>
                            <p className="mb-4">
                                Our website uses cookies to enhance your browsing experience. Cookies are small files
                                stored on your device that help us analyze website traffic and customize content to your
                                preferences.
                            </p>

                            <h3 className="font-medium text-lg mb-2">Third-Party Disclosure</h3>
                            <p className="mb-4">
                                We do not sell, trade, or otherwise transfer your personally identifiable information to
                                outside parties unless we provide you with advance notice. This does not include website
                                hosting partners and other parties who assist us in operating our website.
                            </p>
                            {/* Next: "Add detailed sections on GDPR compliance" */}
                        </div>
                        
                    </div>

                    <div className="border border-gray-200 rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-md">
                        <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-medium">Terms of Service</h2>
                        </div>
                        <div className="h-full overflow-y-auto p-5 text-sm leading-relaxed">
                            <h3 className="font-medium text-lg mb-2">Terms of Use</h3>
                            <p className="mb-4">
                                By accessing this website, you are agreeing to be bound by these website Terms and
                                Conditions of Use, all applicable laws and regulations, and agree that you are
                                responsible for compliance with any applicable local laws.
                            </p>

                            <h3 className="font-medium text-lg mb-2">License</h3>
                            <p className="mb-4">
                                Permission is granted to temporarily download one copy of the materials on our website
                                for personal, non-commercial transitory viewing only. This is the grant of a license,
                                not a transfer of title.
                            </p>

                            <h3 className="font-medium text-lg mb-2">User Responsibilities</h3>
                            <p className="mb-4">
                                Users are responsible for maintaining the confidentiality of their account information
                                and for all activities that occur under their account. Users agree not to use the
                                service for any illegal or unauthorized purpose.
                            </p>

                            <h3 className="font-medium text-lg mb-2">Limitation of Liability</h3>
                            <p className="mb-4">
                                In no event shall we or our suppliers be liable for any damages (including, without
                                limitation, damages for loss of data or profit, or due to business interruption) arising
                                out of the use or inability to use the materials on our website.
                            </p>
                            {/* Next: "Add dispute resolution and arbitration section" */}
                        </div>
                       
                    </div>
                </div>

        {/* Accept Terms Section */}
        <div className=" p-2 md:p-8">

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
            <Link href={'/'}>
            <button className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Go back
            </button>
            </Link>
            <button
              disabled={!hasAccepted || loading}
              className={`${
                hasAccepted ? "bg-red-600" : "bg-gray-300"
              } text-white px-6 py-3 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow focus:outline-none`}
            >
              {hasAccepted ? "Accepted" : "Accept & Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
