
import React from "react"
import BannerHeader from "./BannerHeader"
import { ArrowDown, Banknote, BikeIcon, BookOpenCheck, Computer, FactoryIcon, HeartPulseIcon, PlaySquareIcon, ShoppingBag } from "lucide-react"
import { AddPartner } from "../partners/_component/AddPartner"
import PartnerCategoriesSection from "../partners/_component/PartnersCategory"
import ApprovedPartnersSection from "../partners/_component/ApprovedPartners"
import PartnershipFAQ from "../partners/_component/PartnershipFAQ"

export const Partners = () => {
    return (
        <div id="xonnect">
            <div className="bg-white min-h-screen p-4 md:p-6 lg:p-8 container text-black mx-auto">
            <BannerHeader H1='Our Partners' Header='PLATFROM PARTNERS' Desc=' We are proud to collaborate with these industry leaders who share our vision for innovation and excellence.'/>

              <ApprovedPartnersSection/>

                <section className="bg-red-700 text-white rounded-xl p-8 mb-16">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0 md:mr-6">
                            <h2 className="text-2xl font-bold mb-3">Become Our Partner</h2>
                            <p className="max-w-xl">
                                Join our partner network and unlock new opportunities for growth and collaboration. We
                                believe in building strong, mutually beneficial relationships with our partners.
                            </p>
                        </div>
                       <AddPartner/>
                    </div>
                </section>

                <PartnerCategoriesSection/>

                <PartnershipFAQ/>

            </div>
        </div>
    )
}
