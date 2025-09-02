'use client'
import { useEffect, useState } from "react"

export default function Scroll() {
    const [isVisible, setIsVisible] = useState(false);
    const [isUnrolling, setIsUnrolling] = useState(false);
    
    useEffect(() => {
        const timer1 = setTimeout(() => setIsUnrolling(true), 100);
        const timer2 = setTimeout(() => setIsVisible(true), 600);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);
    
    return (
        <div className="flex items-center justify-center bg-gradient-to-b from-amber-900/20 to-black/40">
            {/* Scroll Container */}
            <div className={`w-full transition-all duration-700 ease-out ${isUnrolling ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                {/* Top Scroll Rod */}
                <div className="flex justify-center mb-2">
                    <div className={`w-full h-6 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 rounded-full border-2 border-amber-700 shadow-xl transition-all duration-500 ${isUnrolling ? 'rotate-0' : '-rotate-45'}`}>
                        {/* Rod details */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600/30 to-transparent rounded-full"></div>
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-amber-600 rounded-full border border-amber-700"></div>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-amber-600 rounded-full border border-amber-700"></div>
                        
                        {/* Hanging strings */}
                        <div className="absolute left-8 top-full w-0.5 h-4 bg-amber-800"></div>
                        <div className="absolute right-8 top-full w-0.5 h-4 bg-amber-800"></div>
                    </div>
                </div>
                
                {/* Main Parchment */}
                <div className={`bg-gradient-to-b from-yellow-100 via-amber-50 to-yellow-200 rounded-lg shadow-2xl transition-all duration-700 ease-out transform-gpu ${isUnrolling ? 'h-auto' : 'h-0'} overflow-hidden`}>
                    {/* Parchment aged texture */}
                    <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.3) 0%, transparent 50%), 
                                         radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.2) 0%, transparent 50%),
                                         radial-gradient(circle at 40% 40%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)`,
                    }}></div>
                    
                    {/* Wax Seal - Top Right */}
                    <div className="absolute -top-4 -right-4 z-20">
                        <div className="w-16 h-16 bg-gradient-radial from-red-600 via-red-700 to-red-900 rounded-full border-4 border-red-800 shadow-xl flex items-center justify-center transform rotate-12">
                            <div className="w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
                                <span className="text-red-200 font-bold text-lg">👑</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-radial from-red-500/50 to-transparent rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Burnt edges effect */}
                    <div className="absolute inset-0 rounded-lg" style={{
                        boxShadow: 'inset 0 0 20px rgba(139, 69, 19, 0.5), inset 0 0 40px rgba(160, 82, 45, 0.3)',
                    }}></div>
                    
                    {/* Header */}
                    <div className="relative pt-8 pb-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="text-center mb-4">
                                    <h1 className="text-[20px] font-bold text-amber-900 font-serif tracking-wide">
                                        ⚜️ ABOUT ME ⚜️
                                    </h1>
                                    <div className="flex justify-center mt-2">
                                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Content with fade-in effect */}
                    <div className={`px-8 pb-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="pr-2">
                            <div className="space-y-6">
                                <div className="">
                                    <div className="text-amber-900 font-medium font-serif">
                                        I’m a tech enthusiast who loves building websites, experimenting with IoT, and exploring AI & machine learning. Coding is my playground, but I’m not just a developer, but I’m also skilled in networking and designing networks. I’m always curious, always learning, and driven by one simple goal: creating things that are useful, meaningful, and fun.
                                    </div>
                                </div>
                                {/* Quest Objectives */}
                                <div className="border border-amber-400 rounded-lg p-4 bg-gradient-to-r from-orange-50/80 to-yellow-50/80">
                                    <h3 className="text-amber-800 font-bold text-lg font-serif mb-3 text-center border-b border-amber-400 pb-2">
                                        STUDY
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="flex gap-3">
                                            <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                                            <span className="text-amber-900 font-medium flex-1">Electronic Engineering Polytechnic Institute of Surabaya (EEPIS)</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1.1</div>
                                            <span className="text-amber-900 font-medium flex-1">Internet Engineering Technology Major</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                                            <span className="text-amber-900 font-medium flex-1">SMKN 3 SURABAYA</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2.1</div>
                                            <span className="text-amber-900 font-medium flex-1">Electrical Engineering Major</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Magical Components */}
                                <div className="border border-purple-400 rounded-lg p-4 bg-gradient-to-r from-purple-50/80 to-indigo-50/80">
                                    <h3 className="text-purple-800 font-bold text-lg font-serif mb-3 text-center border-b border-purple-400 pb-2">
                                        HOBIES
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="flex gap-3">
                                            <span className="text-purple-900 font-medium flex-1">Mini Soccer</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <span className="text-purple-900 font-medium flex-1">Chess</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <span className="text-purple-900 font-medium flex-1">Learning new things</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <span className="text-purple-900 font-medium flex-1">Watch Series</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Scroll Rod */}
                <div className="flex justify-center mt-2">
                    <div className={`w-80 h-6 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 rounded-full border-2 border-amber-700 shadow-xl transition-all duration-500 delay-300 ${isUnrolling ? 'rotate-0' : 'rotate-45'}`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600/30 to-transparent rounded-full"></div>
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-amber-600 rounded-full border border-amber-700"></div>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-amber-600 rounded-full border border-amber-700"></div>
                    </div>
                </div>
                
                {/* Floating magical particles */}
                {isVisible && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-70"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${2 + Math.random() * 2}s`
                                }}
                            ></div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}