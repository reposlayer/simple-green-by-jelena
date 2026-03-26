"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { CustomCursor } from '@/components/CustomCursor';
import { MenuOverlay } from '@/components/MenuOverlay';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const navY = useTransform(scrollYProgress, [0, 0.05], ['0%', '-100%']);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#F4F1ED] font-sans selection:bg-[#B1C898]">
      <CustomCursor />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Avant-Garde Minimal Header */}
      <motion.header 
        style={{ y: navY }}
        className="fixed top-0 left-0 w-full z-40 flex justify-between items-start p-6 md:p-12 mix-blend-difference text-[#F4F1ED]"
      >
        <div className="font-sans font-bold text-xs tracking-[0.2em] uppercase leading-relaxed">
          Est. 2011 <br /> ZG, Croatia <br />
          <span className="text-[#B1C898]">100% Vegan & Low-Gluten</span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMenuOpen(true)}
          className="font-sans font-bold text-xs tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
        >
          [ Menù ]
        </motion.button>
      </motion.header>

      {/* Cinematic Hero */}
      <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#121A15]">
        <motion.div 
          style={{ y: imageY }}
          className="absolute inset-0 w-[100vw] h-[120vh] -top-[10vh] z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2953&auto=format&fit=crop" 
            alt="Culinary Art" 
            className="w-full h-full object-cover brightness-[0.35] grayscale-[15%] opacity-80"
          />
        </motion.div>
        
        <div className="relative z-10 w-full px-6 md:px-12 flex flex-col items-center justify-center text-center mt-20 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="mb-6 md:mb-12 border border-white/20 rounded-full px-6 py-2 backdrop-blur-md"
          >
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#B1C898]">
              🌟 Zlatna Brokula — Najbolje vegansko mjesto
            </span>
          </motion.div>

          <motion.div style={{ y: textY }} className="flex flex-col items-center">
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                className="font-serif text-[18vw] md:text-[14vw] leading-[0.75] text-[#B1C898] tracking-tighter flex items-center justify-center cursor-pointer"
              >
                {['S','I','M','P','L','E'].map((letter, i) => (
                  <motion.span 
                    key={i} 
                    className="inline-block hover:-translate-y-4 md:hover:-translate-y-8 hover:rotate-6 hover:text-white transition-transform duration-300"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <div className="overflow-hidden flex items-end gap-6 mt-2 md:mt-6">
              <motion.h1 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                className="font-serif text-[18vw] md:text-[14vw] leading-[0.75] text-[#B1C898] tracking-tighter italic z-10 flex items-center justify-center cursor-pointer"
              >
                {['G','R','E','E','N','.'].map((letter, i) => (
                  <motion.span 
                    key={i} 
                    className="inline-block hover:-translate-y-4 md:hover:-translate-y-8 hover:rotate-6 hover:text-white transition-transform duration-300"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#F4F1ED] text-xs tracking-widest uppercase font-sans flex flex-col items-center gap-4"
        >
          <motion.span 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll
          </motion.span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#F4F1ED] to-transparent" />
        </motion.div>
      </section>

      {/* Infinite Marquee Delivery Platforms */}
      <section className="relative py-8 bg-[#B1C898] text-[#121A15] border-y border-[#121A15] overflow-hidden flex items-center">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex whitespace-nowrap font-sans font-bold text-sm md:text-base tracking-[0.2em] uppercase"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              <span className="mx-8 hover:italic transition-all duration-300">WOLT</span> ✦
              <span className="mx-8 hover:italic transition-all duration-300">GLOVO</span> ✦
              <span className="mx-8 hover:italic transition-all duration-300 text-outline-dark">BOLT FOOD</span> ✦
              <span className="mx-8 hover:italic transition-all duration-300">DOBARTEK.HR</span> ✦
              <span className="mx-8 hover:italic transition-all duration-300 text-outline-dark">NAŠA DOSTAVA <span className="lowercase normal-case tracking-normal">(Zvati do 10h)</span></span> ✦
            </div>
          ))}
        </motion.div>
      </section>

      {/* Editorial Manifesto */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#F4F1ED] relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 relative">
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-8 sticky top-32"
            >
              ( Naša vibra & vrijednosti )
            </motion.h2>
          </div>
          <div className="md:w-2/3">
            <motion.h3 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="font-serif text-3xl md:text-5xl lg:text-7xl leading-[1.1] text-[#121A15] mb-12"
            >
              Bitan je <span className="text-gray-400 italic">izvor.</span> <br/>
              Bitno je <span className="text-[#B1C898] italic">raspoloženje.</span>
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl"
            >
              <p>
                Hrana je jako važan dio života. Mi vjerujemo da nije važno paziti samo na svježinu i porijeklo namirnice, već i <span className="text-[#121A15] italic">tko je spravlja</span> i u kakvom raspoloženju! 
                Sve to utječe na energiju hrane i njenu blagodat na naše Zdravlje.
              </p>
              <p>
                Upravo zato posvetili smo svoje znanje, kreativnost i iskustvo pripremi zdravog obroka od namirnica uzgojenih isključivo od naših <strong className="text-[#121A15] font-bold">OPG partnera</strong>.
              </p>
            </motion.div>

            {/* Badges / Core Pillars from the site */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-300">
              {[
                { title: "100%", desc: "Vegan" },
                { title: "Low", desc: "Gluten" },
                { title: "Pet", desc: "Friendly" },
                { title: "OPG", desc: "Partneri" }
              ].map((b, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.8 }}
                  className="flex flex-col group cursor-pointer"
                >
                  <span className="font-serif text-3xl lg:text-5xl text-[#121A15] mb-2 group-hover:italic group-hover:text-[#B1C898] transition-all duration-500">{b.title}</span>
                  <span className="font-sans text-xs tracking-widest uppercase text-gray-400 group-hover:text-gray-900 transition-colors">{b.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Pipeline (Animated Timeline) */}
      <section className="py-32 bg-[#121A15] text-[#F4F1ED] overflow-hidden relative">
        <div className="px-6 md:px-12 max-w-6xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="font-serif text-5xl md:text-8xl mb-32 tracking-tight"
          >
            <span className="italic text-outline">Evolucija</span> brenda.
          </motion.h2>
          
          <div className="space-y-32">
            {[
              { year: "2011", title: "Zeleni sok", text: "Dugo se bavimo zdravom hranom. Krenuli smo sa Zelenim sokom i dostavama istog u mnoge domove i urede." },
              { year: "2016", title: "Otvaranje restorana", text: "Restoran otvaramo 2016. godine. Postajemo dom za ručkove u mnogim zagrebačkim uredima, osvajajući nagrade i srca gostiju." },
              { year: "2020", title: "Prva pekarnica", text: "U veljači otvaramo prvu vegansku pekarnicu posvećenu svima koji žele smanjiti unos glutena, a žele kvalitetan i stručno izrađen proizvod." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-24 group relative">
                <div className="w-full md:w-1/3 pt-8 relative overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute top-0 left-0 h-[1px] w-full bg-white/20 origin-left"
                  />
                  <motion.span 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="font-sans font-bold text-[12vw] md:text-[8vw] leading-none text-white/5 group-hover:text-[#B1C898] transition-colors duration-700 block"
                  >
                    {step.year}
                  </motion.span>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="w-full md:w-2/3 md:pt-16"
                >
                  <h4 className="font-serif text-3xl md:text-5xl mb-6 group-hover:italic transition-all duration-500">{step.title}</h4>
                  <p className="font-sans text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">{step.text}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Hover-Reveal Cards */}
      <section className="py-24 bg-[#F4F1ED]">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Restoran", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop" },
              { title: "Pekarnica", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000&auto=format&fit=crop" },
              { title: "Catering", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop" },
              { title: "Edukacija", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop" }
            ].map((svc, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative h-[400px] md:h-[500px] group overflow-hidden bg-[#121A15] cursor-pointer"
              >
                <img 
                  src={svc.img} 
                  alt={svc.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-70 transition-all duration-[1.5s] ease-[0.33,1,0.68,1]" 
                />
                <div className="absolute inset-0 p-12 flex flex-col justify-between pointer-events-none">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-white/50 block">{(i+1).toString().padStart(2, '0')}</span>
                  <h3 className="font-serif text-4xl md:text-5xl text-[#F4F1ED] group-hover:italic group-hover:text-[#B1C898] transition-colors duration-500">
                    {svc.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive Footer with Real Info & Letter Scramble */}
      <footer className="bg-[#121A15] text-[#F4F1ED] pt-24 pb-12 overflow-hidden border-t border-white/10 relative">
        <div className="px-6 md:px-12 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 md:mb-48">
             <motion.div 
               initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
             >
               <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#B1C898] mb-4 block">Naša lokacija</span>
               <address className="font-serif text-2xl md:text-4xl not-italic text-white">
                 Sutlanska 1,<br/> 10000 Zagreb
               </address>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
               className="md:text-right"
             >
               <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#B1C898] mb-4 block">Kontaktirajte nas</span>
               <a href="mailto:simplegreenbyjelena@gmail.com" className="font-serif text-xl md:text-3xl block hover:italic hover:text-[#B1C898] transition-all">simplegreenbyjelena@gmail.com</a>
               <a href="tel:0957001777" className="font-serif text-xl md:text-3xl block hover:italic hover:text-[#B1C898] transition-all mt-4 text-gray-400">095 700 1777</a>
               <p className="font-sans text-gray-600 mt-6 text-xs uppercase tracking-widest">(Pretplatite se na tjedni meni mailom)</p>
             </motion.div>
           </div>

           <div className="flex flex-col items-center justify-center border-b border-white/10 pb-12 md:pb-24 mb-12 text-center group">
             <h2 className="font-serif text-[12vw] md:text-[14vw] leading-[0.8] tracking-tighter cursor-pointer text-[#B1C898] flex items-center justify-center overflow-hidden">
               {['S','I','M','P','L','E'].map((letter, i) => (
                 <motion.span 
                   key={i} 
                   className="inline-block hover:-translate-y-4 hover:rotate-6 hover:text-white transition-transform duration-300"
                 >
                   {letter}
                 </motion.span>
               ))}
             </h2>
             <h2 className="font-serif text-[12vw] md:text-[14vw] leading-[0.8] tracking-tighter cursor-pointer text-outline flex items-center justify-center mt-4">
               {['G','R','E','E','N'].map((letter, i) => (
                 <motion.span 
                   key={i} 
                   className="inline-block hover:-translate-y-4 hover:rotate-6 hover:text-[#B1C898] hover:text-solid transition-all duration-300"
                 >
                   {letter}
                 </motion.span>
               ))}
             </h2>
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-sans text-xs tracking-wider uppercase text-gray-500">
             <div className="flex gap-8">
               <a href="https://www.instagram.com/simplegreenandbake_by_jelena/" target="_blank" className="hover:text-white transition-colors relative overflow-hidden group">
                 <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">Instagram</span>
                 <span className="absolute top-0 left-0 inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-[#B1C898]">Instagram</span>
               </a>
               <a href="https://www.facebook.com/simple-green-by-jelena-778068382333240/" target="_blank" className="hover:text-white transition-colors relative overflow-hidden group">
                 <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">Facebook</span>
                 <span className="absolute top-0 left-0 inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-[#B1C898]">Facebook</span>
               </a>
             </div>
             <div>© 2011-2026 BY SIMPLE GREEN & BAKE</div>
           </div>
        </div>
      </footer>
    </div>
  );
}
