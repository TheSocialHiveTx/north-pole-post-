import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Heart } from 'lucide-react';

export const ParentReviews: React.FC = () => {
  return (
    <section id="reviews-section" className="py-16 sm:py-20 px-4 bg-amber-100/40 border-y border-amber-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/80 text-amber-950 text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart size={13} className="text-red-700 fill-red-700" />
            <span>Over 1,200+ Beaming Smiles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Loved by Parents & Believers
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base">
            Read heartwarming stories from families who brought Santa's letter to their mantelpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-amber-200/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic font-serif">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-amber-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-stone-900 block font-serif text-sm">
                    {review.parentName}
                  </span>
                  <span className="text-stone-500">{review.childName}</span>
                </div>
                <span className="text-stone-400 font-mono">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
