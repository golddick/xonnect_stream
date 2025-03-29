

import React from "react"
import { CheckTerms } from "../legal/_component/CheckTermsNCondition"

export const Legal = () => {
    return (
        <div id="xonnect">
            <div className="w-full text-black bg-white shadow-xl  overflow-hidden">
                <header className="bg-primary-600 py-6 px-8">
                    <h1 className="text-3xl font-semibold text-white">Privacy Policy & Terms of Service</h1>
                    <p className="text-primary-100 mt-2">
                        Please review and accept our legal agreements before proceeding
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                    <div className="border border-gray-200 rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-md">
                        <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-medium">Privacy Policy</h2>
                        </div>
                        <div className="h-[300px] overflow-y-auto p-5 text-sm leading-relaxed">
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
                        <div className="bg-gray-50 p-3 border-t border-gray-200">
                            <a
                                href="/"
                                className="text-primary-600 text-sm hover:text-primary-800 hover:underline transition-colors duration-300"
                            >
                                View Full Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-md">
                        <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-medium">Terms of Service</h2>
                        </div>
                        <div className="h-[300px] overflow-y-auto p-5 text-sm leading-relaxed">
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
                        <div className="bg-gray-50 p-3 border-t border-gray-200">
                            <a
                                href="/"
                                className="text-primary-600 text-sm hover:text-primary-800 hover:underline transition-colors duration-300"
                            >
                                View Full Terms of Service
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 border-t border-gray-200">
                    <div className="space-y-4">
                        <CheckTerms/>
                    </div>

                    <div className="mt-8 flex justify-between items-center">
                        <button className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                            Go back
                        </button>
                        <button className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-black px-6 py-3 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50">
                            Accept & Continue
                        </button>
                    </div>
                    {/* Next: "Add language selection dropdown for policy translation options" */}
                </div>
            </div>
        </div>
    )
}
