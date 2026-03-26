"use client";

import { motion, AnimatePresence } from 'framer-motion';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-50 bg-[#121A15] text-[#F4F1ED] flex flex-col justify-center px-6 md:px-24"
        >
          <div className="absolute top-6 md:top-12 right-6 md:right-12">
            <button 
              onClick={onClose}
              className="font-sans font-bold text-xs tracking-[0.2em] uppercase hover:text-[#B1C898] transition-colors"
            >
              [ Zatvori ]
            </button>
          </div>

          <div className="flex flex-col gap-4 md:gap-8">
            {['Naša Priča', 'Jelovnik', 'Edukacije', 'Kontakt'].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1), duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                className="overflow-hidden"
              >
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); onClose(); }}
                  className="font-serif text-5xl md:text-8xl hover:italic hover:text-[#B1C898] transition-all duration-500 inline-block"
                >
                  {item}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 left-6 md:left-24 flex gap-12 font-sans text-xs tracking-widest uppercase text-gray-500"
          >
            <div>Sutlanska 1, Zagreb</div>
            <a href="tel:0957001777" className="hover:text-[#B1C898] transition-colors">095 700 1777</a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
