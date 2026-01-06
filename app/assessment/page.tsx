"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  X, ArrowRight, ArrowLeft, Check, 
  BrainCircuit, Activity, Moon, Sun, Heart, Zap, Shield, Sparkles 
} from 'lucide-react';

const questions = [
  {
    id: "intent",
    step: 1,
    category: "Primary Concern",
    title: "What is your primary reason for seeking support today?",
    description: "This helps us identify the core specialization required.",
    options: [
      { id: "anxiety", label: "Anxiety & Panic", icon: <Zap size={20}/> },
      { id: "mood", label: "Depression or Low Mood", icon: <Moon size={20}/> },
      { id: "relationships", label: "Relationship Issues", icon: <Heart size={20}/> },
      { id: "trauma", label: "Past Trauma", icon: <Shield size={20}/> },
      { id: "growth", label: "Personal Growth", icon: <Sparkles size={20}/> },
      { id: "other", label: "Other / Unsure", icon: <Activity size={20}/> },
    ]
  },
  {
    id: "duration",
    step: 2,
    category: "Duration",
    title: "How long have you been feeling this way?",
    description: "Understanding the timeline helps in determining the approach.",
    options: [
      { id: "2weeks", label: "Less than 2 weeks", icon: null },
      { id: "1month", label: "1 - 6 months", icon: null },
      { id: "6months", label: "More than 6 months", icon: null },
      { id: "years", label: "Over a year", icon: null },
    ]
  },
  {
    id: "sleep",
    step: 3,
    category: "Lifestyle Factors",
    title: "How would you rate your sleep quality recently?",
    description: "Sleep is a critical biomarker for mental health.",
    options: [
      { id: "good", label: "Good / Consistent", icon: <Sun size={20}/> },
      { id: "variable", label: "Variable", icon: <Activity size={20}/> },
      { id: "poor", label: "Poor / Insomnia", icon: <Moon size={20}/> },
    ]
  },
  {
    id: "urgency",
    step: 4,
    category: "Urgency",
    title: "How urgent is your need to speak with someone?",
    description: "We prioritize appointments based on your immediate needs.",
    options: [
      { id: "asap", label: "Immediately (Crisis)", icon: null },
      { id: "soon", label: "Within 24-48 hours", icon: null },
      { id: "week", label: "Within this week", icon: null },
      { id: "exploring", label: "Just exploring", icon: null },
    ]
  }
];

export default function AssessmentPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const activeQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleOptionSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [activeQuestion.id]: optionId }));
    
    // Smooth delay before next step
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        startAnalysis();
      }
    }, 250);
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      router.push('/');
    }, 4500);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  return (
    <main className="min-h-screen bg-[#fcfbf9] text-brand-900 overflow-hidden flex flex-col">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-[#fcfbf9] to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">AI</div>
          <span className="font-bold text-sm tracking-widest uppercase text-brand-900/80">Diagnostic Mode</span>
        </div>
        <button onClick={() => router.back()} className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center hover:bg-brand-100 transition-colors">
          <X size={18} />
        </button>
      </header>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-grow flex items-center justify-center relative z-10 px-4">
        <AnimatePresence mode='wait'>
          
          {isAnalyzing ? (
            <AnalysisView key="analysis" />
          ) : (
            <motion.div 
              key="question-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center"
            >
              
              {/* LEFT: Context & Progress */}
              <div className="hidden lg:block pr-12 border-r border-brand-200/50">
                <motion.div 
                  key={activeQuestion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-4 block">
                    Question 0{currentStep + 1} / 0{questions.length}
                  </span>
                  <h2 className="text-5xl font-display font-bold text-brand-900 mb-6 leading-tight">
                    {activeQuestion.category}
                  </h2>
                  <p className="text-xl text-brand-400 font-medium leading-relaxed max-w-md">
                    {activeQuestion.description}
                  </p>
                </motion.div>

                <div className="mt-20">
                  <div className="flex justify-between text-xs font-bold text-brand-300 mb-2 uppercase tracking-wider">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-1 w-full bg-brand-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-brand-900" 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: Interactive Form */}
              <div className="w-full max-w-xl mx-auto lg:mx-0">
                <motion.div
                  key={activeQuestion.id + "title"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-10"
                >
                  {/* Mobile Only Header */}
                  <div className="lg:hidden mb-6">
                    <span className="text-brand-500 text-xs font-bold uppercase tracking-widest">
                      {activeQuestion.category} • {currentStep + 1}/{questions.length}
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-brand-900 leading-snug">
                    {activeQuestion.title}
                  </h1>
                </motion.div>

                <div className="grid gap-3">
                  {activeQuestion.options.map((opt, idx) => (
                    <motion.button
                      key={opt.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => handleOptionSelect(opt.id)}
                      className={`group relative w-full p-5 md:p-6 text-left bg-white border rounded-2xl transition-all duration-300 flex items-center justify-between
                        ${answers[activeQuestion.id] === opt.id 
                          ? "border-brand-900 shadow-lg ring-1 ring-brand-900" 
                          : "border-brand-100 shadow-sm hover:border-brand-400 hover:shadow-md"
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        {opt.icon && (
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                            ${answers[activeQuestion.id] === opt.id ? "bg-brand-900 text-white" : "bg-brand-50 text-brand-400 group-hover:bg-brand-100 group-hover:text-brand-600"}
                          `}>
                            {opt.icon}
                          </div>
                        )}
                        <span className="text-lg font-bold text-brand-900">{opt.label}</span>
                      </div>
                      
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                        ${answers[activeQuestion.id] === opt.id ? "border-brand-900 bg-brand-900" : "border-brand-200 group-hover:border-brand-400"}
                      `}>
                        {answers[activeQuestion.id] === opt.id && <Check size={12} className="text-white" />}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Footer Controls */}
                <div className="mt-10 flex items-center justify-between">
                  <button 
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors
                      ${currentStep === 0 ? "text-brand-200 cursor-not-allowed" : "text-brand-500 hover:text-brand-900"}
                    `}
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                  
                  {answers[activeQuestion.id] && (
                    <button className="hidden lg:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-900 animate-pulse">
                      Select option to continue
                    </button>
                  )}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-brand-100/40 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-stone-100/60 rounded-full blur-[120px]" />
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      </div>
    </main>
  );
}

// --- ANALYSIS VIEW (Cinematic Loading) ---
function AnalysisView() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center text-center max-w-lg mx-auto"
    >
      <div className="relative w-32 h-32 mb-12">
        <div className="absolute inset-0 border-2 border-brand-100 rounded-full animate-[spin_8s_linear_infinite]" />
        <div className="absolute inset-3 border-2 border-brand-200 rounded-full animate-[spin_12s_linear_reverse_infinite]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-brand-900 rounded-2xl flex items-center justify-center text-white shadow-2xl animate-pulse">
            <BrainCircuit size={32} />
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-display font-bold text-brand-900 mb-4">
        Analyzing Profile
      </h2>
      
      <div className="space-y-3 w-full">
        <LoadingStep label="Mapping clinical parameters" delay={0.5} />
        <LoadingStep label="Checking specialist availability" delay={1.5} />
        <LoadingStep label="Calculating compatibility scores" delay={2.5} />
        <LoadingStep label="Finalizing your matches" delay={3.5} />
      </div>
    </motion.div>
  );
}

function LoadingStep({ label, delay }: { label: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex items-center justify-center gap-3 text-brand-500 font-medium"
    >
      <CheckCircle2 size={16} className="text-brand-900" />
      <span>{label}</span>
    </motion.div>
  );
}