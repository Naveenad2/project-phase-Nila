"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  X, Zap, Frown, Heart, Sparkles, Sun, Battery, Moon, 
  MessageCircle, CheckCircle2, Star, BrainCircuit, ArrowRight 
} from 'lucide-react';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
  exit: { y: -30, opacity: 0 }
};

const backgroundBlobVariants = {
  animate: {
    scale: [1, 1.2, 1],
    x: [0, 50, 0],
    y: [0, 30, 0],
    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function AssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);


  const questions = [
    {
      id: 1,
      tagline: "Let's start with the heart of the matter.",
      title: "What brings you here today?",
      subtitle: "Select the area that feels heaviest right now.",
      options: [
        { label: "Anxiety & Overwhelm", icon: <Zap size={28}/>, color: "from-orange-400 to-red-400" },
        { label: "Feeling Empty or Down", icon: <Frown size={28}/>, color: "from-blue-400 to-indigo-400" },
        { label: "Relationship Struggles", icon: <Heart size={28}/>, color: "from-pink-400 to-rose-400" },
        { label: "Seeking Purpose", icon: <Sparkles size={28}/>, color: "from-purple-400 to-violet-400" }
      ]
    },
    {
      id: 2,
      tagline: "Your rest tells a story.",
      title: "How have you been sleeping lately?",
      subtitle: "Sleep quality is a vital indicator of inner balance.",
      options: [
        { label: "Restful & Consistent", icon: <Sun size={28}/>, color: "from-amber-400 to-yellow-400" },
        { label: "It varies day to day", icon: <Battery size={28}/>, color: "from-nila-400 to-nila-600" },
        { label: "Poorly or broken", icon: <Moon size={28}/>, color: "from-slate-400 to-slate-600" }
      ]
    },
    {
      id: 3,
      tagline: "Defining your ideal support.",
      title: "What's your preferred therapy style?",
      subtitle: "We match you with experts who work the way you learn.",
      options: [
        { label: "Empathetic Listener", icon: <MessageCircle size={28}/>, color: "from-teal-400 to-cyan-400" },
        { label: "Action & Tools Oriented", icon: <CheckCircle2 size={28}/>, color: "from-emerald-400 to-green-400" },
        { label: "Holistic & Spiritual", icon: <Star size={28}/>, color: "from-fuchsia-400 to-purple-400" }
      ]
    }
  ];

  const currentQ = questions[step];

  const handleOptionClick = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsAnalyzing(true);
     
      setTimeout(() => {
        router.push('/therapist'); 
      }, 5000);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#f8f9fa] selection:bg-nila-200">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div variants={backgroundBlobVariants} animate="animate" className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-nila-200/60 rounded-full blur-[150px]" />
         <motion.div variants={backgroundBlobVariants} animate="animate" transition={{delay: 2}} className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-100/60 rounded-full blur-[150px]" />
         <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      </div>

     
      <div className="relative z-50 flex justify-between items-center p-6 md:p-10">
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} className="flex items-center gap-3">
           <div className="w-10 h-10 bg-nila-900 rounded-full flex items-center justify-center text-white font-bold font-display text-lg shadow-lg">N</div>
         
        </motion.div>
        <button 
          onClick={() => router.back()} 
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/50 backdrop-blur-md border border-nila-900/5 text-nila-900 font-bold text-sm hover:bg-white hover:shadow-md transition-all"
        >
          <span className="hidden md:block">Exit</span> <X size={18} className="group-hover:rotate-90 transition-transform"/>
        </button>
      </div>

     
      <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-120px)] min-h-[600px]">
        <AnimatePresence mode='wait'>
          
          {isAnalyzing ? (
           
            <AnalysisScreen key="analysis" />

          ) : (
           
            <motion.div
              key="questions"
              initial="hidden" animate="visible" exit="exit"
              variants={containerVariants}
              className="grid lg:grid-cols-12 gap-12 h-full items-center"
            >
        
              <div className="lg:col-span-5 lg:pr-12 flex flex-col justify-center">
                <motion.div variants={itemVariants} className="mb-8">
                  <span className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-nila-400 to-nila-800 opacity-20">
                    0{step + 1}
                  </span>
                  <span className="text-xl font-bold text-nila-300 ml-4">/ 0{questions.length}</span>
                </motion.div>
                
                <motion.div 
                  key={step} 
                  initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}
                >
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-nila-900 mb-4 leading-tight">
                    {currentQ.tagline}
                  </h3>
                  <div className="h-1 w-20 bg-nila-500 rounded-full mb-8" />
                </motion.div>
              </div>

            
              <div className="lg:col-span-7 w-full max-w-2xl mx-auto lg:mx-0">
                <motion.div variants={itemVariants}>
                  <h1 className="text-4xl md:text-5xl font-display font-black text-nila-900 mb-6 leading-[1.1]">
                    {currentQ.title}
                  </h1>
                  <p className="text-xl text-nila-900/60 mb-12 font-medium">
                    {currentQ.subtitle}
                  </p>

                  <div className={`grid gap-4 ${currentQ.options.length > 3 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                    {currentQ.options.map((opt, i) => (
                      <motion.button
                        key={i}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleOptionClick}
                        className="group relative overflow-hidden p-6 bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-nila-900/10 transition-all duration-300 text-left flex items-center gap-6"
                      >
                      
                        <div className={`absolute inset-0 bg-gradient-to-r ${opt.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        
                      
                        <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 p-[2px] bg-gradient-to-br from-nila-100 to-white group-hover:from-nila-400 group-hover:to-nila-600 transition-all duration-500">
                          <div className="w-full h-full bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center text-nila-500 group-hover:text-nila-700 transition-colors">
                            {opt.icon}
                          </div>
                        </div>
                        
                        <div>
                           <span className="text-xl font-bold text-nila-900 block mb-1 group-hover:text-black transition-colors">{opt.label}</span>
                           <span className="text-sm text-nila-900/50 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                             Select this option <ArrowRight size={14} />
                           </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

// ANALYSIS SCREEN 
function AnalysisScreen() {
  const loadingMessages = [
    "Synthesizing your responses...",
    "Mapping clinical parameters...",
    "Checking therapist availability...",
    "Finalizing your personalized matches..."
  ];
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex(prev => (prev + 1) % loadingMessages.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center h-full text-center"
    >
   
       <div className="relative w-48 h-48 mb-16">
       
         <div className="absolute inset-0 border-2 border-nila-200/30 rounded-full animate-[spin_10s_linear_infinite]" />
         <div className="absolute inset-4 border-2 border-nila-300/30 rounded-full animate-[spin_15s_linear_reverse_infinite]" />
         
        
         <div className="absolute inset-0 bg-nila-100 rounded-full animate-ping opacity-20 duration-2000"></div>
         <div className="absolute inset-8 bg-white rounded-full shadow-2xl flex items-center justify-center z-10">
           <BrainCircuit className="text-nila-500 animate-pulse" size={64} />
         </div>
         
        
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-nila-400 rounded-full shadow-lg shadow-nila-400/50 animate-[spin_4s_linear_infinite_origin-bottom]" style={{transformOrigin: '50% 100px'}}></div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-[spin_6s_linear_reverse_infinite_origin-top]" style={{transformOrigin: '50% -100px'}}></div>
       </div>

       <h2 className="text-5xl md:text-6xl font-display font-black text-nila-900 mb-6 tracking-tight">
         AI Analysis in Progress
       </h2>
       
   
       <div className="h-8 overflow-hidden relative mb-4">
         <AnimatePresence mode='wait'>
           <motion.p
             key={msgIndex}
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             exit={{ y: -20, opacity: 0 }}
             className="text-xl text-nila-500 font-bold"
           >
             {loadingMessages[msgIndex]}
           </motion.p>
         </AnimatePresence>
       </div>
       <p className="text-nila-900/40 font-medium">Please wait while we connect the dots.</p>
    </motion.div>
  );
}