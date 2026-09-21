import React from 'react';
import { CertificateCustomization } from '../types';
import { Award, ShieldCheck } from 'lucide-react';

interface NiceListCertificatePreviewProps {
  customization: CertificateCustomization;
  isPrintView?: boolean;
}

export const NiceListCertificatePreview: React.FC<NiceListCertificatePreviewProps> = ({
  customization,
  isPrintView = false,
}) => {
  const {
    childName,
    hometown,
    commendationReason,
    registryNumber,
    issueDate,
    sealColor,
  } = customization;

  return (
    <div
      id="nice-list-certificate-card"
      className={`relative mx-auto rounded-xl bg-[#fffdfa] p-6 sm:p-10 text-stone-800 transition-all ${
        isPrintView ? 'printable-area shadow-none border-0' : 'max-w-xl shadow-2xl'
      }`}
      style={{
        boxShadow: isPrintView
          ? 'none'
          : '0 12px 36px -8px rgba(180, 83, 9, 0.2), 0 0 0 1px rgba(217, 119, 6, 0.15)',
      }}
    >
      {/* Ornate Gold & Evergreen Outer Frame */}
      <div className="border-4 border-double border-amber-600/80 p-5 sm:p-7 relative rounded-lg bg-gradient-to-b from-[#fffefc] to-[#faf6ed]">
        {/* Corner Accents */}
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-amber-700 bg-amber-100 rounded-tl flex items-center justify-center text-[10px] text-amber-900 font-bold">
          ✦
        </div>
        <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-amber-700 bg-amber-100 rounded-tr flex items-center justify-center text-[10px] text-amber-900 font-bold">
          ✦
        </div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-amber-700 bg-amber-100 rounded-bl flex items-center justify-center text-[10px] text-amber-900 font-bold">
          ✦
        </div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-amber-700 bg-amber-100 rounded-br flex items-center justify-center text-[10px] text-amber-900 font-bold">
          ✦
        </div>

        {/* Certificate Header */}
        <div className="text-center space-y-1 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-600/30 text-emerald-800 text-[10px] font-bold tracking-widest uppercase mb-1">
            <ShieldCheck size={12} className="text-emerald-700" />
            HIGH COUNCIL OF THE NORTH POLE
          </div>
          <h2 className="font-certificate text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider text-amber-950 uppercase leading-snug">
            Official Nice List
          </h2>
          <p className="font-serif text-xs sm:text-sm tracking-widest text-amber-800 uppercase font-semibold">
            Certificate of Exemplary Good Standing
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-2" />
        </div>

        {/* Proclamation Body */}
        <div className="text-center space-y-4 my-6">
          <p className="font-serif italic text-stone-600 text-xs sm:text-sm">
            Be it known to all elves, reindeer, and holiday observers throughout the world, that
          </p>

          <div className="py-2 border-b-2 border-dashed border-amber-400/80 inline-block px-8 min-w-[280px]">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-red-900 tracking-wide">
              {childName || 'Child’s Full Name'}
            </span>
          </div>

          <p className="font-serif text-xs sm:text-sm text-stone-600">
            residing in the city of{' '}
            <strong className="text-stone-900 font-semibold underline decoration-amber-400">
              {hometown || 'Your Hometown'}
            </strong>
          </p>

          <div className="p-4 rounded-md bg-amber-50/70 border border-amber-200 text-stone-800 font-serif text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            <p className="italic">
              "Has been evaluated by the Department of Good Deeds and is officially recognized for{' '}
              <strong className="text-emerald-950 font-semibold not-italic">
                {commendationReason || 'showing boundless kindness, patience, and a helpful cheerful spirit'}
              </strong>
              . By decree of Santa Claus, their name is hereby inscribed in golden ink upon the Master Nice List."
            </p>
          </div>
        </div>

        {/* Certificate Footer with Dual Signatures and Seal */}
        <div className="mt-8 pt-4 border-t border-amber-900/20 grid grid-cols-3 items-end gap-2 text-center">
          {/* Santa's Signature */}
          <div className="flex flex-col items-center">
            <div className="font-handwriting text-2xl sm:text-3xl text-red-900 font-bold -mb-1">
              Santa Claus
            </div>
            <div className="w-28 h-px bg-stone-400 mb-1" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-semibold">
              Santa Claus
            </span>
            <span className="text-[9px] text-stone-400 italic">North Pole High Overseer</span>
          </div>

          {/* Golden Seal & Ribbon */}
          <div className="flex flex-col items-center justify-center -mb-2 relative">
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex flex-col items-center justify-center text-amber-950 font-bold shadow-lg border-2 border-amber-400/80 z-10 ${
                sealColor === 'crimson'
                  ? 'wax-seal text-white'
                  : sealColor === 'emerald'
                  ? 'bg-gradient-to-br from-emerald-500 to-emerald-800 text-white'
                  : 'gold-seal'
              }`}
            >
              <Award size={18} className="drop-shadow-sm" />
              <span className="text-[8px] tracking-tighter uppercase font-certificate">
                NICE LIST
              </span>
            </div>
            {/* Satin ribbon tails */}
            <div className="flex gap-1.5 -mt-2 z-0">
              <div className="w-3 h-6 bg-red-700 rounded-b shadow-sm transform -rotate-12" />
              <div className="w-3 h-6 bg-red-700 rounded-b shadow-sm transform rotate-12" />
            </div>
          </div>

          {/* Head Elf Signature */}
          <div className="flex flex-col items-center">
            <div className="font-handwriting text-2xl sm:text-3xl text-emerald-900 font-bold -mb-1">
              Elf Bernard
            </div>
            <div className="w-28 h-px bg-stone-400 mb-1" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-semibold">
              Elf Bernard
            </span>
            <span className="text-[9px] text-stone-400 italic">Chief Behavior Registrar</span>
          </div>
        </div>

        {/* Registry & Issue Date Meta */}
        <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-stone-500 pt-2 border-t border-amber-900/10">
          <div>
            REGISTRY NO:{' '}
            <span className="font-bold text-amber-900 tracking-wider">
              {registryNumber || 'NP-2026-NICE-0001'}
            </span>
          </div>
          <div>
            ISSUED:{' '}
            <span className="font-semibold text-stone-700">
              {issueDate || 'Christmas 2026'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
