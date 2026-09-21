import React from 'react';
import { LetterCustomization } from '../types';
import { Sparkles } from 'lucide-react';

interface SantaLetterPreviewProps {
  customization: LetterCustomization;
  isPrintView?: boolean;
}

export const SantaLetterPreview: React.FC<SantaLetterPreviewProps> = ({
  customization,
  isPrintView = false,
}) => {
  const {
    childName,
    ageOrGrade,
    hometown,
    goodDeed,
    wishlistGift,
    specialNote,
    templateStyle,
  } = customization;

  const currentYear = new Date().getFullYear();

  // Template paragraph variations based on style
  const getGreeting = () => {
    if (templateStyle === 'baby-first') {
      return `To my sweetest little friend, ${childName || 'Little One'},`;
    }
    return `Ho! Ho! Ho! Greetings to you, my dear ${childName || 'friend'}!`;
  };

  const getIntroParagraph = () => {
    if (templateStyle === 'baby-first') {
      return `Warmest greetings from the North Pole! The snow is falling softly outside my workshop window, and the elves are singing gentle carols. Mrs. Claus and I were overjoyed to learn about your very first Christmas here in ${hometown || 'your cozy home'}! Even from way up here at the top of the world, we can feel the immense love and laughter you have brought into your family's lives.`;
    }
    if (templateStyle === 'encouragement') {
      return `I am writing to you directly from my cozy oak study here at the North Pole. A roaring fire is crackling in the hearth, and outside, the northern lights are dancing across the snowy pines. I wanted to take a special moment before my big Christmas Eve flight to send you this letter in ${hometown || 'your wonderful town'}.`;
    }
    return `I am writing this special letter to you from my cozy workshop here at the North Pole! The reindeer have just finished their evening flight practice, and the elves are bustling with joy as they put the finishing touches on all the toys. My trusty ledger tells me you are now ${ageOrGrade ? ageOrGrade : 'growing so fast'} and living in ${hometown || 'your lovely hometown'}!`;
  };

  const getBodyParagraph = () => {
    if (templateStyle === 'baby-first') {
      return `My Head Elf Bernard tells me you have been ${goodDeed || 'filling each day with sweet smiles and wonder'}. Every little giggle you share is as pure as freshly fallen winter snow. May your first holiday be full of cozy snuggles, gentle lullabies, and the sweetest dreams.`;
    }
    return `My chief scout elves have sent me wonderful reports about you. They whispered in my ear that you have been doing such a wonderful job with ${goodDeed || 'showing kindness to those around you and always trying your very best'}. It warms my heart so much to see such kindness and goodness in the world—that is the true magic of Christmas!`;
  };

  const getWishlistParagraph = () => {
    if (wishlistGift) {
      return `I also received your Christmas wishlist! The toy elves in Section 4 took special note of ${wishlistGift}. While I always keep a few surprises wrapped in ribbon under the tree, I can promise that the workshop is working hard with extra festive care for you.`;
    }
    return `The elves and I have been preparing delightful holiday surprises for you! Remember to tuck yourself in early on Christmas Eve, listen for the soft chime of sleigh bells in the winter sky, and keep a kind heart all year long.`;
  };

  return (
    <div
      id="santa-letter-card"
      className={`relative mx-auto rounded-xl border border-amber-200/80 bg-[#fdfbf5] p-6 sm:p-10 shadow-xl text-stone-800 transition-all ${
        isPrintView ? 'printable-area shadow-none border-0' : 'max-w-xl'
      }`}
      style={{
        boxShadow: isPrintView
          ? 'none'
          : '0 10px 30px -5px rgba(180, 83, 9, 0.15), 0 0 0 1px rgba(217, 119, 6, 0.1)',
      }}
    >
      {/* Decorative Holly & Vintage Header */}
      <div className="flex items-start justify-between border-b border-amber-900/15 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-red-700/60 flex items-center justify-center bg-red-50 text-red-700">
            <span className="text-xl">🎅</span>
          </div>
          <div>
            <span className="block font-certificate text-xs tracking-widest text-red-800 font-bold uppercase">
              The North Pole Post
            </span>
            <span className="block font-serif text-[11px] text-stone-500 italic">
              Official Desk of Santa Claus • Arctic Circle 99705
            </span>
          </div>
        </div>

        {/* Vintage Postmark Stamp */}
        <div className="border border-stone-400/80 rounded-full px-3 py-1 text-center rotate-[-6deg] bg-amber-50/50">
          <div className="text-[9px] font-mono tracking-wider text-stone-600 uppercase font-semibold">
            NORTH POLE AIR POST
          </div>
          <div className="text-[10px] font-bold text-red-800">
            DEC 24 • {currentYear}
          </div>
          <div className="text-[8px] tracking-widest text-emerald-800 uppercase">
            PRIORITY SLEIGH
          </div>
        </div>
      </div>

      {/* Salutation */}
      <div className="mb-4">
        <h3 className="font-handwriting text-2xl sm:text-3xl text-red-900 font-bold leading-tight">
          {getGreeting()}
        </h3>
      </div>

      {/* Letter Body in readable vintage font with handwriting charm */}
      <div className="space-y-4 font-serif text-[15px] sm:text-[16px] leading-relaxed text-stone-800">
        <p>{getIntroParagraph()}</p>
        <p>{getBodyParagraph()}</p>
        <p>{getWishlistParagraph()}</p>
        {specialNote && (
          <p className="italic bg-amber-100/50 border-l-2 border-amber-600 pl-3 py-1 text-stone-700 text-[14px]">
            "{specialNote}"
          </p>
        )}
        <p>
          Don't forget to leave a little snack for Rudolph and the team—flying around the world makes for hungry reindeer!
        </p>
      </div>

      {/* Sign-off & Signature Area */}
      <div className="mt-8 pt-4 flex items-end justify-between border-t border-amber-900/10">
        <div>
          <p className="font-serif text-sm text-stone-600 italic">With warm holiday love & starlight,</p>
          <div className="font-handwriting text-3xl sm:text-4xl text-red-900 font-bold mt-1 tracking-wide">
            Santa Claus
          </div>
          <p className="text-[11px] font-serif text-stone-500 mt-0.5">
            & Mrs. Claus, Rudolph & All the North Pole Elves
          </p>
        </div>

        {/* Embossed Wax Seal */}
        <div className="flex flex-col items-center">
          <div className="wax-seal w-14 h-14 rounded-full flex items-center justify-center text-white font-serif font-black shadow-lg transform rotate-6 border border-red-900/40">
            <span className="text-xl tracking-tighter drop-shadow-md">SC</span>
          </div>
          <span className="text-[9px] uppercase font-mono tracking-widest text-stone-400 mt-1 font-semibold">
            Official Seal
          </span>
        </div>
      </div>

      {/* Watermark badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] text-stone-900">
        <Sparkles size={280} />
      </div>
    </div>
  );
};
