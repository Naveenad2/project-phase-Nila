"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2, Quote, Sparkles } from 'lucide-react';

// --- DATA ---
const pillars = [
  {
    id: "01",
    title: "HOPE",
    subtitle: "The Spark of Resilience",
    desc: "Hope is not passive wishing; it is the active construction of a future. It empowers individuals to navigate uncertainty with courage.",
    quote: "Hope is the thing with feathers that perches in the soul.",
    tags: ["Self-Discovery", "Resilience", "Future-Focus"],
    benefits: ["Builds emotional strength", "Clarifies life purpose"],
    img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2574&auto=format&fit=crop",
    color: "bg-[#1a2e05]",
    text: "text-nila-50",
    accent: "text-nila-300"
  },
  {
    id: "02",
    title: "HAPPINESS",
    subtitle: "The Daily Practice",
    desc: "We view happiness not as a destination, but as a skill to be cultivated through mindfulness, gratitude, and small daily acts of joy.",
    quote: "Happiness is not ready made. It comes from your own actions.",
    tags: ["Mindfulness", "Gratitude", "Well-being"],
    benefits: ["Reduces stress levels", "Enhances creativity"],
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2669&auto=format&fit=crop",
    color: "bg-[#f7fee7]",
    text: "text-nila-900",
    accent: "text-nila-500"
  },
  {
    id: "03",
    title: "HARMONY",
    subtitle: "The Collective Rhythm",
    desc: "True well-being exists in connection. We foster a space where empathy flows freely, creating a supportive ecosystem for all.",
    quote: "We rise by lifting others.",
    tags: ["Community", "Empathy", "Connection"],
    benefits: ["Fosters deep belonging", "Creates support networks"],
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2674&auto=format&fit=crop",
    color: "bg-[#84cc16]",
    text: "text-white",
    accent: "text-nila-100"
  }
];

export default function Philosophy() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });


  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative bg-nila-900">
      
     
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      
      <div className="hidden lg:block h-[300vh] relative"> 
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          <motion.div style={{ x }} className="flex gap-10 pl-[10vw] w-max">
            
       
            <div className="w-[30vw] max-w-md flex-shrink-0 flex flex-col justify-center pr-10">
              <span className="text-nila-400 font-bold uppercase tracking-widest text-xs mb-4 block animate-pulse">Our Philosophy</span>
              <h2 className="text-6xl xl:text-7xl font-display font-black text-white leading-[0.9] mb-8">
                The <br /><span className="text-nila-400">NILA</span><br />Trinity.
              </h2>
              <p className="text-lg text-nila-100/70 leading-relaxed mb-8 max-w-sm">
                Three immutable pillars defining our approach to well-being.
              </p>
              <div className="flex items-center gap-3 text-white/50 text-sm font-mono uppercase tracking-widest">
                <ArrowRight size={16} /> Scroll to Explore
              </div>
            </div>

      
            {pillars.map((pillar, i) => (
              <ParallaxCard key={i} pillar={pillar} />
            ))}
          </motion.div>
        </div>
      </div>

 
      <div className="lg:hidden py-20 px-4 space-y-8 bg-nila-900 relative z-10">
        <div className="mb-8 text-center">
           <span className="text-nila-400 font-bold uppercase tracking-widest text-xs mb-2 block">Our Philosophy</span>
           <h2 className="text-4xl font-display font-bold text-white">The Trinity</h2>
        </div>
        {pillars.map((pillar, i) => (
           <MobileCard key={i} pillar={pillar} />
        ))}
      </div>

    </section>
  );
}


function ParallaxCard({ pillar }: { pillar: any }) {
  return (
    <div className={`relative w-[65vw] max-w-[1000px] h-[70vh] flex-shrink-0 ${pillar.color} rounded-[2.5rem] overflow-hidden flex shadow-2xl border border-white/10 group`}>
      
     
      <div className={`w-[50%] p-10 xl:p-14 flex flex-col justify-between relative z-20 ${pillar.text}`}>
        
      
        <div className="flex flex-wrap gap-2">
          {pillar.tags.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1 border border-current/20 rounded-full text-[10px] xl:text-xs font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        
        <div className="mt-4">
           <div className="flex items-center gap-3 mb-2 opacity-60 font-mono text-sm">
             <span>{pillar.id}</span>
             <div className="h-[1px] w-8 bg-current" />
             <span className="uppercase tracking-wider">{pillar.subtitle}</span>
           </div>
           
          
           <h3 className="text-5xl xl:text-7xl font-display font-black tracking-tighter mb-4 leading-[0.9]">
             {pillar.title}
           </h3>
           <p className="text-base xl:text-lg font-medium leading-relaxed opacity-90 max-w-sm">
             {pillar.desc}
           </p>
        </div>

       
        <div className="mt-6 pt-6 border-t border-current/10">
           <p className="font-display italic text-base leading-tight opacity-80 mb-4">"{pillar.quote}"</p>
           <div className="space-y-1">
             {pillar.benefits.map((benefit: string, i: number) => (
               <div key={i} className="flex items-center gap-2 text-xs xl:text-sm font-bold opacity-70">
                 <CheckCircle2 size={14} /> {benefit}
               </div>
             ))}
           </div>
        </div>
      </div>

    
      <div className="w-[50%] h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
        <img 
          src={pillar.img} 
          alt={pillar.title} 
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
        />
        
        <div className="absolute bottom-6 right-6 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 animate-spin-slow">
           <Sparkles className="text-white" size={24} />
        </div>
      </div>

    </div>
  );
}


function MobileCard({ pillar }: { pillar: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      className={`${pillar.color} rounded-[2rem] overflow-hidden shadow-lg`}
    >
      <div className="h-48 overflow-hidden relative">
         <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
         <span className="absolute bottom-4 left-4 text-white font-display font-bold text-3xl">{pillar.title}</span>
         <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase border border-white/20">
           {pillar.id}
         </span>
      </div>
      
      <div className={`p-6 ${pillar.text}`}>
        <p className="text-sm opacity-90 leading-relaxed mb-6 font-medium">{pillar.desc}</p>
        
        <div className="space-y-3 border-t border-current/10 pt-4">
           <p className="font-display italic opacity-70 text-sm border-l-2 border-current/30 pl-3">"{pillar.quote}"</p>
           <div className="flex flex-wrap gap-2">
             {pillar.tags.slice(0, 2).map((tag: string, i: number) => (
               <span key={i} className="text-[10px] uppercase font-bold px-2 py-1 bg-black/5 rounded-full opacity-60">
                 {tag}
               </span>
             ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
}