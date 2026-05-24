import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code2, BrainCircuit, ShieldAlert, Cpu, Award, Globe, MessageSquare } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: Terminal },
    { id: 'fullstack', label: 'Full-Stack', icon: Code2 },
    { id: 'aiml', label: 'AI/ML', icon: BrainCircuit },
    { id: 'cloud', label: 'Cloud & Cyber', icon: ShieldAlert },
    { id: 'hardware', label: 'Hardware', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: Award },
    { id: 'nontech', label: 'Non-Tech', icon: Globe }
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-900/80 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-2 group cursor-pointer">
              <span className="h-8 w-8 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-violet-600 rounded-lg flex items-center justify-center font-mono text-sm font-black text-black group-hover:scale-105 transition-transform">R</span>
              <span className="font-display text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">RUP</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${isActive ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1 rounded-none px-1' : 'text-zinc-400 hover:text-white'}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => handleScrollTo('contact')}
              className="ml-3 flex items-center space-x-1 bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] transition-all hover:scale-105 cursor-pointer"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Hire Me</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white focus:outline-none p-1.5 rounded-md hover:bg-zinc-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-900 transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all ${isActive ? 'bg-cyan-950/40 text-cyan-400 border-l-4 border-cyan-400' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white px-4 py-2.5 rounded-md text-sm font-black uppercase tracking-wider"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              <span>Hire Me</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
