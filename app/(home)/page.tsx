import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRight, Banknote, CheckCircle, LayoutDashboardIcon, MenuIcon, PlayCircle, SearchIcon, Tv } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AllStream from '../(browse)/(stream_landing)/Stream/_components/StreamVideos/AllStream'

export default function Home() {
  
  return (
    <main>
  <div className="w-full bg-gradient-to-b from-neutral-900 via-red-950 to-neutral-900 relative overflow-hidden">

    <section className="min-h-screen relative py-32">
        <div className="absolute inset-0 bg-[url('/assets/woman.jpeg')] bg-cover bg-center opacity-10 animate-pulse"/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"/>
        <div className="relative z-10 max-w-7xl mx-auto text-center mt-5  md:pt-20 p-4 md:px-8">
            <h1 className="text-white text-8xl font-bold mb-8 leading-tight animate-fadeIn">Watch What You Want<br/><span className="text-red-500">Pay When You Watch</span></h1>
            <p className="text-white/90 text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">Access thousands of live events, exclusive shows, and premium content. No subscriptions, no commitments - simply pay for what you want to watch.</p>
            <div className="flex justify-center flex-col md:flex-row gap-2">
                <button className="bg-red-600 text-white px-12 py-5 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/50 text-lg font-semibold flex items-center gap-2">
                   <PlayCircle/>
                    Start Watching
                </button>
                <button className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full hover:bg-white hover:text-red-900 transition-all duration-300 transform hover:scale-105 text-lg font-semibold flex items-center gap-2">
                   Become Creator
                </button>
            </div>
            <div className="flex justify-center mt-16 gap-8 flex-wrap">
                <div className="flex items-center gap-3 bg-black/30 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-black/50 transition-all duration-300 transform hover:scale-105">
                    <span className="text-white text-lg">Live Events</span>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center gap-3 bg-black/30 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-black/50 transition-all duration-300 transform hover:scale-105">
                    <span className="text-white text-lg">Exclusive Content</span>
                    <span className="material-symbols-outlined text-red-500">verified</span>
                </div>
                <div className="flex items-center gap-3 bg-black/30 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-black/50 transition-all duration-300 transform hover:scale-105">
                    <span className="text-white text-lg">HD Streaming</span>
                    <span className="material-symbols-outlined text-red-500">hd</span>
                </div>
            </div>
        </div>
    </section>

    <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-white text-6xl font-bold mb-4 text-center">How It <span className="text-red-500">Works</span></h2>
            <p className="text-white/70 text-xl mb-16 text-center max-w-3xl mx-auto">Join thousands of users already enjoying premium content with no commitments</p>
            <div className="grid  grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                    {title: "Browse Events", icon: <SearchIcon/>, description: "Discover thousands of live events, concerts, and exclusive shows from around the world.", },
                    {title: "Purchase Access", icon: <Banknote/>, description: "Pay only for what you want to watch. No subscriptions or hidden fees."},
                    {title: "Start Streaming", icon: <Tv/>, description: "Enjoy high-quality streaming on any device, anywhere, anytime."}
                ].map((item, index) => (
                    <div key={index} className="bg-black/40 p-10 rounded-3xl backdrop-blur-sm hover:bg-black/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 group hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500 opacity-10 rounded-full group-hover:scale-150 transition-all duration-700"></div>
                        <div className="flex items-center gap-5 mb-8">
                            <span className="material-symbols-outlined text-red-500 text-5xl group-hover:rotate-12 transition-transform duration-500">{item.icon}</span>
                            <h3 className="text-white text-3xl font-bold">{item.title}</h3>
                        </div>
                        <p className="text-gray-300 text-xl leading-relaxed">{item.description}</p>
                        <div className="mt-8 flex justify-end">
                            <span className="inline-flex items-center gap-1 text-red-400 group-hover:translate-x-2 transition-all duration-300">
                                Learn more 
                                <ArrowRight className=' size-6'/>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    
    <section className="py-10 relative">
        <div className="max-w-7xl mx-auto px-8">
        <AllStream label="Coming Up"/>
        </div>
    </section>

 

    <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-600 opacity-10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-white text-6xl font-bold mb-16 text-center">Trending <span className="text-red-500">Now</span></h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    {title: "Summer Music Festival", time: "Live Now", image: "/assets/womn.jpeg"},
                    {title: "World Tour Concert", time: "Starting in 2 hours", image: "/assets/womn.jpeg"},
                    {title: "Exclusive Interview", time: "Tomorrow, 8 PM", image: "/assets/womn.jpeg"},
                    {title: "Live Comedy Special", time: "Friday, 9 PM", image: "/assets/womn.jpeg"}
                ].map((item, index) => (
                    <div key={index} className="bg-black/40 rounded-3xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
                        <div className="aspect-video relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 z-10"></div>
                            <Image src={item.image} alt={item.title} width={100} height={100} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                               <PlayCircle/>
                            </div>
                            {item.time === "Live Now" && (
                                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-2 z-20">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    <span>LIVE</span>
                                </div>
                            )}
                        </div>
                        <div className="p-8">
                            <h3 className="text-white text-2xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-lg mb-6">{item.time}</p>
                            <button className="w-full bg-red-600 text-white py-4 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 font-semibold text-lg">Watch Now</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-16">
                <button className="bg-transparent border-2 border-red-500 text-red-500 px-12 py-5 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-lg font-semibold">Explore All Events</button>
            </div>
        </div>
    </section>

    <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
            <div className="bg-gradient-to-r from-red-900/70 to-black/70 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="relative z-10 p-20 flex flex-col items-center text-center">
                    <h2 className="text-white text-5xl font-bold mb-8">Ready to Experience Premium Content?</h2>
                    <p className="text-white/90 text-xl mb-12 max-w-3xl">Join thousands of users already enjoying exclusive content with no commitments. Stream your first event for free.</p>
                    <div className="flex gap-6 flex-col md:flex-row">
                        <button className="bg-white text-red-900 px-12 py-5 rounded-full hover:bg-red-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/20 text-lg font-semibold">Sign Up Free</button>
                        <button className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg font-semibold">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-white text-6xl font-bold mb-4 text-center">What Our <span className="text-red-500">Users Say</span></h2>
            <p className="text-white/70 text-xl mb-16 text-center max-w-3xl mx-auto">Join thousands of satisfied users already enjoying xonnect</p>
            <div className="grid  grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {name: "Sarah Johnson", role: "Music Enthusiast", quote: "I love how I can watch my favorite concerts without committing to an expensive subscription."},
                    {name: "Mark Thompson", role: "Film Buff", quote: "The streaming quality is amazing and the pay-per-view model means I only pay for what I actually watch."},
                    {name: "Mark Thompson", role: "Film Buff", quote: "The streaming quality is amazing and the pay-per-view model means I only pay for what I actually watch."},
                    {name: "Mark Thompson", role: "Film Buff", quote: "The streaming quality is amazing and the pay-per-view model means I only pay for what I actually watch."},
                    {name: "Jessica Williams", role: "Regular User", quote: "xonnect has changed how I consume entertainment. The exclusive content is worth every penny!"}
                ].map((item, index) => (
                    <div key={index} className="bg-black/30 p-8 rounded-3xl backdrop-blur-sm hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2 border border-white/5 group">
                        <div className="mb-6">
                            <span className="text-red-500 text-7xl leading-none font-serif group-hover:text-red-400 transition-colors duration-300">&apos;</span>
                        </div>
                        <p className="text-white/90 text-lg mb-8">{item.quote}</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-xl">
                                {item.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">{item.name}</h4>
                                <p className="text-white/60 text-sm">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

    <footer className="bg-black/50 py-24 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-start mb-16">
                <div className="max-w-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3L19 7M19 7L15 11M19 7H8C6.93913 7 5.92172 7.42143 5.17157 8.17157C4.42143 8.92172 4 9.93913 4 11V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-white text-2xl font-bold tracking-wider">xonnect</span>
                    </div>
                    <p className="text-white/70">The premier platform for streaming exclusive content, live events, concerts and more with no commitments.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 text-white">
                    {[
                        {
                            title: "Platform",
                            links: ["Browse Events", "Live Now", "Categories", "Pricing", "Gift Cards"]
                        },
                        {
                            title: "Support",
                            links: ["Help Center", "Contact Us", "FAQ", "Device Compatibility", "Streaming Guide"]
                        },
                        {
                            title: "Company",
                            links: ["About Us", "Careers", "Press", "Partners", "Legal"]
                        }
                    ].map((section, index) => (
                        <div key={index}>
                            <h4 className="font-bold text-xl mb-6">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link, i) => (
                                    <li key={i}><a href="#" className="text-white/70 hover:text-red-400 transition-all duration-300 hover:-translate-x-2 inline-block">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pt-12 border-t border-white/10 flex justify-between items-center">
                <p className="text-white/50">© 2023 xonnect. All rights reserved.</p>
                
                <div className="flex gap-8">
                    {['twitter', 'facebook', 'instagram', 'youtube'].map((social) => (
                        <a key={social} href="#" className="text-white/70 hover:text-red-400 transition-all duration-300 hover:-translate-y-2 inline-block text-xl">
                            {/* <i className={fa-brands fa-social}`}></i> */}
							<i>{social}</i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
</div>
    </main>
  )
}

