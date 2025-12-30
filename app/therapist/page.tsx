"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Video, MapPin, Loader2, ChevronDown, Filter, Search, 
  ArrowRight, MessageCircle, Heart, Shield, CheckCircle2, X, 
  SlidersHorizontal, Quote, BrainCircuit, Activity, Lock, Sparkles, Check, 
  Languages, Clock, Star
} from 'lucide-react';

import Link from 'next/link';

// --- MOCK DATA ---
const therapistsData = [
  {
    id: 1,
    name: "Dr. Shivali Dewoolkar",
    role: "Clinical Psychologist",
    exp: 5,
    expLabel: "5+ years",
    price: 1900,
    time: "50 mins",
    languages: ["English", "Hindi", "Marathi"],
    expertise: ["Anger Management", "Anxiety", "Depression"],
    nextSlot: "Today, 05:00 PM",
    gender: "Female",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
    available: true,
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    name: "Rida Mehnaaz",
    role: "Psychotherapist",
    exp: 3,
    expLabel: "3+ years",
    price: 1500,
    time: "50 mins",
    languages: ["English", "Malayalam"],
    expertise: ["OCD", "Trauma", "LGBTQIA+"],
    nextSlot: "Tomorrow, 10:00 AM",
    gender: "Female",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop",
    available: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: "Arjun Nair",
    role: "Trauma Specialist",
    exp: 8,
    expLabel: "8+ years",
    price: 2200,
    time: "60 mins",
    languages: ["English", "Hindi"],
    expertise: ["PTSD", "Grief", "Sleep Disorders"],
    nextSlot: "Today, 07:30 PM",
    gender: "Male",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop",
    available: false,
    rating: 5.0,
    reviews: 210
  },
  {
    id: 4,
    name: "Sarah Thomas",
    role: "Child Psychologist",
    exp: 12,
    expLabel: "12+ years",
    price: 2500,
    time: "50 mins",
    languages: ["English", "Malayalam"],
    expertise: ["ADHD", "Parenting", "Learning Disabilities"],
    nextSlot: "Mon, 11:00 AM",
    gender: "Female",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop",
    available: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 5,
    name: "Dr. Kenji Sato",
    role: "Behavioral Therapist",
    exp: 6,
    expLabel: "6+ years",
    price: 2100,
    time: "50 mins",
    languages: ["English", "Japanese"],
    expertise: ["Addiction", "Anxiety", "Work Stress"],
    nextSlot: "Today, 02:00 PM",
    gender: "Male",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2670&auto=format&fit=crop",
    available: true,
    rating: 4.7,
    reviews: 92
  },
  {
    id: 6,
    name: "Elena Rodriguez",
    role: "Counselor",
    exp: 4,
    expLabel: "4+ years",
    price: 1600,
    time: "50 mins",
    languages: ["English", "Spanish"],
    expertise: ["Relationship Issues", "Self Esteem"],
    nextSlot: "Tomorrow, 09:00 AM",
    gender: "Female",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop",
    available: true,
    rating: 4.8,
    reviews: 115
  }
];

