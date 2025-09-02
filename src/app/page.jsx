'use client'
import { useEffect, useState } from "react"
import Skills from "@/sectionts/skills";
import Body from "@/sectionts/body";
import Image from "next/image";
import Scroll from "@/components/scroll";
import Contact from "@/components/contact";

export default function Home() {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate floating magical particles
    const newParticles = [];
    for (let i = 0; i < 25; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.6 + 0.3,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* RPG Background Layer */}
      <div className="fixed inset-0 -z-10">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Secondary atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-amber-900/20 via-transparent to-purple-900/10"></div>
        
        {/* Stone/dungeon texture overlay */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='45' r='3'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Mystical fog effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-600/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-purple-600/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-radial from-amber-600/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Floating magical particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-yellow-300 rounded-full blur-sm animate-ping" style={{
                animationDuration: `${particle.duration * 1.5}s`,
                animationDelay: `${particle.delay}s`,
              }}></div>
            </div>
          ))}
        </div>
        
        {/* Subtle moving light rays */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-20 h-96 bg-gradient-to-b from-amber-400/5 to-transparent transform rotate-12 animate-pulse"></div>
          <div className="absolute top-1/4 -right-10 w-16 h-80 bg-gradient-to-b from-blue-400/5 to-transparent transform -rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 left-1/3 w-24 h-72 bg-gradient-to-t from-purple-400/5 to-transparent transform rotate-6 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Ancient runes/symbols (decorative) */}
        <div className="absolute inset-0 opacity-70 z-20 pointer-events-none">
          <div className="absolute top-20 left-20 text-6xl text-amber-500 animate-pulse">⚜</div>
          <div className="absolute top-40 right-32 text-5xl text-blue-500 animate-pulse" style={{animationDelay: '1s'}}>⚔</div>
          <div className="absolute bottom-32 left-40 text-4xl text-purple-500 animate-pulse" style={{animationDelay: '2s'}}>🔮</div>
          <div className="absolute bottom-20 right-20 text-5xl text-green-500 animate-pulse" style={{animationDelay: '3s'}}>🛡</div>
          <div className="absolute top-1/2 left-10 text-3xl text-red-500 animate-pulse" 
              style={{ transform: 'rotate(30deg)', animationDelay: '1.5s' }}>👑</div>
        </div>
      </div>
      {/* Placeholder content for demo */}
      <div className="py-8 px-3 text-center text-amber-100">
        <h1 className="text-4xl font-bold font-serif mb-4">Hello, there!</h1>
                <div className="flex justify-center">
                    <div className="lg:w-[360px] lg:h-[360px] md:w-[360px] md:h-[360px] sm:w-[240px] sm:h-[240px] w-[240px] h-[240px]">
                    <Image
                    className="w-full "
                        src="/raffi.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        />
                    </div>
                </div>
        <h2 className="text-3xl font-bold font-serif py-5">I am Raffi Mahya Paratama</h2>
        <Scroll/>
      </div>
      
      {/* Your actual content goes here - positioned above background */}
      <div className="relative z-10 mb-5">
        {/* Import your actual Skills and Body components here */}
        <Skills/>
        <Body/>
        
      </div>
      <div className="px-3 text-center">
        <Contact/>
      </div>
    </div>
  );
}