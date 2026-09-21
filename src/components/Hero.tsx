import React from 'react';
import { Sparkles, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { playJingleBell } from '../utils/sound';

interface HeroProps {
  onStartCustomizing: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartCustomizing,
  onExploreProducts,
}) => {
  const handleStart = () => {
    playJingleBell();
    onStartCustomizing();
  };

  return (
    <section id="hero-section" className="relative pt-10 pb-16 sm:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-red-900 text-xs sm:text-sm font-semibold tracking-wide">
              <span>❄️</span>
              <span>Official Postal Station • Arctic Circle 99705</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 leading-[1.15] tracking-tight">
              Cherished Keepsakes from{' '}
              <span className="text-red-700 underline decoration-amber-400 decoration-wavy decoration-2">
                Santa's Workshop
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Give your child the irreplaceable magic of holding a real handwritten-style letter from Santa Claus and an official North Pole Nice List diploma, sealed with authentic melted wax and postmarked from the Arctic Circle.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Real Red Wax Monogram</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Personalized Good Deeds</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Discreet Parent Outer Mailer</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                id="hero-customize-btn"
                onClick={handleStart}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-red-700 hover:bg-red-800 text-white font-bold text-base shadow-lg shadow-red-900/25 transition cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <Sparkles size={18} />
                <span>Customize Your Keepsake</span>
                <ArrowRight size={18} />
              </button>

              <button
                id="hero-explore-btn"
                onClick={onExploreProducts}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-amber-50 border border-amber-300/80 text-stone-800 font-semibold text-base shadow-xs transition cursor-pointer"
              >
                View Letters & Certificates
              </button>
            </div>
          </div>

          {/* Right Column: Cute Envelope & Certificate preview visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Back Card: Nice List Diploma peek */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-amber-100 border border-amber-300 p-6 shadow-md transform rotate-4 text-center">
                <div className="font-certificate text-xs tracking-widest text-amber-900 font-bold uppercase">
                  HIGH COUNCIL OF THE NORTH POLE
                </div>
                <div className="font-serif text-lg font-bold text-amber-950 mt-1">
                  Official Nice List Diploma
                </div>
              </div>

              {/* Front Card: Antique Sleigh Mail Envelope */}
              <div className="relative rounded-2xl bg-[#fffdf7] border-2 border-amber-200/90 p-6 shadow-2xl transform -rotate-1 transition hover:rotate-0">
                {/* Envelope Peppermint Edge Accents */}
                <div className="h-1 peppermint-border rounded-t mb-4" />

                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-serif text-[11px] font-bold text-red-900 uppercase block tracking-wider">
                      SANTA CLAUS
                    </span>
                    <span className="text-[10px] text-stone-500 font-serif block">
                      1 Elf Way • North Pole 99705
                    </span>
                  </div>

                  {/* Stamp */}
                  <div className="w-12 h-14 border-2 border-dashed border-red-700/60 bg-red-50/50 rounded flex flex-col items-center justify-center text-center p-1">
                    <span className="text-xs">🎄</span>
                    <span className="text-[8px] font-mono font-bold text-red-800 uppercase">
                      POST 2026
                    </span>
                  </div>
                </div>

                {/* Recipient calligraphy simulation */}
                <div className="my-8 text-center px-4">
                  <span className="font-serif text-[11px] uppercase tracking-widest text-stone-400 block mb-1">
                    DELIVER VIA SPECIAL REINDEER AIR MAIL TO:
                  </span>
                  <div className="font-handwriting text-3xl sm:text-4xl text-stone-800 font-bold tracking-wide">
                    Master Lucas Miller
                  </div>
                  <div className="font-serif text-xs text-stone-600 mt-1">
                    The Cozy Bedroom with the Star Nightlight
                  </div>
                  <div className="font-serif text-xs text-stone-700 font-semibold">
                    Denver, Colorado
                  </div>
                </div>

                {/* Bottom Wax Seal & Stamp */}
                <div className="pt-3 border-t border-amber-100 flex items-center justify-between">
                  <div className="text-[9px] font-mono text-emerald-800 tracking-wider font-semibold uppercase">
                    ★ SEALED AT THE ARCTIC CIRCLE
                  </div>
                  <div className="wax-seal w-12 h-12 rounded-full flex items-center justify-center text-white font-serif font-black shadow-md border border-red-900/30">
                    <span className="text-lg">SC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
