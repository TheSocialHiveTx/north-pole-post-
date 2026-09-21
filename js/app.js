/* ============================================================
   North Pole Post – Vanilla JS App (no build step)
   ============================================================ */

// ─────────────────────────────────────────────
// SVG ICON HELPERS
// ─────────────────────────────────────────────
const icons = {
  sparkles: (size=16,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>`,
  shoppingBag: (size=16,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  bell: (size=16,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  snowflake: (size=16,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/><path d="m20 16-4-4 4-4"/><path d="m4 8 4 4-4 4"/><path d="m16 4-4 4-4-4"/><path d="m8 20 4-4 4 4"/></svg>`,
  arrowRight: (size=16,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  check: (size=16,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><polyline points="20 6 9 11 4 16"/></svg>`,
  checkCircle2: (size=16,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  checkCircle: (size=16,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  x: (size=20,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  trash2: (size=15,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  truck: (size=13,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11v14"/><rect width="7" height="10" x="14" y="7" rx="1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
  shieldCheck: (size=13,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`,
  lock: (size=14,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  printer: (size=16,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>`,
  heart: (size=12,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  star: (size=16,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  mail: (size=14,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  wand2: (size=13,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>`,
  chevronDown: (size=18,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="m6 9 6 6 6-6"/></svg>`,
  helpCircle: (size=14,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
  award: (size=18,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  penLine: (size=24,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 19.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>`,
  stamp: (size=24,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M 5 22 h14"/><path d="M19 22V11c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v11"/><path d="M 9 9 V5 a3 3 0 0 1 6 0v4"/></svg>`,
  gift: (size=24,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>`,
  refreshCw: (size=14,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
  arrowLeft: (size=16,cls='')=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'santa-letter',
    title: 'Personalized Santa Letter',
    subtitle: 'From Santa\'s Private North Pole Study',
    price: 12.95,
    originalPrice: 15.95,
    type: 'letter',
    badge: 'Holiday Classic',
    description: 'A bespoke handwritten-style letter crafted on aged heavy parchment, personalized with your child\'s good deeds, hometown, and Christmas wish.',
    features: [
      'Authentic aged parchment with deckled edges',
      'Hand-stamped North Pole Postmark & Holly stamp',
      'Real embossed red wax seal with "SC" monogram',
      'Mentions your child\'s hometown, best friend or pet, & good deeds',
      'Personal message handwritten by Santa Claus'
    ]
  },
  {
    id: 'nice-list-cert',
    title: 'Official "Nice List" Certificate',
    subtitle: 'High Council of the North Pole Diploma',
    price: 14.95,
    originalPrice: 18.00,
    type: 'certificate',
    badge: 'Official Keepsake',
    description: 'The golden decree officially declaring your child on Santa\'s Good Behavior Registry. Features formal parchment, gold foil seal, and dual signatures.',
    features: [
      'Heavy 120lb antique cream linen cardstock',
      'Gleaming embossed gold foil seal & crimson ribbon',
      'Signed by Santa Claus & Head Elf Bernard',
      'Unique official registry tracking number',
      'Honors their specific act of bravery, kindness, or growth'
    ]
  },
  {
    id: 'magical-bundle',
    title: 'The North Pole Magic Bundle',
    subtitle: 'Letter + Nice List Certificate + Extras',
    price: 21.95,
    originalPrice: 28.95,
    type: 'bundle',
    badge: 'Most Loved ★ Save 25%',
    description: 'The ultimate Christmas Eve surprise. Includes both the personalized letter and official nice list certificate, plus magical reindeer food!',
    features: [
      'Both Personalized Santa Letter & Nice List Certificate',
      'Official North Pole Postal envelope with custom calligraphy',
      'Bonus: Magic Reindeer Food packet & sprinkle tag',
      'Bonus: "Good Conduct" Elf inspector report card',
      'Free priority sleigh mail packaging'
    ]
  }
];

const PRESET_EXAMPLES = [
  {
    label: 'Emma (Age 7) – Big Sister & Kind Friend',
    letter: {
      childName: 'Emma', ageOrGrade: '7 years old (2nd grade)', hometown: 'Austin, Texas',
      goodDeed: 'helping your little brother Tommy learn to tie his shoes and being so kind to your new classmate Sofia',
      wishlistGift: 'that art kit with watercolor pencils and the fuzzy plush bunny',
      specialNote: 'Rudolph whispered that you left carrots for the reindeer last year. They still talk about it!',
      templateStyle: 'classic', envelopeStyle: 'classic-red'
    },
    certificate: {
      childName: 'Emma Rose Harrison', hometown: 'Austin, Texas',
      commendationReason: 'Exceptional kindness as a loving big sister, sharing toys selflessly, and practicing her reading with patience every evening.',
      registryNumber: 'NP-2026-NICE-8842', issueDate: 'December 2026', sealColor: 'gold'
    }
  },
  {
    label: 'Lucas (Age 5) – Brave Helper',
    letter: {
      childName: 'Lucas', ageOrGrade: '5 years old', hometown: 'Denver, Colorado',
      goodDeed: 'cleaning up all your building blocks without being asked and being so brave at the dentist',
      wishlistGift: 'the bright blue race car track set',
      specialNote: 'Mrs. Claus and I loved the colorful drawing of the sleigh you made! It is on our kitchen fridge.',
      templateStyle: 'encouragement', envelopeStyle: 'vintage-kraft'
    },
    certificate: {
      childName: 'Lucas Alexander Miller', hometown: 'Denver, Colorado',
      commendationReason: 'Courageous heart, exemplary manners at dinner, and always giving warm bedtime hugs to mom and dad.',
      registryNumber: 'NP-2026-NICE-9104', issueDate: 'December 2026', sealColor: 'emerald'
    }
  },
  {
    label: 'Baby Maya – Baby\'s First Christmas',
    letter: {
      childName: 'Baby Maya', ageOrGrade: '9 months old', hometown: 'Chicago, Illinois',
      goodDeed: 'bringing so much pure joy and giggles to your entire family with your sweetest gummy smile',
      wishlistGift: 'cozy warm fleece booties and a musical chime rattle',
      specialNote: 'Welcome to the wonder of Christmas! May your first holiday season be filled with gentle warmth and lullabies.',
      templateStyle: 'baby-first', envelopeStyle: 'frost-white'
    },
    certificate: {
      childName: 'Maya Joy Bennett', hometown: 'Chicago, Illinois',
      commendationReason: 'Being the brightest new star in her family, filling every room with happy coos and magical first-year wonder.',
      registryNumber: 'NP-2026-BABY-0192', issueDate: 'December 2026', sealColor: 'crimson'
    }
  }
];

const TESTIMONIALS = [
  { id:'rev-1', parentName:'Sarah M.', location:'Dallas, TX', childName:'Mom of Harper (6)', rating:5, text:'My daughter gasped when she saw the real red wax seal and her own name with her hometown in Texas! The paper feels genuinely old and magical. She made us frame the Nice List certificate immediately.', date:'Last Christmas' },
  { id:'rev-2', parentName:'David & Claire K.', location:'Seattle, WA', childName:'Parents of twins Oliver & Leo (8)', rating:5, text:'The personalization is so thoughtful. Santa knew about how they helped walk our golden retriever Barnaby. The quality of the cardstock and the gold seal blew us away.', date:'Last Christmas' },
  { id:'rev-3', parentName:'Elena R.', location:'Raleigh, NC', childName:'Mom of Theo (4)', rating:5, text:'Ordered the bundle with reindeer food and letter. Such an adorable memory to tuck away in his childhood keepsake box. Highly recommend!', date:'Last Christmas' }
];

const FAQS = [
  { category:'general', question:'How do you customize each letter and certificate?', answer:'When you place your order or use our live previewer, you provide your child\'s name, hometown, accomplishments, and a special note. Every letter is individually formatted with authentic vintage typography, North Pole postal markings, and genuine wax seals.' },
  { category:'personalization', question:'Can I write a letter for multiple siblings or a classroom?', answer:'Yes! You can customize separate letters for each child to honor their distinct personalities, or customize a shared family letter addressed to all siblings together.' },
  { category:'shipping', question:'How will the package arrive so the secret is safe?', answer:'All physical orders arrive packaged inside a discreet, plain outer mailer addressed to the parent. Inside, you will find the finished Santa letter inside its authentic North Pole stamped and wax-sealed envelope, ready for you to place by the fireplace, under the tree, or in your mailbox!' },
  { category:'shipping', question:'Do you offer instant digital printable downloads?', answer:'Yes! If you are short on time or love crafting at home, select the "Digital Keepsake Download" option. You get instant access to print high-resolution 300 DPI copies right from your home printer.' },
  { category:'personalization', question:'What age group is this magical for?', answer:'Our templates are tailored for every age: from sweet "Baby\'s First Christmas" keepsakes for nursery memory books, to wonder-filled letters for toddlers and kids aged 3–11, and gentle heartfelt encouragement for older kids.' }
];

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let cartItems = [];
let snowEnabled = true;
let customizerTab = 'letter'; // 'letter' | 'certificate'
let formatChoice = 'printed-mail';
let addedToast = false;
let addedToastTimer = null;
let openFaqIndex = 0;
let checkoutStep = 'details'; // 'details' | 'success'
let checkoutOrderId = '';

// letter customization state
let letterData = { ...PRESET_EXAMPLES[0].letter };
// certificate customization state
let certData = { ...PRESET_EXAMPLES[0].certificate };

// checkout form state
let co = { parentName: 'Sarah Harrison', email: 'parent@example.com', address: '1428 Evergreen Terrace', city: 'Austin', state: 'TX', zip: '78701' };

// Load cart from localStorage
try {
  const saved = localStorage.getItem('northpole_cart');
  if (saved) cartItems = JSON.parse(saved);
} catch {}

function saveCart() {
  try { localStorage.setItem('northpole_cart', JSON.stringify(cartItems)); } catch {}
}

// ─────────────────────────────────────────────
// SOUND
// ─────────────────────────────────────────────
function playJingleBell() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const frequencies = [1318.51, 1567.98, 2093.0];
    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      const startTime = ctx.currentTime + idx * 0.08;
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.12, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.65);
    });
  } catch {}
}

// ─────────────────────────────────────────────
// SCROLL HELPER
// ─────────────────────────────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ─────────────────────────────────────────────
// SNOW EFFECT
// ─────────────────────────────────────────────
const snowFlakes = Array.from({ length: 36 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: Math.random() * 8 + 4,
  duration: Math.random() * 8 + 7,
  delay: Math.random() * 6,
  opacity: Math.random() * 0.5 + 0.3,
}));

function renderSnow() {
  const container = document.getElementById('snow-container');
  if (!container) return;
  if (!snowEnabled) { container.innerHTML = ''; return; }
  container.innerHTML = snowFlakes.map(f =>
    `<div class="snowflake" style="left:${f.left}%;width:${f.size}px;height:${f.size}px;opacity:${f.opacity};animation-duration:${f.duration}s;animation-delay:${f.delay}s;"></div>`
  ).join('');
}

function toggleSnow() {
  snowEnabled = !snowEnabled;
  renderSnow();
  updateSnowButton();
}

function updateSnowButton() {
  const btn = document.getElementById('snowfall-toggle-btn');
  if (!btn) return;
  if (snowEnabled) {
    btn.className = 'w-9 h-9 rounded-full border flex items-center justify-center transition cursor-pointer shadow-xs bg-sky-50 border-sky-300 text-sky-700';
    btn.title = 'Pause snowfall';
  } else {
    btn.className = 'w-9 h-9 rounded-full border flex items-center justify-center transition cursor-pointer shadow-xs bg-white/80 border-amber-200 text-stone-400 hover:text-stone-700';
    btn.title = 'Start gentle snowfall';
  }
}

// ─────────────────────────────────────────────
// CART
// ─────────────────────────────────────────────
function addToCart(itemData) {
  const newItem = { ...itemData, id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}` };
  cartItems.push(newItem);
  saveCart();
  updateCartBadge();
}

function updateQuantity(id, delta) {
  cartItems = cartItems.flatMap(item => {
    if (item.id !== id) return [item];
    const next = item.quantity + delta;
    return next > 0 ? [{ ...item, quantity: next }] : [];
  });
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function removeItem(id) {
  cartItems = cartItems.filter(item => item.id !== id);
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function updateCartBadge() {
  const total = cartItems.reduce((s, i) => s + i.quantity, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = total;
}

function cartSubtotal() { return cartItems.reduce((s, i) => s + i.price * i.quantity, 0); }
function cartHasPhysical() { return cartItems.some(i => i.format === 'printed-mail'); }
function cartShipping() { const sub = cartSubtotal(); return cartHasPhysical() ? (sub >= 20 ? 0 : 3.95) : 0; }
function cartTotal() { return cartSubtotal() + cartShipping(); }

// ─────────────────────────────────────────────
// SANTA LETTER PREVIEW HTML
// ─────────────────────────────────────────────
function getLetterGreeting(d) {
  if (d.templateStyle === 'baby-first') return `To my sweetest little friend, ${d.childName || 'Little One'},`;
  return `Ho! Ho! Ho! Greetings to you, my dear ${d.childName || 'friend'}!`;
}

function getLetterIntro(d) {
  if (d.templateStyle === 'baby-first')
    return `Warmest greetings from the North Pole! The snow is falling softly outside my workshop window, and the elves are singing gentle carols. Mrs. Claus and I were overjoyed to learn about your very first Christmas here in ${d.hometown || 'your cozy home'}! Even from way up here at the top of the world, we can feel the immense love and laughter you have brought into your family's lives.`;
  if (d.templateStyle === 'encouragement')
    return `I am writing to you directly from my cozy oak study here at the North Pole. A roaring fire is crackling in the hearth, and outside, the northern lights are dancing across the snowy pines. I wanted to take a special moment before my big Christmas Eve flight to send you this letter in ${d.hometown || 'your wonderful town'}.`;
  return `I am writing this special letter to you from my cozy workshop here at the North Pole! The reindeer have just finished their evening flight practice, and the elves are bustling with joy as they put the finishing touches on all the toys. My trusty ledger tells me you are now ${d.ageOrGrade ? d.ageOrGrade : 'growing so fast'} and living in ${d.hometown || 'your lovely hometown'}!`;
}

function getLetterBody(d) {
  if (d.templateStyle === 'baby-first')
    return `My Head Elf Bernard tells me you have been ${d.goodDeed || 'filling each day with sweet smiles and wonder'}. Every little giggle you share is as pure as freshly fallen winter snow. May your first holiday be full of cozy snuggles, gentle lullabies, and the sweetest dreams.`;
  return `My chief scout elves have sent me wonderful reports about you. They whispered in my ear that you have been doing such a wonderful job with ${d.goodDeed || 'showing kindness to those around you and always trying your very best'}. It warms my heart so much to see such kindness and goodness in the world—that is the true magic of Christmas!`;
}

function getLetterWishlist(d) {
  if (d.wishlistGift)
    return `I also received your Christmas wishlist! The toy elves in Section 4 took special note of ${d.wishlistGift}. While I always keep a few surprises wrapped in ribbon under the tree, I can promise that the workshop is working hard with extra festive care for you.`;
  return `The elves and I have been preparing delightful holiday surprises for you! Remember to tuck yourself in early on Christmas Eve, listen for the soft chime of sleigh bells in the winter sky, and keep a kind heart all year long.`;
}

function renderSantaLetterPreview(d) {
  const year = new Date().getFullYear();
  return `
  <div id="santa-letter-card" class="relative mx-auto rounded-xl border border-amber-200/80 bg-amber-50 p-6 sm:p-10 shadow-xl text-stone-800 max-w-xl" style="background:#fdfbf5;box-shadow:0 10px 30px -5px rgba(180,83,9,0.15),0 0 0 1px rgba(217,119,6,0.1)">
    <div class="flex items-start justify-between border-b pb-4 mb-6" style="border-color:rgba(120,53,15,0.15)">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-full border-2 border-dashed flex items-center justify-center bg-red-50 text-red-700" style="border-color:rgba(185,28,28,0.6)">
          <span class="text-xl">🎅</span>
        </div>
        <div>
          <span class="block font-certificate text-xs tracking-widest text-red-800 font-bold uppercase">The North Pole Post</span>
          <span class="block font-serif text-xs text-stone-500 italic" style="font-size:11px">Official Desk of Santa Claus • Arctic Circle 99705</span>
        </div>
      </div>
      <div class="border border-stone-400/80 rounded-full px-3 py-1 text-center bg-amber-50/50" style="transform:rotate(-6deg)">
        <div class="font-mono tracking-wider text-stone-600 uppercase font-semibold" style="font-size:9px">NORTH POLE AIR POST</div>
        <div class="font-bold text-red-800" style="font-size:10px">DEC 24 • ${year}</div>
        <div class="tracking-widest text-emerald-800 uppercase" style="font-size:8px">PRIORITY SLEIGH</div>
      </div>
    </div>
    <div class="mb-4">
      <h3 class="font-handwriting text-stone-900 font-bold leading-tight" style="font-size:1.75rem;color:#7f1d1d">${getLetterGreeting(d)}</h3>
    </div>
    <div class="space-y-4 font-serif text-stone-800 leading-relaxed" style="font-size:15px">
      <p>${getLetterIntro(d)}</p>
      <p>${getLetterBody(d)}</p>
      <p>${getLetterWishlist(d)}</p>
      ${d.specialNote ? `<p class="italic pl-3 py-1 text-stone-700" style="background:rgba(251,191,36,0.15);border-left:2px solid #d97706;font-size:14px">"${d.specialNote}"</p>` : ''}
      <p>Don't forget to leave a little snack for Rudolph and the team—flying around the world makes for hungry reindeer!</p>
    </div>
    <div class="mt-8 pt-4 flex items-end justify-between" style="border-top:1px solid rgba(120,53,15,0.1)">
      <div>
        <p class="font-serif text-sm text-stone-600 italic">With warm holiday love &amp; starlight,</p>
        <div class="font-handwriting font-bold mt-1 tracking-wide" style="font-size:2.25rem;color:#7f1d1d">Santa Claus</div>
        <p class="font-serif text-stone-500" style="font-size:11px">&amp; Mrs. Claus, Rudolph &amp; All the North Pole Elves</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="wax-seal w-14 h-14 rounded-full flex items-center justify-center text-white font-serif font-black shadow-lg border" style="transform:rotate(6deg);border-color:rgba(127,29,29,0.4)">
          <span class="text-xl tracking-tighter drop-shadow-md">SC</span>
        </div>
        <span class="font-mono tracking-widest text-stone-400 mt-1 font-semibold uppercase" style="font-size:9px">Official Seal</span>
      </div>
    </div>
  </div>`;
}

// ─────────────────────────────────────────────
// NICE LIST CERTIFICATE PREVIEW HTML
// ─────────────────────────────────────────────
function getSealClass(color) {
  if (color === 'crimson') return 'wax-seal text-white';
  if (color === 'emerald') return 'text-white' ;
  return 'gold-seal';
}
function getSealStyle(color) {
  if (color === 'emerald') return 'background:linear-gradient(to bottom right,#22c55e,#166534);';
  return '';
}

function renderCertificatePreview(d) {
  return `
  <div id="nice-list-certificate-card" class="relative mx-auto rounded-xl p-6 sm:p-10 text-stone-800 max-w-xl shadow-2xl" style="background:#fffdfa;box-shadow:0 12px 36px -8px rgba(180,83,9,0.2),0 0 0 1px rgba(217,119,6,0.15)">
    <div class="border-4 border-double p-5 sm:p-7 relative rounded-lg" style="border-color:rgba(180,83,9,0.8);background:linear-gradient(to bottom,#fffefc,#faf6ed)">
      <!-- Corner accents -->
      <div class="absolute flex items-center justify-center text-amber-900 font-bold bg-amber-100 rounded-tl" style="top:-12px;left:-12px;width:24px;height:24px;border-top:2px solid #b45309;border-left:2px solid #b45309;font-size:10px">✦</div>
      <div class="absolute flex items-center justify-center text-amber-900 font-bold bg-amber-100 rounded-tr" style="top:-12px;right:-12px;width:24px;height:24px;border-top:2px solid #b45309;border-right:2px solid #b45309;font-size:10px">✦</div>
      <div class="absolute flex items-center justify-center text-amber-900 font-bold bg-amber-100 rounded-bl" style="bottom:-12px;left:-12px;width:24px;height:24px;border-bottom:2px solid #b45309;border-left:2px solid #b45309;font-size:10px">✦</div>
      <div class="absolute flex items-center justify-center text-amber-900 font-bold bg-amber-100 rounded-br" style="bottom:-12px;right:-12px;width:24px;height:24px;border-bottom:2px solid #b45309;border-right:2px solid #b45309;font-size:10px">✦</div>

      <!-- Header -->
      <div class="text-center mb-6">
        <div class="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold tracking-widest uppercase mb-1" style="font-size:10px;border:1px solid rgba(22,163,74,0.3)">
          ${icons.shieldCheck(12,'text-emerald-700')} HIGH COUNCIL OF THE NORTH POLE
        </div>
        <h2 class="font-certificate font-extrabold tracking-wider text-amber-950 uppercase leading-snug" style="font-size:1.75rem">Official Nice List</h2>
        <p class="font-serif tracking-widest text-amber-800 uppercase font-semibold" style="font-size:0.75rem">Certificate of Exemplary Good Standing</p>
        <div class="mx-auto mt-2" style="width:96px;height:2px;background:linear-gradient(to right,transparent,#d97706,transparent)"></div>
      </div>

      <!-- Body -->
      <div class="text-center my-6" style="display:flex;flex-direction:column;align-items:center;gap:1rem">
        <p class="font-serif italic text-stone-600" style="font-size:0.875rem">Be it known to all elves, reindeer, and holiday observers throughout the world, that</p>
        <div class="inline-block py-2 px-8" style="border-bottom:2px dashed rgba(251,191,36,0.8);min-width:280px">
          <span class="font-serif font-bold text-red-900 tracking-wide" style="font-size:1.75rem">${d.childName || 'Child\'s Full Name'}</span>
        </div>
        <p class="font-serif text-stone-600" style="font-size:0.875rem">residing in the city of <strong class="text-stone-900 font-semibold underline decoration-amber-400">${d.hometown || 'Your Hometown'}</strong></p>
        <div class="p-4 rounded-md text-stone-800 font-serif leading-relaxed max-w-md mx-auto" style="font-size:0.875rem;background:rgba(251,191,36,0.1);border:1px solid rgba(251,191,36,0.4)">
          <p class="italic">"Has been evaluated by the Department of Good Deeds and is officially recognized for <strong class="text-emerald-950 font-semibold not-italic">${d.commendationReason || 'showing boundless kindness, patience, and a helpful cheerful spirit'}</strong>. By decree of Santa Claus, their name is hereby inscribed in golden ink upon the Master Nice List."</p>
        </div>
      </div>

      <!-- Signatures -->
      <div class="mt-8 pt-4 grid gap-2 text-center items-end" style="border-top:1px solid rgba(120,53,15,0.2);grid-template-columns:1fr 1fr 1fr">
        <div class="flex flex-col items-center">
          <div class="font-handwriting font-bold -mb-1" style="font-size:1.75rem;color:#7f1d1d">Santa Claus</div>
          <div class="mb-1" style="width:112px;height:1px;background:#9ca3af"></div>
          <span class="font-mono uppercase tracking-wider text-stone-500 font-semibold" style="font-size:10px">Santa Claus</span>
          <span class="text-stone-400 italic" style="font-size:9px">North Pole High Overseer</span>
        </div>
        <div class="flex flex-col items-center justify-center" style="margin-bottom:-8px;position:relative">
          <div class="${getSealClass(d.sealColor)} w-14 h-14 rounded-full flex flex-col items-center justify-center font-bold shadow-lg z-10" style="border:2px solid rgba(251,191,36,0.8);${getSealStyle(d.sealColor)}">
            ${icons.award(18)}
            <span class="tracking-tighter uppercase font-certificate" style="font-size:8px">NICE LIST</span>
          </div>
          <div class="flex gap-1.5 z-0" style="margin-top:-8px">
            <div class="rounded-b shadow-sm" style="width:12px;height:24px;background:#b91c1c;transform:rotate(-12deg)"></div>
            <div class="rounded-b shadow-sm" style="width:12px;height:24px;background:#b91c1c;transform:rotate(12deg)"></div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="font-handwriting font-bold -mb-1" style="font-size:1.75rem;color:#166534">Elf Bernard</div>
          <div class="mb-1" style="width:112px;height:1px;background:#9ca3af"></div>
          <span class="font-mono uppercase tracking-wider text-stone-500 font-semibold" style="font-size:10px">Elf Bernard</span>
          <span class="text-stone-400 italic" style="font-size:9px">Chief Behavior Registrar</span>
        </div>
      </div>

      <!-- Registry -->
      <div class="mt-6 pt-2 flex items-center justify-between font-mono text-stone-500" style="font-size:10px;border-top:1px solid rgba(120,53,15,0.1)">
        <div>REGISTRY NO: <span class="font-bold text-amber-900 tracking-wider">${d.registryNumber || 'NP-2026-NICE-0001'}</span></div>
        <div>ISSUED: <span class="font-semibold text-stone-700">${d.issueDate || 'Christmas 2026'}</span></div>
      </div>
    </div>
  </div>`;
}

// ─────────────────────────────────────────────
// CUSTOMIZER PREVIEW UPDATER
// ─────────────────────────────────────────────
function updatePreview() {
  const container = document.getElementById('preview-container');
  if (!container) return;
  if (customizerTab === 'letter') {
    container.innerHTML = renderSantaLetterPreview(letterData);
  } else {
    container.innerHTML = renderCertificatePreview(certData);
  }
}

// ─────────────────────────────────────────────
// CUSTOMIZER FORM RENDER
// ─────────────────────────────────────────────
function renderLetterForm() {
  return `
  <div class="space-y-4 text-sm">
    <div>
      <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Child's First Name or Nickname *</label>
      <input type="text" id="input-letter-child-name" value="${escH(letterData.childName)}" placeholder="e.g. Emma"
        class="w-full px-3.5 py-2 rounded-lg border border-amber-300/80 outline-none bg-amber-50/20 font-medium" style="border-color:#fcd34d" />
    </div>
    <div class="grid grid-cols-2 gap-3">
      <div>
        <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Age or Grade</label>
        <input type="text" id="input-letter-age" value="${escH(letterData.ageOrGrade)}" placeholder="e.g. 7 years old"
          class="w-full px-3 py-2 rounded-lg border outline-none bg-amber-50/20" style="border-color:#fcd34d" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Hometown / City *</label>
        <input type="text" id="input-letter-hometown" value="${escH(letterData.hometown)}" placeholder="e.g. Austin, Texas"
          class="w-full px-3 py-2 rounded-lg border outline-none bg-amber-50/20" style="border-color:#fcd34d" />
      </div>
    </div>
    <div>
      <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Good Deed or Accomplishment *</label>
      <textarea rows="2" id="input-letter-good-deed" placeholder="e.g. helping little brother learn to ride a bike and being kind to pets"
        class="w-full px-3 py-2 rounded-lg border outline-none bg-amber-50/20 text-xs sm:text-sm" style="border-color:#fcd34d">${escH(letterData.goodDeed)}</textarea>
    </div>
    <div>
      <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Mention a Wishlist Gift (Optional)</label>
      <input type="text" id="input-letter-wishlist" value="${escH(letterData.wishlistGift)}" placeholder="e.g. the art watercolor set with colored pencils"
        class="w-full px-3 py-2 rounded-lg border outline-none bg-amber-50/20" style="border-color:#fcd34d" />
    </div>
    <div>
      <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Santa's Special Postscript Note (Optional)</label>
      <input type="text" id="input-letter-special-note" value="${escH(letterData.specialNote)}" placeholder="e.g. Rudolph sends an extra nuzzle to Barnaby the puppy!"
        class="w-full px-3 py-2 rounded-lg border outline-none bg-amber-50/20 text-xs" style="border-color:#fcd34d" />
    </div>
    <div>
      <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Letter Style Tone</label>
      <div class="grid grid-cols-3 gap-2 text-xs">
        ${['classic','encouragement','baby-first'].map(style => {
          const label = style === 'classic' ? 'Classic Magic' : style === 'encouragement' ? 'Encouragement' : "Baby's 1st";
          const active = letterData.templateStyle === style;
          return `<button type="button" data-style="${style}" class="style-btn py-2 px-1 rounded-lg border text-center transition cursor-pointer ${active ? 'bg-red-50 border-red-600 text-red-900 font-bold' : 'border-stone-200 text-stone-600 hover:bg-stone-50'}">${label}</button>`;
        }).join('')}
      </div>
    </div>
  </div>`;
}

function renderCertForm() {
  return `
  <div class="space-y-4 text-sm">
    <div>
      <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Full Name to Inscribe on Certificate *</label>
      <input type="text" id="input-cert-child-name" value="${escH(certData.childName)}" placeholder="e.g. Emma Rose Harrison"
        class="w-full px-3.5 py-2 rounded-lg border outline-none bg-amber-50/20 font-medium" style="border-color:#fcd34d" />
    </div>
    <div>
      <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">City / State or Country *</label>
      <input type="text" id="input-cert-hometown" value="${escH(certData.hometown)}" placeholder="e.g. Austin, Texas"
        class="w-full px-3 py-2 rounded-lg border outline-none bg-amber-50/20" style="border-color:#fcd34d" />
    </div>
    <div>
      <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Official Commendation Reason *</label>
      <textarea rows="3" id="input-cert-reason" placeholder="e.g. Demonstrating immense kindness to friends, practicing reading every night..."
        class="w-full px-3 py-2 rounded-lg border outline-none bg-amber-50/20 text-xs sm:text-sm" style="border-color:#fcd34d">${escH(certData.commendationReason)}</textarea>
    </div>
    <div class="grid grid-cols-2 gap-3">
      <div>
        <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Registry Number</label>
        <input type="text" id="input-cert-registry" value="${escH(certData.registryNumber)}"
          class="w-full px-3 py-2 rounded-lg border bg-stone-50 font-mono text-xs text-stone-600" style="border-color:#fcd34d" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Seal Color</label>
        <select id="input-cert-seal-color" class="w-full px-3 py-2 rounded-lg border bg-amber-50/20 text-xs cursor-pointer" style="border-color:#fcd34d">
          <option value="gold" ${certData.sealColor==='gold'?'selected':''}>Embossed Gold Foil</option>
          <option value="crimson" ${certData.sealColor==='crimson'?'selected':''}>Crimson Red Wax</option>
          <option value="emerald" ${certData.sealColor==='emerald'?'selected':''}>Evergreen Emerald</option>
        </select>
      </div>
    </div>
  </div>`;
}

function renderCustomizerForm() {
  const formContainer = document.getElementById('customizer-form-fields');
  if (!formContainer) return;
  formContainer.innerHTML = customizerTab === 'letter' ? renderLetterForm() : renderCertForm();
  bindFormListeners();

  // Update form title
  const title = document.getElementById('customizer-form-title');
  if (title) title.textContent = customizerTab === 'letter' ? "Personalize Santa's Letter" : 'Official Registry Details';

  // Update add-to-cart button text
  const addBtn = document.getElementById('add-customized-cart-btn');
  if (addBtn && !addedToast) {
    addBtn.innerHTML = `${icons.shoppingBag(18)} <span>Add Customized ${customizerTab === 'letter' ? 'Letter' : 'Certificate'}</span>`;
  }

  // Update format prices
  updateFormatPrices();
}

function updateFormatPrices() {
  const mailPrice = document.getElementById('format-mail-price');
  const digitalPrice = document.getElementById('format-digital-price');
  if (mailPrice) mailPrice.textContent = customizerTab === 'letter' ? '$12.95' : '$14.95';
  if (digitalPrice) digitalPrice.textContent = customizerTab === 'letter' ? '$8.95' : '$9.95';
}

function bindFormListeners() {
  if (customizerTab === 'letter') {
    bindInput('input-letter-child-name', v => { letterData.childName = v; updatePreview(); });
    bindInput('input-letter-age', v => { letterData.ageOrGrade = v; updatePreview(); });
    bindInput('input-letter-hometown', v => { letterData.hometown = v; updatePreview(); });
    bindInput('input-letter-good-deed', v => { letterData.goodDeed = v; updatePreview(); }, true);
    bindInput('input-letter-wishlist', v => { letterData.wishlistGift = v; updatePreview(); });
    bindInput('input-letter-special-note', v => { letterData.specialNote = v; updatePreview(); });

    document.querySelectorAll('.style-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        letterData.templateStyle = btn.dataset.style;
        renderCustomizerForm();
        updatePreview();
      });
    });
  } else {
    bindInput('input-cert-child-name', v => { certData.childName = v; updatePreview(); });
    bindInput('input-cert-hometown', v => { certData.hometown = v; updatePreview(); });
    bindInput('input-cert-reason', v => { certData.commendationReason = v; updatePreview(); }, true);
    bindInput('input-cert-registry', v => { certData.registryNumber = v; updatePreview(); });
    const sealEl = document.getElementById('input-cert-seal-color');
    if (sealEl) sealEl.addEventListener('change', e => { certData.sealColor = e.target.value; updatePreview(); });
  }
}

function bindInput(id, handler, isTextarea = false) {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', e => handler(e.target.value));
}

// ─────────────────────────────────────────────
// FORMAT CHOICE BUTTONS
// ─────────────────────────────────────────────
function renderFormatButtons() {
  ['printed-mail','digital-download'].forEach(fmt => {
    const btn = document.getElementById(`format-btn-${fmt}`);
    if (!btn) return;
    const active = formatChoice === fmt;
    btn.className = `p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col ${active ? 'border-red-600 bg-red-50/70 text-red-950 font-semibold ring-1 ring-red-500' : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'}`;
  });
}

// ─────────────────────────────────────────────
// TAB BUTTONS
// ─────────────────────────────────────────────
function renderTabButtons() {
  const letterBtn = document.getElementById('tab-letter-btn');
  const certBtn   = document.getElementById('tab-cert-btn');
  if (letterBtn) {
    letterBtn.className = `flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${customizerTab === 'letter' ? 'bg-red-700 text-white shadow-md font-semibold' : 'text-stone-700 hover:text-stone-900 hover:bg-white/60'}`;
  }
  if (certBtn) {
    certBtn.className = `flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${customizerTab === 'certificate' ? 'bg-amber-700 text-white shadow-md font-semibold' : 'text-stone-700 hover:text-stone-900 hover:bg-white/60'}`;
  }
}

// ─────────────────────────────────────────────
// CART DRAWER
// ─────────────────────────────────────────────
function openCart() {
  renderCartItems();
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartItems() {
  const container = document.getElementById('cart-items-list');
  if (!container) return;

  if (cartItems.length === 0) {
    container.innerHTML = `
    <div class="text-center py-16 space-y-3">
      <div class="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto text-2xl">🎁</div>
      <h4 class="font-serif font-bold text-lg text-stone-800">Santa's Sleigh is Empty</h4>
      <p class="text-stone-500 text-xs sm:text-sm max-w-xs mx-auto">Customize a personalized Santa letter or official Nice List certificate to start the holiday magic!</p>
      <button onclick="closeCart()" class="mt-4 px-5 py-2.5 bg-red-700 text-white font-semibold text-xs rounded-xl shadow-xs hover:bg-red-800 transition cursor-pointer">Start Customizing</button>
    </div>`;
  } else {
    container.innerHTML = cartItems.map(item => `
    <div class="p-4 rounded-xl border border-amber-200/80 bg-amber-50/30 flex gap-3 relative" style="border-color:rgba(251,191,36,0.4)">
      <div class="w-12 h-12 rounded-lg bg-amber-100/80 border border-amber-200 flex items-center justify-center text-xl shrink-0">${item.type === 'letter' ? '🎅' : item.type === 'certificate' ? '📜' : '🎁'}</div>
      <div class="flex-1 min-w-0">
        <h5 class="font-serif font-bold text-sm text-stone-900 truncate">${escH(item.title)}</h5>
        <p class="mt-0.5" style="font-size:11px">
          ${item.format === 'printed-mail'
            ? '<span class="text-red-700 font-medium">📫 Heavy Parchment &amp; Wax Seal</span>'
            : '<span class="text-emerald-700 font-medium">⚡ Instant Printable Download</span>'}
        </p>
        ${item.letterDetails && item.letterDetails.hometown ? `<p class="text-stone-400 italic" style="font-size:11px">To: ${escH(item.letterDetails.childName)} (${escH(item.letterDetails.hometown)})</p>` : ''}
        <div class="mt-3 flex items-center justify-between">
          <div class="flex items-center gap-2 border border-stone-200 rounded-lg bg-white px-2 py-0.5 text-xs">
            <button onclick="updateQuantity('${item.id}',-1)" class="text-stone-500 hover:text-stone-900 px-1 cursor-pointer font-bold">-</button>
            <span class="font-mono font-bold text-stone-800">${item.quantity}</span>
            <button onclick="updateQuantity('${item.id}',1)" class="text-stone-500 hover:text-stone-900 px-1 cursor-pointer font-bold">+</button>
          </div>
          <span class="font-bold text-sm text-red-900">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
      <button onclick="removeItem('${item.id}')" class="text-stone-300 hover:text-red-600 p-1 cursor-pointer self-start" title="Remove item">${icons.trash2(15)}</button>
    </div>`).join('');
  }

  renderCartFooter();
}

function renderCartFooter() {
  const footer = document.getElementById('cart-footer');
  if (!footer) return;
  if (cartItems.length === 0) { footer.innerHTML = ''; return; }

  const sub = cartSubtotal();
  const ship = cartShipping();
  const tot = cartTotal();
  const hasPhys = cartHasPhysical();

  footer.innerHTML = `
  <div class="p-6 border-t border-amber-100 bg-amber-50/40 space-y-4">
    <div class="space-y-1.5 text-xs text-stone-600">
      <div class="flex justify-between"><span>Keepsakes Subtotal</span><span class="font-semibold text-stone-900">$${sub.toFixed(2)}</span></div>
      <div class="flex justify-between items-center">
        <span class="flex items-center gap-1">${icons.truck(13,'text-stone-500')} Sleigh Mail Shipping</span>
        <span>${ship === 0 ? '<span class="text-emerald-700 font-bold uppercase tracking-wider bg-emerald-100 px-2 py-0.5 rounded-full" style="font-size:10px">FREE</span>' : `$${ship.toFixed(2)}`}</span>
      </div>
      ${hasPhys && sub < 20 ? `<p class="text-amber-800 font-medium" style="font-size:11px">Add $${(20 - sub).toFixed(2)} more for Free Priority Sleigh Mail!</p>` : ''}
      <div class="border-t border-amber-200/60 pt-2 flex justify-between text-base font-serif font-black text-stone-900" style="border-color:rgba(251,191,36,0.4)">
        <span>Total</span><span class="text-red-800">$${tot.toFixed(2)}</span>
      </div>
    </div>
    <button id="drawer-checkout-btn" onclick="openCheckout()" class="w-full py-3.5 px-4 bg-red-700 hover:bg-red-800 active:scale-[0.98] text-white font-bold text-sm rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2">
      <span>Proceed to Elf Checkout</span>${icons.arrowRight(16)}
    </button>
    <div class="flex items-center justify-center gap-1.5 text-stone-500" style="font-size:11px">
      ${icons.shieldCheck(13,'text-emerald-600')} <span>100% Christmas Wonder Guarantee • Discreet Parent Mailer</span>
    </div>
  </div>`;
}

// ─────────────────────────────────────────────
// CHECKOUT MODAL
// ─────────────────────────────────────────────
function openCheckout() {
  closeCart();
  checkoutStep = 'details';
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('open');
    renderCheckout();
  }
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCheckout() {
  const body = document.getElementById('checkout-body');
  if (!body) return;

  const tot = cartTotal();

  if (checkoutStep === 'details') {
    body.innerHTML = `
    <div>
      <div class="flex items-center gap-2 mb-1"><span class="text-xl">🛷</span><h3 class="font-serif font-black text-2xl text-stone-900">North Pole Postal Dispatch</h3></div>
      <p class="text-stone-500 text-xs sm:text-sm mb-6">All letters arrive packed inside a plain, discreet outer mailer addressed to you so the surprise stays completely hidden from curious little eyes!</p>
      <div class="mb-6 p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs space-y-1" style="border-color:rgba(251,191,36,0.5)">
        <div class="font-semibold text-stone-800">Order Items (${cartItems.length}):</div>
        ${cartItems.map(it => `<div class="flex justify-between text-stone-600"><span class="truncate max-w-[260px]">${it.quantity}x ${escH(it.title)}</span><span class="font-mono font-medium">$${(it.price*it.quantity).toFixed(2)}</span></div>`).join('')}
        <div class="border-t border-amber-200/80 pt-1.5 flex justify-between font-bold text-stone-900"><span>Total Due:</span><span class="text-red-800">$${tot.toFixed(2)}</span></div>
      </div>
      <form id="checkout-form" class="space-y-4 text-xs sm:text-sm">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Parent / Guardian Name *</label>
            <input type="text" required id="co-name" value="${escH(co.parentName)}" placeholder="e.g. Sarah Harrison" class="w-full px-3 py-2 rounded-lg border border-stone-200 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Parent Email for Tracking *</label>
            <input type="email" required id="co-email" value="${escH(co.email)}" placeholder="parent@example.com" class="w-full px-3 py-2 rounded-lg border border-stone-200 outline-none" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">Shipping Address (Plain Outer Mailer) *</label>
          <input type="text" required id="co-address" value="${escH(co.address)}" placeholder="123 Cozy Hearth Lane" class="w-full px-3 py-2 rounded-lg border border-stone-200 outline-none" />
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div>
            <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">City</label>
            <input type="text" required id="co-city" value="${escH(co.city)}" class="w-full px-3 py-2 rounded-lg border border-stone-200 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">State</label>
            <input type="text" required id="co-state" value="${escH(co.state)}" class="w-full px-3 py-2 rounded-lg border border-stone-200 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">ZIP</label>
            <input type="text" required id="co-zip" value="${escH(co.zip)}" class="w-full px-3 py-2 rounded-lg border border-stone-200 outline-none" />
          </div>
        </div>
        <div class="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs text-stone-600">
          <div class="flex items-center gap-2">${icons.lock(14,'text-emerald-600')} <span>Secure Mock Holiday Checkout</span></div>
          <span class="font-mono text-stone-400" style="font-size:11px">TEST MODE • Free Preview</span>
        </div>
        <button type="submit" id="submit-order-btn" class="w-full py-3.5 px-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]">
          ${icons.sparkles(18)} <span>Confirm &amp; Dispatch to Santa's Elves ($${tot.toFixed(2)})</span>
        </button>
      </form>
    </div>`;

    document.getElementById('checkout-form').addEventListener('submit', submitOrder);
  } else {
    body.innerHTML = `
    <div class="text-center py-6 space-y-4">
      <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-3xl shadow-xs">✨</div>
      <h3 class="font-serif font-black text-stone-900" style="font-size:1.75rem">Magic is on the Way!</h3>
      <div class="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-900 font-mono text-xs font-bold tracking-wider">TRACKING: ${checkoutOrderId}</div>
      <p class="text-stone-600 text-sm max-w-sm mx-auto leading-relaxed">Santa and Head Elf Bernard have received your personalization details! Your keepsake is being prepared with wax seals and scheduled for Arctic post.</p>
      <div class="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-left text-xs text-stone-700 space-y-1 max-w-sm mx-auto">
        <p><strong>Recipient:</strong> ${escH(co.parentName)}</p>
        <p><strong>Shipping To:</strong> ${escH(co.address)}, ${escH(co.city)}, ${escH(co.state)} ${escH(co.zip)}</p>
        <p><strong>Notification sent to:</strong> ${escH(co.email)}</p>
      </div>
      <div class="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
        <button onclick="window.print()" class="flex items-center justify-center gap-1.5 px-5 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl font-bold text-xs transition cursor-pointer border border-amber-300">
          ${icons.printer(15)} <span>Print Receipt / Keepsake</span>
        </button>
        <button onclick="closeCheckout()" class="px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl font-bold text-xs shadow-xs transition cursor-pointer">Return to Workshop</button>
      </div>
    </div>`;
  }
}

function submitOrder(e) {
  e.preventDefault();
  co.parentName = document.getElementById('co-name')?.value || co.parentName;
  co.email      = document.getElementById('co-email')?.value || co.email;
  co.address    = document.getElementById('co-address')?.value || co.address;
  co.city       = document.getElementById('co-city')?.value || co.city;
  co.state      = document.getElementById('co-state')?.value || co.state;
  co.zip        = document.getElementById('co-zip')?.value || co.zip;

  playJingleBell();
  try {
    if (typeof confetti === 'function') {
      confetti({ particleCount:80, spread:70, origin:{y:0.6}, colors:['#dc2626','#15803d','#facc15','#ffffff'] });
    }
  } catch {}

  checkoutOrderId = `NP-SLEIGH-${Math.floor(100000 + Math.random() * 900000)}`;
  checkoutStep = 'success';
  cartItems = [];
  saveCart();
  updateCartBadge();
  renderCheckout();
}

// ─────────────────────────────────────────────
// PRODUCT CATALOG RENDER
// ─────────────────────────────────────────────
function renderProductCatalog() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  container.innerHTML = PRODUCTS.map(product => {
    const isFeatured = product.type === 'bundle';
    return `
    <div id="product-card-${product.id}" class="rounded-3xl border transition-all flex flex-col justify-between overflow-hidden relative ${isFeatured ? 'border-2 shadow-xl ring-2 ring-red-200' : 'shadow-md hover:shadow-lg'}"
      style="${isFeatured ? 'border-color:rgba(220,38,38,0.8);background:white;' : 'border-color:rgba(251,191,36,0.5);background:rgba(255,255,255,0.9);'}">
      ${product.badge ? `<div class="text-xs font-bold uppercase tracking-wider py-1.5 px-4 text-center ${isFeatured ? 'bg-red-700 text-white font-semibold' : 'bg-amber-100 text-amber-900'}">${product.badge}</div>` : ''}
      <div class="p-6 sm:p-8 flex-1 flex flex-col">
        <div class="mb-4">
          <span class="text-xs font-mono font-semibold uppercase tracking-wider text-amber-800">${product.subtitle}</span>
          <h3 class="font-serif text-2xl font-bold text-stone-900 mt-1">${product.title}</h3>
        </div>
        <div class="flex items-baseline gap-2 mb-4">
          <span class="text-3xl font-black text-red-800">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="text-sm text-stone-400 line-through">$${product.originalPrice.toFixed(2)}</span>` : ''}
          <span class="text-xs text-stone-500 ml-auto">Physical or Digital</span>
        </div>
        <p class="text-stone-600 text-sm leading-relaxed mb-6">${product.description}</p>
        <div class="space-y-2.5 mb-8 flex-1 text-xs sm:text-sm text-stone-700">
          ${product.features.map(f => `
          <div class="flex items-start gap-2.5">
            <div class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">${icons.check(11)}</div>
            <span class="leading-snug">${f}</span>
          </div>`).join('')}
        </div>
        <div class="space-y-2.5 pt-4 border-t border-amber-100">
          <button id="customize-${product.id}-btn" onclick="handleCustomizeProduct('${product.type === 'bundle' ? 'letter' : product.type}')"
            class="w-full py-3 px-4 rounded-xl font-bold text-sm transition cursor-pointer flex items-center justify-center gap-2 ${isFeatured ? 'bg-red-700 hover:bg-red-800 text-white shadow-md' : 'bg-amber-800 hover:bg-amber-900 text-white'}">
            ${icons.sparkles(16)} <span>Customize &amp; Preview Live</span> ${icons.arrowRight(16)}
          </button>
          <button id="quick-add-${product.id}-btn" onclick="handleQuickAdd('${product.id}')"
            class="w-full py-2.5 px-4 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs font-semibold transition cursor-pointer">
            Quick Add to Sleigh
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function handleCustomizeProduct(type) {
  playJingleBell();
  customizerTab = type;
  renderTabButtons();
  renderCustomizerForm();
  updatePreview();
  scrollToSection('customizer-section');
}

function handleQuickAdd(productId) {
  playJingleBell();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  addToCart({
    productId: product.id,
    title: product.title,
    price: product.price,
    type: product.type,
    quantity: 1,
    format: 'printed-mail',
    letterDetails: (product.type === 'letter' || product.type === 'bundle') ? {
      childName: 'My Child', ageOrGrade: '7 years old', hometown: 'Our Town',
      goodDeed: 'always sharing and being so kind to everyone',
      wishlistGift: 'a special Christmas surprise',
      specialNote: 'Listen for sleigh bells on the roof!',
      templateStyle: 'classic', envelopeStyle: 'classic-red'
    } : undefined,
    certificateDetails: (product.type === 'certificate' || product.type === 'bundle') ? {
      childName: 'Child Full Name', hometown: 'Our Town',
      commendationReason: 'Boundless kindness, cheerful laughter, and great effort in school.',
      registryNumber: `NP-2026-NICE-${Math.floor(1000+Math.random()*9000)}`,
      issueDate: 'December 2026', sealColor: 'gold'
    } : undefined,
  });
}

// ─────────────────────────────────────────────
// HOW IT WORKS RENDER
// ─────────────────────────────────────────────
function renderHowItWorks() {
  const container = document.getElementById('how-it-works-steps');
  if (!container) return;
  const steps = [
    { icon: icons.penLine(24,'text-red-700'), title:'Share Their Little Wonders', desc:'Tell us your child\'s name, hometown, proudest accomplishments, and Christmas wishes. Our North Pole team weaves them into a personal message.' },
    { icon: icons.stamp(24,'text-amber-700'), title:'Elves Inscribe & Wax-Seal', desc:'Each letter and certificate is carefully printed on aged deckled parchment and finished by hand with an authentic melted red wax or gold foil seal.' },
    { icon: icons.gift(24,'text-emerald-700'), title:'Discreet Sleigh Delivery', desc:'Shipped in a plain outer envelope directly to parents. Inside is the magical North Pole envelope ready for your child to discover!' },
  ];
  container.innerHTML = steps.map((step, idx) => `
  <div class="bg-white/80 rounded-2xl border border-amber-200/80 p-6 sm:p-8 relative shadow-sm text-center flex flex-col items-center">
    <div class="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-5 shadow-xs">${step.icon}</div>
    <div class="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest mb-1">Step 0${idx+1}</div>
    <h3 class="font-serif text-xl font-bold text-stone-900 mb-3">${step.title}</h3>
    <p class="text-stone-600 text-sm leading-relaxed">${step.desc}</p>
  </div>`).join('');
}

// ─────────────────────────────────────────────
// REVIEWS RENDER
// ─────────────────────────────────────────────
function renderReviews() {
  const container = document.getElementById('reviews-grid');
  if (!container) return;
  container.innerHTML = TESTIMONIALS.map(rev => `
  <div class="bg-white rounded-2xl border border-amber-200/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-1 text-amber-500 mb-4">${Array.from({length:rev.rating}).map(()=>icons.star(16)).join('')}</div>
      <p class="text-stone-700 text-sm sm:text-base leading-relaxed italic font-serif">"${escH(rev.text)}"</p>
    </div>
    <div class="pt-5 mt-5 border-t border-amber-100 flex items-center justify-between text-xs">
      <div>
        <span class="font-bold text-stone-900 block font-serif text-sm">${escH(rev.parentName)}</span>
        <span class="text-stone-500">${escH(rev.childName)}</span>
      </div>
      <span class="text-stone-400 font-mono">${escH(rev.location)}</span>
    </div>
  </div>`).join('');
}

// ─────────────────────────────────────────────
// FAQ RENDER
// ─────────────────────────────────────────────
function renderFaqs() {
  const container = document.getElementById('faq-list');
  if (!container) return;
  container.innerHTML = FAQS.map((faq, idx) => `
  <div class="bg-white/90 rounded-2xl border border-amber-200/80 overflow-hidden shadow-xs transition">
    <button type="button" onclick="toggleFaq(${idx})"
      class="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-stone-900 hover:text-red-800 transition cursor-pointer">
      <span>${escH(faq.question)}</span>
      <span id="faq-chevron-${idx}" class="${openFaqIndex===idx ? 'text-red-700' : 'text-stone-400'} shrink-0 transition-transform duration-200" style="${openFaqIndex===idx ? 'transform:rotate(180deg)' : ''}">
        ${icons.chevronDown(18)}
      </span>
    </button>
    <div id="faq-answer-${idx}" class="faq-answer ${openFaqIndex===idx ? 'open' : ''}">
      <div class="px-5 pb-5 text-stone-600 text-sm leading-relaxed border-t border-amber-100 pt-3">${escH(faq.answer)}</div>
    </div>
  </div>`).join('');
}

function toggleFaq(idx) {
  openFaqIndex = openFaqIndex === idx ? null : idx;
  // Update all chevrons and answer panels
  FAQS.forEach((_, i) => {
    const chevron = document.getElementById(`faq-chevron-${i}`);
    const answer  = document.getElementById(`faq-answer-${i}`);
    if (!chevron || !answer) return;
    const isOpen = openFaqIndex === i;
    chevron.style.transform = isOpen ? 'rotate(180deg)' : '';
    chevron.className = `${isOpen ? 'text-red-700' : 'text-stone-400'} shrink-0 transition-transform duration-200`;
    answer.classList.toggle('open', isOpen);
  });
}

// ─────────────────────────────────────────────
// PRESET LOADER
// ─────────────────────────────────────────────
function applyPreset(idx) {
  playJingleBell();
  const preset = PRESET_EXAMPLES[idx];
  letterData = { ...preset.letter };
  certData   = { ...preset.certificate };
  renderCustomizerForm();
  updatePreview();
}

// ─────────────────────────────────────────────
// ADD TO CART FROM CUSTOMIZER
// ─────────────────────────────────────────────
function handleAddCustomizedToCart() {
  playJingleBell();
  if (customizerTab === 'letter') {
    const price = formatChoice === 'printed-mail' ? 12.95 : 8.95;
    addToCart({ productId:'santa-letter', title:`Santa Letter for ${letterData.childName || 'Child'}`, price, type:'letter', letterDetails:{...letterData}, quantity:1, format:formatChoice });
  } else {
    const price = formatChoice === 'printed-mail' ? 14.95 : 9.95;
    addToCart({ productId:'nice-list-cert', title:`Nice List Certificate for ${certData.childName || 'Child'}`, price, type:'certificate', certificateDetails:{...certData}, quantity:1, format:formatChoice });
  }
  // Toast
  const btn = document.getElementById('add-customized-cart-btn');
  if (btn) {
    btn.innerHTML = `${icons.check(18,'text-emerald-300')} <span>Added to Sleigh!</span>`;
    if (addedToastTimer) clearTimeout(addedToastTimer);
    addedToastTimer = setTimeout(() => {
      if (btn) btn.innerHTML = `${icons.shoppingBag(18)} <span>Add Customized ${customizerTab === 'letter' ? 'Letter' : 'Certificate'}</span>`;
    }, 2800);
  }
}

// ─────────────────────────────────────────────
// UTILITY: HTML ESCAPE
// ─────────────────────────────────────────────
function escH(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─────────────────────────────────────────────
// FOOTER YEAR
// ─────────────────────────────────────────────
function renderFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Snow
  renderSnow();
  updateSnowButton();

  // Cart badge
  updateCartBadge();

  // Header bell
  const bellBtn = document.getElementById('bell-chime-btn');
  if (bellBtn) bellBtn.addEventListener('click', playJingleBell);

  // Snow toggle
  const snowBtn = document.getElementById('snowfall-toggle-btn');
  if (snowBtn) snowBtn.addEventListener('click', toggleSnow);

  // Cart open
  const cartBtn = document.getElementById('open-cart-btn');
  if (cartBtn) cartBtn.addEventListener('click', openCart);

  // Cart close
  const cartCloseBtn = document.getElementById('cart-close-btn');
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);

  // Cart backdrop
  const cartBackdrop = document.getElementById('cart-backdrop');
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

  // Checkout close
  const coCloseBtn = document.getElementById('checkout-close-btn');
  if (coCloseBtn) coCloseBtn.addEventListener('click', closeCheckout);

  // Checkout backdrop
  const coBackdrop = document.getElementById('checkout-backdrop');
  if (coBackdrop) coBackdrop.addEventListener('click', closeCheckout);

  // Nav scroll buttons
  document.querySelectorAll('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', () => scrollToSection(btn.dataset.scrollTo));
  });

  // Hero buttons
  const heroCustBtn = document.getElementById('hero-customize-btn');
  if (heroCustBtn) heroCustBtn.addEventListener('click', () => { playJingleBell(); scrollToSection('customizer-section'); });

  const heroExploreBtn = document.getElementById('hero-explore-btn');
  if (heroExploreBtn) heroExploreBtn.addEventListener('click', () => scrollToSection('products-section'));

  // Logo scroll
  const logo = document.getElementById('logo-home');
  if (logo) logo.addEventListener('click', () => scrollToSection('hero-section'));

  // Customizer tabs
  const tabLetter = document.getElementById('tab-letter-btn');
  if (tabLetter) tabLetter.addEventListener('click', () => {
    customizerTab = 'letter';
    renderTabButtons();
    renderCustomizerForm();
    updatePreview();
  });

  const tabCert = document.getElementById('tab-cert-btn');
  if (tabCert) tabCert.addEventListener('click', () => {
    customizerTab = 'certificate';
    renderTabButtons();
    renderCustomizerForm();
    updatePreview();
  });

  // Format choice buttons
  const fmtMail = document.getElementById('format-btn-printed-mail');
  if (fmtMail) fmtMail.addEventListener('click', () => {
    formatChoice = 'printed-mail';
    renderFormatButtons();
    updateFormatPrices();
  });
  const fmtDigital = document.getElementById('format-btn-digital-download');
  if (fmtDigital) fmtDigital.addEventListener('click', () => {
    formatChoice = 'digital-download';
    renderFormatButtons();
    updateFormatPrices();
  });

  // Add to cart from customizer
  const addBtn = document.getElementById('add-customized-cart-btn');
  if (addBtn) addBtn.addEventListener('click', handleAddCustomizedToCart);

  // Print preview
  const printBtn = document.getElementById('print-sample-btn');
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  // Preset buttons
  document.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => applyPreset(parseInt(btn.dataset.preset)));
  });

  // Render all dynamic sections
  renderProductCatalog();
  renderCustomizerForm();
  renderTabButtons();
  renderFormatButtons();
  updatePreview();
  renderHowItWorks();
  renderReviews();
  renderFaqs();
  renderFooterYear();
});
