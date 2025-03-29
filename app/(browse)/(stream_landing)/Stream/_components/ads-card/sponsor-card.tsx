import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const SponsorCard = () => {
  return (
    <div className="bg-gradient-to-r from-red-600/20 via-black-500/20 to-red-500/20 p-6 rounded-xl mb-8 relative overflow-hidden group cursor-pointer border-none w-[80%] lg:w-[90%] mx-auto ">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-black to-black border-none transform scale-105 blur-xl group-hover:blur-md transition-all duration-500 "></div>
                        <div className="absolute top-0 right-0 bg-gradient-to-bl from-red-600 to-black-600 text-white px-4 py-1 rounded-bl-lg font-bold uppercase text-xs tracking-wider">
                            Sponsored
                        </div>
                        <div className="relative z-10 flex items-center gap-6">
                            <div className=" w-20 h-20 md:w-72 md:h-40 overflow-hidden rounded-lg border border-white/20 relative">
                                <Image
                                    src="/assets/woman.jpeg"
                                    alt="Premium stream"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 absolute"
                                    fill
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-r from-red-600 to-gold text-white md:px-3 py-1 rounded-full text-xs md:font-semibold px-2 ">
                                        PREMIUM
                                    </span>
                                    <span className="bg-black/50 text-white  md:px-3 py-1 rounded-full text-xs md:font-semibold backdrop-blur-sm  text-nowrap">
                                        TONIGHT 8PM
                                    </span>
                                </div>
                                <h2 className="text-white text-xs md:text-2xl font-bold mb-2">Global Music Awards Live Stream</h2>
                                <p className="text-white/80 text-sm mb-4">
                                    Watch the exclusive live stream of the Global Music Awards featuring top artists.
                                    Don&apos;t miss special performances and behind-the-scenes content.
                                </p>
                                <Button className="bg-gradient-to-r from-red-600 to-black text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 font-semibold group-hover:scale-105">
                                    Get Premium Access
                                </Button>
                            </div>
                        </div>
                    </div>
  )
}

export default SponsorCard
