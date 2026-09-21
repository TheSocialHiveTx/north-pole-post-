import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
          <HelpCircle size={14} className="text-amber-700" />
          <span>Parent Questions Answered</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
          Frequently Asked Questions
        </h2>
        <p className="text-stone-600 mt-2 text-sm">
          Everything you need to know about delivery, secret packaging, and personalization.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl border border-amber-200/80 overflow-hidden shadow-xs transition"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-stone-900 hover:text-red-800 transition cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-stone-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-red-700' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-stone-600 text-sm leading-relaxed border-t border-amber-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Support callout box */}
      <div className="mt-10 p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-center text-sm text-stone-700">
        <p className="font-semibold text-stone-900 font-serif text-base mb-1">
          Have a special custom request or question?
        </p>
        <p className="text-stone-600 text-xs sm:text-sm mb-3">
          Our chief elves at Santa's postal station are delighted to help with custom wording, twin packages, or special shipping.
        </p>
        <a
          href="mailto:support@thesocialhivetx.com"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-red-800 hover:text-red-950 underline decoration-red-300"
        >
          <Mail size={14} /> Contact Santa's Elves (support@thesocialhivetx.com)
        </a>
      </div>
    </section>
  );
};
