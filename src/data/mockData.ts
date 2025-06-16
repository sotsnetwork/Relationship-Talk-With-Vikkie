import { Session, Product, Testimonial, BlogPost } from '../types';

export const sessions: Session[] = [
  {
    id: 'couples-60min',
    name: '60-Minute Couple Counseling Session',
    type: 'counseling',
    duration: 60,
    price: 25000,
    description: 'Comprehensive couples therapy session focusing on communication, conflict resolution, and biblical principles for healthy relationships.',
    features: [
      'Pre-session assessment',
      'Personalized action plan',
      'Follow-up resources',
      'WhatsApp support for 7 days'
    ]
  },
  {
    id: 'individual-therapy',
    name: 'Individual Therapy Session',
    type: 'counseling',
    duration: 50,
    price: 18000,
    description: 'One-on-one therapy session for personal growth, trauma healing, and relationship preparation.',
    features: [
      'Trauma-informed approach',
      'Biblical counseling integration',
      'Personalized healing plan',
      'Resource recommendations'
    ]
  },
  {
    id: 'premarital-package',
    name: 'Premarital Counseling Package',
    type: 'workshop',
    duration: 180,
    price: 45000,
    description: 'Comprehensive 3-session package preparing couples for marriage with biblical foundations.',
    features: [
      '3 structured sessions',
      'Compatibility assessment',
      'Communication tools',
      'Marriage preparation workbook',
      '30-day follow-up support'
    ]
  }
];

export const products: Product[] = [
  {
    id: 'conflict-resolution-guide',
    name: 'Conflict Resolution Guide',
    type: 'pdf',
    price: 1500,
    description: 'A comprehensive 30-page guide with biblical strategies for resolving conflicts in relationships.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      '30-page comprehensive guide',
      'Biblical conflict resolution strategies',
      'Practical exercises and worksheets',
      'Real-life case studies'
    ]
  },
  {
    id: 'premarital-workbook',
    name: 'Premarital Workbook',
    type: 'pdf',
    price: 2500,
    description: 'Essential workbook for couples preparing for marriage, covering communication, finances, intimacy, and spiritual growth.',
    image: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      '50+ pages of exercises',
      'Communication assessments',
      'Financial planning tools',
      'Spiritual growth activities'
    ]
  },
  {
    id: 'healing-after-infidelity',
    name: 'Healing After Infidelity Course',
    type: 'course',
    price: 5000,
    description: 'A step-by-step online course for couples working through infidelity with grace, forgiveness, and restoration.',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      '7 video modules (4+ hours)',
      'Downloadable worksheets',
      'Private community access',
      'Email support for 30 days'
    ]
  },
  {
    id: 'boundaries-blueprint',
    name: 'Healthy Boundaries Blueprint',
    type: 'pdf',
    price: 2000,
    description: 'Learn to establish and maintain healthy boundaries in all your relationships with biblical wisdom.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      '25-page detailed guide',
      'Boundary-setting scripts',
      'Self-assessment tools',
      'Implementation strategies'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & Michael O.',
    text: 'RTWV Academy saved our marriage. The biblical approach combined with professional counseling techniques gave us the tools we needed to rebuild trust and communication.',
    rating: 5,
    location: 'Lagos, Nigeria'
  },
  {
    id: '2',
    name: 'Grace A.',
    text: 'The premarital counseling package was incredibly thorough. We felt so prepared for marriage and learned communication skills that we still use today.',
    rating: 5,
    location: 'Abuja, Nigeria'
  },
  {
    id: '3',
    name: 'David E.',
    text: 'After struggling with trust issues, the individual therapy sessions helped me heal and prepare for a healthy relationship. Truly life-changing!',
    rating: 5,
    location: 'Port Harcourt, Nigeria'
  },
  {
    id: '4',
    name: 'Jennifer & Paul M.',
    text: 'The Healing After Infidelity course was exactly what we needed. The combination of biblical principles and practical steps helped us restore our marriage.',
    rating: 5,
    location: 'Ibadan, Nigeria'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Signs Your Relationship Needs Professional Counseling',
    excerpt: 'Recognizing when to seek help can be the difference between saving and losing your relationship. Here are the key warning signs.',
    content: '',
    image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    published_at: '2024-01-15',
    slug: 'signs-relationship-needs-counseling'
  },
  {
    id: '2',
    title: 'Biblical Principles for Healthy Communication in Marriage',
    excerpt: 'Discover how scripture guides us in building stronger communication patterns that honor God and strengthen relationships.',
    content: '',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    published_at: '2024-01-10',
    slug: 'biblical-communication-marriage'
  },
  {
    id: '3',
    title: 'Preparing for Marriage: What Every Nigerian Couple Should Know',
    excerpt: 'Essential insights for couples in Nigeria preparing for marriage, covering cultural expectations and biblical foundations.',
    content: '',
    image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    published_at: '2024-01-05',
    slug: 'preparing-marriage-nigerian-couples'
  }
];