export default function TherapistPage() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [filterGender, setFilterGender] = useState("All");
  const [filterAvailable, setFilterAvailable] = useState(false);
  const [filterLanguage, setFilterLanguage] = useState("All");


  const filteredTherapists = useMemo(() => {
    return therapistsData
      .filter((t) => {
        const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              t.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesGender = filterGender === "All" || t.gender === filterGender;
        const matchesAvail = !filterAvailable || t.available;
        const matchesLang = filterLanguage === "All" || t.languages.includes(filterLanguage);
        return matchesSearch && matchesGender && matchesAvail && matchesLang;
      })
      .sort((a, b) => {
        if (sortBy === "price_low") return a.price - b.price;
        if (sortBy === "price_high") return b.price - a.price;
        if (sortBy === "exp_high") return b.exp - a.exp;
        return 0;
      });
  }, [searchQuery, sortBy, filterGender, filterAvailable, filterLanguage]);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => setIsLoadingMore(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] selection:bg-nila-300 selection:text-nila-900 overflow-x-hidden">
      
    
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-nila-100 rounded-full blur-[150px] opacity-40 mix-blend-multiply animate-pulse-slow" />
         <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-50 rounded-full blur-[150px] opacity-40 mix-blend-multiply" />
      </div>

     
      <AssessmentHero />

    
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20 -mt-24 md:-mt-32">
        <HelpBanner />
      </div>

      
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-20 relative z-10">
      
        <div className="sticky top-24 z-30 transition-all duration-300">
          <div className="bg-white/80 backdrop-blur-xl border border-nila-900/5 rounded-2xl shadow-lg shadow-nila-900/5 p-3 flex flex-col md:flex-row gap-4 items-center justify-between">
            
          
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-nila-900/40 group-focus-within:text-nila-500 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search name or issue..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-nila-50 border border-nila-900/5 rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-nila-200 transition-all"
              />
            </div>

           
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
              <button onClick={() => setFilterAvailable(!filterAvailable)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border whitespace-nowrap ${filterAvailable ? "bg-nila-900 text-white border-nila-900" : "bg-white text-nila-900 border-nila-900/10 hover:bg-nila-50"}`}>
                <div className={`w-2 h-2 rounded-full ${filterAvailable ? "bg-green-400" : "bg-green-500"}`} /> Available Today
              </button>
              <button onClick={() => setShowAdvanced(!showAdvanced)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border whitespace-nowrap ${showAdvanced ? "bg-nila-100 text-nila-900 border-nila-200" : "bg-white text-nila-900 border-nila-900/10 hover:bg-nila-50"}`}>
                <SlidersHorizontal size={14} /> Filters
              </button>
              <div className="relative">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-white border border-nila-900/10 text-nila-900 text-sm font-bold rounded-xl px-4 py-2.5 pr-8 cursor-pointer hover:bg-nila-50 focus:outline-none focus:ring-2 focus:ring-nila-200">
                  <option value="recommended">Sort: Recommended</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-nila-900/40 pointer-events-none" size={14} />
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showAdvanced && (
              <motion.div initial={{ height: 0, opacity: 0, marginTop: 0 }} animate={{ height: "auto", opacity: 1, marginTop: 12 }} exit={{ height: 0, opacity: 0, marginTop: 0 }} className="overflow-hidden bg-white rounded-2xl border border-nila-900/5 shadow-inner">
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-nila-900/40 mb-3">Gender</h4>
                    <div className="flex flex-wrap gap-2">
                      {['All', 'Female', 'Male'].map(g => (
                        <button key={g} onClick={() => setFilterGender(g)} className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors border ${filterGender === g ? "bg-nila-900 text-white border-nila-900" : "bg-white text-nila-900 border-nila-100 hover:bg-nila-50"}`}>{g}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-nila-900/40 mb-3">Language</h4>
                    <select value={filterLanguage} onChange={(e) => setFilterLanguage(e.target.value)} className="w-full bg-nila-50 border border-nila-100 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none">
                      <option value="All">All Languages</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Malayalam">Malayalam</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <AnimatePresence mode='popLayout'>
            {filteredTherapists.length > 0 ? (
              filteredTherapists.map((therapist) => (
                <TherapistCard 
                  key={therapist.id} 
                  data={therapist} 
                  onBook={() => setShowBookingModal(true)} 
                  onProfile={() => setShowProfileModal(true)}
                />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <Search size={48} className="mx-auto text-nila-200 mb-4" />
                <h3 className="text-xl font-bold text-nila-900">No experts match your filters</h3>
                <button onClick={() => {setSearchQuery(""); setFilterGender("All"); setFilterAvailable(false);}} className="mt-4 text-nila-600 font-bold text-sm hover:underline">Clear all filters</button>
              </div>
            )}
          </AnimatePresence>
        </div>

     
        <div className="mt-16 text-center">
          <button onClick={handleLoadMore} disabled={isLoadingMore} className="group relative px-8 py-3 bg-white border border-nila-900/10 rounded-full text-nila-900 font-bold text-sm hover:bg-nila-50 hover:shadow-lg transition-all disabled:opacity-70">
            {isLoadingMore ? <span className="flex items-center gap-2"><Loader2 size={16} className="animate-spin"/> Loading Experts...</span> : <span className="flex items-center gap-2">View More Experts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/></span>}
          </button>
        </div>
      </section>


      <AnimatePresence>
        {showBookingModal && <BookingModal onClose={() => setShowBookingModal(false)} />}
        {showProfileModal && <ProfileModal onClose={() => setShowProfileModal(false)} />}
      </AnimatePresence>

    </main>
  );
}



function AssessmentHero() {
  return (
    <section className="relative pt-32 pb-40 md:pt-40 md:pb-48 overflow-hidden z-0">
      
      
      <div className="absolute inset-0 bg-[#f4f4f5]">
         <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-nila-100 rounded-full blur-[150px] opacity-60 animate-pulse-slow" />
         <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-50 rounded-full blur-[150px] opacity-60" />
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
       
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 backdrop-blur-md border border-nila-900/5 rounded-full text-xs font-bold uppercase tracking-widest text-nila-600 mb-6">
              <Sparkles size={12} /> AI-Powered Matching
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-black text-nila-900 leading-[0.95] tracking-tighter mb-6">
              Science-backed <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nila-600 to-nila-400">Emotional Clarity.</span>
            </h1>
            
            <p className="text-xl text-nila-900/60 leading-relaxed mb-8 max-w-lg font-medium">
              We analyze 50+ clinical data points to match you with a therapist who truly fits your needs—not just your schedule.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
             <Link 
  href="/assessment" 
  className="bg-nila-900 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-nila-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
>
  <BrainCircuit size={20} /> Start Assessment
</Link>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/50 backdrop-blur-md rounded-2xl border border-nila-900/5">
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-nila-200 border-2 border-white" />)}
                </div>
                <span className="text-xs font-bold text-nila-900/60">
                  <span className="text-nila-900">2k+</span> matches
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      
        <div className="relative h-[400px] hidden lg:block">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }} 
             animate={{ opacity: 1, scale: 1 }} 
             transition={{ delay: 0.2 }}
             className="absolute inset-0 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-[3rem] shadow-2xl p-8 flex flex-col items-center justify-center"
           >
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-12 left-12 bg-white px-4 py-2 rounded-xl shadow-lg text-xs font-bold text-nila-900 flex items-center gap-2">
                 <div className="w-2 h-2 bg-orange-400 rounded-full" /> Anxiety
              </motion.div>
              <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-20 right-12 bg-white px-4 py-2 rounded-xl shadow-lg text-xs font-bold text-nila-900 flex items-center gap-2">
                 <div className="w-2 h-2 bg-purple-400 rounded-full" /> Sleep Issues
              </motion.div>

              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl border border-nila-100 w-64 text-center">
                 <div className="w-16 h-16 bg-gradient-to-tr from-nila-400 to-nila-200 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                   <Check size={32} />
                 </div>
                 <h3 className="font-display font-bold text-xl text-nila-900 mb-1">Perfect Match</h3>
                 <p className="text-xs text-nila-900/50 mb-4">Based on your profile</p>
                 <div className="w-full h-2 bg-nila-50 rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: "98%" }} transition={{ delay: 1, duration: 1.5 }} className="h-full bg-nila-500" />
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function HelpBanner() {
  return (
    <div className="bg-[#ede9e4] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#e3dfda] shadow-lg">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#b05d45] shadow-sm shrink-0">
          <MessageCircle size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#4a4a4a] mb-1 font-display">New to Therapy?</h3>
          <p className="text-[#6b6b6b] text-sm leading-relaxed">Confused? We'll guide you through the process.</p>
        </div>
      </div>
      <button className="whitespace-nowrap px-6 py-3 bg-white border border-[#b05d45]/20 text-[#b05d45] rounded-xl font-bold text-sm hover:bg-[#b05d45] hover:text-white transition-all uppercase tracking-wide group flex items-center gap-2">
        Learn How <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

function TherapistCard({ data, onBook, onProfile }: { data: any, onBook: () => void, onProfile: () => void }) {
  const [activeMode, setActiveMode] = useState("Online");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-[2.5rem] p-6 border border-nila-900/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
    >
   
      <div className="flex gap-5 mb-6">
        <div className="relative w-28 h-28 shrink-0 rounded-2xl overflow-hidden group-hover:shadow-md transition-all">
          <img src={data.image} alt={data.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-md rounded-md text-[9px] font-bold uppercase tracking-wider text-nila-900 flex items-center gap-1.5 shadow-sm">
            <span className={`w-1.5 h-1.5 rounded-full ${data.available ? "bg-green-500" : "bg-red-500"} animate-pulse`}></span>
            {data.available ? "Available" : "Busy"}
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h3 onClick={onProfile} className="text-xl font-display font-bold text-nila-900 mb-1 leading-tight group-hover:text-nila-600 transition-colors cursor-pointer">{data.name}</h3>
            <button className="text-nila-900/20 hover:text-red-500 transition-colors"><Heart size={18} /></button>
          </div>
          <p className="text-sm text-nila-900/60 font-medium mb-1">{data.role}</p>
          <div className="flex items-center gap-2 text-xs font-bold text-nila-500">
            <span className="bg-nila-50 px-2 py-0.5 rounded-md">{data.expLabel} Exp</span>
            <span className="flex items-center gap-1 text-orange-500"><Star size={10} fill="currentColor"/> {data.rating}</span>
          </div>
        </div>
      </div>

     
      <div className="flex items-center gap-2 mb-3 text-xs text-nila-900/60">
        <Languages size={14} className="text-nila-400" />
        <span className="font-medium">Speaks: {data.languages.join(", ")}</span>
      </div>

    
      <div className="flex flex-wrap gap-2 mb-6">
        {data.expertise.map((tag: string, i: number) => (
          <span key={i} className="px-2.5 py-1 bg-[#f3f4f6] text-[#374151] rounded-lg text-[10px] font-bold uppercase tracking-wide hover:bg-nila-100 transition-colors">
            {tag}
          </span>
        ))}
      </div>

      
      <div className="bg-[#f8f9fa] rounded-2xl p-4 mb-6 mt-auto">
        <div className="flex justify-between items-center mb-3">
           <div className="flex gap-1 bg-white p-1 rounded-xl shadow-sm border border-black/5">
             <button onClick={() => setActiveMode("Online")} className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${activeMode === "Online" ? "bg-nila-900 text-white shadow-md" : "text-nila-900/50 hover:bg-nila-50"}`}>Online</button>
             <button onClick={() => setActiveMode("In-person")} className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${activeMode === "In-person" ? "bg-nila-900 text-white shadow-md" : "text-nila-900/50 hover:bg-nila-50"}`}>In-person</button>
           </div>
           <div className="font-bold text-nila-900 text-sm">₹{data.price}</div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-nila-900/60">
          <Calendar size={12} className="text-green-600"/> Next: <span className="text-nila-900">{data.nextSlot}</span>
        </div>
      </div>

    
      <div className="grid grid-cols-2 gap-3">
        <button onClick={onProfile} className="py-3.5 border border-nila-900/10 rounded-xl font-bold text-[10px] uppercase tracking-widest text-nila-900 hover:bg-white hover:border-nila-900 transition-all">View Profile</button>
        <button onClick={onBook} className="py-3.5 bg-nila-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-nila-700 shadow-lg transition-all active:scale-95">Book Now</button>
      </div>
    </motion.div>
  );
}


function BookingModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[150] bg-nila-900/60 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white w-full max-w-sm rounded-3xl p-8 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-nila-50 rounded-full hover:bg-nila-100 transition-colors"><X size={18} /></button>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 mx-auto"><CheckCircle2 size={32} /></div>
        <h3 className="text-2xl font-display font-bold text-center text-nila-900 mb-2">Booking Initiated</h3>
        <p className="text-center text-nila-900/60 mb-6 text-sm">You are booking a slot. This connects to our secure payment gateway.</p>
        <button onClick={onClose} className="w-full py-3 bg-nila-900 text-white rounded-xl font-bold uppercase tracking-widest shadow-lg hover:bg-nila-700 transition-colors text-xs">Proceed to Pay</button>
      </motion.div>
    </motion.div>
  );
}


function ProfileModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[150] bg-nila-900/60 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white w-full max-w-2xl rounded-3xl p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-nila-50 rounded-full hover:bg-nila-100 transition-colors"><X size={18} /></button>
        
        <div className="flex gap-6 mb-8">
           <div className="w-24 h-24 rounded-full bg-nila-100 overflow-hidden shrink-0">
             <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" className="w-full h-full object-cover" />
           </div>
           <div>
             <h3 className="text-3xl font-display font-bold text-nila-900 mb-1">Dr. Shivali Dewoolkar</h3>
             <p className="text-nila-500 font-bold mb-2">Clinical Psychologist</p>
             <div className="flex gap-4 text-sm text-nila-900/60">
               <span>10+ Years Exp</span>
               <span>English, Hindi</span>
             </div>
           </div>
        </div>

        <h4 className="font-bold text-nila-900 uppercase tracking-widest text-xs mb-4">About</h4>
        <p className="text-nila-900/70 leading-relaxed mb-8">
          Dr. Shivali is a dedicated clinical psychologist with over a decade of experience in helping individuals navigate anxiety, depression, and complex trauma. She uses an eclectic approach combining CBT, Mindfulness, and Humanistic therapy.
        </p>

        <h4 className="font-bold text-nila-900 uppercase tracking-widest text-xs mb-4">Specializations</h4>
        <div className="flex flex-wrap gap-2 mb-8">
           {["Anxiety", "Depression", "Trauma", "Work Stress", "Relationship Issues"].map((t, i) => (
             <span key={i} className="px-3 py-1 bg-nila-50 rounded-lg text-xs font-bold text-nila-700">{t}</span>
           ))}
        </div>

        <button onClick={onClose} className="w-full py-4 bg-nila-900 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-nila-700 transition-colors">Book Session</button>
      </motion.div>
    </motion.div>
  );
}