import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Cpu, ChevronDown, Rocket } from 'lucide-react';
import { profile } from '../data';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const commandText = 'deploy --project rupa_systems --region global';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < commandText.length) {
        setTypedText((prev) => prev + commandText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-grid">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-fuchsia-500/10 rounded-full blur-[100px] animate-pulse duration-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/15 rounded-full blur-[110px] animate-pulse duration-700" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="lg:col-span-7 flex flex-col space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider text-fuchsia-500 uppercase w-fit">
            <Rocket className="h-3.5 w-3.5 animate-bounce" />
            <span>Core Systems & AI Architect</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-none uppercase">
            Hi, I am <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">{profile.name}</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-zinc-300 font-medium max-w-xl leading-relaxed">
            {profile.tagline}
          </p>

          <p className="font-sans text-sm sm:text-base text-zinc-450 max-w-md">
            {profile.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => handleScrollToSection('fullstack')}
              className="bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-violet-600 hover:opacity-90 text-white font-black uppercase tracking-wider text-xs px-8 py-4 rounded-full shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.55)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              Explore Specialties
            </button>
            <button
              onClick={() => handleScrollToSection('projects')}
              className="border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900/80 text-zinc-300 hover:text-white font-black uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all hover:scale-[1.02] cursor-pointer"
            >
              Interactive Projects
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          <div className="w-full max-w-md bg-zinc-950/90 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
            <div className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-zinc-850">
              <div className="flex space-x-1.5">
                <span className="w-2 h-2 bg-red-500 rounded-full inline-block" />
                <span className="w-2 h-2 bg-yellow-500 rounded-full inline-block" />
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
              </div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">rup@architect:~</span>
              <Terminal className="h-4 w-4 text-zinc-500" />
            </div>

            <div className="p-6 font-mono text-xs sm:text-sm space-y-4 text-left">
              <div className="flex items-center space-x-2">
                <span className="text-fuchsia-400">rup_sys</span>
                <span className="text-zinc-500">on</span>
                <span className="text-cyan-400">main</span>
                <span className="text-zinc-500">$</span>
                <span className="text-white">{typedText}</span>
                <span className="w-1.5 h-4 bg-white animate-pulse" />
              </div>

              {typedText.length === commandText.length && (
                <div className="space-y-2 text-zinc-400 animate-fadeIn">
                  <div className="text-cyan-400 flex items-center space-x-1.5">
                    <span>✓</span>
                    <span>Parsing profile variables...</span>
                  </div>
                  <div>- Systems capability: <span className="text-violet-300 font-bold">C++ Boost, Multi-sensor fusion</span></div>
                  <div>- Intelligence: <span className="text-fuchsia-300 font-bold">CNN Model, SVM classifications</span></div>
                  <div>- Infra orchestrated: <span className="text-cyan-300 font-bold">GKE Cluster, Secure Gateway</span></div>
                  <div className="text-cyan-400 flex items-center space-x-1.5">
                    <span>✓</span>
                    <span>Successfully routed RUP ecosystem online.</span>
                  </div>
                  <div className="pt-2 text-[10px] text-zinc-600 flex justify-between">
                    <span>VER: 2.14.8</span>
                    <span>SPEED: 0.04s</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => handleScrollToSection('fullstack')}>
        <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase font-bold">Scroll Down</span>
        <ChevronDown className="h-5 w-5 text-cyan-400 animate-bounce" />
      </div>
    </section>
  );
}
