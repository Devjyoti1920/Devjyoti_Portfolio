import { motion } from 'motion/react';
import { Code2, BrainCircuit, ShieldAlert, Cpu, Terminal, CheckCircle } from 'lucide-react';
import { categories } from '../data';

const iconMap: Record<string, any> = {
  Code2: Code2,
  BrainCircuit: BrainCircuit,
  ShieldAlert: ShieldAlert
};

export default function TechnicalGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950/40">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Specialized <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">Technical Divisions</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 mx-auto rounded-full mb-6" />
          <p className="font-sans text-zinc-400 text-base sm:text-lg">
            Engineering robust systems across high-performance code pipelines, predictive AI architectures, and secure microservices nodes.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            const targetId = cat.title.toLowerCase().includes('stack') ? 'fullstack' : (cat.title.toLowerCase().includes('machine') ? 'aiml' : 'cloud');
            
            const colorClass = idx === 0 ? 'text-cyan-400' : idx === 1 ? 'text-fuchsia-500' : 'text-violet-500';
            const progressColor = idx === 0 ? 'from-cyan-400 to-blue-500' : idx === 1 ? 'from-fuchsia-400 to-violet-500' : 'from-pink-400 to-rose-500';

            return (
              <motion.div
                key={cat.title}
                id={targetId}
                variants={itemVariants}
                className="bg-zinc-900/40 rounded-3xl border border-zinc-800 p-6 transition-all duration-300 relative group flex flex-col justify-between hover:border-zinc-700/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-800/80 group-hover:bg-zinc-900 transition-colors">
                        <IconComponent className={`h-6 w-6 ${colorClass}`} />
                      </div>
                      <h3 className="font-display text-sm font-black uppercase tracking-widest text-white group-hover:text-cyan-300 transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[9px] text-zinc-500 tracking-wider">0{idx + 1}_DIV</span>
                  </div>

                  <div className="space-y-5">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold text-zinc-300 flex items-center space-x-1.5">
                            <span className={`h-1.5 w-1.5 rounded-full ${colorClass.replace('text-', 'bg-')}`} />
                            <span>{skill.name}</span>
                          </span>
                          <span className="font-mono text-[10px] text-zinc-500">{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full bg-gradient-to-r ${progressColor} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                  <span>SYSTEM_GRADE</span>
                  <span className={`flex items-center space-x-1 font-bold uppercase tracking-wider ${colorClass}`}>
                    <CheckCircle className="h-3 w-3" />
                    <span>Validated Node</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
