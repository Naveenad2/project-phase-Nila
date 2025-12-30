"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

//  DATA ---
const reviews = [
  {
    name: "Megha MB",
    role: "Workshop Attendee",
    text: "The inclusion of Jacobsons Progressive Muscle Relaxation provided a practical technique. The Pickle Jar Theory was a valuable addition!",
    stars: 5
  },
  {
    name: "Arun AA",
    role: "Retreat Participant",
    text: "Never heard about such an amazing happiness retreat till I came here. Sessions like Blindfolded meditation and Mirror manifestation changed my life.",
    stars: 5
  },
  {
    name: "Safa Ck",
    role: "Intern",
    text: "Saleena ma'am is approachable, creating an inclusive atmosphere. The practical takeaways made the experience impactful.",
    stars: 5
  },
  {
    name: "Arathy Raju",
    role: "Student",
    text: "I reached out during a challenging time. Their support was exactly what I needed—they truly listened and made me feel understood.",
    stars: 5
  },
  {
    name: "Hephzibah",
    role: "Student",
    text: "The experience got from NILA SCHOOL OF HAPPINESS was very wonderful.",
    stars: 5
  },
  {
    name: "Yahiya c",
    role: "Parent",
    text: "I highly recommend Nila for anyone seeking academic counseling. The team is professional, compassionate, and highly skilled.",
    stars: 5
  },
  {
    name: "Jaigurudev",
    role: "Parent",
    text: "A big salute to Saleena ma'am who is doing this noble service at affordable rates with a brave approach to open up children's minds.",
    stars: 5
  },
  {
    name: "Sana Backer",
    role: "MSW Graduate",
    text: "This session gave me a broader understanding of suicide prevention. I'm proud to have completed my internship at Nila Foundation.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section id="happynings" className="relative bg-nila-900 py-32 overflow-hidden">
      
     
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-nila-500 rounded-full blur-[200px] opacity-10 pointer-events-none" />

      
      <div className="text-center mb-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-nila-400 font-bold uppercase tracking-widest text-xs mb-4 block">
            Happynings
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tight">
            Voices of <span className="text-nila-400 italic font-serif font-light">Joy.</span>
          </h2>
        </motion.div>
      </div>

     
      <div className="flex flex-col gap-12 relative z-10">
       
        <Marquee direction={1} speed={20}>
          {reviews.slice(0, 4).map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </Marquee>

     
        <Marquee direction={-1} speed={20}>
          {reviews.slice(4, 8).map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </Marquee>
      </div>

     
      <div className="absolute inset-y-0 left-0 w-20 md:w-60 bg-gradient-to-r from-nila-900 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-60 bg-gradient-to-l from-nila-900 to-transparent z-20 pointer-events-none" />

    </section>
  );
}


function Marquee({ children, direction, speed }: { children: React.ReactNode, direction: number, speed: number }) {
  

  return (
    <div className="flex overflow-hidden w-full select-none group">
      <motion.div 
        className="flex gap-8 min-w-full flex-shrink-0"
        animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ 
          ease: "linear", 
          duration: speed, 
          repeat: Infinity,
        }}
      >
        <div className="flex gap-8 pr-8">
          {children}
        </div>
        <div className="flex gap-8 pr-8">
          {children}
        </div>
        <div className="flex gap-8 pr-8">
          {children}
        </div>
        <div className="flex gap-8 pr-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
}


function ReviewCard({ review }: { review: any }) {
  return (
    <div className="w-[300px] md:w-[450px] flex-shrink-0 bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/10 transition-colors duration-300 relative group cursor-default">
      
     
      <div className="absolute top-8 right-8 text-nila-500 opacity-20 group-hover:opacity-100 transition-opacity">
        <Quote size={40} />
      </div>

     
      <div className="flex gap-1 mb-6 text-nila-400">
        {[...Array(review.stars)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>

     
      <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed mb-8 line-clamp-4">
        "{review.text}"
      </p>

    
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-nila-500 to-nila-300 flex items-center justify-center text-nila-900 font-bold text-xl">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-white font-bold font-display tracking-wide">{review.name}</h4>
          <p className="text-nila-400 text-xs font-bold uppercase tracking-widest opacity-60">{review.role}</p>
        </div>
      </div>
    </div>
  );
}