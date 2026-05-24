import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Layers, TrendingUp, Cpu, Server, MapPin, Sparkles, Database } from 'lucide-react';
import { projects } from '../data';

export default function ProjectSection() {
  const [filter, setFilter] = useState<'all' | 'aiml' | 'hackathon'>('all');

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-1.5 bg-zinc-900/90 border border-zinc-800 px-3.5 py-1.5 rounded-full text-xs font-black text-cyan-455 uppercase tracking-wider mb-4">
              <Sparkles className="h-3 w-3 text-cyan-400" />
              <span>Project Ecosystem</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-4">
              Intelligence <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">Deployed</span>
            </h2>
            <p className="font-sans text-zinc-400">
              Interactive deployments demonstrating advanced predictive intelligence, clean state controls, and high-integrity algorithms.
            </p>
          </div>

          <div className="flex bg-zinc-900/80 p-1 rounded-full border border-zinc-800 self-start md:self-end mt-6 md:mt-0">
            {(['all', 'aiml', 'hackathon'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${filter === cat ? 'bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}
              >
                {cat === 'all' ? 'All Work' : cat === 'aiml' ? 'AI / ML Core' : 'Hackathons'}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-900/40 rounded-3xl border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-fuchsia-500/45 transition-all duration-300 relative group neon-border-violet"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-850 text-fuchsia-400 group-hover:text-cyan-400 transition-colors">
                      {project.category === 'aiml' ? <Database className="h-5 w-5" /> : <Award className="h-5 w-5 animate-pulse" />}
                    </div>
                    <span className="font-mono text-[9px] font-bold tracking-widest text-fuchsia-400 uppercase bg-zinc-950/40 px-2.5 py-1 rounded-full border border-fuchsia-500/25">
                      {project.category === 'aiml' ? 'Intelligence' : 'National SIH'}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-black uppercase tracking-wider text-white group-hover:text-fuchsia-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-zinc-455 line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-900 font-sans text-xs text-zinc-300">
                    <span className="text-zinc-550 font-mono block mb-1 uppercase tracking-wider text-[9px] font-bold">Deep Dive:</span>
                    {project.details}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono text-[9px] font-bold text-zinc-400 bg-zinc-950/80 px-2.5 py-1 rounded-full border border-zinc-850">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-850 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-zinc-550 uppercase tracking-widest font-bold">Key Signal:</span>
                  <span className="text-cyan-400 font-bold flex items-center space-x-1 bg-cyan-950/30 px-2.5 py-1 rounded-full border border-cyan-500/10">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>{project.metric}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
