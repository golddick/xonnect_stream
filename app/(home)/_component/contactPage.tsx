'use client'


import React, { useState } from "react"
import BannerHeader from "./BannerHeader"
import { MdLocationOn, MdSupportAgent } from "react-icons/md"
import { ArrowRight, Calendar, PhoneCall, Verified } from "lucide-react"
import { FaHandshake } from "react-icons/fa"
import { createContactMessage } from "@/actions/contact-us"
import { toast } from "sonner"

export const ContactPage = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        department: "",
        message: "",
        consent: false,
      });


      const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target as HTMLInputElement;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm(prev => ({ ...prev, [id]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await createContactMessage(
        form.name,
        form.email,
        form.subject,
        form.department,
        form.message,
        form.consent
      );

      if (!res.message) throw new Error("Failed to submit message.");
      setSuccessMsg("Message sent successfully!");
      toast.success("Message sent successfully!")
      setForm({ name: "", email: "", subject: "", department: "", message: "", consent: false });
    } catch (error) {
      setErrorMsg((error as Error).message);
      toast.error((error as Error).message)
    } finally {
      setLoading(false);
    }
  };


    return (
        <div id="xonnect">
            <div className="w-full min-h-screen bg-gray-50">
                    <BannerHeader H1='Contact Us' Header='PLATFROM CONTACT' Desc=' We are here to help! Reach out to our team with any questions, feedback, or support requests.'/>

                <section className="py-16 px-4 bg-white">
                    <div className=" w-full md:container mx-auto">

     


                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
                            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                                <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                                    <MdSupportAgent  className="material-symbols-outlined text-3xl"/>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Customer Support</h3>
                                <p className="text-gray-600 mb-4">
                                    Need help with your account, subscriptions, or platform features?
                                </p>
                                <a
                                    href="mailto:support@xonnect.net"
                                    className="text-red-700 hover:text-red-900 font-medium flex items-center group"
                                >
                                    support@xonnect.net
                                    <ArrowRight className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform duration-200"/>
                                </a>
                                <p className="text-gray-500 mt-2 text-sm">Response time: Within 24 hours</p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                                    <FaHandshake  className="material-symbols-outlined text-3xl"/>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Partnerships</h3>
                                <p className="text-gray-600 mb-4">
                                    Interested in business collaborations, sponsorships, or API integration?
                                </p>
                                <a
                                    href="mailto:partnership@xonnect.net"
                                    className="text-red-700 hover:text-red-900 font-medium flex items-center group"
                                >
                                    partnership@xonnect.net
                                    <ArrowRight className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform duration-200"/>
                                </a>
                                <p className="text-gray-500 mt-2 text-sm">Response time: 2-3 business days</p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                    <Verified className="material-symbols-outlined text-3xl"/>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Creator Verification</h3>
                                <p className="text-gray-600 mb-4">Want to become a verified creator on our platform?</p>
                                <a
                                    href="mailto:creators@xonnect.net"
                                    className="text-red-700 hover:text-red-900 font-medium flex items-center group"
                                >
                                    creators@xonnect.net
                                    <ArrowRight className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform duration-200"/>
                                </a>
                                <p className="text-gray-500 mt-2 text-sm">Response time: 3-5 business days</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="lg:col-span-2 bg-red-700 p-8 text-white">
                                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <MdLocationOn  className="material-symbols-outlined mr-3 mt-1"/>
                                        <div>
                                            <h4 className="font-semibold mb-1">Headquarters</h4>
                                            <p className="text-white/80">
                                                ibadan plot 12 PDCOS
                                                <br />
                                                general gas 
                                                <br />
                                                oyo state, Nigeria
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Calendar className="material-symbols-outlined mr-3 mt-1"/>
                                        <div>
                                            <h4 className="font-semibold mb-1">Hours of Operation</h4>
                                            <p className="text-white/80">
                                                Monday - Friday: 9am - 6pm WAT
                                                <br />
                                                Saturday - Sunday: Closed
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <PhoneCall  className="material-symbols-outlined mr-3 mt-1"/>
                                        <div>
                                            <h4 className="font-semibold mb-1">Phone Support</h4>
                                            <p className="text-white/80">
                                                +234-705-099-8742
                                            </p>
                                        </div>
                                    </div>

                               
                                </div>
                            </div>

                            <div className="lg:col-span-3 p-8">
                                <h2 className="text-2xl font-bold mb-6 text-black">Send Us a Message</h2>
                                <form className="space-y-4"  onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full bg-white text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 outline-none"
                                                placeholder="John Doe"
                                                onChange={handleChange}
                                                value={form.name}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full bg-white text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 outline-none"
                                                placeholder="john@example.com"
                                                onChange={handleChange}
                                                value={form.email}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-4 text-black py-2 border bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 outline-none"
                                            placeholder="How can we help you?"
                                            onChange={handleChange}
                                            value={form.subject}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="department"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Department
                                        </label>
                                        <select
                                            id="department"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white text-black"
                                            onChange={handleChange}
                                            value={form.department}
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "right 1rem center",
                                                backgroundSize: "1em"
                                            }}
                                        >
                                            <option value="">Select a department</option>
                                            <option value="support">Technical Support</option>
                                            <option value="billing">Billing & Payments</option>
                                            <option value="partnership">Partnerships</option>
                                            <option value="creators">Creator Relations</option>
                                            <option value="media">Media Inquiries</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            className="w-full h-20 px-4 bg-white  text-black py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                                            placeholder="Please describe your question or concern in detail..."
                                            onChange={handleChange}
                                            value={form.message}
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            className="mt-1 h-4 w-4 rounded text-red-600 focus:ring-red-500 transition-colors duration-200"
                                            onChange={handleChange}
                                            value={form.consent ? "true" : "false"}
                                        />
                                        <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                                            I agree to the processing of my personal data in accordance with the{" "}
                                            <a href="/legal" className="text-red-700 hover:text-red-900 underline">
                                                Privacy Policy
                                            </a>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-red-700 text-white rounded-md hover:bg-red-900 transition-colors duration-200 inline-flex items-center group"
                                        disabled={loading}
                                    >
                                        Send Message
                                    </button>


                                    {/* {successMsg && <p className="text-green-600">{successMsg}</p>}
                                    {errorMsg && <p className="text-red-600">{errorMsg}</p>} */}
                                </form>
                            </div>
                        </div>

                     

                    </div>
                </section>


            </div>
        </div>
    )
}
