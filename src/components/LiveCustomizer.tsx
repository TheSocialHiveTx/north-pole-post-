import React, { useState } from 'react';
import { LetterCustomization, CertificateCustomization, ProductType, CartItem } from '../types';
import { PRESET_EXAMPLES } from '../data/mockData';
import { SantaLetterPreview } from './SantaLetterPreview';
import { NiceListCertificatePreview } from './NiceListCertificatePreview';
import { Sparkles, Printer, ShoppingBag, Wand2, Check, RefreshCw } from 'lucide-react';
import { playJingleBell } from '../utils/sound';

interface LiveCustomizerProps {
  onAddToCart: (item: Omit<CartItem, 'id'>) => void;
  activeTabDefault?: ProductType;
}

export const LiveCustomizer: React.FC<LiveCustomizerProps> = ({
  onAddToCart,
  activeTabDefault = 'letter',
}) => {
  const [activeTab, setActiveTab] = useState<ProductType>(activeTabDefault);
  const [addedToast, setAddedToast] = useState(false);
  const [formatChoice, setFormatChoice] = useState<'printed-mail' | 'digital-download'>('printed-mail');

  // Letter customization state
  const [letterData, setLetterData] = useState<LetterCustomization>(
    PRESET_EXAMPLES[0].letter
  );

  // Certificate customization state
  const [certData, setCertData] = useState<CertificateCustomization>(
    PRESET_EXAMPLES[0].certificate
  );

  const applyPreset = (index: number) => {
    playJingleBell();
    const preset = PRESET_EXAMPLES[index];
    setLetterData({ ...preset.letter });
    setCertData({ ...preset.certificate });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAddToCart = () => {
    playJingleBell();
    if (activeTab === 'letter') {
      const price = formatChoice === 'printed-mail' ? 12.95 : 8.95;
      onAddToCart({
        productId: 'santa-letter',
        title: `Santa Letter for ${letterData.childName || 'Child'}`,
        price,
        type: 'letter',
        letterDetails: { ...letterData },
        quantity: 1,
        format: formatChoice,
      });
    } else {
      const price = formatChoice === 'printed-mail' ? 14.95 : 9.95;
      onAddToCart({
        productId: 'nice-list-cert',
        title: `Nice List Certificate for ${certData.childName || 'Child'}`,
        price,
        type: 'certificate',
        certificateDetails: { ...certData },
        quantity: 1,
        format: formatChoice,
      });
    }

    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2800);
  };

  return (
    <section id="customizer-section" className="py-12 sm:py-16 px-4 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles size={14} className="text-amber-600" />
          Interactive North Pole Workshop
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
          Customize & Preview Your Keepsake
        </h2>
        <p className="text-stone-600 mt-2 text-sm sm:text-base">
          Type in your child's details below and watch their official North Pole letter and Nice List certificate come to life in real time.
        </p>

        {/* Quick Presets for instant fun */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
            <Wand2 size={13} /> Try quick examples:
          </span>
          {PRESET_EXAMPLES.map((preset, idx) => (
            <button
              key={idx}
              id={`preset-btn-${idx}`}
              onClick={() => applyPreset(idx)}
              className="px-3 py-1 text-xs rounded-full border border-amber-300 bg-white/80 hover:bg-amber-50 hover:border-amber-400 text-stone-700 transition font-medium cursor-pointer shadow-sm"
            >
              {preset.label.split('–')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs for switching between Letter and Certificate */}
      <div className="flex justify-center mb-8">
        <div className="bg-amber-100/70 p-1.5 rounded-2xl flex gap-2 border border-amber-200">
          <button
            id="tab-letter-btn"
            onClick={() => setActiveTab('letter')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
              activeTab === 'letter'
                ? 'bg-red-700 text-white shadow-md font-semibold'
                : 'text-stone-700 hover:text-stone-900 hover:bg-white/60'
            }`}
          >
            <span>🎅</span>
            <span>Personalized Santa Letter</span>
          </button>
          <button
            id="tab-cert-btn"
            onClick={() => setActiveTab('certificate')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
              activeTab === 'certificate'
                ? 'bg-amber-700 text-white shadow-md font-semibold'
                : 'text-stone-700 hover:text-stone-900 hover:bg-white/60'
            }`}
          >
            <span>📜</span>
            <span>Official Nice List Certificate</span>
          </button>
        </div>
      </div>

      {/* Grid: Editor Form on the Left, Live Document on the Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Controls */}
        <div className="lg:col-span-5 bg-white/90 rounded-2xl border border-amber-200/80 p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-amber-100 pb-3 mb-5">
            <h3 className="font-serif font-bold text-lg text-stone-800">
              {activeTab === 'letter' ? "Personalize Santa's Letter" : "Official Registry Details"}
            </h3>
            <span className="text-xs text-stone-400 font-mono">Live Sync</span>
          </div>

          {activeTab === 'letter' ? (
            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Child's First Name or Nickname *
                </label>
                <input
                  type="text"
                  id="input-letter-child-name"
                  value={letterData.childName}
                  onChange={(e) => setLetterData({ ...letterData, childName: e.target.value })}
                  placeholder="e.g. Emma"
                  className="w-full px-3.5 py-2 rounded-lg border border-amber-300/80 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none bg-amber-50/20 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Age or Grade
                  </label>
                  <input
                    type="text"
                    id="input-letter-age"
                    value={letterData.ageOrGrade}
                    onChange={(e) => setLetterData({ ...letterData, ageOrGrade: e.target.value })}
                    placeholder="e.g. 7 years old"
                    className="w-full px-3 py-2 rounded-lg border border-amber-300/80 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none bg-amber-50/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Hometown / City *
                  </label>
                  <input
                    type="text"
                    id="input-letter-hometown"
                    value={letterData.hometown}
                    onChange={(e) => setLetterData({ ...letterData, hometown: e.target.value })}
                    placeholder="e.g. Austin, Texas"
                    className="w-full px-3 py-2 rounded-lg border border-amber-300/80 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none bg-amber-50/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Good Deed or Accomplishment *
                </label>
                <textarea
                  rows={2}
                  id="input-letter-good-deed"
                  value={letterData.goodDeed}
                  onChange={(e) => setLetterData({ ...letterData, goodDeed: e.target.value })}
                  placeholder="e.g. helping little brother learn to ride a bike and being kind to pets"
                  className="w-full px-3 py-2 rounded-lg border border-amber-300/80 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none bg-amber-50/20 text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Mention a Wishlist Gift (Optional)
                </label>
                <input
                  type="text"
                  id="input-letter-wishlist"
                  value={letterData.wishlistGift}
                  onChange={(e) => setLetterData({ ...letterData, wishlistGift: e.target.value })}
                  placeholder="e.g. the art watercolor set with colored pencils"
                  className="w-full px-3 py-2 rounded-lg border border-amber-300/80 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none bg-amber-50/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Santa's Special Postscript Note (Optional)
                </label>
                <input
                  type="text"
                  id="input-letter-special-note"
                  value={letterData.specialNote}
                  onChange={(e) => setLetterData({ ...letterData, specialNote: e.target.value })}
                  placeholder="e.g. Rudolph sends an extra nuzzle to Barnaby the puppy!"
                  className="w-full px-3 py-2 rounded-lg border border-amber-300/80 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none bg-amber-50/20 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Letter Style Tone
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setLetterData({ ...letterData, templateStyle: 'classic' })}
                    className={`py-2 px-1 rounded-lg border text-center transition cursor-pointer ${
                      letterData.templateStyle === 'classic'
                        ? 'bg-red-50 border-red-600 text-red-900 font-bold'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    Classic Magic
                  </button>
                  <button
                    type="button"
                    onClick={() => setLetterData({ ...letterData, templateStyle: 'encouragement' })}
                    className={`py-2 px-1 rounded-lg border text-center transition cursor-pointer ${
                      letterData.templateStyle === 'encouragement'
                        ? 'bg-red-50 border-red-600 text-red-900 font-bold'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    Encouragement
                  </button>
                  <button
                    type="button"
                    onClick={() => setLetterData({ ...letterData, templateStyle: 'baby-first' })}
                    className={`py-2 px-1 rounded-lg border text-center transition cursor-pointer ${
                      letterData.templateStyle === 'baby-first'
                        ? 'bg-red-50 border-red-600 text-red-900 font-bold'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    Baby's 1st
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Full Name to Inscribe on Certificate *
                </label>
                <input
                  type="text"
                  id="input-cert-child-name"
                  value={certData.childName}
                  onChange={(e) => setCertData({ ...certData, childName: e.target.value })}
                  placeholder="e.g. Emma Rose Harrison"
                  className="w-full px-3.5 py-2 rounded-lg border border-amber-300/80 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none bg-amber-50/20 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  City / State or Country *
                </label>
                <input
                  type="text"
                  id="input-cert-hometown"
                  value={certData.hometown}
                  onChange={(e) => setCertData({ ...certData, hometown: e.target.value })}
                  placeholder="e.g. Austin, Texas"
                  className="w-full px-3 py-2 rounded-lg border border-amber-300/80 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none bg-amber-50/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Official Commendation Reason *
                </label>
                <textarea
                  rows={3}
                  id="input-cert-reason"
                  value={certData.commendationReason}
                  onChange={(e) => setCertData({ ...certData, commendationReason: e.target.value })}
                  placeholder="e.g. Demonstrating immense kindness to friends, practicing reading every night, and bringing joy to the home."
                  className="w-full px-3 py-2 rounded-lg border border-amber-300/80 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none bg-amber-50/20 text-xs sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Registry Number
                  </label>
                  <input
                    type="text"
                    id="input-cert-registry"
                    value={certData.registryNumber}
                    onChange={(e) => setCertData({ ...certData, registryNumber: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-amber-300/80 bg-stone-50 font-mono text-xs text-stone-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Seal Color
                  </label>
                  <select
                    id="input-cert-seal-color"
                    value={certData.sealColor}
                    onChange={(e) =>
                      setCertData({
                        ...certData,
                        sealColor: e.target.value as 'gold' | 'crimson' | 'emerald',
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-amber-300/80 bg-amber-50/20 text-xs cursor-pointer"
                  >
                    <option value="gold">Embossed Gold Foil</option>
                    <option value="crimson">Crimson Red Wax</option>
                    <option value="emerald">Evergreen Emerald</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Format selection: Physical keepsake mail vs Digital Instant */}
          <div className="mt-6 pt-4 border-t border-amber-100">
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
              Choose Delivery Format:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFormatChoice('printed-mail')}
                className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col ${
                  formatChoice === 'printed-mail'
                    ? 'border-red-600 bg-red-50/70 text-red-950 font-semibold ring-1 ring-red-500'
                    : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span className="text-xs flex items-center gap-1">
                  📫 <strong>Physical Keepsake Mail</strong>
                </span>
                <span className="text-[11px] text-stone-500 mt-0.5">
                  Heavy parchment + real wax seal
                </span>
                <span className="text-xs font-bold text-red-700 mt-1">
                  {activeTab === 'letter' ? '$12.95' : '$14.95'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFormatChoice('digital-download')}
                className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col ${
                  formatChoice === 'digital-download'
                    ? 'border-red-600 bg-red-50/70 text-red-950 font-semibold ring-1 ring-red-500'
                    : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span className="text-xs flex items-center gap-1">
                  ⚡ <strong>Digital Print-at-Home</strong>
                </span>
                <span className="text-[11px] text-stone-500 mt-0.5">
                  High-Res 300 DPI PDF
                </span>
                <span className="text-xs font-bold text-red-700 mt-1">
                  {activeTab === 'letter' ? '$8.95' : '$9.95'}
                </span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              id="add-customized-cart-btn"
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 active:scale-[0.98] text-white py-3 px-5 rounded-xl font-bold text-sm shadow-md transition cursor-pointer"
            >
              {addedToast ? (
                <>
                  <Check size={18} className="text-emerald-300" />
                  <span>Added to Sleigh!</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={18} />
                  <span>Add Customized {activeTab === 'letter' ? 'Letter' : 'Certificate'}</span>
                </>
              )}
            </button>

            <button
              id="print-sample-btn"
              onClick={handlePrint}
              title="Print high-res sample preview directly"
              className="flex items-center justify-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-900 py-3 px-4 rounded-xl font-semibold text-sm transition cursor-pointer border border-amber-300/80"
            >
              <Printer size={16} />
              <span>Print Preview</span>
            </button>
          </div>
        </div>

        {/* Right Live Document Preview */}
        <div className="lg:col-span-7">
          <div className="bg-amber-100/40 rounded-2xl p-4 sm:p-6 border border-amber-200/80">
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Keepsake Preview
              </span>
              <span className="text-[11px] text-stone-500 bg-white/70 px-2.5 py-0.5 rounded-full border border-amber-200">
                100% Guaranteed Smile
              </span>
            </div>

            {/* Document Render */}
            <div className="overflow-x-auto py-2">
              {activeTab === 'letter' ? (
                <SantaLetterPreview customization={letterData} />
              ) : (
                <NiceListCertificatePreview customization={certData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
