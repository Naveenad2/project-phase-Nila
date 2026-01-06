import Link from "next/link";
import { ArrowRight, BrainCircuit, CheckCircle2, ShieldCheck, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 bg-earth-50">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-earth-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-earth-100/80 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-earth-200 rounded-full text-xs font-bold uppercase tracking-wider text-earth-600 mb-8 shadow-sm">
              <BrainCircuit size={14} />
              AI-Powered Analysis
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-earth-900 leading-[1.1] mb-6">
              Clarity through <br />
              <span className="text-earth-500 italic">Intelligent Insight.</span>
            </h1>
            
            <p className="text-xl text-earth-600 leading-relaxed mb-10 max-w-lg font-medium">
              A professional, scientifically calibrated assessment designed to identify your needs and match you with the perfect expert care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/assessment" className="bg-earth-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-earth-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-earth-900/10">
                Begin Assessment <ArrowRight size={20} />
              </Link>
              <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-xl border border-earth-200 shadow-sm">
                 <div className="flex -space-x-3">
                   {[1,2,3].map((i) => (
                     <div key={i} className="w-8 h-8 rounded-full bg-earth-200 border-2 border-white"></div>
                   ))}
                 </div>
                 <div className="text-xs font-bold text-earth-600">
                   <span className="text-earth-900 block text-sm">2,400+</span> Matches Today
                 </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-xs font-bold text-earth-500 uppercase tracking-widest">
              <span className="flex items-center gap-2"><ShieldCheck size={16} /> HIPAA Compliant</span>
              <span className="flex items-center gap-2"><Activity size={16} /> Evidence Based</span>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[600px] bg-white rounded-[2.5rem] p-8 flex items-center justify-center border border-earth-100 shadow-2xl shadow-earth-900/5">
             <div className="absolute inset-0 bg-[radial-gradient(#E6E2D8_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
             
             <div className="relative z-10 bg-earth-50/90 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white max-w-sm w-full">
               <div className="w-14 h-14 bg-earth-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-earth-500/20">
                 <BrainCircuit size={28} />
               </div>
               
               <h3 className="text-2xl font-bold text-earth-900 mb-2 font-display">System Ready</h3>
               <p className="text-earth-500 text-sm font-medium mb-8">AI Diagnostic Engine v2.0</p>
               
               <div className="space-y-4 mb-8">
                 <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-earth-100">
                   <div className="w-8 h-8 rounded-full bg-earth-100 flex items-center justify-center text-earth-600"><CheckCircle2 size={16} /></div>
                   <div className="text-sm font-bold text-earth-800">Parameters Calibrated</div>
                 </div>
                 <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-earth-100">
                   <div className="w-8 h-8 rounded-full bg-earth-100 flex items-center justify-center text-earth-600"><CheckCircle2 size={16} /></div>
                   <div className="text-sm font-bold text-earth-800">Privacy Secure</div>
                 </div>
               </div>

               <div className="w-full bg-white rounded-full h-14 flex items-center justify-between px-2 border border-earth-100">
                 <span className="text-xs font-bold text-earth-400 pl-4">Awaiting Input...</span>
                 <div className="h-10 px-4 bg-earth-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                   Start
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}