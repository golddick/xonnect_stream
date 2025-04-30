import { Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-24 backdrop-blur-sm ">
        <div className="max-w-6xl mx-auto px-8">
            <div className=" grid md:grid-cols-2 items-center gap-12 justify-between  py-12">
                <div className="max-w-sm ">
                    <div className="flex items-center gap-3 mb-6">
                        <svg className="w-8 h-8 text-red-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3L19 7M19 7L15 11M19 7H8C6.93913 7 5.92172 7.42143 5.17157 8.17157C4.42143 8.92172 4 9.93913 4 11V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-white text-2xl font-bold tracking-wider">xonnect</span>
                    </div>
                    <p className="text-white/70">The premier platform for streaming exclusive content, live events, concerts and more with no commitments.</p>
                </div>

                <div className=" flex flex-wrap gap-4 lg:gap-16 text-white  w-full md:justify-between ">
                    {[ 
                        {
                            title: "Platform",
                            links: [
                                { name: "Events", url: "/explore-events" },
                                { name: "Pricing", url: "/pricing" },
                                { name: "Features", url: "/features" }
                            ]
                        },
                        {
                            title: "Support",
                            links: [
                                { name: "FAQ", url: "/faq" },
                                { name: "Platfrom Guide", url: "/platfrom-guide" },
                                { name: "Contact Us", url: "/contact-us" },
                            ]
                        },
                        {
                            title: "Company",
                            links: [
                                { name: "About Us", url: "/about-us" },
                                { name: "partners", url: "/partners" },
                                { name: "Legal", url: "/legal" }
                            ]
                        }
                    ].map((section, index) => (
                        <div key={index}>
                            <h4 className="font-bold text-xl mb-6">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="text-white/70 hover:text-red-400 transition-all duration-300 hover:-translate-x-2 inline-block">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pt-12 border-t border-white/10 flex justify-between items-center">
                <p className="text-white/50">© 2025 xonnect. All rights reserved.</p>
                
                <div className="flex gap-4 md:gap-8">
                {/* {[<Twitter key="twitter" />, <Instagram key="instagram" />, <Youtube key="youtube" />].map(
                    (social, index) => (
                    <a
                        key={index}
                        href="#"
                        className="text-white/70 hover:text-red-400 transition-all duration-300 hover:-translate-y-2 inline-block text-xl"
                    >
                        <i>{social}</i>
                    </a>
                    )
                )} */}
                g
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
