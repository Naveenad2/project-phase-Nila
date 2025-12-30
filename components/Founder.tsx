"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Star, Quote } from 'lucide-react';

export default function Founder() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateBadge = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={containerRef} className="relative bg-nila-900 text-nila-50 py-32 overflow-hidden">
      
      
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-nila-600 rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        
  
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
     
          <motion.div style={{ y: yText }} className="lg:col-span-7 relative z-20">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8 text-nila-300 font-bold uppercase tracking-[0.2em] text-xs"
            >
              <span className="w-12 h-[1px] bg-nila-300"></span>
              The Visionary
            </motion.div>

            <h2 className="text-[15vw] lg:text-[10vw] font-display font-black leading-[0.8] tracking-tighter mix-blend-overlay text-white opacity-90 mb-8">
              SALEENA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nila-300 to-white">BEEVI S.</span>
            </h2>

            <div className="lg:pl-24 max-w-xl">
              <p className="text-xl md:text-2xl font-display italic text-nila-200 mb-8 leading-relaxed">
                "We are the architects of our own joy. My mission is to hand you the blueprints."
              </p>
              
              <p className="text-lg text-white/60 leading-relaxed mb-10 font-light">
                Founder & Chief Growth Officer. Honored with the <strong className="text-white">Kerala State Award</strong> for Social Engineering. Saleena harmonizes positive psychology with compassionate leadership to create thriving ecosystems.
              </p>

              <button className="group flex items-center gap-3 px-8 py-4 bg-nila-300 text-nila-900 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all hover:scale-105">
                Read Her Story <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
              </button>
            </div>
          </motion.div>

          <div className="lg:col-span-5 relative h-[600px] lg:h-[800px] w-full flex items-center">
            
           
            <motion.div 
              style={{ y: yImage }}
              className="relative w-full h-[90%] rounded-[10rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" 
                alt="Saleena Beevi S" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-105"
              />
              
          
              <div className="absolute inset-0 bg-gradient-to-t from-nila-900/80 via-transparent to-transparent opacity-60" />
            </motion.div>

          
            <motion.div 
              style={{ rotate: rotateBadge }}
              className="absolute top-20 -left-12 z-30 w-32 h-32 md:w-40 md:h-40 bg-nila-400 rounded-full flex items-center justify-center text-nila-900 shadow-xl hidden md:flex"
            >
              <svg className="w-full h-full absolute inset-0 animate-spin-slow" viewBox="0 0 100 100">
                 <path id="curve-founder" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent"/>
                 <text className="text-[11px] font-bold uppercase tracking-widest fill-current">
                   <textPath href="#curve-founder">
                     • Award Winning • Social Engineering • Hope Coach
                   </textPath>
                 </text>
              </svg>
              <Star fill="currentColor" size={40} />
            </motion.div>

          </div>
        </div>

      
        <div className="mt-20 lg:-mt-20 relative z-30">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <StatItem number="20+" label="Years of Service" />
            <StatItem number="5M+" label="Lives Impacted" />
            <StatItem number="30+" label="Global Projects" />

          </div>
        </div>

      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <span className="text-5xl md:text-6xl font-display font-black text-white mb-2">{number}</span>
      <span className="text-nila-300 font-bold uppercase tracking-widest text-xs">{label}</span>
    </div>
  );
}