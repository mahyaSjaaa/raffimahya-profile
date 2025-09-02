'use client'
import { useEffect, useState } from "react"

export default function SkillCard({skills}) {
    const [animateProgress, setAnimateProgress] = useState(false);
    
    useEffect(() => {
        console.log(skills[0].id);
        // Trigger progress bar animation after component mounts
        const timer = setTimeout(() => {
            setAnimateProgress(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    // Function to determine skill tier based on percentage
    const getSkillTier = (percent) => {
        if (percent >= 90) return { tier: 'LEGENDARY', color: 'from-yellow-400 to-yellow-600', border: 'border-yellow-500', glow: 'shadow-yellow-500/50' };
        if (percent >= 75) return { tier: 'EPIC', color: 'from-purple-400 to-purple-600', border: 'border-purple-500', glow: 'shadow-purple-500/50' };
        if (percent >= 60) return { tier: 'RARE', color: 'from-blue-400 to-blue-600', border: 'border-blue-500', glow: 'shadow-blue-500/50' };
        if (percent >= 40) return { tier: 'UNCOMMON', color: 'from-green-400 to-green-600', border: 'border-green-500', glow: 'shadow-green-500/50' };
        return { tier: 'COMMON', color: 'from-gray-400 to-gray-600', border: 'border-gray-500', glow: 'shadow-gray-500/50' };
    };

    // Function to calculate level from percentage
    const calculateLevel = (percent) => Math.floor(percent / 10) + 1;

    return (
        <div className="pb-4 flex justify-center px-3">
            <div className="w-[400px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg border-4 border-amber-600 shadow-2xl shadow-amber-600/20 relative overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-amber-600 transform rotate-45 -translate-x-4 -translate-y-4"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-amber-600 transform rotate-45 translate-x-4 -translate-y-4"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-amber-600 transform rotate-45 -translate-x-4 translate-y-4"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-600 transform rotate-45 translate-x-4 translate-y-4"></div>
                
                {/* Header */}
                <div className="bg-gradient-to-r from-amber-700 to-amber-600 px-6 py-4 border-b-2 border-amber-500">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-600 shadow-lg">
                            <span className="text-yellow-800 font-bold text-lg">⚔</span>
                        </div>
                        <h2 className="text-[20px] font-bold text-amber-100 tracking-wider font-serif text-center">
                            {skills[0].jenis === 'coding' ? `CODING SKILLS` : 'NETWORKING SKILLS'}
                        </h2>
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-600 shadow-lg">
                            <span className="text-yellow-800 font-bold text-lg">⚔</span>
                        </div>
                    </div>
                </div>
                
                {/* Skills Content */}
                <div className="p-6 space-y-6">
                    {skills?.map((data) => (
                        <div key={data.id} className="space-y-4">
                            {data.bahasa.map((dt) => {
                                const skillTier = getSkillTier(dt.persen);
                                const level = calculateLevel(dt.persen);
                                
                                return (
                                    <div key={dt.bahasa} className="group">
                                        {/* Skill Header */}
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${skillTier.color} border-2 ${skillTier.border} shadow-lg ${skillTier.glow} flex items-center justify-center`}>
                                                    <span className="text-white font-bold text-[12px]">
                                                        {dt.bahasa.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <span className="text-amber-100 font-bold font-serif tracking-wide">
                                                    {dt.bahasa}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-amber-300 font-bold font-serif">
                                                    {dt.persen1 || `${dt.persen}%`}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        {/* Progress Bar Container */}
                                        <div className="relative h-4 bg-slate-700 rounded-lg border-2 border-slate-600 shadow-inner overflow-hidden">
                                            {/* Background pattern */}
                                            <div className="absolute inset-0 opacity-20" style={{
                                                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
                                            }}></div>
                                            
                                            {/* Progress Fill */}
                                            <div 
                                                className={`h-full bg-gradient-to-r ${skillTier.color} border-r-2 border-opacity-60 transition-all duration-2000 ease-out relative overflow-hidden shadow-lg ${skillTier.glow}`}
                                                style={{ 
                                                    width: `${dt.persen}px`,
                                                    borderRightColor: skillTier.border.replace('border-', '')
                                                }}
                                            >
                                                {/* Shimmer effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-pulse"></div>
                                                
                                                {/* Notches for retro feel */}
                                                <div className="absolute inset-0 opacity-40" style={{
                                                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.2) 8px, rgba(0,0,0,0.2) 10px)',
                                                }}></div>
                                            </div>
                                            
                                            {/* Glowing edge effect */}
                                            <div 
                                                className={`absolute top-0 h-full w-1 bg-white opacity-80 transition-all duration-2000 ease-out shadow-lg ${skillTier.glow}`}
                                                style={{ 
                                                    left: animateProgress ? `${dt.persen}%` : '0%',
                                                    transform: 'translateX(-50%)'
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                
                {/* Footer decoration */}
                <div className="h-2 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600"></div>
            </div>
        </div>
    );
}