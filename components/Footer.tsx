import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100 pt-20 pb-10 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3">
               <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">L</div>
               <span className="text-2xl font-bold text-white tracking-tight font-display">LOGO</span>
            </Link>
            <p className="text-brand-200/70 leading-relaxed text-sm max-w-sm">
              We are dedicated to providing accessible, scientific, and compassionate mental healthcare. Our AI-driven approach ensures you find the right support, every time.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-brand-200/80 hover:text-brand-300 transition-colors cursor-pointer">
                <Mail size={16} /> <span>hello@logo.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-200/80 hover:text-brand-300 transition-colors cursor-pointer">
                <Phone size={16} /> <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-200/80 hover:text-brand-300 transition-colors cursor-pointer">
                <MapPin size={16} /> <span>123 Wellness Blvd, Health City</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-200/60">
              <li><Link href="/about" className="hover:text-brand-300 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-brand-300 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-brand-300 transition-colors">Editorial Blog</Link></li>
              <li><Link href="/press" className="hover:text-brand-300 transition-colors">Press & Media</Link></li>
              <li><Link href="/contact" className="hover:text-brand-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-200/60">
              <li><Link href="#" className="hover:text-brand-300 transition-colors">Individual Therapy</Link></li>
              <li><Link href="#" className="hover:text-brand-300 transition-colors">Couples Counseling</Link></li>
              <li><Link href="#" className="hover:text-brand-300 transition-colors">Psychiatry</Link></li>
              <li><Link href="#" className="hover:text-brand-300 transition-colors">Child & Adolescent</Link></li>
              <li><Link href="#" className="hover:text-brand-300 transition-colors">Corporate Wellness</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Stay Connected</h4>
            <p className="text-sm text-brand-200/60">Join our newsletter for mental health tips and updates.</p>
            
            <form className="relative max-w-sm">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-brand-800/50 border border-brand-700 text-brand-100 pl-4 pr-12 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-500 transition-colors placeholder-brand-600"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-500 p-2 rounded-lg text-white hover:bg-brand-400 transition-colors">
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="pt-4">
              <p className="text-xs font-bold text-brand-500 uppercase tracking-wider mb-3">Emergency Support</p>
              <p className="text-xs text-brand-200/50 leading-relaxed">
                If you are in a crisis or any other person may be in danger the following resources can provide you with immediate help. <span className="text-brand-300 underline cursor-pointer">View Emergency Numbers</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs font-bold text-brand-200/40">
            <span>© 2025 LOGO Health Inc.</span>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-brand-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-brand-300 transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-brand-300 transition-colors">Sitemap</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <SocialIcon icon={<Twitter size={18} />} />
            <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<Instagram size={18} />} />
            <SocialIcon icon={<Linkedin size={18} />} />
          </div>
        </div>

      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full border border-brand-700 flex items-center justify-center text-brand-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all duration-300">
      {icon}
    </a>
  );
}