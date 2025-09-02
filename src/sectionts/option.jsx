import { useState } from "react"

export default function Option({option}){
    const [hoveredOption, setHoveredOption] = useState(null);
    const [selectedOption, setSelectedOption] = useState('coding');

    const handleOptionClick = (optionName) => {
        setSelectedOption(optionName);
        option(optionName);
    };

    return(
        <div className="flex justify-center p-6 pb-10">
            {/* Landscape Scroll Container */}
            <div className="relative bg-gradient-to-b from-amber-100 via-yellow-50 to-amber-200 rounded-2xl border-4 border-amber-700 shadow-2xl overflow-hidden py-16 px-42 h-32">
                
                {/* Parchment texture */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.3) 0%, transparent 50%), 
                                     radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.2) 0%, transparent 50%)`,
                }}></div>
                
                {/* Aged edges effect */}
                <div className="absolute inset-0 rounded-2xl" style={{
                    boxShadow: 'inset 0 0 30px rgba(139, 69, 19, 0.4)',
                }}></div>
                
                {/* Decorative scroll ends */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-20 bg-gradient-to-r from-amber-800 to-amber-700 rounded-r-full border-r-2 border-amber-900 shadow-lg"></div>
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-20 bg-gradient-to-l from-amber-800 to-amber-700 rounded-l-full border-l-2 border-amber-900 shadow-lg"></div>
                
                {/* Landscape map content */}
                <div className="relative h-full flex items-center justify-center gap-2 px-2">
                    
                    {/* Coding Territory */}
                    <div 
                        className={`relative flex-1 h-20 transition-all duration-300 cursor-pointer group ${
                            selectedOption === 'coding' ? 'scale-105' : ''
                        }`}
                        onClick={() => handleOptionClick('coding')}
                        onMouseEnter={() => setHoveredOption('coding')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        {/* Territory background */}
                        <div className={`absolute inset-0 rounded-xl border-3 transition-all duration-300 ${
                            selectedOption === 'coding' 
                                ? 'bg-gradient-to-br from-blue-200/80 to-blue-300/60 border-blue-600 shadow-lg shadow-blue-500/30' 
                                : hoveredOption === 'coding'
                                ? 'bg-gradient-to-br from-blue-100/60 to-blue-200/40 border-blue-500'
                                : 'bg-gradient-to-br from-slate-200/40 to-slate-300/30 border-slate-500'
                        }`}></div>
                        
                        {/* Mountain/city silhouette for coding */}
                        <div className="absolute bottom-0 left-0 right-0 h-8 opacity-30">
                            <svg viewBox="0 0 200 32" className="w-full h-full">
                                <path d="M0,32 L0,20 L20,10 L40,15 L60,8 L80,12 L100,5 L120,10 L140,7 L160,12 L180,8 L200,15 L200,32 Z" 
                                      fill="currentColor" className="text-blue-700"/>
                            </svg>
                        </div>
                        
                        {/* Territory label */}
                        <div className="relative z-10 h-full w-[100px] flex flex-col items-center justify-center">
                            <div className="text-2xl mb-1">⚔️</div>
                            <p className="text-[13px] font-bold font-serif text-amber-900 tracking-wide">CODING</p>
                            <div className={`w-12 h-0.5 mt-1 transition-all duration-300 ${
                                selectedOption === 'coding' ? 'bg-blue-600' : 'bg-amber-600'
                            }`}></div>
                        </div>
                        
                        {/* Selection glow */}
                        {selectedOption === 'coding' && (
                            <div className="absolute inset-0 rounded-xl bg-blue-400/20 animate-pulse"></div>
                        )}
                    </div>
                    
                    {/* Central divider - like a river or path */}
                    <div className="w-1 h-16 bg-gradient-to-b from-amber-600 via-amber-700 to-amber-600 rounded-full shadow-lg">
                        <div className="w-full h-full bg-gradient-to-b from-transparent via-amber-500/50 to-transparent rounded-full"></div>
                    </div>
                    
                    {/* Networking Territory */}
                    <div 
                        className={`relative flex-1 h-20 transition-all duration-300 cursor-pointer group ${
                            selectedOption === 'networking' ? 'scale-105' : ''
                        }`}
                        onClick={() => handleOptionClick('networking')}
                        onMouseEnter={() => setHoveredOption('networking')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        {/* Territory background */}
                        <div className={`absolute inset-0 rounded-xl border-3 transition-all duration-300 ${
                            selectedOption === 'networking' 
                                ? 'bg-gradient-to-br from-green-200/80 to-green-300/60 border-green-600 shadow-lg shadow-green-500/30' 
                                : hoveredOption === 'networking'
                                ? 'bg-gradient-to-br from-green-100/60 to-green-200/40 border-green-500'
                                : 'bg-gradient-to-br from-slate-200/40 to-slate-300/30 border-slate-500'
                        }`}></div>
                        
                        {/* Network/web silhouette for networking */}
                        <div className="absolute bottom-0 left-0 right-0 h-8 opacity-30">
                            <svg viewBox="0 0 200 32" className="w-full h-full">
                                <path d="M0,28 Q50,20 100,24 T200,28 L200,32 L0,32 Z" 
                                      fill="currentColor" className="text-green-700"/>
                                <circle cx="30" cy="22" r="2" fill="currentColor" className="text-green-700"/>
                                <circle cx="80" cy="18" r="2" fill="currentColor" className="text-green-700"/>
                                <circle cx="130" cy="20" r="2" fill="currentColor" className="text-green-700"/>
                                <circle cx="170" cy="22" r="2" fill="currentColor" className="text-green-700"/>
                                <line x1="30" y1="22" x2="80" y2="18" stroke="currentColor" strokeWidth="1" className="text-green-700"/>
                                <line x1="80" y1="18" x2="130" y2="20" stroke="currentColor" strokeWidth="1" className="text-green-700"/>
                                <line x1="130" y1="20" x2="170" y2="22" stroke="currentColor" strokeWidth="1" className="text-green-700"/>
                            </svg>
                        </div>
                        
                        {/* Territory label */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center">
                            <div className="text-2xl mb-1">🛡️</div>
                            <p className="text-[13px] font-bold font-serif text-amber-900 tracking-wide px-5">NETWORKING</p>
                            <div className={`w-12 h-0.5 mt-1 transition-all duration-300 ${
                                selectedOption === 'networking' ? 'bg-green-600' : 'bg-amber-600'
                            }`}></div>
                        </div>
                        
                        {/* Selection glow */}
                        {selectedOption === 'networking' && (
                            <div className="absolute inset-0 rounded-xl bg-green-400/20 animate-pulse"></div>
                        )}
                    </div>
                </div>
                
                {/* Scroll title */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2">
                    <p className="text-xs font-serif text-amber-800 opacity-75 tracking-widest">REALM SELECTION</p>
                </div>
            </div>
        </div>
    )
}