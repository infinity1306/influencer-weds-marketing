/**
 * Centralized Image Asset Map for Influencer Weds Marketing
 * Allows client to replace any visual asset in one single configuration file.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const imageMap: Record<string, ImageAsset> = {
  // Hero Section
  heroCreator: {
    src: '/assets/images/hero-creator.webp',
    alt: 'Leading Indian fashion and lifestyle creator with sunglasses',
    width: 980,
    height: 980,
  },
  heroPolaroid1: {
    src: '/assets/images/hero-polaroid-1.webp',
    alt: 'Creator editorial look over shoulder',
    width: 280,
    height: 310,
  },
  heroPolaroid2: {
    src: '/assets/images/hero-polaroid-2.webp',
    alt: 'Creator profile aesthetic portrait',
    width: 300,
    height: 300,
  },
  heroPolaroid3: {
    src: '/assets/images/hero-polaroid-3.webp',
    alt: 'Creator authentic smartphone selfie content',
    width: 300,
    height: 230,
  },

  // About Section
  aboutCreator: {
    src: '/assets/images/about-creator.webp',
    alt: 'Male creator and director in urban setting',
    width: 850,
    height: 960,
  },
  aboutPolaroid1: {
    src: '/assets/images/about-polaroid-1.webp',
    alt: 'Urban creator black and white street portrait',
    width: 290,
    height: 350,
  },
  aboutPolaroid2: {
    src: '/assets/images/about-polaroid-2.webp',
    alt: 'Creator portrait looking upward',
    width: 300,
    height: 320,
  },
  aboutPolaroid3: {
    src: '/assets/images/about-polaroid-3.webp',
    alt: 'Cinematographer holding camera stabilizer rig',
    width: 300,
    height: 350,
  },

  // Services
  serviceInfluencer: {
    src: '/assets/images/service-influencer.webp',
    alt: 'Creator recording high-engagement video with ring light and smartphone',
    width: 300,
    height: 380,
  },
  serviceDigital: {
    src: '/assets/images/service-digital.webp',
    alt: 'Performance marketing dashboard showing exponential analytics growth',
    width: 300,
    height: 380,
  },
  serviceCreative: {
    src: '/assets/images/service-creative.webp',
    alt: 'Content editor crafting scroll-stopping video timeline',
    width: 300,
    height: 380,
  },
  serviceCampaign: {
    src: '/assets/images/service-campaign.webp',
    alt: 'Production crew executing end-to-end commercial campaign',
    width: 300,
    height: 380,
  },

  // Featured Work / Case Studies
  workFashion: {
    src: '/assets/images/work-fashion.webp',
    alt: 'High street urban fashion campaign with 4.2M reach',
    width: 500,
    height: 360,
  },
  workSkincare: {
    src: '/assets/images/work-skincare.webp',
    alt: 'Skincare serum cosmetic product launch with UGC Reels',
    width: 500,
    height: 360,
  },
  workLifestyle: {
    src: '/assets/images/work-lifestyle.webp',
    alt: 'Lifestyle and gourmet dining viral campaign',
    width: 500,
    height: 360,
  },
  workTravel: {
    src: '/assets/images/work-travel.webp',
    alt: 'High-altitude mountain expedition travel influencer campaign',
    width: 500,
    height: 360,
  },
  workFood: {
    src: '/assets/images/work-food.webp',
    alt: 'Food brand viral reel series and creator tastings',
    width: 500,
    height: 360,
  },
  workTech: {
    src: '/assets/images/work-tech.webp',
    alt: 'Consumer tech and smart gadget unboxing campaign',
    width: 500,
    height: 360,
  },

  // Community & Why Us
  whyCreator: {
    src: '/assets/images/why-creator.webp',
    alt: 'Creator with laptop and strategic campaign vision',
    width: 600,
    height: 400,
  },
  communityCollage: {
    src: '/assets/images/community-collage.webp',
    alt: 'Creator community meetup and collaborative story sessions',
    width: 600,
    height: 400,
  },

  // CTA Section
  ctaCreator: {
    src: '/assets/images/cta-creator.webp',
    alt: 'Dynamic creator reaching out to invite collaboration',
    width: 800,
    height: 500,
  },
};
