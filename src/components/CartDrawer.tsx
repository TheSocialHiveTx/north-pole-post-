import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { playJingleBell } from '../utils/sound';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const hasPhysical = items.some((item) => item.format === 'printed-mail');
  const shippingFee = hasPhysical ? (subtotal >= 20 ? 0 : 3.95) : 0;
  const total = subtotal + shippingFee;

  const handleProceed = () => {
    playJingleBell();
    onCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-6 border-b border-amber-100 flex items-center justify-between bg-amber-50/60">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center text-sm shadow-xs">
                🛷
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900 leading-none">
                  Santa's Sleigh
                </h3>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  {items.length} {items.length === 1 ? 'item' : 'items'} ready for the workshop
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-amber-100 text-stone-400 hover:text-stone-700 transition cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto text-2xl">
                  🎁
                </div>
                <h4 className="font-serif font-bold text-lg text-stone-800">
                  Santa's Sleigh is Empty
                </h4>
                <p className="text-stone-500 text-xs sm:text-sm max-w-xs mx-auto">
                  Customize a personalized Santa letter or official Nice List certificate to start the holiday magic!
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2.5 bg-red-700 text-white font-semibold text-xs rounded-xl shadow-xs hover:bg-red-800 transition cursor-pointer"
                >
                  Start Customizing
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border border-amber-200/80 bg-amber-50/30 flex gap-3 relative"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-100/80 border border-amber-200 flex items-center justify-center text-xl shrink-0">
                    {item.type === 'letter' ? '🎅' : item.type === 'certificate' ? '📜' : '🎁'}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif font-bold text-sm text-stone-900 truncate">
                      {item.title}
                    </h5>

                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {item.format === 'printed-mail' ? (
                        <span className="text-red-700 font-medium">📫 Heavy Parchment & Wax Seal</span>
                      ) : (
                        <span className="text-emerald-700 font-medium">⚡ Instant Printable Download</span>
                      )}
                    </p>

                    {item.letterDetails?.hometown && (
                      <p className="text-[11px] text-stone-400 italic">
                        To: {item.letterDetails.childName} ({item.letterDetails.hometown})
                      </p>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 border border-stone-200 rounded-lg bg-white px-2 py-0.5 text-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-stone-500 hover:text-stone-900 px-1 cursor-pointer font-bold"
                        >
                          -
                        </button>
                        <span className="font-mono font-bold text-stone-800">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-stone-500 hover:text-stone-900 px-1 cursor-pointer font-bold"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-bold text-sm text-red-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-stone-300 hover:text-red-600 p-1 cursor-pointer self-start"
                    title="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Calculations */}
          {items.length > 0 && (
            <div className="p-6 border-t border-amber-100 bg-amber-50/40 space-y-4">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Keepsakes Subtotal</span>
                  <span className="font-semibold text-stone-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <Truck size={13} className="text-stone-500" />
                    Sleigh Mail Shipping
                  </span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700 font-bold uppercase tracking-wider text-[10px] bg-emerald-100 px-2 py-0.5 rounded-full">
                        FREE
                      </span>
                    ) : (
                      `$${shippingFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                {hasPhysical && subtotal < 20 && (
                  <p className="text-[11px] text-amber-800 font-medium">
                    Add ${(20 - subtotal).toFixed(2)} more for Free Priority Sleigh Mail!
                  </p>
                )}
                <div className="border-t border-amber-200/60 pt-2 flex justify-between text-base font-serif font-black text-stone-900">
                  <span>Total</span>
                  <span className="text-red-800">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                id="drawer-checkout-btn"
                onClick={handleProceed}
                className="w-full py-3.5 px-4 bg-red-700 hover:bg-red-800 active:scale-[0.98] text-white font-bold text-sm rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Proceed to Elf Checkout</span>
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>100% Christmas Wonder Guarantee • Discreet Parent Mailer</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
