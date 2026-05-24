import { motion } from 'motion/react';
import { Globe, Users, Lightbulb, Check, Landmark, Languages } from 'lucide-react';
import { nonTechSkills } from '../data';

const iconPool = [Languages, Users, Lightbulb];

export default function NonTechnical() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } }
  };

  return (
    <section id="nontech" className="py-24 relative overflow-hidden bg-grid">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-1.5 bg-zinc-900/90 border border-zinc-800 px-3.5 py-1.5 rounded-full text-xs font-black text-fuchsia-400 uppercase tracking-wider mb-4">
            <Globe className="h-3.5 w-3.5 text-fuchsia-400" />
            <span>Human-Centric Capabilities</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Non-Technical <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">Amplifiers</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 mx-auto rounded-full mb-6" />
          <p className="font-sans text-zinc-400 text-base sm:text-lg">
            Maximizing the value of clean code through fluent human interface, high-stake pitching, and empathetic cross-role collaboration.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {nonTechSkills.map((skill, index) => {
            const Icon = iconPool[index % iconPool.length];
            return (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                className="bg-zinc-900/40 backdrop-blur-sm rounded-3xl border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-fuchsia-500/40 transition-all duration-300 relative group neon-border-magenta overflow-hidden"
              >
                <div className="absolute top-0 right-0 -translate-y-5 translate-x-5 w-24 h-24 bg-fuchsia-500/5 rounded-full blur-2xl group-hover:bg-fuchsia-500/10 transition-colors" />

                <div>
                  <div className="flex items-center space-x-3.5 mb-5 relative z-10">
                    <div className="p-3 bg-zinc-950 rounded-xl text-fuchsia-400 group-hover:scale-105 transition-transform border border-zinc-850">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-black uppercase tracking-wider text-white group-hover:text-fuchsia-300 transition-colors">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-zinc-400 mb-6 leading-relaxed relative z-10">
                    {skill.desc}
                  </p>

                  <ul className="space-y-3 relative z-10">
                    {skill.items.map((item, keyIdx) => (
                      <li key={keyIdx} className="flex items-start text-xs text-zinc-300">
                        <span className="mr-2 text-fuchsia-500 font-bold mt-0.5 select-none animate-pulse">
                          <Check className="h-4 w-4" />
                        </span>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 flex items-center justify-between text-[10px] font-mono text-zinc-500 relative z-10">
                  <span className="font-bold">OUTCOME FOCUS</span>
                  <span className="text-fuchsia-400 uppercase bg-fuchsia-950/20 px-2.5 py-1 rounded-full border border-fuchsia-550/10 font-bold">Excellent</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
