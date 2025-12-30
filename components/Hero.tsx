"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-nila-50">
      
   
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-nila-200 rounded-full blur-[120px] opacity-40 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
     
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-nila-600 font-bold tracking-widest uppercase text-sm mb-6 block">
            Kindling Smiles Across Globe
          </span>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] text-nila-900 mb-8">
            Cultivating <br />
            <span className="italic font-light text-nila-500">Happiness</span> & <br />
            Connection.
          </h1>
          <p className="text-xl text-nila-800/70 leading-relaxed max-w-md mb-10">
            A community where happiness thrives alongside inner strength. We empower individuals to banish loneliness and find solace in our collective journey.
          </p>
          <div className="flex gap-4">
            <button className="bg-nila-900 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Discover More
            </button>
            <button className="border border-nila-900/20 text-nila-900 px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
              Our Vision
            </button>
          </div>
        </motion.div>


        <motion.div style={{ y }} className="relative">
          <div className="relative z-10 rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-2xl shadow-nila-900/10 border-4 border-white">
           
            <img 
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2670&auto=format&fit=crop" 
              alt="Woman smiling in nature" 
              className="w-full h-[600px] object-cover"
            />
          </div>
 
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-8 rounded-full shadow-xl z-20 max-w-xs hidden md:block"
          >
            <p className="font-display italic text-2xl text-center leading-tight text-nila-900">
              "Happiness blooms in the little moments."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}