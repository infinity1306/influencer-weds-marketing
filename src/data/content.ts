export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
  suffix?: string;
  annotation?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  imageKey: string;
}

export interface ProjectItem {
  id: string;
  category: 'Fashion' | 'Beauty' | 'Lifestyle' | 'Food' | 'Travel' | 'Tech';
  title: string;
  brand: string;
  description: string;
  reach: string;
  engagement: string;
  clicks: string;
  imageKey: string;
  badge: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  highlight: string;
}

export interface WhyUsPillar {
  title: string;
  subtitle: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const brandContent = {
  name: 'Influencer Weds Marketing',
  shortName: 'IWM',
  tagline: 'We Turn Influence Into Impact.',
  subheadline: 'We connect forward-thinking brands with authentic creators through high-converting storytelling, strategic campaign design, and measurable ROI.',
  ecosystem: 'CREATORS × BRANDS × STORIES × AUDIENCES',
  location: 'Bhopal, Madhya Pradesh, India',
  email: 'hello@influencerwedsmarketing.com',
  phone: '+91 98765 43210',
  foundedYear: '2023',
  social: {
    instagram: 'https://instagram.com/influencerwedsmarketing',
    linkedin: 'https://linkedin.com/company/influencerwedsmarketing',
    youtube: 'https://youtube.com/@influencerwedsmarketing',
    x: 'https://x.com/influencerweds',
  }
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Featured Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Stories', href: '#community' },
  { label: 'Reviews', href: '#testimonials' },
];

export const heroMetrics: MetricItem[] = [
  { value: '500+', label: 'Vetted Creators', annotation: 'Pan-India Reach' },
  { value: '50M+', label: 'Audience Impressions', annotation: 'Verified Views' },
  { value: '120+', label: 'Campaigns Delivered', annotation: '100% On-Time' },
  { value: '4.8x', label: 'Average ROAS Lift', annotation: 'Performance Driven' },
];

export const trustedBrands = [
  'GlowLab Skincare',
  'UrbanFit Apparel',
  'ZestFood Co.',
  'Nomad Outfitters',
  'Aura Audio',
  'SkinMuse Naturals',
];

export const servicesData: ServiceItem[] = [
  {
    id: 'influencer-marketing',
    number: '01',
    title: 'Influencer Marketing',
    tagline: 'Right creators. Real audiences. Actual results.',
    description: 'We architect creator discovery, authentic matchmaking, contract negotiation, and multi-tier influencer activations that ignite viral momentum.',
    features: ['Micro & Macro Creator Sourcing', 'Niche Audience Matchmaking', 'Creator Whitelisting & Rights', 'Authentic Product Seeding'],
    imageKey: 'serviceInfluencer',
  },
  {
    id: 'digital-marketing',
    number: '02',
    title: 'Digital Marketing & Growth',
    tagline: 'Strategies that turn attention into action.',
    description: 'Performance advertising powered by creator UGC, conversion-funnel optimization, retargeting engines, and quantifiable lead acquisition.',
    features: ['Paid Social Funnels (Meta & YouTube)', 'Creator UGC Ads Amplification', 'Full Funnel Retargeting', 'Real-time ROAS Optimization'],
    imageKey: 'serviceDigital',
  },
  {
    id: 'campaign-management',
    number: '03',
    title: 'Campaign Management',
    tagline: 'From ideas to impactful executions.',
    description: 'End-to-end operational rigor: briefing, creative QA, timeline management, escrow coordination, compliance, and real-time sprint tracking.',
    features: ['End-to-End Campaign Delivery', 'Real-Time Content Approval QA', 'Cross-Platform Coordination', 'Comprehensive Post-Campaign Reports'],
    imageKey: 'serviceCampaign',
  },
  {
    id: 'content-creative',
    number: '04',
    title: 'Content & Creative Studio',
    tagline: 'Scroll-stopping content for the new generation.',
    description: 'In-house conceptualization and post-production for high-retention Reels, TikToks, Shorts, branded podcast spots, and dynamic motion assets.',
    features: ['High-Retention Short Form (Reels/Shorts)', 'Scriptwriting & Narrative Hooks', 'Cinematic On-Location Shoots', 'Dynamic Motion & Post-Production'],
    imageKey: 'serviceCreative',
  },
];

export const workData: ProjectItem[] = [
  {
    id: 'work-1',
    category: 'Fashion',
    title: 'Urban Streetwear Monsoon Launch',
    brand: 'UrbanFit Apparel',
    description: 'Multi-creator streetwear aesthetic film series across Mumbai, Delhi, and Bangalore.',
    reach: '4.2M',
    engagement: '12.5%',
    clicks: '230K',
    imageKey: 'workFashion',
    badge: 'Trending Campaign',
  },
  {
    id: 'work-2',
    category: 'Beauty',
    title: 'Hydra-Dew Botanical Serum Launch',
    brand: 'SkinMuse Naturals',
    description: 'Organic skincare UGC reviews and unvarnished morning skincare routine Reels.',
    reach: '3.8M',
    engagement: '11.2%',
    clicks: '180K',
    imageKey: 'workSkincare',
    badge: '3.4x Sales Spike',
  },
  {
    id: 'work-3',
    category: 'Lifestyle',
    title: 'Artisan Cafe & Gourmet Dining Tour',
    brand: 'Zest Gourmet Hubs',
    description: 'Foodie creators capturing sensory close-ups and viral Sunday brunch stories.',
    reach: '5.1M',
    engagement: '14.6%',
    clicks: '310K',
    imageKey: 'workLifestyle',
    badge: 'Viral Sound Audio',
  },
  {
    id: 'work-4',
    category: 'Travel',
    title: 'Himalayan Highs Expedition Series',
    brand: 'Nomad Outfitters',
    description: 'Adventure travel creators testing winter gear in sub-zero Spiti Valley terrain.',
    reach: '2.9M',
    engagement: '10.8%',
    clicks: '150K',
    imageKey: 'workTravel',
    badge: 'High Conversion',
  },
  {
    id: 'work-5',
    category: 'Food',
    title: 'Craft Pizza & Midnight Cravings',
    brand: 'Crust & Co.',
    description: 'Authentic creator taste test reactions and exclusive influencer discount codes.',
    reach: '3.4M',
    engagement: '13.1%',
    clicks: '195K',
    imageKey: 'workFood',
    badge: '18K Orders Generated',
  },
  {
    id: 'work-6',
    category: 'Tech',
    title: 'Studio Pro Active Noise-Canceling',
    brand: 'Aura Audio India',
    description: 'Sound engineer creators and lifestyle commuters testing immersive spatial sound.',
    reach: '3.1M',
    engagement: '9.8%',
    clicks: '140K',
    imageKey: 'workTech',
    badge: 'Sold Out First Batch',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand & Decode',
    description: 'We deconstruct your brand DNA, target demographics, commercial KPIs, and past campaign performance.',
    highlight: 'Audience Insight',
  },
  {
    step: '02',
    title: 'Find & Match',
    description: 'Our proprietary vetting screens for true audience authenticity, engagement health, and brand affinity.',
    highlight: 'Zero Fake Followers',
  },
  {
    step: '03',
    title: 'Create & Direct',
    description: 'We develop custom campaign hooks, briefs, and storyboards while protecting each creator’s organic voice.',
    highlight: 'Scroll-Stopping Content',
  },
  {
    step: '04',
    title: 'Amplify & Optimize',
    description: 'We turn winning organic content into high-converting paid UGC ads, scaling reach and tracking conversions.',
    highlight: 'Measurable ROI',
  },
];

export const whyUsPillars: WhyUsPillar[] = [
  {
    title: 'Curated Creator Network',
    subtitle: 'Vetted Quality',
    description: 'We work directly with genuine storytellers who command deep trust, avoiding vanity metrics and bloated agencies.',
  },
  {
    title: 'Data-Driven Strategy',
    subtitle: 'Scientific Targeting',
    description: 'Every creator selection is backed by audience demographic data, active engagement benchmarks, and historical ROAS.',
  },
  {
    title: 'End-to-End Management',
    subtitle: 'Turnkey Simplicity',
    description: 'From initial outreach and contractual agreements to product fulfillment and compliance, we handle every detail.',
  },
  {
    title: 'Creative Excellence',
    subtitle: 'Editorial Craft',
    description: 'We don’t settle for generic sponsored posts. We craft cinematic narratives that audiences actively save and share.',
  },
  {
    title: 'Real Measurable Results',
    subtitle: 'Transparent Dashboards',
    description: 'Live performance metrics, UTM link tracking, swipe-up conversions, and transparent commercial outcome attribution.',
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't-1',
    quote: 'Influencer Weds Marketing transformed our product launch. Their creator curation was laser-accurate, delivering 3.4x our projected sales lift without feeling promotional.',
    name: 'Ritika Sharma',
    role: 'Head of Growth',
    company: 'GlowLab Skincare',
    rating: 5,
    highlight: '3.4x Sales Lift',
  },
  {
    id: 't-2',
    quote: 'Seamless collaboration, sharp creative direction, and zero friction. Our apparel launch reached over 4 million fashion enthusiasts in under a week.',
    name: 'Aman Verma',
    role: 'Marketing Lead',
    company: 'UrbanFit India',
    rating: 5,
    highlight: '4M+ Target Reach',
  },
  {
    id: 't-3',
    quote: 'They genuinely understand both creator freedom and corporate brand boundaries. The UGC ads they produced continue to be our lowest CPA campaigns.',
    name: 'Neha Kapoor',
    role: 'Founder & CMO',
    company: 'SkinMuse Naturals',
    rating: 5,
    highlight: 'Lowest CPA Achieved',
  },
];

export const faqsData: FAQItem[] = [
  {
    question: 'How do you choose which creators are right for our brand?',
    answer: 'We analyze audience demographics, follower authenticity, engagement health (excluding pods/bots), and previous brand affinity to ensure your budget connects with genuine buyers.',
  },
  {
    question: 'Do you work only with creators in Bhopal or Pan-India?',
    answer: 'While our strategic headquarters is based in Bhopal, Madhya Pradesh, our creator network spans across tier-1, tier-2, and tier-3 cities across all major Indian states.',
  },
  {
    question: 'How long does a typical campaign take to launch?',
    answer: 'A standard sprint takes 2 to 3 weeks from kickoff briefing, creator matchmaking, and product delivery to live publishing and paid whitelisting.',
  },
  {
    question: 'How do you measure and report campaign ROI?',
    answer: 'We provide real-time dashboard analytics tracking impressions, verified engagement rates, link clicks, coupon code usage, and cost per acquisition (CPA).',
  },
];
