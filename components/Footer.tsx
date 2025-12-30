"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Youtube, Send, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white pt-24 -mb-px overflow-hidden">
   
      <div className="bg-[#051a05] rounded-t-[2.5rem] md:rounded-t-[5rem] relative min-h-screen flex flex-col justify-between">
        
  
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

   
        <div className="px-6 md:px-12 pt-20 md:pt-32 pb-16 border-b border-white/5 relative z-10">
          <div className="max-w-[95rem] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            
            
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-nila-400 font-bold uppercase tracking-[0.2em] text-xs mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-nila-400 animate-pulse"></span>
                Join the Movement
              </motion.div>
              <h2 className="text-[12vw] lg:text-[6vw] font-display font-black text-white leading-[0.9] tracking-tighter">
                Ready to <span className="text-nila-400 italic font-serif font-light">Bloom?</span>
              </h2>
            </div>

        
            <div className="flex flex-col gap-6 w-full lg:w-auto">
              <p className="text-white/60 text-lg max-w-sm">
                Book a personal consultation or join our next workshop.
              </p>
              <button className="group relative w-full md:w-fit bg-white text-[#051a05] px-10 py-5 rounded-full font-bold text-lg flex items-center justify-between gap-12 hover:bg-nila-400 transition-all duration-300">
                <span className="relative z-10">Get in Touch</span>
                <span className="w-10 h-10 bg-[#051a05] text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                   <ArrowUpRight size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>

  
        <div className="px-6 md:px-12 py-20 relative z-10">
          <div className="max-w-[95rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 xl:gap-20">
            
          
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h3 className="text-3xl font-display font-bold text-white mb-2">NILA.</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-nila-500">School of Happiness</p>
              </div>
              <p className="text-white/50 leading-relaxed max-w-sm">
                To inspire happiness, resilience, and inner peace through hope coaching and positive connections.
              </p>
              <div className="flex flex-wrap gap-3">
                <SocialLink icon={<Facebook size={18} />} />
                <SocialLink icon={<Instagram size={18} />} />
                <SocialLink icon={<Linkedin size={18} />} />
                <SocialLink icon={<Twitter size={18} />} />
                <SocialLink icon={<Youtube size={18} />} />
              </div>
            </div>

        
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-lg mb-8">Menu</h4>
              <ul className="space-y-4">
                {['About NILA', 'Services', 'Internship', 'Happynings', 'Knowledge Hub'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-nila-400 hover:pl-2 transition-all duration-300 block text-sm font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-lg mb-8">Contact</h4>
              <ul className="space-y-6 text-white/70 text-sm">
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-nila-400">
                    <MapPin size={16} />
                  </div>
                  <span className="leading-relaxed pt-1">
                    TC 100/3479, Railway Station Rd, <br />
                    Kazhakkoottam, Kerala 695582
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-nila-400">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col pt-1 gap-1">
                    <a href="tel:+919961432303" className="hover:text-white transition-colors">+91 996 143 2303</a>
                    <a href="tel:+918848072712" className="hover:text-white transition-colors">+91 884 807 2712</a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-nila-400">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col pt-1 gap-1">
                    <a href="mailto:nilahrtvm@gmail.com" className="hover:text-white transition-colors break-all">nilahrtvm@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>

         
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-lg mb-8">Daily Wisdom</h4>
              <p className="text-white/50 text-sm mb-6">Subscribe for insights on happiness.</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-nila-400 focus:bg-white/10 transition-all text-sm"
                />
                <button className="absolute right-2 top-2 bg-nila-400 w-10 h-10 rounded-lg text-[#051a05] flex items-center justify-center hover:bg-white transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>

          </div>
        </div>

  
        <div className="relative w-full overflow-hidden mt-auto">
          
       
          <div className="absolute top-0 right-6 md:right-12 z-20">
             <button 
               onClick={scrollToTop}
               className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black transition-all"
             >
               <ArrowUp size={20} />
             </button>
          </div>

       
          <div className="flex justify-center items-end select-none pointer-events-none opacity-10">
            <h1 className="text-[25vw] font-display font-black text-white leading-none tracking-tighter mix-blend-overlay translate-y-[10%]">
              NILA
            </h1>
          </div>
          
         
          <div className="absolute bottom-6 left-0 right-0 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 text-[10px] uppercase font-bold tracking-widest text-white/30 gap-4">
            <span>© 2025 Educasi Smile Global (OPC) Pvt. Ltd.</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}


function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-nila-400 hover:text-[#051a05] hover:border-nila-400 transition-all duration-300">
      {icon}
    </a>
  );
}