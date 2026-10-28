export const BRAND_INFO = {
  businessName: 'Marci Metzger - THE RIDGE REALTY GROUP',
  realtorName: 'MARCI METZGER',
  roleTitle: 'Pahrump Realtor',
  experienceTagline: 'REALTOR FOR NEARLY 3 DECADES',
  phoneDisplay: '206-919-6886',
  phoneFormatted: '(206) 919-6886',
  phoneHref: 'tel:2069196886',
  address: '3190 HW-160, Suite F, Pahrump, Nevada 89048, United States',
  hoursSummary: 'Open daily, 8:00 am–7:00 pm',
  hoursNote: 'Appointments outside office hours available upon request. Just call!',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=3190+HW-160+Suite+F+Pahrump+NV+89048',
  coordinates: {
    lat: 36.184402445333134,
    lng: -115.95528754494798,
  },
  copyright: 'Copyright © 2026 Marci METZGER - All Rights Reserved',
  logo: {
    src: '/assets/images/brand-logo.png',
    alt: 'Marci Metzger Homes - The Ridge Realty Group logo',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home', isCurrent: true },
  { label: 'Listings', href: '#listings' },
  { label: "Let's Move", href: '#lets-move' },
  { label: 'About Us', href: '#about-us' },
];

export const HERO_CONTENT = {
  eyebrow: 'Pahrump Realtor',
  heading: 'MARCI METZGER',
  subheading: 'REALTOR FOR NEARLY 3 DECADES',
  phone: '206-919-6886',
  ctaLabel: 'CALL NOW',
  image: {
    src: '/assets/images/hero.jpg',
    alt: 'Mountain Falls golf course pond with fountains and Pahrump mountain backdrop at sunrise',
  },
};

export const REALTOR_CONTENT = {
  heading: 'MARCI METZGER',
  subheading: 'REALTOR FOR NEARLY 3 DECADES',
  phone: '206-919-6886',
  portrait: {
    src: '/assets/images/realtor-portrait.jpg',
    alt: 'Portrait of Marci Metzger, Pahrump Realtor with The Ridge Realty Group',
  },
  achievement: {
    sectionTitle: 'GET IT SOLD',
    headline: 'Top Residential Sales Last 5 Years',
    statHighlight: 'We helped nearly 90 clients in 2021, and closed 28.5 million in sales!',
    description:
      'Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.',
    image: {
      src: '/assets/images/sales-achievement.jpg',
      alt: 'Bright contemporary kitchen with marble waterfall island and pendant lighting',
    },
  },
};

export const AFFILIATIONS = [
  {
    id: 'ridge-realty',
    name: 'The Ridge Realty Group',
    src: '/assets/images/partner-ridge-realty.png',
    alt: 'The Ridge Realty Group logo',
  },
  {
    id: 'equal-housing',
    name: 'Equal Housing Opportunity',
    src: '/assets/images/partner-equal-housing.png',
    alt: 'Equal Housing Opportunity official emblem',
  },
  {
    id: 'realtor',
    name: 'National Association of Realtors',
    src: '/assets/images/partner-realtor.jpg',
    alt: 'Official REALTOR® member emblem',
  },
  {
    id: 'chamber',
    name: 'Pahrump Valley Chamber of Commerce',
    src: '/assets/images/partner-chamber.jpg',
    alt: 'Pahrump Valley Chamber of Commerce member logo',
  },
];

export const GUIDANCE_BLOCKS = [
  {
    id: 'seller-guidance',
    audience: 'For Home Sellers',
    heading: "Don't Just List it...",
    subheading: 'Get it SOLD!',
    description:
      'We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.',
    image: {
      src: '/assets/images/seller-guidance.jpg',
      alt: 'Two-story desert home at twilight with illuminated exterior and swimming pool',
    },
    ctaText: 'Discuss Selling Your Home',
    ctaHref: '#contact',
  },
  {
    id: 'buyer-guidance',
    audience: 'For Home Buyers',
    heading: 'Guide to Buyers',
    subheading: null,
    description:
      'Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!',
    image: {
      src: '/assets/images/buyer-guidance.jpg',
      alt: 'House keys with a red house-shaped keychain resting on a wooden table',
    },
    ctaText: 'Request Buyer Guidance',
    ctaHref: '#contact',
  },
];

export const PROPERTY_SEARCH_CONFIG = {
  heading: 'Find Your Dream Home',
  subheading: 'Search Listings',
  buttonLabel: 'Search Now',
  backgroundImage: {
    src: '/assets/images/search-bg.jpg',
    alt: 'Modern luxury desert home exterior with pool',
  },
  locations: [
    { value: '', label: 'Any Location' },
    { value: 'Pahrump', label: 'Pahrump, NV' },
    { value: 'Mountain Falls', label: 'Mountain Falls (Pahrump)' },
    { value: 'Las Vegas', label: 'Las Vegas, NV' },
    { value: 'Henderson', label: 'Henderson, NV' },
    { value: 'Nye County', label: 'Nye County, NV' },
  ],
  types: [
    { value: '', label: 'Any Type' },
    { value: 'Single Family', label: 'Single Family Residence' },
    { value: 'Condo / Townhome', label: 'Condo / Townhome' },
    { value: 'Manufactured / Mobile', label: 'Manufactured / Mobile Home' },
    { value: 'Land / Lot', label: 'Vacant Land / Lot' },
    { value: 'Commercial', label: 'Commercial Property' },
  ],
  sortOptions: [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'price-asc', label: 'Least Expensive to Most' },
    { value: 'price-desc', label: 'Most Expensive to Least' },
    { value: 'beds-asc', label: 'Bedrooms (Low to High)' },
    { value: 'beds-desc', label: 'Bedrooms (High to Low)' },
    { value: 'baths-asc', label: 'Bathrooms (Low to High)' },
    { value: 'baths-desc', label: 'Bathrooms (High to Low)' },
  ],
  bedrooms: [
    { value: '', label: 'Any Number' },
    { value: 'Studio', label: 'Studio' },
    { value: '1+', label: '1+' },
    { value: '2+', label: '2+' },
    { value: '3+', label: '3+' },
    { value: '4+', label: '4+' },
    { value: '5+', label: '5+' },
    { value: '6+', label: '6+' },
  ],
  baths: [
    { value: '', label: 'Any Number' },
    { value: '1+', label: '1+' },
    { value: '2+', label: '2+' },
    { value: '3+', label: '3+' },
    { value: '4+', label: '4+' },
    { value: '5+', label: '5+' },
    { value: '6+', label: '6+' },
  ],
};

