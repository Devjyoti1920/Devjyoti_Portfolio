import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Github, Linkedin, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactFooter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <footer id="contact" className="bg-zinc-950/80 border-t border-zinc-900 py-16 relative overflow-hidden bg-grid">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-fuchsia-600/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center space-x-2.5">
              <span className="h-8 w-8 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-violet-600 rounded-lg flex items-center justify-center font-mono text-sm font-black text-black">R</span>
              <span className="font-display text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">RUP</span>
            </div>
            
            <p className="font-sans text-zinc-400 text-sm max-w-sm leading-relaxed">
              Available for technical consults, micro-architecture designs, AI/ML pipelines, or strategic hackathon ideation sprints.
            </p>

            <div className="space-y-3 font-mono text-xs text-zinc-450 font-bold">
              <div className="flex items-center space-x-2.5 text-zinc-300">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a href="mailto:devjyoti1920@gmail.com" className="hover:text-cyan-300 transition-colors">devjyoti1920@gmail.com</a>
              </div>
              <div>System standard: <span className="text-fuchsia-400">g++17 / Python 3.11 / React 19</span></div>
              <div>Timezone context: <span className="text-cyan-400">UTC / IST</span></div>
            </div>

            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/devjyoti1920" target="_blank" rel="noreferrer" className="p-2.5 bg-zinc-900/60 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white hover:border-cyan-500 hover:scale-105 transition-all">
                <Github className="h-5 w-5 text-cyan-405" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 bg-zinc-900/60 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white hover:border-fuchsia-500 hover:scale-105 transition-all">
                <Linkedin className="h-5 w-5 text-fuchsia-405" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-900/40 p-6 sm:p-8 rounded-3xl border border-zinc-800/80 hover:border-cyan-500/10 transition-all duration-300">
            <h3 className="font-display text-sm font-black uppercase tracking-widest text-white mb-6">Dispatch a Secure Signal</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono text-zinc-550 font-bold uppercase tracking-widest">Ident Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g., Dr. Allison"
                    className="w-full bg-zinc-950 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono text-zinc-555 font-bold uppercase tracking-widest">Network Port/Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g., physician@disha.org"
                    className="w-full bg-zinc-950 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono text-zinc-550 font-bold uppercase tracking-widest">Payload Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Query parameters, microservice details, or custom support integration prompts..."
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all resize-none placeholder:text-zinc-600"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="min-h-8">
                  {status === 'success' && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center space-x-1.5 text-emerald-400 text-xs font-mono">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Transmission completed successfully!</span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center space-x-1.5 text-red-500 text-xs font-mono">
                      <AlertCircle className="h-4 w-4" />
                      <span>Missing mandatory payload fields.</span>
                    </motion.div>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-black uppercase tracking-wider text-xs px-6 py-3.5 rounded-full hover:opacity-90 hover:scale-[1.02] shadow-md hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Transmit Signal</span>
                </button>
              </div>
            </form>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-550 gap-4">
          <span>&copy; {new Date().getFullYear()} RUP. High-Performance Engineering Portfolio.</span>
          <span className="text-emerald-400 font-bold">COMPILATION: SUCCESSFUL STACK</span>
        </div>
      </div>
    </footer>
  );
}
