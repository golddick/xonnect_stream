

import React from "react"
import BannerHeader from "./BannerHeader"
import { ArrowDownIcon } from "lucide-react"

export const PlatfromFAQ = () => {
    return (
        <div id="xonnect">
            <div className="w-full min-h-screen bg-gray-50 text-black">
						<BannerHeader H1='Our FAQ' Header='PLATFROM FAQ' Desc='Find answers to common questions about Xonnect streaming services and features. If you can not find what you are looking for, please contact our support team.'/>
                <section className="py-16 px-4 bg-white gap-4">
                    <div className=" w-full md:container mx-auto">

                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="bg-red-50 rounded-xl p-6 mb-8 border border-red-100">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">General Questions</h2>

                                <div className="space-y-4">
                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            What is Xonnect?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
                                                Xonnect is a comprehensive platform that connects creators with their
                                                audience through live streaming, virtual events, physical events, and
                                                exclusive content. Our platform enables creators to engage directly with
                                                fans, monetize their content, and grow their community all in one place.
                                            </p>
                                        </div>
                                    </details>

                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            Is Xonnect free to use?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
											Xonnect is a pay-on-demand streaming platform for live and recorded events. There is no general subscription required to access content. Users can follow creators, attend free events, and engage in community discussions at no cost.
											While most content is pay-per-event, we offer an optional premium subscription exclusively for our Xonnect Music catalog. This subscription provides benefits like:

											<ul className="list-disc pl-5 mt-2 space-y-1">
                                                    <li>Ad-free listening</li>
                                                    <li>Access to exclusive music content</li>
                                                    <li>Early access to select releases</li>
                                                </ul>

											Each creator on Xonnect may also set their own pricing for premium or exclusive content they offer.
                                            </p>
                                        </div>
                                    </details>

                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            What devices can I use to access Xonnect?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
											Xonnect is currently available on web browsers including Chrome, Safari, Firefox, and Edge. You can access all our core features—event streaming and e-commerce—directly from the web for a seamless experience.
											We&apos;re also working on dedicated mobile apps for iOS and Android, as well as smart TV and streaming device apps (including Apple TV, Roku, and Amazon Fire Stick). These apps are coming soon, and will expand how you connect, stream, and shop on Xonnect across all your devices.
                                            </p>
                                        </div>
                                    </details>
								</div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">For Creators</h2>

                                <div className="space-y-4">
                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            How do I become a creator on Xonnect?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
											To become a creator on Xonnect, users simply need to read and agree to the Creator and Platform Agreement. There’s no need to submit additional information.
											Currently, requests are reviewed by our team within 3–5 business days. In future updates, users will be able to activate creator status instantly without waiting.
                                            </p>
                                        </div>
                                    </details>

                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            How do I monetize my content?
                                            <ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
                                                Xonnect offers multiple monetization options:
                                                <ul className="list-disc pl-5 mt-2 space-y-1">
													<li>Subscription-based content access</li>
                                                    <li>Pay-per-view live streams and events</li>
                                                    <li>Digital merchandise and exclusive content sales</li>
                                                    <li>Sponsored content opportunities through our partner network</li>
                                                    <li>Virtual Gifting and donations from viewers during streams</li>
                                                    <li>Revenue sharing from platform advertisements</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </details>

                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                    <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                        What is the revenue split for creators?
                                        <ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200" />
                                    </summary>
                                    <div className="p-4 pt-0 text-gray-600 border-t">
                                        <p>
                                        Xonnect offers a transparent and competitive revenue split for creators. Typically, creators receive 70% of the revenue generated from tickets and other content, while Xonnect retains 30% for platform maintenance. 
                                        </p>
                                        <p>
                                        For special events like concerts or unique streams, the revenue split will be determined and agreed upon outside the platform. Please reach out to us directly for more information and to discuss the specifics of revenue sharing for such events.
                                        </p>
                                    </div>
                                    </details>


                                    {/* <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            What equipment do I need to start streaming?
                                            <ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
                                                To start streaming on Xonnect, you'll need:
                                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                                    <li>
                                                        A reliable internet connection (minimum 5 Mbps upload speed)
                                                    </li>
                                                    <li>A computer or mobile device with a webcam</li>
                                                    <li>A microphone for clear audio</li>
                                                    <li>Basic lighting to enhance video quality</li>
                                                </ul>
                                                As you grow, you might want to invest in higher-quality cameras,
                                                professional microphones, advanced lighting setups, and streaming
                                                software like OBS or StreamLabs for more professional productions.
                                            </p>
                                        </div>
                                    </details> */}
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">Exclusive Music & Content</h2>

                                <div className="space-y-4">
                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            What types of exclusive content can I access?
                                            <ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
                                                Xonnect offers various types of exclusive content:
                                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                                    <li>Unreleased music and early access to new tracks</li>
                                                    <li>Behind-the-scenes footage and artist documentaries</li>
                                                    <li>Virtual meet-and-greets with favorite creators</li>
                                                    <li>Exclusive performances and acoustic sessions</li>
                                                    <li>Special Q&A sessions and tutorials</li>
                                                    <li>First access to merchandise drops and limited editions</li>
                                                </ul>
                                                Content availability varies by creator and subscription tier.
                                            </p>
                                        </div>
                                    </details>

                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            How does music licensing work on Xonnect?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
                                                Xonnect has established partnerships with major music labels and rights
                                                holders to ensure proper licensing for streaming performances. For
                                                independent artists, we provide tools to protect original content with
                                                digital rights management. Creators can stream their own music freely,
                                                while those wanting to perform covers or use licensed music during
                                                streams can access our pre-cleared music library with over 500,000
                                                tracks available for platform use without additional licensing concerns.
                                            </p>
                                        </div>
                                    </details>

                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            Can I download exclusive music for offline listening?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
                                                Yes, premium tier subscribers can download exclusive music and content
                                                for offline enjoyment through the Xonnect mobile app. Downloads remain
                                                available as long as your subscription is active. Some exclusive
                                                releases may have creator-specified limitations on downloads or may be
                                                streaming-only based on licensing agreements.
                                            </p>
                                        </div>
                                    </details>
                                </div>
                            </div>

                            <div className="bg-green-50 rounded-xl p-6 mb-8 border border-green-100">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">E-Commerce & Merchandise</h2>

                                <div className="space-y-4">
                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            What merchandise can I purchase on Xonnect?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
                                                Xonnect&apos;s marketplace offers a wide range of creator merchandise
                                                including:
                                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                                    <li>Apparel (t-shirts, hoodies, hats)</li>
                                                    <li>Limited edition collectibles and vinyl records</li>
                                                    <li>Digital goods (sound packs, filters, templates)</li>
                                                    <li>Accessories and branded lifestyle products</li>
                                                    <li>Signed memorabilia and exclusive artist collaborations</li>
                                                </ul>
                                                Each creator has their own storefront with custom merchandise that
                                                reflects their brand and aesthetic.
                                            </p>
                                        </div>
                                    </details>

                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            How does fulfillment work for physical merchandise?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
											Xonnect partners with local fulfillment centers in Nigeria to handle packaging and shipping for creator merchandise.
											 Creators who already have designed merchandise can upload their products directly to the platform for fulfillment.
											Shipping is currently available within Nigeria, with expedited options in most regions. Every order includes tracking information,
											 and our customer support team is available to assist with any delivery issues.
                                            </p>
                                        </div>
                                    </details>

                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            How do I sell my own merchandise as a creator?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
										<p>
										As a <strong>verified creator</strong>, you will soon be able to access the <strong>Merchandise Studio</strong> in your dashboard, which will be available in Q2 of 2026. Once it&apos;s live, you&apos;ll be able to:
										</p>
										<ul className="list-disc pl-5 mt-2 space-y-1">
										<li>Select from a variety of product templates (e.g., shirts, posters, etc.)</li>
										<li>Upload your designs easily with our drag-and-drop editor</li>
										<li>Set your own prices and profit margins</li>
										<li>Create limited-edition drops or permanent store items</li>
										<li>Track your sales, revenue, and inventory in real-time</li>
										</ul>
										<p>
										Xonnect will handle production, fulfillment, customer service, and payments, allowing you to focus on your creative work!
										</p>
										<p><strong>Note:</strong> The Merchandise Studio will be available to creators starting in Q2 of 2026.
										</p>

                                        </div>
                                    </details>
                                </div>
                            </div>

                            {/* <div className="bg-purple-50 rounded-xl p-6 mb-8 border border-purple-100">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">Partnerships & Business</h2>

                                <div className="space-y-4">
                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            How can my business partner with Xonnect?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
                                                Xonnect offers several partnership opportunities for businesses:
                                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                                    <li>
                                                        Brand sponsorship programs connecting businesses with relevant
                                                        creators
                                                    </li>
                                                    <li>
                                                        Integrated advertising options with targeted audience segments
                                                    </li>
                                                    <li>Co-branded events and exclusive content series</li>
                                                    <li>API integration for third-party applications</li>
                                                    <li>White-label streaming solutions for enterprise clients</li>
                                                </ul>
                                                Contact our partnerships team at partnerships@xonnect.com to discuss
                                                collaboration opportunities.
                                            </p>
                                        </div>
                                    </details>

                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            Does Xonnect offer affiliate or referral programs?
                                            <ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
                                                Yes, Xonnect offers both creator referral and affiliate marketing
                                                programs. Creators can earn additional revenue by referring other
                                                creators to the platform (earning 5% of their referred creators' revenue
                                                for the first year). Our affiliate program allows content creators,
                                                bloggers, and influencers to earn commissions by promoting Xonnect
                                                subscriptions, events, and merchandise with trackable links and custom
                                                discount codes.
                                            </p>
                                        </div>
                                    </details>

                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            How can I host my corporate event on Xonnect?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200"/>
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
                                                Xonnect solutions offer premium tools for hosting virtual
                                                corporate events, conferences, and product launches. Our platform
                                                provides end-to-end support including:
                                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                                    <li>Customizable branded event pages and registration</li>
                                                    <li>
                                                        High-quality multi-stream capabilities for up to 100,000
                                                        concurrent viewers
                                                    </li>
                                                    <li>
                                                        Advanced interactive features (polling, Q&A, breakout rooms)
                                                    </li>
                                                    <li>Detailed analytics and attendee insights</li>
                                                    <li>Technical support and event management assistance</li>
                                                </ul>
                                                For enterprise solutions, contact enterprise@xonnect.com for
                                                personalized pricing and setup.
                                            </p>
                                        </div>
                                    </details>
                                </div>
                            </div> */}

							<div className="bg-purple-50 rounded-xl p-6 mb-8 border border-purple-100">
								<h2 className="text-2xl font-bold mb-4 text-gray-900">Partnerships & Business</h2>

								<div className="space-y-4">
									<details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
										<summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
											How can my company become a partner?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200" />
										</summary>
										<div className="p-4 pt-0 text-gray-600 border-t">
											<p>
												To become a partner, please fill out the application form on our website. Our partnership team will review your application and contact you within 5 business days.
											</p>
										</div>
									</details>

									<details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
										<summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
											What happens after I submit the partnership form?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200" />
										</summary>
										<div className="p-4 pt-0 text-gray-600 border-t">
											<p>
												After you submit the form, a member of our partnership team will reach out to discuss potential opportunities. If there’s alignment, we’ll move forward with a formal agreement.
											</p>
										</div>
									</details>

									<details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
										<summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
											Do I need to sign an agreement to become a partner?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200" />
										</summary>
										<div className="p-4 pt-0 text-gray-600 border-t">
											<p>
												Yes, once mutual interest is confirmed, a partnership agreement outlining responsibilities, benefits, and expectations will be drafted and signed by both parties.
											</p>
										</div>
									</details>
								</div>
							</div>


                            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">Technical Support</h2>

                                <div className="space-y-4">
                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            How do I troubleshoot streaming issues?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200" />
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
                                                If you&apos;re experiencing streaming issues:
                                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                                    <li>
                                                        Check your internet connection speed (min 5 Mbps for viewing, 10
                                                        Mbps for streaming)
                                                    </li>
                                                    <li>Close other applications using bandwidth</li>
                                                    <li>Clear your browser cache or restart the app</li>
                                                    <li>Try a different browser or device</li>
                                                    <li>Adjust video quality settings to a lower resolution</li>
                                                </ul>
                                                If problems persist, contact support with your device details and a
                                                description of the issue.
                                            </p>
                                        </div>
                                    </details>

                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            How do I request a refund?
                                            <ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200" />
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
										<p>
											Refund requests can be submitted within <strong>14 days of purchase</strong> for subscriptions and merchandise, and within <strong>24 hours</strong> for virtual event tickets. To request a refund:
											<ul className="list-disc pl-5 mt-2">
												<li>Go to <strong>Account Settings</strong> &gt; <strong>Purchase History</strong>.</li>
												<li>Select the transaction you wish to request a refund for.</li>
												<li>Click <strong>&quot;Request Refund&quot;</strong> and provide the reason for your request.</li>
											</ul>
											Our support team will review your request within <strong>1-2 business days</strong>. If approved, refunds are processed to your original payment method within <strong>5-7 business days</strong>.
										</p>
										<p>
											If you need further assistance or wish to contact customer service, please visit our <a href="/contact-us" className="text-blue-600">Contact Us</a> page. Ensure to include your <strong>purchase receipt</strong> and all relevant details to expedite the process.
										</p>

                                        </div>
                                    </details>

                                    <details className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                                        <summary className="cursor-pointer p-4 flex items-center justify-between font-medium">
                                            How do I contact customer support?
											<ArrowDownIcon className="material-symbols-outlined text-red-600 transform transition-transform duration-200" />
                                        </summary>
                                        <div className="p-4 pt-0 text-gray-600 border-t">
                                            <p>
                                                Customer support is available through multiple channels:
                                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                                    <li>
                                                        Live chat: Available 24/7 through the Help icon in the bottom
                                                        right corner
                                                    </li>
                                                    <li>Email: support@xonnect.com (response within 24 hours)</li>
                                                    <li>Help Center: Comprehensive guides at help.xonnect.com</li>
                                                    <li>
                                                        Phone: Premium members can access phone support (9am-5pm EST,
                                                        Mon-Fri)
                                                    </li>
                                                </ul>
                                                For fastest assistance, please include your account email, device
                                                information, and screenshots of any error messages.
                                            </p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto text-center bg-red-700 text-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
                            <p className="mb-6">
                                Our support team is ready to help you with any questions not covered in our FAQ.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="/contact-us"
                                    className="bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-md transition-all duration-200 hover:scale-105 font-medium"
                                >
                                    Contact Support
                                </a>
                                {/* <a
                                    href="#"
                                    className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md transition-all duration-200 hover:scale-105 font-medium"
                                >
                                    Browse Help Center
                                </a> */}
                            </div>
                        </div>
                    </div>
                </section>

           
            </div>
        </div>
    )
}