export const GALLERY_IMAGES = [
  {
    id: 'gallery-01',
    src: '/assets/images/gallery-01.jpg',
    title: '4460 Roseworthy — Aerial View & Desert Mountain Backdrop',
    location: 'Pahrump, NV',
    alt: 'Aerial photograph of 4460 Roseworthy single-story desert home with circular driveway and mountain views in Pahrump, Nevada',
  },
  {
    id: 'gallery-02',
    src: '/assets/images/gallery-02.jpg',
    title: '5570 Ailanto — Gated Entry & Desert Landscaping',
    location: 'Pahrump, NV',
    alt: 'Front exterior and gated courtyard of 5570 Ailanto desert property with mature landscaping in Pahrump, Nevada',
  },
  {
    id: 'gallery-03',
    src: '/assets/images/gallery-03.jpg',
    title: '5570 Ailanto — Covered Patio & Backyard Pool',
    location: 'Pahrump, NV',
    alt: 'Backyard swimming pool and covered patio entertaining area at 5570 Ailanto in Pahrump, Nevada',
  },
  {
    id: 'gallery-04',
    src: '/assets/images/gallery-04.jpg',
    title: '5570 Ailanto — Aerial Estate & Pool Overview',
    location: 'Pahrump, NV',
    alt: 'Elevated aerial view of 5570 Ailanto residence showcasing the backyard pool, detached garage, and acreage',
  },
  {
    id: 'gallery-05',
    src: '/assets/images/gallery-05.jpg',
    title: '4787 E Beacon Ridge — Community Recreation & Tennis Courts',
    location: 'Pahrump, NV',
    alt: 'Aerial view of community tennis courts, swimming pool, and clubhouse near 4787 E Beacon Ridge in Pahrump, Nevada',
  },
  {
    id: 'gallery-06',
    src: '/assets/images/gallery-06.jpg',
    title: '4787 E Beacon Ridge — Golf Course & Sunset Mountains',
    location: 'Pahrump, NV',
    alt: 'Aerial view over lush green golf course fairways and residential neighborhood at sunset near 4787 E Beacon Ridge',
  },
  {
    id: 'gallery-07',
    src: '/assets/images/gallery-07.jpg',
    title: '4787 E Beacon Ridge — Residence Exterior & Three-Car Garage',
    location: 'Pahrump, NV',
    alt: 'Front elevation of 4787 E Beacon Ridge single-story desert residence with stone accents and three-car garage',
  },
];

export const SERVICES_CONTENT = {
  sectionHeading: 'Our Services',
  items: [
    {
      id: 'service-01',
      heading: 'Real Estate Done Right',
      subheading: 'Commercial & Residential',
      description:
        "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
      image: {
        src: '/assets/images/service-01.jpg',
        alt: 'Inviting residential living room with natural light and coffee table decor',
      },
    },
    {
      id: 'service-02',
      heading: 'Commercial & Residential',
      subheading: 'Every Property Type & Price Point',
      description:
        "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
      image: {
        src: '/assets/images/service-02.jpg',
        alt: 'Contemporary white two-story residence with manicured lawn at dusk',
      },
    },
    {
      id: 'service-03',
      heading: 'Rely on Expertise',
      subheading: 'Trusted Local Guidance & Connections',
      description:
        'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.',
      image: {
        src: '/assets/images/service-03.jpg',
        alt: 'Real estate advisor shaking hands with clients across an office desk',
      },
    },
  ],
};

export const OFFICE_HOURS = [
  { day: 'Monday', hours: '08:00 am – 07:00 pm', dayIndex: 1 },
  { day: 'Tuesday', hours: '08:00 am – 07:00 pm', dayIndex: 2 },
  { day: 'Wednesday', hours: '08:00 am – 07:00 pm', dayIndex: 3 },
  { day: 'Thursday', hours: '08:00 am – 07:00 pm', dayIndex: 4 },
  { day: 'Friday', hours: '08:00 am – 07:00 pm', dayIndex: 5 },
  { day: 'Saturday', hours: '08:00 am – 07:00 pm', dayIndex: 6 },
  { day: 'Sunday', hours: '08:00 am – 07:00 pm', dayIndex: 0 },
];

export const SOCIAL_LINKS = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/MarciHomes/',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/marcimetzger_theridge/',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marci-metzger-30642496/',
  },
  {
    id: 'yelp',
    label: 'Yelp',
    href: 'https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w',
  },
];

export const COOKIE_NOTICE = {
  heading: 'This website uses cookies.',
  description:
    'We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.',
  acceptLabel: 'Accept',
};
