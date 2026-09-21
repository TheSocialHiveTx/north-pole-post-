import React from 'react';
import { PenLine, Stamp, Gift } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: <PenLine className="text-red-700" size={24} />,
      title: 'Share Their Little Wonders',
      description:
        'Tell us your child’s name, hometown, proudest accomplishments, and Christmas wishes. Our North Pole team weaves them into a personal message.',
    },
    {
      number: '2',
      icon: <Stamp className="text-amber-700" size={24} />,
      title: 'Elves Inscribe & Wax-Seal',
      description:
        'Each letter and certificate is carefully printed on aged deckled parchment and finished by hand with an authentic melted red wax or gold foil seal.',
    },
    {
      number: '3',
      icon: <Gift className="text-emerald-700" size={24} />,
      title: 'Discreet Sleigh Delivery',
      description:
        'Shipped in a plain outer envelope directly to parents. Inside is the magical North Pole envelope ready for your child to discover!',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-2">
          <span>✨</span>
          <span>Simple 3-Step Magic</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
          How Santa's Post Office Works
        </h2>
        <p className="text-stone-600 mt-2 text-sm sm:text-base">
          From our Arctic circle workshop to your cozy living room in three easy steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white/80 rounded-2xl border border-amber-200/80 p-6 sm:p-8 relative shadow-sm text-center flex flex-col items-center"
          >
            {/* Step badge */}
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-5 shadow-xs">
              {step.icon}
            </div>

            <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest mb-1">
              Step 0{step.number}
            </div>

            <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
              {step.title}
            </h3>

            <p className="text-stone-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
