import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle, Sparkles, Printer, Lock, Heart, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playJingleBell } from '../utils/sound';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onClearCart,
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [parentName, setParentName] = useState('Sarah Harrison');
  const [email, setEmail] = useState('parent@example.com');
  const [address, setAddress] = useState('1428 Evergreen Terrace');
  const [city, setCity] = useState('Austin');
  const [state, setState] = useState('TX');
  const [zip, setZip] = useState('78701');
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const hasPhysical = items.some((item) => item.format === 'printed-mail');
  const shippingFee = hasPhysical ? (subtotal >= 20 ? 0 : 3.95) : 0;
  const total = subtotal + shippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    playJingleBell();

    // Trigger colorful confetti celebration!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#dc2626', '#15803d', '#facc15', '#ffffff'],
      });
    } catch {
      // Ignore if unavailable
    }

    const generatedId = `NP-SLEIGH-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('success');
    onClearCart();
  };

  const handlePrintAll = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-amber-200 z-10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition cursor-pointer"
          >
            <X size={20} />
          </button>

          {step === 'details' ? (
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">🛷</span>
                <h3 className="font-serif font-black text-2xl text-stone-900">
                  North Pole Postal Dispatch
                </h3>
              </div>
              <p className="text-stone-500 text-xs sm:text-sm mb-6">
                All letters arrive packed inside a plain, discreet outer mailer addressed to you so the surprise stays completely hidden from curious little eyes!
              </p>

              {/* Order quick overview */}
              <div className="mb-6 p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs space-y-1">
                <div className="font-semibold text-stone-800">
                  Order Items ({items.length}):
                </div>
                {items.map((it) => (
                  <div key={it.id} className="flex justify-between text-stone-600">
                    <span className="truncate max-w-[260px]">{it.quantity}x {it.title}</span>
                    <span className="font-mono font-medium">${(it.price * it.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-amber-200/80 pt-1.5 flex justify-between font-bold text-stone-900">
                  <span>Total Due:</span>
                  <span className="text-red-800">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleSubmitOrder} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g. Sarah Harrison"
                      className="w-full px-3 py-2 rounded-lg border border-stone-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Parent Email for Tracking *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="parent@example.com"
                      className="w-full px-3 py-2 rounded-lg border border-stone-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Shipping Address (Plain Outer Mailer) *
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Cozy Hearth Lane"
                    className="w-full px-3 py-2 rounded-lg border border-stone-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-stone-200 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-stone-200 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      ZIP
                    </label>
                    <input
                      type="text"
                      required
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-stone-200 outline-none"
                    />
                  </div>
                </div>

                {/* Simulated Payment badge */}
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Lock size={14} className="text-emerald-600" />
                    <span>Secure Mock Holiday Checkout</span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-400">
                    TEST MODE • Free Preview
                  </span>
                </div>

                <button
                  type="submit"
                  id="submit-order-btn"
                  className="w-full py-3.5 px-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <Sparkles size={18} />
                  <span>Confirm & Dispatch to Santa's Elves (${total.toFixed(2)})</span>
                </button>
              </form>
            </div>
          ) : (
            /* Order Success State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-3xl shadow-xs">
                ✨
              </div>

              <h3 className="font-serif font-black text-2xl sm:text-3xl text-stone-900">
                Magic is on the Way!
              </h3>

              <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-900 font-mono text-xs font-bold tracking-wider">
                TRACKING: {orderId}
              </div>

              <p className="text-stone-600 text-sm max-w-sm mx-auto leading-relaxed">
                Santa and Head Elf Bernard have received your personalization details! Your keepsake is being prepared with wax seals and scheduled for Arctic post.
              </p>

              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-left text-xs text-stone-700 space-y-1 max-w-sm mx-auto">
                <p>
                  <strong>Recipient:</strong> {parentName}
                </p>
                <p>
                  <strong>Shipping To:</strong> {address}, {city}, {state} {zip}
                </p>
                <p>
                  <strong>Notification sent to:</strong> {email}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handlePrintAll}
                  className="flex items-center justify-center gap-1.5 px-5 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl font-bold text-xs transition cursor-pointer border border-amber-300"
                >
                  <Printer size={15} />
                  <span>Print Receipt / Keepsake</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl font-bold text-xs shadow-xs transition cursor-pointer"
                >
                  Return to Workshop
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
