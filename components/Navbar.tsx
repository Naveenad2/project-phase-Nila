"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowUpRight, MessageCircle, Stethoscope, Smile, Users, ArrowRight, Home, Info, Briefcase, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();


  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20 && !isScrolled) setIsScrolled(true);
    if (latest <= 20 && isScrolled) setIsScrolled(false);
  });


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  return (
    <>
    
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          ref={dropdownRef}
          className={`relative mt-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between
            ${isScrolled 
              ? "w-full max-w-5xl rounded-full bg-white/80 backdrop-blur-md border border-white/40 shadow-xl shadow-nila-900/5 py-2 px-6" 
              : "w-full max-w-[95rem] rounded-none bg-transparent py-6 px-2" 
            }
          `}
        >
         
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="bg-nila-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-display font-bold text-lg shadow-sm group-hover:rotate-12 transition-transform">
              N
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-nila-900">
              NILA.
            </span>
          </Link>

       
          <nav className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-sm p-1 rounded-full border border-white/50">
            <NavLink href="/">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            
      
            <div className="relative">
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'experts' ? null : 'experts')}
                className={`relative px-4 py-2 text-sm font-bold transition-all rounded-full flex items-center gap-1
                  ${activeDropdown === 'experts' ? "bg-nila-900 text-white shadow-lg" : "text-nila-900 hover:bg-white hover:shadow-sm"}
                `}
              >
                Experts
                <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'experts' ? "rotate-180" : ""}`} />
              </button>

           
              <AnimatePresence>
                {activeDropdown === 'experts' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[580px] bg-white rounded-2xl shadow-2xl border border-nila-900/5 overflow-hidden p-1.5 flex"
                  >
          
                    <div className="w-[60%] p-2 flex flex-col gap-1">
                      <DropdownItem href="/therapist" icon={<MessageCircle size={16} />} title="Therapists" desc="Mental health support" />
                      <DropdownItem href="#" icon={<Stethoscope size={16} />} title="Psychiatrists" desc="Medical care" />
                      <DropdownItem href="#" icon={<Smile size={16} />} title="Child Experts" desc="Youth support" />
                      <DropdownItem href="#" icon={<Users size={16} />} title="Couples" desc="Relationship therapy" />
                    </div>

        
                    <div className="w-[40%] relative rounded-xl overflow-hidden group">
                      <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Clinic"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-nila-900/90 to-transparent" />
                      <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-nila-500 px-2 py-0.5 rounded w-fit mb-1">New</span>
                        <h4 className="font-bold text-sm leading-tight mb-2">Nila Sanctuary</h4>
                        <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">Explore <ArrowRight size={10}/></button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="#internship">Internship</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

      
          <div className="flex items-center gap-2">
            <button className="hidden md:flex bg-nila-900 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-nila-700 transition-colors shadow-lg shadow-nila-900/20">
              Get Started
            </button>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 bg-white rounded-full flex items-center justify-center text-nila-900 shadow-md hover:scale-105 transition-transform"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white/60 backdrop-blur-xl h-screen w-screen flex flex-col"
          >
           
            <div className="flex justify-between items-center p-6">
              <span className="font-display font-bold text-2xl text-nila-900">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-nila-900">
                <X size={20} />
              </button>
            </div>

       
            <div className="flex flex-col px-6 pt-4 gap-4">
              <MobileLink href="/" title="Home" icon={<Home size={20}/>} delay={0.1} close={() => setMobileMenuOpen(false)} />
              <MobileLink href="#about" title="About NILA" icon={<Info size={20}/>} delay={0.2} close={() => setMobileMenuOpen(false)} />
              
             
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-4 shadow-sm border border-nila-50"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-nila-400 mb-3 block">Experts</span>
                <div className="grid grid-cols-2 gap-2">
                  <MobileExpertLink href="/therapist" label="Therapists" close={() => setMobileMenuOpen(false)} />
                  <MobileExpertLink href="#" label="Psychiatrists" close={() => setMobileMenuOpen(false)} />
                  <MobileExpertLink href="#" label="Child Care" close={() => setMobileMenuOpen(false)} />
                  <MobileExpertLink href="#" label="Couples" close={() => setMobileMenuOpen(false)} />
                </div>
              </motion.div>

              <MobileLink href="#internship" title="Internship" icon={<Briefcase size={20}/>} delay={0.4} close={() => setMobileMenuOpen(false)} />
              <MobileLink href="#contact" title="Contact Us" icon={<MessageCircle size={20}/>} delay={0.5} close={() => setMobileMenuOpen(false)} />
            </div>

           
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto p-6"
            >
              <button className="w-full bg-nila-900 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-nila-900/20 flex items-center justify-center gap-3">
                <Calendar size={20} /> Book Consultation
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- SUB-COMPONENTS ---

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="px-5 py-2 text-sm font-bold text-nila-900 hover:bg-white hover:shadow-sm rounded-full transition-all">
      {children}
    </Link>
  );
}

function DropdownItem({ href, icon, title, desc }: any) {
  return (
    <Link href={href} className="flex items-center gap-3 p-2 rounded-xl hover:bg-nila-50 transition-colors group">
      <div className="w-8 h-8 rounded-full bg-white border border-nila-100 flex items-center justify-center text-nila-400 group-hover:bg-nila-500 group-hover:text-white transition-colors shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-nila-900 leading-none mb-0.5">{title}</h4>
        <p className="text-[10px] text-nila-500 font-medium">{desc}</p>
      </div>
    </Link>
  );
}

function MobileLink({ href, title, icon, delay, close }: any) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <Link href={href} onClick={close} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-nila-50 active:scale-95 transition-transform">
        <div className="text-nila-400">{icon}</div>
        <span className="text-lg font-bold text-nila-900">{title}</span>
        <ArrowRight size={16} className="ml-auto text-nila-200" />
      </Link>
    </motion.div>
  );
}

function MobileExpertLink({ href, label, close }: any) {
  return (
    <Link href={href} onClick={close} className="flex items-center justify-center py-3 bg-nila-50 rounded-xl text-xs font-bold text-nila-700 hover:bg-nila-100 transition-colors">
      {label}
    </Link>
  );
}