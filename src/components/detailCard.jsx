'use client'
import { useEffect, useState } from "react"

export default function DetailCard({judul, fiturUtama, teknologi, spesifikasi, file, carakerja, onClose}) {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);
    
    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => onClose('off'), 200);
    };
    
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className={`relative w-full max-w-2xl transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                {/* Scroll Shadow */}
                <div className="absolute inset-0 bg-black/20 rounded-xl transform translate-x-1 translate-y-1 blur-sm"></div>
                
                {/* Main Scroll */}
                <div className="relative bg-gradient-to-b from-amber-50 to-yellow-100 rounded-xl border-4 border-amber-700 shadow-2xl max-h-[85vh] flex flex-col">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b-2 border-amber-600 bg-gradient-to-r from-amber-100 to-yellow-50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">📜</span>
                            </div>
                            <h2 className="text-2xl font-bold text-amber-900 font-serif">Quest Details</h2>
                        </div>
                        <button 
                            onClick={handleClose}
                            className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                        >
                            <span className="text-white font-bold text-xl">×</span>
                        </button>
                    </div>
                    
                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        
                        {/* Project Title */}
                        <div className="text-center p-4 bg-amber-100 rounded-lg border-2 border-amber-500">
                            <h3 className="text-2xl font-bold text-amber-900 font-serif">{judul}</h3>
                        </div>
                        
                        {/* Features */}
                        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                            <h4 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2 font-mono">
                                ⚔️ Main Features
                            </h4>
                            <ul className="space-y-2">
                                {fiturUtama?.map((data, index) => (
                                    <li key={data.fitur} className="flex items-center gap-2 text-blue-900 font-mono">
                                        <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                                            {index + 1}
                                        </span>
                                        <span className="text-[14px]">{data.fitur}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Technologies */}
                        <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                            <h4 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2 font-mono">
                                🔮 Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {teknologi?.map((data) => (
                                    <span 
                                        key={data.teknologi}
                                        className="bg-purple-600 text-white px-3 py-1 rounded-full text-[12px] font-mono"
                                    >
                                        {data.teknologi}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        {/* System Specifications */}
                        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                            <h4 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2 font-mono text-[18px]">
                                🛡️ System Specifications
                            </h4>
                            <p className="text-green-900 leading-relaxed font-mono text-[15px]">{spesifikasi}</p>
                        </div>
                        
                        {/* How it Works */}
                        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                            <h4 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2 font-mono text-[18px]">
                                ⚙️ How it Works
                            </h4>
                            <p className="text-orange-900 leading-relaxed font-mono text-[15px]">{carakerja}</p>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                            <h4 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2 font-mono text-[18px]">
                                Read Report
                            </h4>
                            <a href={file} className="text-orange-900 leading-relaxed font-mono text-[15px]">Click here!</a>
                        </div>
                        
                    </div>
                    
                    {/* Footer */}
                    <div className="p-4 border-t-2 border-amber-600 bg-gradient-to-r from-amber-100 to-yellow-50 text-center">
                        <p className="text-amber-800 font-serif italic">~ End of Quest Details ~</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}