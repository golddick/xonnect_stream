'use client'

import React, { useEffect, useState } from "react"
import { useUser } from '@clerk/nextjs'
import { toast } from "sonner"
import { Shield } from "lucide-react"
import CreatorBTN from "./CreatorBTN"
import { getUserCreatorAgreementStatus, updateCreatorTerms,  } from "@/actions/user"

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

  return (
    <div id="xonnect">
      <div className="full text-black bg-white rounded-lg shadow-lg overflow-hidden font-sans">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-red-700 mb-6">Xonnect Creator Agreement</h1>

          <div className="bg-gray-50  p-2  rounded-lg shadow-inner mb-8 max-h-[600px] overflow-y-auto text-black">
          <div className="space-y-4 text-gray-700">
                            <p>
                                Welcome to Xonnect&apos;s Creator Program. This agreement outlines the terms of our
                                partnership and revenue sharing model.
                            </p>

                            <h3 className="text-lg font-medium text-primary-500 mt-6">1. Revenue Sharing</h3>
                            <p>
                                As a Xonnect creator, you will receive 70% of all revenue generated from your content.
                                Xonnect will retain 30% to cover platform costs, marketing, and development.
                            </p>

                            <h3 className="text-lg font-medium text-primary-500 mt-4">2. Payment Schedule</h3>
                            <p>
                                Payments will be processed on a monthly basis for all earnings that exceed $50. If your
                                earnings are below this threshold, they will be rolled over to the following month.
                            </p>

                            <h3 className="text-lg font-medium text-primary-500 mt-4">3. Content Guidelines</h3>
                            <p>
                                All content must comply with our community guidelines. Content that violates these
                                guidelines may be removed, and repeated violations may result in termination of this
                                agreement.
                            </p>

                            <h3 className="text-lg font-medium text-primary-500 mt-4">4. Intellectual Property</h3>
                            <p>
                                You retain all intellectual property rights to your content. By uploading content to
                                Xonnect, you grant us a non-exclusive license to display, promote, and monetize your
                                content on our platform.
                            </p>

                            <h3 className="text-lg font-medium text-primary-500 mt-4">5. Term and Termination</h3>
                            <p>
                                This agreement remains in effect until terminated by either party. Either party may
                                terminate this agreement with 30 days written notice.
                            </p>

                            <h3 className="text-lg font-medium text-primary-500 mt-4">6. Modifications</h3>
                            <p>
                                Xonnect reserves the right to modify this agreement at any time. You will be notified of
                                any changes, and continued use of the platform constitutes acceptance of the modified
                                terms.
                            </p>

                            <h3 className="text-lg font-medium text-primary-500 mt-4">7. Dispute Resolution</h3>
                            <p>
                                Any disputes arising from this agreement will be resolved through arbitration in
                                accordance with the laws of the jurisdiction where Xonnect is headquartered.
                            </p>
                        </div>
          </div>

          <div className="flex items-start mb-8">
            <div className="flex items-center h-6">
              <input
                id="agreement-checkbox"
                type="checkbox"
                className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 transition-all cursor-pointer"
                checked={agreed}
                onChange={handleCheckbox}
                disabled={hasAccepted || loading}
              />
            </div>
            <label
              htmlFor="agreement-checkbox"
              className="ml-3 text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
            >
              I have read and agree to the Xonnect Creator Agreement.
            </label>
          </div>

          <div className="flex justify-end">
            <CreatorBTN disabled={!hasAccepted || !user} />
          </div>
        </div>

        <div className="bg-gray-50 p-6 border-t border-gray-200">
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
        </div>
      </div>
    </div>
  )
}


