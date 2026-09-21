import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { LiveCustomizer } from './components/LiveCustomizer';
import { HowItWorks } from './components/HowItWorks';
import { ParentReviews } from './components/ParentReviews';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SnowEffect } from './components/SnowEffect';
import { CartItem, ProductType } from './types';
import { Sparkles, Shield, Clock, Gift } from 'lucide-react';

export default function App() {
  const [snowEnabled, setSnowEnabled] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('northpole_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [customizerTab, setCustomizerTab] = useState<ProductType>('letter');

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('northpole_cart', JSON.stringify(cartItems));
    } catch {
      // Ignore in private modes
    }
  }, [cartItems]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (itemData: Omit<CartItem, 'id'>) => {
    const newItem: CartItem = {
      ...itemData,
      id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    };
    setCartItems((prev) => [...prev, newItem]);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSelectProductToCustomize = (type: ProductType) => {
    setCustomizerTab(type);
    scrollToSection('customizer-section');
  };

  const totalCartCount = cartItems.reduce((sum, it) => sum + it.quantity, 0);

  return (
    <div className="min-h-screen bg-[#faf7ef] text-stone-800 font-sans flex flex-col relative selection:bg-rose-200 selection:text-rose-900">
      {/* Falling snowflakes overlay */}
      <SnowEffect enabled={snowEnabled} />

      {/* Top Holiday Announcement Ribbon */}
      <div className="bg-red-800 text-amber-100 text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 border-b border-red-900/30">
        <Sparkles size={13} className="text-amber-300" />
        <span>
          <strong>North Pole Dispatch Active:</strong> Orders placed today ship in authentic wax-sealed envelopes!
        </span>
        <span className="hidden sm:inline text-red-300">•</span>
        <span className="hidden sm:inline text-amber-200">
          Free shipping on orders over $20 🎁
        </span>
      </div>

      {/* Navigation Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        snowEnabled={snowEnabled}
        onToggleSnow={() => setSnowEnabled((prev) => !prev)}
        onScrollTo={scrollToSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartCustomizing={() => scrollToSection('customizer-section')}
          onExploreProducts={() => scrollToSection('products-section')}
        />

        {/* Adorable Trust & Magic Highlights Bar */}
        <div className="bg-amber-100/60 border-y border-amber-200/80 py-4 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs font-medium text-stone-700">
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">🕯️</span>
              <span>Authentic Melted Red Wax Seals</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">📜</span>
              <span>Heavy Linen Antique Parchment</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">🤫</span>
              <span>100% Secret Parent Packaging</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">⚡</span>
              <span>Instant Digital PDF Option</span>
            </div>
          </div>
        </div>

        {/* Product Catalog: Santa Letter, Nice List Certificate, Bundle */}
        <ProductCatalog
          onSelectProductToCustomize={handleSelectProductToCustomize}
          onQuickAdd={handleAddToCart}
        />

        {/* Live Interactive Customizer Studio with Real-Time Preview */}
        <LiveCustomizer
          key={customizerTab}
          onAddToCart={handleAddToCart}
          activeTabDefault={customizerTab}
        />

        {/* 3 Simple Steps */}
        <HowItWorks />

        {/* Verified Parent Testimonials */}
        <ParentReviews />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onScrollTo={scrollToSection} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onClearCart={() => setCartItems([])}
      />
    </div>
  );
}
