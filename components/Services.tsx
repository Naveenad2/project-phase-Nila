"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Users, BookOpen, Heart, Leaf } from 'lucide-react';

// --- DATA ---
const services = [
  {
    id: "01",
    title: "Global Happy School",
    category: "Education",
    desc: "A revolutionary curriculum integrating Socio-Emotional Learning (SEL) into schools. We transform classrooms into sanctuaries of joy and resilience.",
    features: ["Teacher Training", "Student Workshops", "Curriculum Integration"],
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2632&auto=format&fit=crop",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    id: "02",
    title: "Work-Life Ecosystem",
    category: "Corporate",
    desc: "Reimagining the workplace. We implement the 'Holistic Work-Life Balance Framework' to boost productivity through genuine employee well-being.",
    features: ["Stress Management", "Leadership Coaching", "Team Harmony"],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    icon: <Users className="w-5 h-5" />
  },
  {
    id: "03",
    title: "Mentor-Me Solutions",
    category: "Counseling",
    desc: "One-on-one guidance to unlock potential. Our expert mentors use evidence-based positive psychology to help you navigate life's complexities.",
    features: ["Personal Growth", "Career Mapping", "Emotional Support"],
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop",
    icon: <Heart className="w-5 h-5" />
  },
  {
    id: "04",
    title: "TZERO Space",
    category: "Sanctuary",
    desc: "A dedicated physical and digital space for deep rest, reflection, and emotional healing. A pause button for a chaotic world.",
    features: ["Meditation Pods", "Digital Detox", "Healing Circles"],
    img: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2669&auto=format&fit=crop",
    icon: <Leaf className="w-5 h-5" />
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState<string | null>("01"); // Default first open

  return (
    <section id="services" className="relative bg-nila-50 py-32 px-4 md:px-6">
      
   
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      <div className="max-w-[90rem] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-nila-900/10 pb-10">
          <div>
            <span className="flex items-center gap-2 text-nila-600 font-bold uppercase tracking-widest text-xs mb-4">
              <Sparkles size={14} /> Our Offerings
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black text-nila-900 leading-[0.9]">
              Pathways to <br /><span className="text-nila-500 italic font-light">Joy.</span>
            </h2>
          </div>
          <p className="text-nila-900/60 max-w-sm text-lg leading-relaxed mb-2">
            Holistic solutions designed to cultivate resilience in every aspect of life, from the classroom to the boardroom.
          </p>
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          {services.map((service) => (
            <DesktopItem 
              key={service.id} 
              service={service} 
              isActive={activeId === service.id} 
              onClick={() => setActiveId(service.id)} 
            />
          ))}
        </div>

        
        <div className="lg:hidden flex flex-col gap-8">
          {services.map((service) => (
            <MobileItem key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}


function DesktopItem({ service, isActive, onClick }: { service: any, isActive: boolean, onClick: () => void }) {
  return (
    <motion.div 
      onClick={onClick}
      layout
      initial={false}
      animate={{ 
        height: isActive ? 500 : 100,
        backgroundColor: isActive ? "#ffffff" : "rgba(255,255,255,0.4)"
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`relative w-full overflow-hidden rounded-[2.5rem] cursor-pointer border hover:border-nila-900/20 transition-colors ${isActive ? "border-nila-900/10 shadow-2xl shadow-nila-900/5" : "border-transparent"}`}
    >
      <div className="p-8 md:p-12 h-full flex flex-row gap-12">
        
       
        <div className="flex flex-col justify-between h-full min-w-[400px] w-1/3 relative z-10">
          
        
          <div className="flex items-center gap-6 group">
            <span className={`text-xl font-mono font-bold transition-colors ${isActive ? "text-nila-500" : "text-nila-900/30"}`}>
              {service.id}
            </span>
            <h3 className={`text-4xl font-display font-bold transition-colors ${isActive ? "text-nila-900" : "text-nila-900/60 group-hover:text-nila-900"}`}>
              {service.title}
            </h3>
            {!isActive && <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-nila-500 ml-auto" />}
          </div>

          <AnimatePresence>
            {isActive && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-8 mt-auto"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-nila-100 rounded-full w-fit text-nila-700 text-xs font-bold uppercase tracking-wider">
                  {service.icon} {service.category}
                </div>
                
                <p className="text-xl text-nila-900/70 leading-relaxed font-medium">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((tag: string, i: number) => (
                    <span key={i} className="px-4 py-2 border border-nila-900/10 rounded-full text-xs font-bold uppercase tracking-wider text-nila-900/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-nila-900 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all mt-4">
                  Explore Service <ArrowUpRight size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

     
        <AnimatePresence>
          {isActive && (
            <motion.div 
              initial={{ opacity: 0, scale: 1.1, clipPath: "inset(0 0 0 100%)" }}
              animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0 0%)" }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex-grow h-full relative rounded-[2rem] overflow-hidden"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-nila-900/10 mix-blend-multiply" />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}


function MobileItem({ service }: { service: any }) {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-nila-900/5">
      <div className="h-64 relative overflow-hidden">
        <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-nila-900 flex items-center gap-2">
          {service.icon} {service.category}
        </div>
      </div>
      
      <div className="p-8">
        <span className="text-nila-900/20 font-mono text-sm font-bold mb-2 block">{service.id}</span>
        <h3 className="text-3xl font-display font-bold text-nila-900 mb-4">{service.title}</h3>
        <p className="text-nila-900/70 leading-relaxed mb-6">
          {service.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-nila-50 rounded-full text-[10px] font-bold uppercase tracking-wider text-nila-600">
              {tag}
            </span>
          ))}
        </div>
        
        <button className="w-full py-4 border border-nila-900/10 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-nila-900 hover:text-white transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}