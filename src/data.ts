const px = (id: number, w = 800, h?: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}${
    h ? `&h=${h}&fit=crop` : ""
  }`;

/* -------------------------------------------------- images */

export const IMG = {
  homeHero: px(7750092, 1800, 900),
  aboutHero: px(19689227, 1800, 800),
  aboutReception: px(7750108, 1000, 1100),
  membershipHero: px(7750102, 1800, 900),
  guidanceRoom: px(7195811, 1100, 800),

  previewHair: px(7388920, 700, 500),
  previewNail: px(5484948, 700, 500),
  previewSpa: px(6629530, 700, 500),
  previewBridal: px(12708653, 700, 500),

  artisanAmna: px(33867535, 700, 900),
  artisanYousuf: px(8468132, 700, 900),
  artisanSarah: px(33867539, 700, 900),

  before: px(28994387, 760, 900),
  after: px(35267456, 760, 900),
  avatarZainab: px(6100178, 200, 200),

  keratinDetail: px(3356211, 1000, 900),
  relatedOlaplex: px(7388920, 800, 500),
  relatedDetox: px(5240639, 800, 500),
  relatedGloss: px(35719221, 800, 500),

  teamSarah: px(33867529, 800, 800),
  teamAyesha: px(3993469, 800, 800),
  teamFatima: px(3993302, 800, 800),
  teamHira: px(33867543, 800, 800),
  teamZainab: px(5128187, 800, 800),
  teamMaria: px(33867553, 800, 800),
  spotlight: px(5704847, 1000, 1150),
  spotThumb1: px(28994387, 300, 300),
  spotThumb2: px(6144281, 300, 300),
  spotThumb3: px(35267456, 300, 300),
  spotThumb4: px(8891485, 300, 300),

  aboutAmna: px(33867535, 300, 300),
  aboutYousuf: px(8468132, 300, 300),
  aboutMaria: px(33867543, 300, 300),
  aboutRina: px(33867556, 300, 300),

  svcCut: px(8467964, 800, 560),
  svcKeratin: px(5368632, 800, 560),
  svcBalayage: px(3993320, 800, 560),
  svcDeep: px(6144281, 800, 560),
  svcBridalHair: px(35963259, 800, 560),
  svcScalp: px(13899845, 800, 560),
  svcNail1: px(4530187, 800, 560),
  svcNail2: px(30294773, 800, 560),
  svcNail3: px(34885844, 800, 560),
  svcSpa1: px(6629530, 800, 560),
  svcSpa2: px(5240634, 800, 560),
  svcSpa3: px(7109664, 800, 560),
  svcClin1: px(5069458, 800, 560),
  svcClin2: px(7011227, 800, 560),
  svcClin3: px(8945828, 800, 560),
  svcBrid1: px(36102603, 800, 560),
  svcBrid2: px(20883949, 800, 560),
  svcBrid3: px(38147801, 800, 560),
  svcMake1: px(11528800, 800, 560),
  svcMake2: px(19376116, 800, 560),
  svcMake3: px(7256079, 800, 560),

  gal1: px(11528800, 700, 860),
  gal2: px(6629521, 700, 520),
  gal3: px(18700114, 700, 950),
  gal4: px(16041439, 700, 760),
  gal5: px(30294773, 700, 620),
  gal6: px(9197350, 700, 880),
  gal7: px(32081733, 700, 800),
  gal8: px(17320162, 700, 700),
  gal9: px(19376116, 700, 900),
  gal10: px(7109664, 700, 540),
  gal11: px(13899845, 700, 820),
  gal12: px(34885844, 700, 700),

  bridalHero: px(36102603, 1800, 800),
  bridalFabric: px(20883949, 1000, 1000),

  story1: px(17154861, 600, 600),
  story2: px(36784893, 600, 600),
  story3: px(8096934, 600, 600),
  story4: px(36930152, 600, 600),
  story5: px(34885844, 600, 600),
  story6: px(19689227, 600, 600),
  story7: px(7031713, 600, 600),
  story8: px(35059564, 600, 600),

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
    icon: "palette",
    title: "Luxury Nail Artistry",
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
    text: "Timeless glow for the elegant Pakistani bride. Flawless contouring, luxury skin-prep, and traditional dupatta pinning precision.",
  },
];

export const LUXE_CARDS = [
  {
    icon: "award",
    title: "Expert Certified Stylists",
    text: "Our colorists and master therapists undergo regular global training from Paris & London, specializing in local South Asian hair and skin profiles.",
  },
  {
    icon: "droplet",
    title: "World-Class Premium Brands",
    text: "We exclusively formulate with premium certified brands: Kérastase, Olaplex, Dermalogica, OPI, and organic cold-pressed botanicals.",
  },
  {
    icon: "shield",
    title: "Sterile & Sterilized Sanctuary",
    text: "A beautifully curated safe space. Each private room is fitted with advanced air filters, acoustic calming music, and pristine soft linens.",
  },
];

export const MASTERS = [
  {
    img: IMG.artisanAmna,
    name: "Amna Shah",
    role: "Senior Bridal Makeup Specialist",
    text: "12+ years masterfully contouring Pakistani brides, trained at Paris Academy.",
    cta: "Book with Amna",
  },
  {
    img: IMG.artisanYousuf,
    name: "Yousuf Khan",
    role: "Master Hair Colorist & Stylist",
    text: "Balayage specialist and Kérastase certified professional.",
    cta: "Book with Yousuf",
  },
  {
    img: IMG.artisanSarah,
    name: "Sarah Joseph",
    role: "Holistic Skin & Spa Expert",
    text: "Over 8 years crafting bespoke herbal therapies and glow skin facials.",
    cta: "Book with Sarah",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Finding a salon that understands both modern global hair techniques and our rich Pakistani bridal traditions was impossible until I found Luxe Haven. Amna's makeup stayed fresh through a humid 8-hour outdoor walima, and the private spa rooms are truly therapeutic. The ultimate beauty standard in DHA Lahore.",
    name: "Zainab Malik",
    role: "Bridal Client · DHA Phase 5",
    avatar: IMG.avatarZainab,
  },
  {
    quote:
      "The sterilization standards here are unmatched. Surgical-grade hygiene paired with that warm, unhurried service — my monthly facial with Sarah Joseph has become the anchor of my month. DHA has never seen anything quite like it.",
    name: "Ayesha Raza",
    role: "Luxe Membership · 2 Years",
    avatar: IMG.avatarZainab,
  },
  {
    quote:
      "My keratin blowout survived a full Lahore monsoon without a single frizz. Yousuf understood my hair history better than I did, and the aftercare guidance was precise. Worth every rupee of the PKR 18,000 investment.",
    name: "Fatima Noor",
    role: "Client · DHA Phase 5",
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
      { img: IMG.svcCut, time: "60 min", price: "PKR 5,500", title: "Luxury Hair Cut & Style", text: "Customized hair architecture by master stylist. Includes priority consultation, deep relaxing rose-milk wash, and custom blow-dry." },
      { img: IMG.svcKeratin, time: "120 min", price: "PKR 18,000", title: "Keratin Smooth Treatment", text: "Restore structure to color-treated locks. Eliminates frizz completely while preserving rich natural volume and flow." },
      { img: IMG.svcBalayage, time: "180 min", price: "PKR 25,000", title: "Balayage & Custom Highlights", text: "Artisanal hand-painted sun-kissed French balayage blending premium non-bleach formulas safe for delicate hair profiles." },
      { img: IMG.svcDeep, time: "45 min", price: "PKR 4,500", title: "Deep Conditioning Kérastase", text: "An intensive nutritive repair masque customized to lock moisture deep inside weak, heat-damaged and dry cuticles." },
      { img: IMG.svcBridalHair, time: "90 min", price: "PKR 15,000", title: "Elite Bridal Hair Sculpting", text: "Customized structure matching your royal dupatta and traditional jewelry weight. Includes priority prep trial sessions." },
      { img: IMG.svcScalp, time: "30 min", price: "PKR 3,000", title: "Scalp Therapy & Massage", text: "Advanced scalp micro-peel formulation paired with a revitalizing pressure-point Indian head massage using warm botanical oils." },
    ],
  },
  {
    id: "nail",
    label: "Nail Artistry",
    items: [
      { img: IMG.svcNail1, time: "45 min", price: "PKR 4,000", title: "Signature OPI Gel Manicure", text: "Elite OPI gel sets with flawless cuticle sculpting and a mirror-shine top seal, durable and safe for weeks." },
      { img: IMG.svcNail2, time: "60 min", price: "PKR 6,500", title: "Custom Geometric Nail Artistry", text: "Bespoke hand-painted geometric patterns designed with you, finished in premium non-toxic pigments." },
      { img: IMG.svcNail3, time: "75 min", price: "PKR 8,500", title: "Rose-Milk Spa Mani-Pedi", text: "Revitalizing organic rose-milk immersion, herbal peel, and hot-stone relaxation for complete hand and foot care." },
    ],
  },
  {
    id: "spa",
    label: "Spa & Wellness",
    items: [
      { img: IMG.svcSpa1, time: "60 min", price: "PKR 10,000", title: "Swedish Full-Body Luxury Release", text: "Long, flowing pressure strokes with warm botanical oils to melt metropolitan tension from the shoulders down." },
      { img: IMG.svcSpa2, time: "45 min", price: "PKR 7,500", title: "Aromatherapy Decompression Ritual", text: "Essential-oil diffusion paired with slow rhythmic massage in a private acoustically softened suite." },
      { img: IMG.svcSpa3, time: "50 min", price: "PKR 9,000", title: "Herbal Body Polish & Rose Bath", text: "Cold-pressed herbal sugar scrub followed by a petal-infused rose immersion to soften and revive skin." },
    ],
  },
  {
    id: "clinical",
    label: "Clinical Skin Care",
    items: [
      { img: IMG.svcClin1, time: "60 min", price: "PKR 12,000", title: "Dermalogica Deep Clarifying Facial", text: "Clinically calibrated Dermalogica protocol targeting congestion, tone and luminosity for South Asian skin." },
      { img: IMG.svcClin2, time: "40 min", price: "PKR 9,500", title: "Halal-First LED Glow Therapy", text: "Gentle light therapy with certified halal actives to boost collagen and calm reactive skin." },
      { img: IMG.svcClin3, time: "30 min", price: "PKR 3,000", title: "Scalp Micro-Peel & Detox", text: "A restorative micro-peel that clears build-up and re-energizes follicles before any major color work." },
    ],
  },
  {
    id: "bridal",
    label: "Bespoke Bridal",
    items: [
      { img: IMG.svcBrid1, time: "90 min", price: "PKR 25,000", title: "HD Bridal Makeup & Lashes", text: "Camera-perfect HD contouring with luxury lashes, built to last through an entire Lahore wedding day." },
      { img: IMG.svcBrid2, time: "60 min", price: "PKR 15,000", title: "Couture Bridal Hair Draping", text: "Regal updos and dupatta pinning engineered for traditional jewelry weight and eight-hour endurance." },
      { img: IMG.svcBrid3, time: "6 sessions", price: "PKR 45,000", title: "Pre-Bridal European Facial Series", text: "A six-week clinical journey of facials, peels and glow therapies that culminates on your wedding morning." },
    ],
  },
  {
    id: "makeup",
    label: "Luxury Makeup",
    items: [
      { img: IMG.svcMake1, time: "45 min", price: "PKR 8,000", title: "Elegant HD Glam Makeup", text: "Modern soft-glam with HD base, sculpted brows and a luminous finish for engagements and soirées." },
      { img: IMG.svcMake2, time: "40 min", price: "PKR 6,500", title: "Traditional Soft-Glow Glam", text: "Timeless Pakistani soft-glow artistry honoring regional heritage with modern technique." },
      { img: IMG.svcMake3, time: "30 min", price: "PKR 4,500", title: "Event & Walima Restyle", text: "Precision touch-up and restyle service to carry your look flawlessly from mehndi to walima." },
    ],
  },
];

/* ---------------- team ---------------- */

export const TEAM = [
  { img: IMG.teamSarah, name: "Sarah Ahmad", role: "Senior Colorist", tags: ["Balayage & Repair", "10 Years Exp"], rating: "5.0" },
  { img: IMG.teamAyesha, name: "Ayesha Khan", role: "Bridal Specialist", tags: ["Pakistani Bridal Glow", "8 Years Exp"], rating: "4.9" },
  { img: IMG.teamFatima, name: "Fatima Malik", role: "Nail Artist", tags: ["Bespoke Gel & Hand-Art", "6 Years Exp"], rating: "5.0" },
  { img: IMG.teamHira, name: "Hira Siddiqui", role: "Spa Therapist", tags: ["Aromatherapy Release", "9 Years Exp"], rating: "4.9" },
  { img: IMG.teamZainab, name: "Zainab Ali", role: "Makeup Artist", tags: ["Traditional & HD Glow", "7 Years Exp"], rating: "5.0" },
  { img: IMG.teamMaria, name: "Maria Tariq", role: "Hair Stylist", tags: ["Couture Cuts & Layers", "5 Years Exp"], rating: "4.8" },
];

export const GALLERY = [
  { img: IMG.gal1, cat: "Hair Transformations", label: "Hair", meta: "Stylist: Sarah Ahmad", tall: true },
  { img: IMG.gal2, cat: "Spa", label: "Spa", meta: "Stylist: Hira Siddiqui" },
  { img: IMG.gal3, cat: "Bridal", label: "Bridal", meta: "Stylist: Ayesha Khan", tall: true },
  { img: IMG.gal4, cat: "Nail Art", label: "Nail Art", meta: "Stylist: Fatima Malik", tall: true },
  { img: IMG.gal5, cat: "Nail Art", label: "Nail Art", meta: "Stylist: Fatima Malik" },
  { img: IMG.gal6, cat: "Hair Transformations", label: "Hair", meta: "Stylist: Sarah Ahmad", tall: true },
  { img: IMG.gal7, cat: "Bridal", label: "Bridal", meta: "Stylist: Ayesha Khan", tall: true },
  { img: IMG.gal8, cat: "Hair Transformations", label: "Hair Transformation", meta: "Sarah Ahmad · Keratin Blowout" },
  { img: IMG.gal9, cat: "Makeup", label: "Makeup", meta: "Stylist: Zainab Ali", tall: true },
  { img: IMG.gal10, cat: "Spa", label: "Spa", meta: "Stylist: Hira Siddiqui" },
  { img: IMG.gal11, cat: "Spa", label: "Spa", meta: "Stylist: Maria Malik", tall: true },
  { img: IMG.gal12, cat: "Nail Art", label: "Nail Art", meta: "Stylist: Fatima Malik" },
];

export const BRIDAL_PACKAGES = [
  {
    name: "Glow Package",
    price: "PKR 45,000",
    features: ["Premium Hair Styling & Blowout", "Elegant HD Basic Makeup", "Signature Gel Nail Art", "Customized Skin Consultation"],
    dark: false,
    popular: false,
  },
  {
    name: "Luxe Package",
    price: "PKR 85,000",
    features: ["Full Couture Hair Draping", "Signature HD Bridal Makeup", "Luxury Lashes & Fitting", "Organic Rose-Milk Mani-Pedi", "Pre-Bridal European Facial"],
    dark: true,
    popular: true,
  },
  {
    name: "Elite Package",
    price: "PKR 150,000",
    features: ["All Luxe Package Indulgences", "Traditional Mehndi Day Look", "Timeless Walima Day Transformation", "2 Full Trial Sessions with Amna", "Complete Clinical Skincare Regimen"],
    dark: false,
    popular: false,
  },
];

export const BRIDAL_TIMELINE = [
  { when: "6 Months Before", title: "Hair Growth & Skin Plan", text: "Start customized scalp detox and clinical laser/facial therapy series." },
  { when: "3 Months Before", title: "Trials & Style Match", text: "Book your mock consultations and pin down your moodboards with Amna." },
  { when: "1 Month Before", title: "Advanced Color Treatment", text: "Settle in your perfect signature balayage or deep protein hair therapies." },
  { when: "1 Week Before", title: "Glow Facials & Mani Pedi", text: "Rejuvenate with organic rose-milk skin treatments and elite OPI nail curation." },
  { when: "The Wedding Day", title: "Sublime Mastery Reveal", text: "Relax inside your private sterilized suite while our team delivers magic." },
];

export const MEMBERSHIP_TIERS = [
  {
    tier: "Tier One",
    name: "Glow Membership",
    price: "PKR 5,000",
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
    price: "PKR 12,000",
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
    price: "PKR 25,000",
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
    img: IMG.journal1,
    tag: "Skincare",
    date: "May 12, 2026",
    title: "5 Essential Halal Skincare Tips for Humid Monsoon in Lahore",
    text: "Our resident aesthetician, Dr. Maria Malik, details standard safe practices to preserve glowing balance during the humid months.",
  },
  {
    img: IMG.journal2,
    tag: "Bridal Guide",
    date: "April 28, 2026",
    title: "The Ultimate Pakistani Bridal Prep Timeline: 6 Months to Glow",
    text: "From deep scalp detox therapies to flawless micro-contouring trials. Get the step-by-step master plan for the elegant bride.",
  },
  {
    img: IMG.journal3,
    tag: "Hair Care",
    date: "April 15, 2026",
    title: "Balayage vs. Highlights: What's Best for South Asian Hair?",
    text: "Senior Colorist Yousuf Khan breaks down global trends, non-formaldehyde Olaplex protections, and structural hair care standards.",
  },
  {
    img: IMG.journal4,
    tag: "Spa Rituals",
    date: "March 30, 2026",
    title: "Holistic Aromatherapy: Why Scalp Massages Rebuild More Than Strands",
    text: "Explore the ancient, restorative sciences behind our premium organic rose-milk and herbal body polish rituals.",
  },
];

export const FAQS = [
  {
    group: "Booking & Cancellation",
    items: [
      {
        q: "How do I cancel or reschedule my appointment in DHA Lahore?",
        a: "We require a 24-hour advanced notice for any cancellations or reschedules. Late cancellations are subject to a fee of PKR 500. This standard policy respects our stylists' dedicated slots.",
      },
      {
        q: "Can I book a specific specialist or Creative Director directly?",
        a: "Absolutely. Every service on our menu can be assigned to a named artisan. During booking, the Choose Stylist step lets you select your preferred master — and Creative Director Amna Shah's slots are reserved for registered members and bridal clients.",
      },
    ],
  },
  {
    group: "Services & Standards",
    items: [
      {
        q: "Are all your hair and skincare premium products fully Halal certified?",
        a: "Yes. We exclusively formulate with premium certified brands — Kérastase, Olaplex, Dermalogica, OPI — alongside our own organic cold-pressed botanicals. Every product on our shelves meets our halal and safety review before it ever reaches a client.",
      },
    ],
  },
];
