import { ProductInfo, Testimonial, FaqItem, LetterCustomization, CertificateCustomization } from '../types';

export const PRODUCTS: ProductInfo[] = [
  {
    id: 'santa-letter',
    title: 'Personalized Santa Letter',
    subtitle: 'From Santa’s Private North Pole Study',
    price: 12.95,
    originalPrice: 15.95,
    type: 'letter',
    badge: 'Holiday Classic',
    description: 'A bespoke handwritten-style letter crafted on aged heavy parchment, personalized with your child’s good deeds, hometown, and Christmas wish.',
    features: [
      'Authentic aged parchment with deckled edges',
      'Hand-stamped North Pole Postmark & Holly stamp',
      'Real embossed red wax seal with "SC" monogram',
      'Mentions your child’s hometown, best friend or pet, & good deeds',
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
    description: 'The golden decree officially declaring your child on Santa’s Good Behavior Registry. Features formal parchment, gold foil seal, and dual signatures.',
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

export const PRESET_EXAMPLES: {
  label: string;
  letter: LetterCustomization;
  certificate: CertificateCustomization;
}[] = [
  {
    label: 'Emma (Age 7) – Big Sister & Kind Friend',
    letter: {
      childName: 'Emma',
      ageOrGrade: '7 years old (2nd grade)',
      hometown: 'Austin, Texas',
      goodDeed: 'helping your little brother Tommy learn to tie his shoes and being so kind to your new classmate Sofia',
      wishlistGift: 'that art kit with watercolor pencils and the fuzzy plush bunny',
      specialNote: 'Rudolph whispered that you left carrots for the reindeer last year. They still talk about it!',
      templateStyle: 'classic',
      envelopeStyle: 'classic-red'
    },
    certificate: {
      childName: 'Emma Rose Harrison',
      hometown: 'Austin, Texas',
      commendationReason: 'Exceptional kindness as a loving big sister, sharing toys selflessly, and practicing her reading with patience every evening.',
      registryNumber: 'NP-2026-NICE-8842',
      issueDate: 'December 2026',
      sealColor: 'gold'
    }
  },
  {
    label: 'Lucas (Age 5) – Brave Helper',
    letter: {
      childName: 'Lucas',
      ageOrGrade: '5 years old',
      hometown: 'Denver, Colorado',
      goodDeed: 'cleaning up all your building blocks without being asked and being so brave at the dentist',
      wishlistGift: 'the bright blue race car track set',
      specialNote: 'Mrs. Claus and I loved the colorful drawing of the sleigh you made! It is on our kitchen fridge.',
      templateStyle: 'encouragement',
      envelopeStyle: 'vintage-kraft'
    },
    certificate: {
      childName: 'Lucas Alexander Miller',
      hometown: 'Denver, Colorado',
      commendationReason: 'Courageous heart, exemplary manners at dinner, and always giving warm bedtime hugs to mom and dad.',
      registryNumber: 'NP-2026-NICE-9104',
      issueDate: 'December 2026',
      sealColor: 'emerald'
    }
  },
  {
    label: 'Baby Maya – Baby’s First Christmas',
    letter: {
      childName: 'Baby Maya',
      ageOrGrade: '9 months old',
      hometown: 'Chicago, Illinois',
      goodDeed: 'bringing so much pure joy and giggles to your entire family with your sweetest gummy smile',
      wishlistGift: 'cozy warm fleece booties and a musical chime rattle',
      specialNote: 'Welcome to the wonder of Christmas! May your first holiday season be filled with gentle warmth and lullabies.',
      templateStyle: 'baby-first',
      envelopeStyle: 'frost-white'
    },
    certificate: {
      childName: 'Maya Joy Bennett',
      hometown: 'Chicago, Illinois',
      commendationReason: 'Being the brightest new star in her family, filling every room with happy coos and magical first-year wonder.',
      registryNumber: 'NP-2026-BABY-0192',
      issueDate: 'December 2026',
      sealColor: 'crimson'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    parentName: 'Sarah M.',
    location: 'Dallas, TX',
    childName: 'Mom of Harper (6)',
    rating: 5,
    text: 'My daughter gasped when she saw the real red wax seal and her own name with her hometown in Texas! The paper feels genuinely old and magical. She made us frame the Nice List certificate immediately.',
    date: 'Last Christmas'
  },
  {
    id: 'rev-2',
    parentName: 'David & Claire K.',
    location: 'Seattle, WA',
    childName: 'Parents of twins Oliver & Leo (8)',
    rating: 5,
    text: 'The personalization is so thoughtful. Santa knew about how they helped walk our golden retriever Barnaby. The quality of the cardstock and the gold seal blew us away.',
    date: 'Last Christmas'
  },
  {
    id: 'rev-3',
    parentName: 'Elena R.',
    location: 'Raleigh, NC',
    childName: 'Mom of Theo (4)',
    rating: 5,
    text: 'Ordered the bundle with reindeer food and letter. Such an adorable memory to tuck away in his childhood keepsake box. Highly recommend!',
    date: 'Last Christmas'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'general',
    question: 'How do you customize each letter and certificate?',
    answer: 'When you place your order or use our live previewer, you provide your child’s name, hometown, accomplishments, and a special note. Every letter is individually formatted with authentic vintage typography, North Pole postal markings, and genuine wax seals.'
  },
  {
    category: 'personalization',
    question: 'Can I write a letter for multiple siblings or a classroom?',
    answer: 'Yes! You can customize separate letters for each child to honor their distinct personalities, or customize a shared family letter addressed to all siblings together.'
  },
  {
    category: 'shipping',
    question: 'How will the package arrive so the secret is safe?',
    answer: 'All physical orders arrive packaged inside a discreet, plain outer mailer addressed to the parent. Inside, you will find the finished Santa letter inside its authentic North Pole stamped and wax-sealed envelope, ready for you to place by the fireplace, under the tree, or in your mailbox!'
  },
  {
    category: 'shipping',
    question: 'Do you offer instant digital printable downloads?',
    answer: 'Yes! If you are short on time or love crafting at home, select the "Digital Keepsake Download" option. You get instant access to print high-resolution 300 DPI copies right from your home printer.'
  },
  {
    category: 'personalization',
    question: 'What age group is this magical for?',
    answer: 'Our templates are tailored for every age: from sweet "Baby’s First Christmas" keepsakes for nursery memory books, to wonder-filled letters for toddlers and kids aged 3–11, and gentle heartfelt encouragement for older kids.'
  }
];
