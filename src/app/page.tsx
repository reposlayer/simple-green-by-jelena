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
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#F4F1ED] font-sans selection:bg-[#B1C898]">
      <CustomCursor />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Avant-Garde Minimal Header */}
      <header className="absolute top-0 left-0 w-full z-40 flex justify-between items-start p-6 md:p-12 mix-blend-difference text-[#F4F1ED]">
        <div className="font-sans font-bold text-xs tracking-[0.2em] uppercase leading-relaxed">
          Est. 2011 <br /> ZG, Croatia <br />
          <span className="text-[#B1C898]">100% Vegan & Low-Gluten</span>
        </div>
        <button 
          onClick={() => setMenuOpen(true)}
          className="font-sans font-bold text-xs tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
        >
          [ Menù ]
        </button>
      </header>

      {/* Cinematic Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#121A15]">
        <motion.div 
          style={{ y: imageY }}
          className="absolute inset-0 w-[100vw] h-[120vh] -top-[10vh] z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2953&auto=format&fit=crop" 
            alt="Culinary Art" 
            className="w-full h-full object-cover brightness-[0.4] grayscale-[10%]"
          />
        </motion.div>
        
        <div className="relative z-10 w-full px-6 md:px-12 flex flex-col items-center justify-center text-center mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-8 border border-white/20 rounded-full px-6 py-2 backdrop-blur-md"
          >
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#B1C898]">
              🌟 Zlatna Brokula — Najbolje vegansko mjesto
            </span>
          </motion.div>

          <motion.div style={{ y: textY }} className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
              className="font-serif text-[15vw] md:text-[12vw] leading-[0.8] text-[#F4F1ED] tracking-tighter"
            >
              SIMPLE
            </motion.h1>
          </motion.div>
          <motion.div style={{ y: textY }} className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
              className="font-serif text-[15vw] md:text-[12vw] leading-[0.8] text-[#F4F1ED] tracking-tighter italic"
            >
              GREEN.
            </motion.h1>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#F4F1ED] text-xs tracking-widest uppercase font-sans flex flex-col items-center gap-4"
        >
          <span>Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#F4F1ED] to-transparent" />
        </motion.div>
      </section>

      {/* Infinite Marquee Delivery Platforms */}
      <section className="relative py-6 bg-[#B1C898] text-[#121A15] border-y border-[#121A15] overflow-hidden flex items-center">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex whitespace-nowrap font-sans font-bold text-sm tracking-[0.2em] uppercase"
        >
          {/* Repeating content for infinite effect */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              <span className="mx-8">WOLT</span> ✦
              <span className="mx-8">GLOVO</span> ✦
              <span className="mx-8">BOLT FOOD</span> ✦
              <span className="mx-8">DOBARTEK.HR</span> ✦
              <span className="mx-8">NAŠA DOSTAVA (Zvati do 10h)</span> ✦
            </div>
          ))}
        </motion.div>
      </section>

      {/* Editorial Manifesto - The specific story of Simple Green */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#F4F1ED] relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="md:w-1/3">
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-8 sticky top-32">
              ( Naša vibra & vrijednosti )
            </h2>
          </div>
          <div className="md:w-2/3">
            <h3 className="font-serif text-3xl md:text-5xl lg:text-7xl leading-[1.1] text-[#121A15] mb-12">
              Bitan je <span className="text-gray-400 italic">izvor.</span> <br/>
              Bitno je <span className="text-[#B1C898] italic">raspoloženje.</span>
            </h3>
            
            <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl">
              <p>
                Hrana je jako važan dio života. Mi vjerujemo da nije važno paziti samo na svježinu i porijeklo namirnice, već i tko je spravlja i u kakvom raspoloženju! 
                Sve to utječe na energiju hrane i njenu blagodat na naše Zdravlje.
              </p>
              <p>
                Upravo zato posvetili smo svoje znanje, kreativnost i iskustvo pripremi zdravog obroka od namirnica uzgojenih isključivo od naših <strong className="text-[#121A15] font-bold">OPG partnera</strong>.
              </p>
            </div>

            {/* Badges / Core Pillars from the site */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-300">
              {[
                { title: "100% Vegan", desc: "Čisto biljno" },
                { title: "Low Gluten", desc: "Pekarnica" },
                { title: "Pet Friendly", desc: "Povedi ljubimca" },
                { title: "OPG Partneri", desc: "Lokalni razvoj" }
              ].map((b, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-2xl lg:text-4xl text-[#121A15] mb-2">{b.title}</span>
                  <span className="font-sans text-xs tracking-widest uppercase text-gray-400">{b.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Pipeline (Timeline) */}
      <section className="py-24 bg-[#121A15] text-[#F4F1ED] overflow-hidden">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-7xl mb-24 tracking-tight"><span className="italic text-[#B1C898]">Evolucija</span> brenda.</h2>
          
          <div className="space-y-32">
            {[
              { year: "2011", title: "Zeleni sok", text: "Dugo se bavimo zdravom hranom. Krenuli smo sa Zelenim sokom i dostavama istog u mnoge domove i urede." },
              { year: "2016", title: "Otvaranje restorana", text: "Restoran otvaramo 2016. godine. Postajemo dom za ručkove u mnogim zagrebačkim uredima, osvajajući nagrade i srca gostiju." },
              { year: "2020", title: "Prva Low Gluten pekarnica", text: "U veljači otvaramo prvu vegansku pekarnicu posvećenu svima koji žele smanjiti unos glutena, a žele kvalitetan i stručno izrađen pekarski proizvod i slasticu." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-24 group">
                <div className="w-full md:w-1/3 border-t border-white/20 pt-8 relative overflow-hidden">
                  <motion.span 
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-sans font-bold text-[8vw] md:text-[5vw] leading-none text-white/10 group-hover:text-[#B1C898] transition-colors duration-500"
                  >
                    {step.year}
                  </motion.span>
                </div>
                <div className="w-full md:w-2/3 md:pt-16">
                  <h4 className="font-serif text-3xl md:text-5xl mb-6">{step.title}</h4>
                  <p className="font-sans text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Form */}
      <section className="py-24 bg-[#F4F1ED]">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-300 border border-gray-300">
            {[
              { title: "Restoran", desc: "Mali veganski restoran posvećen dnevnom ručku." },
              { title: "Pekarnica", desc: "Low-gluten kruh i slastice iz našeg pogona." },
              { title: "Catering", desc: "Zdrave kreacije za vaše privatne i poslovne događaje." },
              { title: "Veganska škola kuhanja", desc: "Naše ekspertize prenosimo vama." }
            ].map((svc, i) => (
              <div key={i} className="bg-[#F4F1ED] p-12 md:p-24 group hover:bg-[#121A15] transition-colors duration-700 cursor-pointer">
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-gray-400 mb-8 block group-hover:text-gray-500">0{i+1}</span>
                <h3 className="font-serif text-3xl md:text-5xl text-[#121A15] group-hover:text-[#F4F1ED] mb-6 transition-colors duration-700">{svc.title}</h3>
                <p className="font-sans text-gray-600 group-hover:text-gray-400 transition-colors duration-700">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Hover Menu (Michelin Star Style) */}
      <section className="py-24 bg-[#121A15] text-[#F4F1ED]">
        <div className="px-6 md:px-12 mb-16 flex justify-between items-end border-b border-white/10 pb-8">
          <h2 className="font-serif text-4xl lg:text-6xl tracking-tight">Vrhunac <br/><span className="text-[#B1C898] italic">Okusa</span></h2>
          <span className="font-sans text-xs tracking-[0.2em] uppercase">Take Out & Dine In</span>
        </div>
        
        <div className="px-6 md:px-12">
          {['Dnevni Menu', 'Kruh bez industrijskog kvasca', 'Sirove Torte', 'Vrhunski Vege Burgeri'].map((item, i) => (
            <motion.div 
              key={i}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative border-b border-white/10 py-10 md:py-16 cursor-pointer flex justify-between items-center"
            >
              <h3 className="font-serif text-3xl md:text-5xl lg:text-7xl text-white/50 group-hover:text-white transition-colors duration-500 z-10 relative pointer-events-none">
                {item}
              </h3>
              <span className="font-sans text-sm md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#B1C898]">Istraži</span>
              
              {/* Image reveal on hover mechanism */}
              <motion.div 
                variants={{
                  rest: { opacity: 0, scale: 0.95, rotate: -2 },
                  hover: { opacity: 0.4, scale: 1, rotate: 0 }
                }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden"
              >
                <img 
                  src={`https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2000&auto=format&fit=crop`} 
                  alt={item}
                  className="w-full h-full object-cover object-center max-h-[300px] mb-12"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Massive Footer with Real Info */}
      <footer className="bg-[#121A15] text-[#F4F1ED] pt-12 pb-12 overflow-hidden border-t border-white/10">
        <div className="px-6 md:px-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
             <div>
               <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#B1C898] mb-4 block">Naša lokacija</span>
               <address className="font-serif text-2xl md:text-4xl not-italic text-white">
                 Sutlanska 1,<br/> 10000 Zagreb
               </address>
             </div>
             <div className="md:text-right">
               <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#B1C898] mb-4 block">Kontaktirajte nas</span>
               <a href="mailto:simplegreenbyjelena@gmail.com" className="font-serif text-2xl md:text-4xl block hover:italic transition-all">simplegreenbyjelena@gmail.com</a>
               <p className="font-sans text-gray-400 mt-4 text-sm uppercase tracking-widest">(Pretplatite se na tjedni meni mailom)</p>
             </div>
           </div>

           <div className="flex flex-col items-center justify-center border-b border-white/10 pb-24 mb-12 text-center">
             <h2 className="font-serif text-[10vw] md:text-[15vw] leading-[0.8] tracking-tighter hover:italic transition-all duration-700 cursor-pointer text-[#B1C898]">
               SIMPLE GREEN.
             </h2>
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-sans text-xs tracking-wider uppercase text-gray-500">
             <div className="flex gap-8">
               <a href="https://www.instagram.com/simplegreenandbake_by_jelena/" target="_blank" className="hover:text-white transition-colors">Instagram</a>
               <a href="https://www.facebook.com/simple-green-by-jelena-778068382333240/" target="_blank" className="hover:text-white transition-colors">Facebook</a>
               <a href="https://www.tripadvisor.com/Restaurant_Review-g294454-d11844934-Reviews-Simple_Green_vegan_raw_cuisine-Zagreb_Central_Croatia.html" target="_blank" className="hover:text-white transition-colors">Trip Advisor</a>
             </div>
             <div>© 2016-2026 BY SIMPLE GREEN & BAKE</div>
           </div>
        </div>
      </footer>
    </div>
  );
}
