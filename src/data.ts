const px = (id: number, w = 800, h?: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}${
    h ? `&h=${h}&fit=crop` : ""
  }`;

/* -------------------------------------------------- storage */
export const STORAGE_KEY = "luxe_user_appointments";

/* -------------------------------------------------- images */

export const IMG = {
  homeHero: px(7750092, 1800, 900),
  aboutHero: px(19689227, 1800, 800),
  aboutReception: px(7750108, 1000, 1100),
  membershipHero: px(7750102, 1800, 900),
  guidanceRoom: px(7195811, 1100, 800),

  previewHair: px(7388920, 700, 500),
  previewNail: px(3997385, 700, 500),
  previewSpa: px(6629530, 700, 500),
  previewBridal: px(12708653, 700, 500),

  artisanAmna: px(1181686, 700, 900),
  artisanYousuf: px(8468132, 700, 900),
  artisanSarah: px(3756523, 700, 900),

  before: px(8467964, 760, 900),
  after: px(3993320, 760, 900),
  avatarZainab: px(6100178, 200, 200),

  keratinDetail: px(3356211, 1000, 900),
  relatedOlaplex: px(7388920, 800, 500),
  relatedDetox: px(5240639, 800, 500),
  relatedGloss: px(35719221, 800, 500),

  teamSarah: px(774909, 800, 800),
  teamAyesha: px(3993469, 800, 800),
  teamFatima: px(3993302, 800, 800),
  teamHira: px(1181695, 800, 800),
  teamZainab: px(5128187, 800, 800),
  teamMaria: px(3996169, 800, 800),
  spotlight: px(5704847, 1000, 1150),
  spotThumb1: px(8467964, 300, 300),
  spotThumb2: px(6144281, 300, 300),
  spotThumb3: px(3993320, 300, 300),
  spotThumb4: px(8891485, 300, 300),

  aboutAmna: px(1181686, 300, 300),
  aboutYousuf: px(8468132, 300, 300),
  aboutMaria: px(1181695, 300, 300),
  aboutRina: px(3996169, 300, 300),

  svcCut: px(8467964, 800, 560),
  svcKeratin: px(5368632, 800, 560),
  svcBalayage: px(3993320, 800, 560),
  svcDeep: px(6144281, 800, 560),
  svcBridalHair: px(4783425, 800, 560),
  svcScalp: px(13899845, 800, 560),
  svcNail1: px(4530187, 800, 560),
  svcNail2: px(3997347, 800, 560),
  svcNail3: px(3997380, 800, 560),
  svcSpa1: px(6629530, 800, 560),
  svcSpa2: px(5240634, 800, 560),
  svcSpa3: px(7109664, 800, 560),
  svcClin1: px(5069458, 800, 560),
  svcClin2: px(7011227, 800, 560),
  svcClin3: px(8945828, 800, 560),
  svcBrid1: px(36102603, 800, 560),
  svcBrid2: px(20883949, 800, 560),
  svcBrid3: px(4783425, 800, 560),
  svcMake1: px(11528800, 800, 560),
  svcMake2: px(19376116, 800, 560),
  svcMake3: px(7256079, 800, 560),

  gal1: px(11528800, 700, 860),
  gal2: px(6629521, 700, 520),
  gal3: px(18700114, 700, 950),
  gal4: px(16041439, 700, 760),
  gal5: px(3997347, 700, 620),
  gal6: px(9197350, 700, 880),
  gal7: px(32081733, 700, 800),
  gal8: px(17320162, 700, 700),
  gal9: px(19376116, 700, 900),
  gal10: px(7109664, 700, 540),
  gal11: px(13899845, 700, 820),
  gal12: px(3997380, 700, 700),

  bridalHero: px(7750092, 1800, 800),
  bridalFabric: px(20883949, 1000, 1000),

  story1: px(17154861, 600, 600),
  story2: px(7750108, 600, 600),
  story3: px(8096934, 600, 600),
  story4: px(3997385, 600, 600),
  story5: px(3997380, 600, 600),
  story6: px(19689227, 600, 600),
  story7: px(7031713, 600, 600),
  story8: px(5240634, 600, 600),

  journal1: px(5069458, 800, 520),
  journal2: px(35059564, 800, 520),
  journal3: px(3993320, 800, 520),
  journal4: px(5240634, 800, 520),
};

/* -------------------------------------------------- content */

export const HOME_PREVIEWS = [
  {
    img: IMG.previewHair,
    icon: "scissors",
    title: "Couture Hair Care",
    text: "From advanced color transformation balayage to Parisian Kérastase hair spa therapy customized by premier colorists.",
  },
  {
    img: IMG.previewNail,
    icon: "palette",    title: "Luxury Nail Artistry",
    text: "Pamper your nails with elite OPI gel sets, bespoke custom geometric hand-drawn art, and revitalizing organic rose-milk manicures.",
  },
  {
    img: IMG.previewSpa,
    icon: "leaf",
    title: "Calming Spa Rituals",
    text: "Decompress with holistic aromatherapy massages, Swedish full-body luxury release, and rich herbal body polish therapies.",
  },
  {
    img: IMG.previewBridal,
    icon: "gem",
    title: "Bespoke Bridal",
    text: "Timeless elegance for the modern bride. Flawless contouring, luxury skin-prep, and couture veil & hair sculpting precision.",
  },
];

export const LUXE_CARDS = [
  {
    icon: "award",
    title: "Expert Certified Stylists",
    text: "Our colorists and master therapists undergo regular global training from Paris & New York, specializing in bespoke couture hair and skin profiles.",
  },
  {
    icon: "droplet",
    title: "World-Class Premium Brands",
    text: "We exclusively formulate with premium certified brands: Kérastase, Olaplex, Dermalogica, OPI, and organic cold-pressed botanicals.",
  },
  {
    icon: "shield",
    title: "Sterile & Clean Sanctuary",
    text: "A beautifully curated safe space. Each private room is fitted with advanced HEPA air filtration, calming acoustics, and pristine organic linens.",
  },
];

export const MASTERS = [
  {
    img: IMG.artisanAmna,
    name: "Elena Vance",
    role: "Creative Director & Lead Bridal Artist",
    text: "12+ years masterfully styling celebrity & couture brides, trained at Paris Academy.",
    cta: "Book with Elena",
  },
  {
    img: IMG.artisanYousuf,
    name: "Marcus Hayes",
    role: "Master Hair Colorist & Stylist",
    text: "Balayage specialist and Kérastase certified professional with New York salon pedigree.",
    cta: "Book with Marcus",
  },
  {
    img: IMG.artisanSarah,
    name: "Sarah Joseph",
    role: "Holistic Skin & Spa Specialist",
    text: "Over 8 years crafting bespoke botanical therapies and clinical glow facials.",
    cta: "Book with Sarah",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Finding a salon that balances contemporary hair artistry with calming holistic care seemed impossible until I found Luxe Haven. Elena's bridal styling lasted flawlessly through our entire reception, and the private spa suites are unmatched. The gold standard in Beverly Hills.",
    name: "Victoria Sterling",
    role: "Bridal Client · Beverly Hills",
    avatar: IMG.avatarZainab,
  },
  {
    quote:
      "The clinical cleanliness standards here are exceptional. Surgical-grade hygiene paired with that warm, unhurried service — my monthly facial with Sarah Joseph has become the highlight of my routine. Nothing in Los Angeles compares.",
    name: "Claire Davenport",
    role: "Luxe Member · 2 Years",
    avatar: IMG.avatarZainab,
  },
  {
    quote:
      "My keratin blowout survived the coastal humidity without a single frizz. Marcus understood my hair profile better than anyone before, and the aftercare regimen was precise. Worth every penny of the $280 investment.",
    name: "Olivia Chen",
    role: "Client · West Hollywood",
    avatar: IMG.avatarZainab,
  },
];

export const STORIES = [
  IMG.story1, IMG.story2, IMG.story3, IMG.story4,
  IMG.story5, IMG.story6, IMG.story7, IMG.story8,
];

/* ---------------- services ---------------- */

export type Service = {
  img: string;
  time: string;
  price: string;
  title: string;
  text: string;
};

export const SERVICE_TABS: { id: string; label: string; items: Service[] }[] = [
  {
    id: "hair",
    label: "Hair Care",
    items: [
      { img: IMG.svcCut, time: "60 min", price: "$95", title: "Luxury Hair Cut & Style", text: "Customized hair architecture by master stylist. Includes priority consultation, deep relaxing rose-milk wash, and custom blow-dry." },
      { img: IMG.svcKeratin, time: "120 min", price: "$280", title: "Keratin Smooth Treatment", text: "Restore structure to color-treated locks. Eliminates frizz completely while preserving rich natural volume and flow." },
      { img: IMG.svcBalayage, time: "180 min", price: "$320", title: "Balayage & Custom Highlights", text: "Artisanal hand-painted French balayage blending premium ammonia-free formulas safe for delicate hair profiles." },
      { img: IMG.svcDeep, time: "45 min", price: "$75", title: "Deep Conditioning Kérastase", text: "An intensive nutritive repair masque customized to lock moisture deep inside weak, heat-damaged and dry cuticles." },
      { img: IMG.svcBridalHair, time: "90 min", price: "$220", title: "Elite Bridal Hair Sculpting", text: "Customized structure matching your gown neckline and heirloom headpiece. Includes priority trial session." },
      { img: IMG.svcScalp, time: "30 min", price: "$65", title: "Scalp Therapy & Massage", text: "Advanced scalp micro-peel formulation paired with a revitalizing pressure-point head massage using warm botanical oils." },
    ],
  },
  {
    id: "nail",
    label: "Nail Artistry",
    items: [
      { img: IMG.svcNail1, time: "45 min", price: "$60", title: "Signature OPI Gel Manicure", text: "Elite OPI gel sets with flawless cuticle sculpting and a mirror-shine top seal, durable and safe for weeks." },
      { img: IMG.svcNail2, time: "60 min", price: "$85", title: "Custom Geometric Nail Artistry", text: "Bespoke hand-painted geometric patterns designed with you, finished in premium non-toxic pigments." },
      { img: IMG.svcNail3, time: "75 min", price: "$110", title: "Rose-Milk Spa Mani-Pedi", text: "Revitalizing organic rose-milk immersion, herbal peel, and hot-stone relaxation for complete hand and foot care." },
    ],
  },
  {
    id: "spa",
    label: "Spa & Wellness",
    items: [
      { img: IMG.svcSpa1, time: "60 min", price: "$160", title: "Swedish Full-Body Luxury Release", text: "Long, flowing pressure strokes with warm botanical oils to melt metropolitan tension from the shoulders down." },
      { img: IMG.svcSpa2, time: "45 min", price: "$140", title: "Aromatherapy Decompression Ritual", text: "Essential-oil diffusion paired with slow rhythmic massage in a private acoustically softened suite." },
      { img: IMG.svcSpa3, time: "50 min", price: "$150", title: "Herbal Body Polish & Rose Bath", text: "Cold-pressed herbal sugar scrub followed by a petal-infused rose immersion to soften and revive skin." },
    ],
  },
  {
    id: "clinical",
    label: "Clinical Skin Care",
    items: [
      { img: IMG.svcClin1, time: "60 min", price: "$175", title: "Dermalogica Deep Clarifying Facial", text: "Clinically calibrated Dermalogica protocol targeting congestion, tone and luminosity for radiant, clear skin." },
      { img: IMG.svcClin2, time: "40 min", price: "$145", title: "Clinical LED Glow Therapy", text: "Gentle multi-spectrum light therapy with clean peptide actives to boost collagen and calm reactive skin." },
      { img: IMG.svcClin3, time: "30 min", price: "$75", title: "Scalp Micro-Peel & Detox", text: "A restorative micro-peel that clears build-up and re-energizes follicles before any major color work." },
    ],
  },
  {
    id: "bridal",
    label: "Bespoke Bridal",
    items: [
      { img: IMG.svcBrid1, time: "90 min", price: "$350", title: "HD Bridal Makeup & Lashes", text: "Camera-perfect HD contouring with luxury silk lashes, engineered to last effortlessly through your wedding day." },
      { img: IMG.svcBrid2, time: "60 min", price: "$240", title: "Couture Bridal Hair & Veil Styling", text: "Regal updos and veil placement engineered for headpiece security and all-day comfort." },
      { img: IMG.svcBrid3, time: "6 sessions", price: "$650", title: "Pre-Bridal European Facial Series", text: "A six-week clinical journey of facials, peels and glow therapies that culminates on your wedding morning." },
    ],
  },
  {
    id: "makeup",
    label: "Luxury Makeup",
    items: [
      { img: IMG.svcMake1, time: "45 min", price: "$135", title: "Elegant HD Glam Makeup", text: "Modern soft-glam with HD base, sculpted brows and a luminous finish for galas, engagements, and soirées." },
      { img: IMG.svcMake2, time: "40 min", price: "$120", title: "Red Carpet Soft-Glow Glam", text: "Timeless Hollywood soft-glow artistry highlighting natural beauty with high-definition pigments." },
      { img: IMG.svcMake3, time: "30 min", price: "$85", title: "Event & Cocktail Restyle", text: "Precision touch-up and restyle service to carry your look effortlessly into the evening." },
    ],
  },
];

/* ---------------- team ---------------- */

export const TEAM = [
  { img: IMG.teamSarah, name: "Sarah Jenkins", role: "Senior Colorist", tags: ["Balayage & Repair", "10 Years Exp"], rating: "5.0" },
  { img: IMG.teamAyesha, name: "Elena Vance", role: "Creative Director", tags: ["Couture Bridal Glow", "12 Years Exp"], rating: "5.0" },
  { img: IMG.teamFatima, name: "Chloe Bennett", role: "Nail Artist", tags: ["Bespoke Gel & Hand-Art", "6 Years Exp"], rating: "5.0" },
  { img: IMG.teamHira, name: "Aria Montgomery", role: "Spa Therapist", tags: ["Aromatherapy Release", "9 Years Exp"], rating: "4.9" },
  { img: IMG.teamZainab, name: "Camila Torres", role: "Makeup Artist", tags: ["Red Carpet & HD Glow", "7 Years Exp"], rating: "5.0" },
  { img: IMG.teamMaria, name: "Dr. Maria Ross", role: "Aesthetic Skin Specialist", tags: ["Clinical Dermatology", "8 Years Exp"], rating: "4.9" },
];

export const GALLERY = [
  { img: IMG.gal1, cat: "Hair Transformations", label: "Hair", meta: "Stylist: Sarah Jenkins", tall: true },
  { img: IMG.gal2, cat: "Spa", label: "Spa", meta: "Therapist: Aria Montgomery" },
  { img: IMG.gal3, cat: "Bridal", label: "Bridal", meta: "Stylist: Elena Vance", tall: true },
  { img: IMG.gal4, cat: "Nail Art", label: "Nail Art", meta: "Stylist: Chloe Bennett", tall: true },
  { img: IMG.gal5, cat: "Nail Art", label: "Nail Art", meta: "Stylist: Chloe Bennett" },
  { img: IMG.gal6, cat: "Hair Transformations", label: "Hair", meta: "Stylist: Sarah Jenkins", tall: true },
  { img: IMG.gal7, cat: "Bridal", label: "Bridal", meta: "Stylist: Elena Vance", tall: true },
  { img: IMG.gal8, cat: "Hair Transformations", label: "Hair Transformation", meta: "Sarah Jenkins · Keratin Blowout" },
  { img: IMG.gal9, cat: "Makeup", label: "Makeup", meta: "Stylist: Camila Torres", tall: true },
  { img: IMG.gal10, cat: "Spa", label: "Spa", meta: "Therapist: Aria Montgomery" },
  { img: IMG.gal11, cat: "Spa", label: "Spa", meta: "Therapist: Dr. Maria Ross", tall: true },
  { img: IMG.gal12, cat: "Nail Art", label: "Nail Art", meta: "Stylist: Chloe Bennett" },
];

export const BRIDAL_PACKAGES = [
  {
    name: "Glow Package",
    price: "$450",
    features: ["Premium Hair Styling & Blowout", "Elegant HD Basic Makeup", "Signature Gel Nail Art", "Customized Skin Consultation"],
    dark: false,
    popular: false,
  },
  {
    name: "Luxe Package",
    price: "$850",
    features: ["Full Couture Hair & Veil Draping", "Signature HD Bridal Makeup", "Luxury Lashes & Fitting", "Organic Rose-Milk Mani-Pedi", "Pre-Bridal European Facial"],
    dark: true,
    popular: true,
  },
  {
    name: "Elite Package",
    price: "$1,500",
    features: ["All Luxe Package Indulgences", "Rehearsal Dinner Glow Look", "Wedding Day Full Transformation", "2 Full Trial Sessions with Elena", "Complete Clinical Skincare Regimen"],
    dark: false,
    popular: false,
  },
];

export const BRIDAL_TIMELINE = [
  { when: "6 Months Before", title: "Hair Growth & Skin Plan", text: "Start customized scalp detox and clinical laser/facial therapy series." },
  { when: "3 Months Before", title: "Trials & Style Match", text: "Book your mock consultations and pin down your moodboards with Elena." },
  { when: "1 Month Before", title: "Advanced Color Treatment", text: "Settle in your perfect signature balayage or deep protein hair therapies." },
  { when: "1 Week Before", title: "Glow Facials & Mani Pedi", text: "Rejuvenate with organic rose-milk skin treatments and elite OPI nail curation." },
  { when: "The Wedding Day", title: "Sublime Mastery Reveal", text: "Relax inside your private sterilized suite while our team delivers magic." },
];

export const MEMBERSHIP_TIERS = [
  {
    tier: "Tier One",
    name: "Glow Membership",
    price: "$89 / mo",
    features: [
      "10% off all standard salon services",
      "2 complimentary deep-conditioning add-ons",
      "Priority same-day booking access",
      "Seasonal member-only treatment menu",
    ],
    dark: false,
    popular: false,
  },
  {
    tier: "Tier Two",
    name: "Luxe Membership",
    price: "$189 / mo",
    features: [
      "20% off all hair, skin, and spa services",
      "Free scalp therapy with every wash & blow",
      "1 complimentary guest pass monthly",
      "Early access to bridal seasonal slots",
    ],
    dark: false,
    popular: true,
  },
  {
    tier: "Tier Three",
    name: "Elite VIP Sanctuary",
    price: "$349 / mo",
    features: [
      "30% off all hair care & aesthetic therapies",
      "Dedicated master stylist assignment",
      "Unlimited priority access & guest passes",
      "Private suite for all appointments",
    ],
    dark: true,
    popular: false,
  },
];

export const ARTICLES = [
  {
    slug: "clean-skincare-california-summer",
    author: "Dr. Maria Ross",
    img: IMG.journal1,
    tag: "Skincare",
    date: "May 12, 2026",
    title: "5 Essential Clean Skincare Tips for California Sun & Summer",
    text: "Our resident aesthetician, Dr. Maria Ross, details standard safe practices to preserve glowing balance during the sunniest months.",
    content: "The California sun can be both beautiful and harsh on delicate facial skin. As temperatures rise, maintaining a balanced, glowing complexion requires more than just your standard SPF.\n\nFirst, always opt for a mineral-based sunscreen. Chemical filters can cause inflammation when exposed to intense UV rays. Second, incorporate a gentle Vitamin C serum into your morning routine to combat free radical damage.\n\nHydration is also key; switch to a lighter, water-based moisturizer and never forget to drink plenty of water. Finally, book regular micro-peel treatments to clear built-up sunscreen and sweat from your pores. Taking these steps will ensure your skin remains radiant all summer long."
  },
  {
    slug: "ultimate-bridal-beauty-timeline",
    author: "Elena Vance",
    img: IMG.journal2,
    tag: "Bridal Guide",
    date: "April 28, 2026",
    title: "The Ultimate Bridal Beauty Timeline: 6 Months to Flawless Glow",
    text: "From deep scalp detox therapies to flawless micro-contouring trials. Get the step-by-step master plan for the modern bride.",
    content: "Preparing for your wedding day starts long before you walk down the aisle. At Luxe Haven, we recommend beginning your beauty regimen at least six months in advance.\n\nStart by establishing a consistent clinical skincare routine with our aestheticians to address any long-term concerns like hyperpigmentation or texture. Around the three-month mark, book your hair and makeup trial to solidify your aesthetic vision.\n\nAs the big day approaches, focus on hydration and gentle exfoliation. In the final week, treat yourself to our signature Rose-Milk Spa Mani-Pedi and a relaxing massage to melt away pre-wedding stress. Your wedding day glow should be both inner and outer."
  },
  {
    slug: "balayage-vs-highlights",
    author: "Marcus Hayes",
    img: IMG.journal3,
    tag: "Hair Care",
    date: "April 15, 2026",
    title: "Balayage vs. Highlights: What's Best for Your Hair Texture?",
    text: "Senior Colorist Marcus Hayes breaks down global trends, non-ammonia Olaplex protections, and structural hair care standards.",
    content: "When choosing between balayage and traditional highlights, understanding your hair texture and maintenance commitment is essential.\n\nBalayage, a French hand-painting technique, offers a softer, more natural transition that grows out beautifully without harsh root lines. It's ideal for those seeking a low-maintenance yet sophisticated sun-kissed look.\n\nTraditional foil highlights, however, provide precise, uniform color placement and are perfect for achieving maximum brightness or dramatic contrast. Whichever technique you choose, incorporating Olaplex treatments during the process is non-negotiable to maintain the structural integrity of your hair."
  },
  {
    slug: "holistic-aromatherapy-scalp-massages",
    author: "Aria Montgomery",
    img: IMG.journal4,
    tag: "Spa Rituals",
    date: "March 30, 2026",
    title: "Holistic Aromatherapy: Why Scalp Massages Rebuild More Than Strands",
    text: "Explore the ancient, restorative sciences behind our premium organic rose-milk and herbal body polish rituals.",
    content: "A scalp massage is far more than a relaxing add-on at the shampoo bowl; it is a vital holistic therapy.\n\nUsing targeted pressure points and botanical aromatherapy oils, a proper scalp massage stimulates blood circulation, delivering essential oxygen and nutrients directly to the hair follicles. This not only promotes healthier, thicker hair growth but also profoundly reduces stress and tension held in the cranial muscles.\n\nRegular scalp therapies can alleviate headaches, improve sleep quality, and leave you feeling centered and rejuvenated. It is the ultimate fusion of aesthetic care and total wellness."
  },
];

export const FAQS = [
  {
    group: "Booking & Cancellation",
    items: [
      {
        q: "How do I cancel or reschedule my appointment in Beverly Hills?",
        a: "We require a 24-hour advanced notice for any cancellations or reschedules. Late cancellations are subject to a nominal $25 fee. This standard policy respects our stylists' dedicated slots.",
      },
      {
        q: "Can I book a specific specialist or Creative Director directly?",
        a: "Absolutely. Every service on our menu can be assigned to a named artisan. During booking, the Choose Stylist step lets you select your preferred master — and Creative Director Elena Vance's slots are reserved for registered members and bridal clients.",
      },
    ],
  },
  {
    group: "Services & Standards",
    items: [
      {
        q: "Are all your hair and skincare premium products cruelty-free & clean?",
        a: "Yes. We exclusively formulate with clean, premium certified brands — Kérastase, Olaplex, Dermalogica, OPI — alongside our own organic cold-pressed botanicals. Every product on our shelves meets rigorous purity and safety standards before it ever touches your skin or hair.",
      },
    ],
  },
];
