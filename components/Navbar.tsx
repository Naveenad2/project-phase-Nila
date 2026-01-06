import Link from "next/link";
import { ChevronDown, Menu, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-200/50">
      <div className="bg-brand-900 text-brand-50 text-xs font-medium text-center py-2.5 px-4 tracking-wide">
        Start your journey today. Use code <span className="font-bold text-white">"WELCOME20"</span> for 20% off.
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
           <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm rotate-3 group-hover:rotate-0 transition-transform duration-300">
             L
           </div>
           <span className="text-xl font-bold text-brand-900 tracking-tighter">
             LOGO
           </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-brand-800">
          <Link href="/" className="hover:text-brand-500 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-brand-500 transition-colors">About</Link>
          
          <div className="group relative cursor-pointer flex items-center gap-1 hover:text-brand-500 transition-colors">
            <span>Services</span> <ChevronDown size={14} className="opacity-60" />
          </div>
          
          <div className="group relative cursor-pointer flex items-center gap-1 hover:text-brand-500 transition-colors">
            <span>Concerns</span> <ChevronDown size={14} className="opacity-60" />
          </div>

          <Link href="/therapists" className="text-brand-600 font-semibold">Specialists</Link>
        </nav>

        <div className="flex items-center gap-5">
          <Link href="/login" className="hidden md:flex text-sm font-bold text-brand-800 hover:text-brand-500 transition-colors">
            Log in
          </Link>
          <button className="bg-brand-900 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-brand-800 transition-all shadow-md active:scale-95">
            Book Consultation
          </button>
          <button className="lg:hidden text-brand-900">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}