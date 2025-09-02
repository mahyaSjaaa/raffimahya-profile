'use client'
import { useState } from "react"

export default function Card({nama, github}) {
    const [isHovered, setIsHovered] = useState(false);
    
    // Generate random quest/project tier
    const projectTiers = [
        { name: 'LEGENDARY', color: 'from-yellow-400 to-yellow-600', border: 'border-yellow-500', glow: 'shadow-yellow-500/50', bgAccent: 'bg-yellow-900/20' },
        { name: 'EPIC', color: 'from-purple-400 to-purple-600', border: 'border-purple-500', glow: 'shadow-purple-500/50', bgAccent: 'bg-purple-900/20' },
        { name: 'RARE', color: 'from-blue-400 to-blue-600', border: 'border-blue-500', glow: 'shadow-blue-500/50', bgAccent: 'bg-blue-900/20' },
        { name: 'UNCOMMON', color: 'from-green-400 to-green-600', border: 'border-green-500', glow: 'shadow-green-500/50', bgAccent: 'bg-green-900/20' },
    ];
    
    // Simple hash function to consistently assign tier based on project name
    const getProjectTier = (name) => {
        if (!name) return projectTiers[0];
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = ((hash << 5) - hash + name.charCodeAt(i)) & 0xffffffff;
        }
        return projectTiers[Math.abs(hash) % projectTiers.length];
    };
    
    const tier = getProjectTier(nama);
    
    return (
        <div className="pb-4 flex justify-center px-3">
            <div 
                className={`relative w-[342px] h-[240px] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-lg border-3 ${tier.border} shadow-2xl ${tier.glow} overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Decorative corner ornaments */}
                <div className={`absolute top-2 left-2 w-6 h-6 bg-gradient-to-br ${tier.color} transform rotate-45 border ${tier.border}`}></div>
                <div className={`absolute top-2 right-2 w-6 h-6 bg-gradient-to-br ${tier.color} transform rotate-45 border ${tier.border}`}></div>
                <div className={`absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-br ${tier.color} transform rotate-45 border ${tier.border}`}></div>
                <div className={`absolute bottom-2 right-2 w-6 h-6 bg-gradient-to-br ${tier.color} transform rotate-45 border ${tier.border}`}></div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 22px)',
                }}></div>
                
                {/* Tier badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${tier.color} border ${tier.border} rounded-full shadow-lg`}>
                    <span className="text-white font-bold text-[11px] tracking-wide">
                        {tier.name} PROJECT
                    </span>
                </div>
                
                {/* Project icon/symbol */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${tier.color} rounded-lg border-2 ${tier.border} ${tier.glow} flex items-center justify-center transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`}>
                    <span className="text-white font-bold text-xl">⚡</span>
                </div>
                
                {/* Main content area */}
                <div className="absolute bottom-0 left-0 right-0 h-28">
                    {/* Glass-like overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/80 to-transparent backdrop-blur-sm border-t-2 ${tier.border} ${tier.bgAccent}`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-4 h-full flex flex-col justify-between overflow-y-auto">
                        {/* Project name */}
                        <div className="mb-3">
                            <h3 className="text-amber-100 font-bold text-[13px] font-serif tracking-wide leading-tight">
                                {nama || "Unnamed Quest"}
                            </h3>
                            <div className={`h-0.5 w-16 bg-gradient-to-r ${tier.color} mt-1 rounded-full`}></div>
                        </div>
                        
                        {/* Action buttons */}
                        <div className="flex gap-3">
                            <button 
                                className="flex-1 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-amber-100 font-bold py-2 px-4 rounded-lg border border-slate-500 transition-all duration-200 hover:shadow-lg hover:shadow-slate-500/20 font-serif text-[11px] tracking-wide"
                                onClick={() => {/* Add detail functionality */}}
                            >
                                <span className="flex items-center justify-center gap-1">
                                    📜 VIEW DETAILS
                                </span>
                            </button>
                            
                            <a 
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex-1 bg-gradient-to-r ${tier.color} hover:opacity-90 text-white font-bold py-2 px-4 rounded-lg border ${tier.border} transition-all duration-200 hover:shadow-lg ${tier.glow} font-serif text-[11px] tracking-wide text-center`}
                            >
                                <span className="flex items-center justify-center gap-1">
                                    ⚔️ GITHUB
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Animated sparkles on hover */}
                {isHovered && (
                    <>
                        <div className="absolute top-16 left-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <div className="absolute top-24 right-12 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
                        <div className="absolute top-32 left-16 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping delay-300"></div>
                    </>
                )}
                
                {/* Shimmer effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}></div>
            </div>
        </div>
    );
}