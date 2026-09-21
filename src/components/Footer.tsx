import React from 'react';
import { Mail, Heart, ShieldCheck, Sparkles } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 px-4 border-t-4 border-red-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center text-xl shadow-md">
                🎅
              </div>
              <span className="font-serif font-black text-2xl text-white tracking-tight">
                The North Pole Post
              </span>
            </div>

            <p className="text-stone-400 text-sm max-w-md leading-relaxed">
              Crafting personalized Santa Claus letters and official North Pole Nice List certificates that turn living rooms into scenes of pure childhood wonder.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300/90 font-medium">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Discreet Parent Packaging Guaranteed — Secrets Safe!</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">
              Explore Workshop
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onScrollTo('products-section')}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  Personalized Letters & Certificates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('customizer-section')}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  Live Interactive Customizer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('how-it-works')}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  How Delivery Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('reviews-section')}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  Parent Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('faq-section')}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  Holiday FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">
              Elf Help Desk
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed mb-3">
              Questions about an order, custom wording, or expedited holiday delivery?
            </p>
            <a
              href="mailto:support@thesocialhivetx.com"
              className="inline-flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 font-semibold"
            >
              <Mail size={14} />
              <span>support@thesocialhivetx.com</span>
            </a>
            <div className="mt-4 text-[11px] text-stone-500 font-mono">
              Arctic Circle Station #02 • North Pole
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} The North Pole Post Co. All holiday magic reserved.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Made with</span>
            <Heart size={12} className="text-red-500 fill-red-500" />
            <span>for little believers everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
