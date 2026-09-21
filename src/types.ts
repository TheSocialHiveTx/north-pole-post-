export type ProductType = 'letter' | 'certificate' | 'bundle';

export interface LetterCustomization {
  childName: string;
  ageOrGrade: string;
  hometown: string;
  goodDeed: string;
  wishlistGift: string;
  specialNote: string;
  templateStyle: 'classic' | 'encouragement' | 'baby-first';
  envelopeStyle: 'classic-red' | 'vintage-kraft' | 'frost-white';
}

export interface CertificateCustomization {
  childName: string;
  hometown: string;
  commendationReason: string;
  registryNumber: string;
  issueDate: string;
  sealColor: 'gold' | 'crimson' | 'emerald';
}

export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  type: ProductType;
  letterDetails?: LetterCustomization;
  certificateDetails?: CertificateCustomization;
  quantity: number;
  format: 'printed-mail' | 'digital-download';
}

export interface ProductInfo {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  type: ProductType;
  badge?: string;
  description: string;
  features: string[];
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  location: string;
  childName: string;
  rating: number;
  text: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'personalization' | 'shipping';
}
