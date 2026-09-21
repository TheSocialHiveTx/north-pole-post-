import React from 'react';
import { ShoppingBag, Bell, Snowflake, Sparkles } from 'lucide-react';
import { playJingleBell } from '../utils/sound';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  snowEnabled: boolean;
  onToggleSnow: () => void;
  onScrollTo: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  snowEnabled,
  onToggleSnow,
  onScrollTo,
}) => {
  const handleBellClick = () => {
    playJingleBell();
  };

  return (
    <header className="sticky top-0 z-40 bg-amber-50/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      {/* Peppermint Top Accent Line */}
      <div className="h-1.5 peppermint-border w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onScrollTo('hero-section')}
        >
          <div className="w-11 h-11 rounded-2xl bg-red-700 text-white flex items-center justify-center shadow-md shadow-red-900/20 group-hover:scale-105 transition transform">
            <span className="text-2xl">🎅</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-black text-xl tracking-tight text-red-950">
                The North Pole Post
              </span>
              <span className="inline-block text-xs text-red-600">✦</span>
            </div>
            <p className="text-[11px] font-medium text-amber-900/80 tracking-wide uppercase">
              Santa Letters & Official Nice List
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-700">
          <button
            onClick={() => onScrollTo('products-section')}
            className="hover:text-red-700 transition cursor-pointer"
          >
            Our Keepsakes
          </button>
          <button
            onClick={() => onScrollTo('customizer-section')}
            className="hover:text-red-700 transition cursor-pointer flex items-center gap-1 text-red-800 font-semibold"
          >
            <Sparkles size={14} className="text-amber-500" />
            Live Preview Studio
          </button>
          <button
            onClick={() => onScrollTo('how-it-works')}
            className="hover:text-red-700 transition cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => onScrollTo('reviews-section')}
            className="hover:text-red-700 transition cursor-pointer"
          >
            Reviews
          </button>
          <button
            onClick={() => onScrollTo('faq-section')}
            className="hover:text-red-700 transition cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Interactive Controls & Cart */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Bell Chime Button */}
          <button
            id="bell-chime-btn"
            onClick={handleBellClick}
            title="Ring festive jingle bells!"
            className="w-9 h-9 rounded-full bg-white/80 hover:bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 hover:text-red-700 transition cursor-pointer shadow-xs"
            aria-label="Ring festive jingle bell"
          >
            <Bell size={16} />
          </button>

          {/* Snowfall Toggle */}
          <button
            id="snowfall-toggle-btn"
            onClick={onToggleSnow}
            title={snowEnabled ? 'Pause snowfall' : 'Start gentle snowfall'}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition cursor-pointer shadow-xs ${
              snowEnabled
                ? 'bg-sky-50 border-sky-300 text-sky-700'
                : 'bg-white/80 border-amber-200 text-stone-400 hover:text-stone-700'
            }`}
            aria-label="Toggle snow animation"
          >
            <Snowflake size={16} />
          </button>

          {/* Cart / Sleigh Button */}
          <button
            id="open-cart-btn"
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-3.5 py-2 rounded-xl text-sm font-semibold shadow-md shadow-red-900/20 transition cursor-pointer active:scale-95"
          >
            <ShoppingBag size={17} />
            <span className="hidden sm:inline">Sleigh</span>
            <span className="bg-white text-red-800 text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
