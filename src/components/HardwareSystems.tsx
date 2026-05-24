import { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Eye, Wifi, ArrowRight, ShieldCheck, Database, Sliders, PlayCircle } from 'lucide-react';

export default function HardwareSystems() {
  const [distance, setDistance] = useState<number>(45);
  const [fuzzyDecision, setFuzzyDecision] = useState<string>('Cruising Speed');
  const [ledgerLogs, setLedgerLogs] = useState<string[]>(['Initial state synced: $485,200', 'Integrity hash: 0x9f30e...']);

  const runFuzzyLogicSim = () => {
    const randomDistance = Math.floor(Math.random() * 85) + 5;
    setDistance(randomDistance);
    
    if (randomDistance < 15) {
      setFuzzyDecision('HEAVY DEVIATION: Dynamic Brake Triggered');
    } else if (randomDistance < 40) {
      setFuzzyDecision('MODERATE BRAKE: Decelerate Motors (40%)');
    } else {
      setFuzzyDecision('CLEAR PATH: Steady Acceleration');
    }
  };

  const handleSimulateTransaction = () => {
    const transactions = [
      'ATM Node #4 requested $500 debit...',
      'Semaphore locked core accumulator...',
      'State validated successfully.',
      'Released Mutex lock.',
      'Ledger ledger verified: Hash 0x' + Math.random().toString(16).slice(2, 10).toUpperCase()
    ];
    setLedgerLogs((prev) => [...prev, ...transactions].slice(-7));
  };

  return (
    <section id="hardware" className="py-24 relative overflow-hidden bg-zinc-950/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Hardware & <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">Core Systems</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-violet-550 via-fuchsia-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="font-sans text-zinc-400 text-base sm:text-lg">
            Low-latency fuzzy algorithms, physical telemetry orchestration, and native systems safety models.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/40 rounded-3xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-violet-500/50 transition-all duration-300 group neon-border-violet"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-850">
                  <Cpu className="h-6 w-6 text-violet-450 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-black uppercase tracking-widest text-white">Automated Vehicle Controller</h3>
                  <span className="text-xs font-mono text-violet-400 tracking-wider">Fuzzy Logic & Sensor Fusion</span>
                </div>
              </div>

              <p className="font-sans text-sm text-zinc-400 mb-6 leading-relaxed">
                Processes synchronous inputs from high-definition stereoscopic cameras and ultrasonic rangefinders. Uses dedicated fuzzy logic rulesets to continuously regulate motor PWM outputs and steering margins.
              </p>

              <div className="bg-zinc-950/80 rounded-2xl p-5 border border-zinc-855 space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  <span>SENSOR CHANNELS</span>
                  <span className="text-cyan-400">● LIVE RUNTIME</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-900/40 p-3.5 rounded-xl border border-zinc-900">
                    <div className="flex items-center space-x-1.5 text-[10px] uppercase font-mono text-zinc-500 mb-1">
                      <Eye className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Camera Feed</span>
                    </div>
                    <span className="text-xs font-bold text-white">Object Classifier (OK)</span>
                  </div>

                  <div className="bg-zinc-900/40 p-3.5 rounded-xl border border-zinc-900">
                    <div className="flex items-center space-x-1.5 text-[10px] uppercase font-mono text-zinc-500 mb-1">
                      <Wifi className="h-3.5 w-3.5 text-fuchsia-400" />
                      <span>Ultrasonic Range</span>
                    </div>
                    <span className="text-xs font-bold text-white">{distance} cm</span>
                  </div>
                </div>

                <div className="bg-zinc-900/40 p-3 rounded-xl border border-zinc-900">
                  <div className="flex items-center space-x-1 text-[10px] uppercase font-mono text-zinc-500 mb-1">
                    <Sliders className="h-3 w-3 text-violet-400" />
                    <span>Fuzzy Logic Dynamic Deduction:</span>
                  </div>
                  <span className={`text-xs font-mono font-bold ${distance < 15 ? 'text-red-400' : distance < 40 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {fuzzyDecision}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-850 flex justify-between items-center">
              <button
                onClick={runFuzzyLogicSim}
                className="flex items-center space-x-2 bg-violet-900/20 hover:bg-violet-900/40 text-violet-300 font-mono text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full border border-violet-500/20 transition-all cursor-pointer"
              >
                <PlayCircle className="h-4 w-4" />
                <span>Interact Sensor Telemetry</span>
              </button>
              <div className="h-2.5 w-2.5 rounded-full bg-violet-500 animate-ping" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/40 rounded-3xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 group neon-border-emerald"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-850">
                  <Database className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-black uppercase tracking-widest text-white">Advanced ATM & Banking Simulator</h3>
                  <span className="text-xs font-mono text-emerald-400 tracking-wider">C++ High Concurrency</span>
                </div>
              </div>

              <p className="font-sans text-sm text-zinc-400 mb-6 leading-relaxed">
                High-integrity console emulator enforcing robust ledger isolation. Incorporates thread mutex architectures to avoid race conditions during mock concurrent multi-channel financial accounts queries.
              </p>

              <div className="bg-zinc-950/80 rounded-2xl p-5 border border-zinc-855 space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  <span>LOG CONSOLE</span>
                  <span className="text-emerald-400 flex items-center space-x-1 font-bold">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>MUTEX SYNCED</span>
                  </span>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl font-mono text-xs space-y-1.5 h-36 overflow-y-auto border border-zinc-900 text-zinc-300 select-none">
                  {ledgerLogs.map((log, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="text-zinc-650 font-light">&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-850 flex justify-between items-center">
              <button
                onClick={handleSimulateTransaction}
                className="flex items-center space-x-2 bg-emerald-900/20 hover:bg-emerald-900/40 text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full border border-emerald-500/20 transition-all cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" />
                <span>Inject Parallel Debit Tx</span>
              </button>
              <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-widest">Threads: 4_CORE</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
