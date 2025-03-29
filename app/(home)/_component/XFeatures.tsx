
import React from "react"
import AllFeatures from "../features/_component/AllFeatures"
import BannerHeader from "./BannerHeader"

export const XFeatures = () => {
    const img = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    const tittle = 'XONNECT Features'
    const header = 'Revolutionizing Live Streaming'
    const subText = ' Xonnect with exclusive features.'
   
    return (
        <div id="xonnect">
            <div className="w-full bg-white font-sans">
                {/* Header/Banner Section */}
                <BannerHeader img={img} title={tittle} header={header} subText={subText}/>

                {/* Stream Details Section */}
                <AllFeatures/>
            </div>
        </div>
    )
}
