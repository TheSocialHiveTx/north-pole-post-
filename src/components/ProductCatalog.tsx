import React from 'react';
import { PRODUCTS } from '../data/mockData';
import { ProductInfo, CartItem, ProductType } from '../types';
import { Check, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { playJingleBell } from '../utils/sound';

interface ProductCatalogProps {
  onSelectProductToCustomize: (type: ProductType) => void;
  onQuickAdd: (item: Omit<CartItem, 'id'>) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProductToCustomize,
  onQuickAdd,
}) => {
  const handleCustomize = (type: ProductType) => {
    playJingleBell();
    onSelectProductToCustomize(type);
  };

  const handleQuickAdd = (product: ProductInfo) => {
    playJingleBell();
    onQuickAdd({
      productId: product.id,
      title: product.title,
      price: product.price,
      type: product.type,
      quantity: 1,
      format: 'printed-mail',
      letterDetails:
        product.type === 'letter' || product.type === 'bundle'
          ? {
              childName: 'My Child',
              ageOrGrade: '7 years old',
              hometown: 'Our Town',
              goodDeed: 'always sharing and being so kind to everyone',
              wishlistGift: 'a special Christmas surprise',
              specialNote: 'Listen for sleigh bells on the roof!',
              templateStyle: 'classic',
              envelopeStyle: 'classic-red',
            }
          : undefined,
      certificateDetails:
        product.type === 'certificate' || product.type === 'bundle'
          ? {
              childName: 'Child Full Name',
              hometown: 'Our Town',
              commendationReason: 'Boundless kindness, cheerful laughter, and great effort in school.',
              registryNumber: `NP-2026-NICE-${Math.floor(1000 + Math.random() * 9000)}`,
              issueDate: 'December 2026',
              sealColor: 'gold',
            }
          : undefined,
    });
  };

  return (
    <section id="products-section" className="py-14 sm:py-20 px-4 bg-amber-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-semibold uppercase tracking-wider mb-2">
            <span>🎁</span>
            <span>Holiday 2026 Collection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-stone-900">
            Our Handcrafted Keepsakes
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base">
            Every piece is printed on heirloom archival parchment, hand-embossed with real wax or gold foil seals, and made with holiday love.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRODUCTS.map((product) => {
            const isFeatured = product.type === 'bundle';

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className={`rounded-3xl border transition-all flex flex-col justify-between overflow-hidden relative ${
                  isFeatured
                    ? 'border-2 border-red-600/80 bg-white shadow-xl ring-2 ring-red-200'
                    : 'border-amber-200 bg-white/90 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Badge */}
                {product.badge && (
                  <div
                    className={`text-xs font-bold uppercase tracking-wider py-1.5 px-4 text-center ${
                      isFeatured
                        ? 'bg-red-700 text-white font-semibold'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {product.badge}
                  </div>
                )}

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-800">
                      {product.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                      {product.title}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-black text-red-800">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-stone-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-xs text-stone-500 ml-auto">
                      Physical or Digital
                    </span>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5 mb-8 flex-1 text-xs sm:text-sm text-stone-700">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="space-y-2.5 pt-4 border-t border-amber-100">
                    <button
                      id={`customize-${product.id}-btn`}
                      onClick={() => handleCustomize(product.type === 'bundle' ? 'letter' : product.type)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition cursor-pointer flex items-center justify-center gap-2 ${
                        isFeatured
                          ? 'bg-red-700 hover:bg-red-800 text-white shadow-md'
                          : 'bg-amber-800 hover:bg-amber-900 text-white'
                      }`}
                    >
                      <Sparkles size={16} />
                      <span>Customize & Preview Live</span>
                      <ArrowRight size={16} />
                    </button>

                    <button
                      id={`quick-add-${product.id}-btn`}
                      onClick={() => handleQuickAdd(product)}
                      className="w-full py-2.5 px-4 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs font-semibold transition cursor-pointer"
                    >
                      Quick Add to Sleigh
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
