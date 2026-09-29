/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MEDIA_CONFIG } from "./mediaConfig";

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string; // Map to Lucide icons
  costPlaceholder: string;
  durationPlaceholder: string;
  details: string[];
}

export interface DentistProfile {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imagePath: string;
  experience: string;
  languages: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  treatment: string;
  rating: number;
  date: string;
  text: string;
  isSample: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage: string; // Fallback or placeholder
  afterImage: string;  // Fallback or placeholder
  category: string;
}

export interface ClinicData {
  clinicNamePlaceholder: string;
  tagline: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  addressPlaceholder: string;
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  navigation: { label: string; href: string }[];
  hero: {
    badgeText: string;
    headline: string;
    supportingText: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustLabel: string;
  };
  about: {
    kicker: string;
    title: string;
    description1: string;
    description2: string;
    stats: { value: string; label: string }[];
    highlights: { title: string; desc: string; icon: string }[];
  };
  services: ServiceItem[];
  whyChooseUs: {
    title: string;
    subtitle: string;
    reasons: { title: string; desc: string; icon: string }[];
  };
  dentists: DentistProfile[];
  journey: {
    title: string;
    subtitle: string;
    steps: { stepNumber: string; title: string; desc: string }[];
  };
  gallery: GalleryItem[];
  testimonials: ReviewItem[];
  faq: FAQItem[];
}

export const CLINIC_DATA: ClinicData = {
  clinicNamePlaceholder: "Aura Dental Studio",
  tagline: "Precision Care, Aesthetic Outcomes",
  emailPlaceholder: "care@yourdentalclinic.com",
  phonePlaceholder: "+1 (555) 234-5678",
  addressPlaceholder: "100 Medical Plaza, Suite 400, Your City, ST 12345",
  openingHours: {
    weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 4:00 PM",
    sunday: "Sunday: Closed (Emergency on call)"
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Team", href: "#team" },
    { label: "Patient Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    badgeText: "Delivering Premium Dental Excellence",
    headline: "A Higher Standard of Personalized Dental Care",
    supportingText: "Welcome to a state-of-the-art practice where human artistry meets cutting-edge oral healthcare. We design vibrant, healthy smiles tailored to your unique facial aesthetics in a relaxing, boutique environment.",
    ctaPrimary: "Book an Appointment",
    ctaSecondary: "Explore Services",
    trustLabel: "Accredited Dental Specialists · Advanced Clinical Technology"
  },
  about: {
    kicker: "Who We Are",
    title: "Dedicated to the Art & Science of Your Smile",
    description1: "Established with a vision to blend clinical perfection with exceptional guest comfort, our practice represents the next generation of oral healthcare. We deliver custom-tailored cosmetic, restorative, and preventive treatments using advanced diagnostics.",
    description2: "Every detail of your visit is crafted to alleviate anxiety—from quiet electric drills and modern sedation options to warm, natural wood finishes and refreshing ambient scents. We believe a beautiful smile is the reflection of robust, systemic wellness.",
    stats: [
      { value: "99%", label: "Patient Satisfaction" },
      { value: "15+", label: "Years Combined Care" },
      { value: "10k+", label: "Smiles Refined" },
      { value: "24/7", label: "Emergency Network" }
    ],
    highlights: [
      {
        title: "Expert Clinical Specialists",
        desc: "Our board-eligible dental team covers advanced restorative and cosmetic specialties.",
        icon: "ShieldCheck"
      },
      {
        title: "Advanced 3D Technology",
        desc: "Low-radiation digital 3D scans and micro-dentistry enable high diagnostic accuracy.",
        icon: "Cpu"
      },
      {
        title: "Patient-First Hospitality",
        desc: "Relaxing treatment rooms, noise-canceling headphones, and tailored comfort menus.",
        icon: "Coffee"
      }
    ]
  },
  services: [
    {
      id: "general",
      title: "General Dentistry",
      shortDesc: "Comprehensive oral exams, preventative treatments, and digital diagnostics to protect your core oral health.",
      longDesc: "General dentistry serves as your first line of defense for a lifelong healthy smile. We conduct comprehensive dental and gum mapping, use low-radiation digital x-rays, and provide modern therapeutic solutions tailored for individual tooth wellness.",
      iconName: "Stethoscope",
      costPlaceholder: "$150 - $350 (Insurance Accepted)",
      durationPlaceholder: "45 - 60 mins",
      details: [
        "Digital intraoral diagnostics and oral cancer screening",
        "Comprehensive periodontal (gum) health evaluation",
        "State-of-the-art composite (tooth-colored) fillings",
        "Custom bite analysis and preventive nightguards"
      ]
    },
    {
      id: "cleaning",
      title: "Teeth Cleaning & Scaling",
      shortDesc: "Deep ultrasonic tartar removal, plaque scaling, and high-gloss airflow polishing to revitalize your gums.",
      longDesc: "Maintain pristine oral hygiene with deep scaling, root planing, and premium airflow stain removal. Our dental hygienists use ultrasonic technology that ensures standard-setting cleanings while preserving enamel integrity.",
      iconName: "Sparkles",
      costPlaceholder: "$120 - $250",
      durationPlaceholder: "45 mins",
      details: [
        "Ultrasonic scaling to dismantle stubborn calculus",
        "Airflow polishing for stubborn external coffee & tea stain removal",
        "Personalized gum care plans and oral microbiome advice",
        "Fluoride remineralization treatments for sensitive teeth"
      ]
    },
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      shortDesc: "Pain-free micro-endodontic therapy to rescue infected teeth and preserve your natural smile.",
      longDesc: "Modern root canal procedures are highly comfortable and crucial for saving natural teeth that are deeply decayed or infected. Utilizing rotary instruments and microscope-guided micro-dentistry, we sterilize and seal infected canals painlessly.",
      iconName: "Activity",
      costPlaceholder: "$800 - $1,400 (Coverage Available)",
      durationPlaceholder: "60 - 90 mins",
      details: [
        "3D digital pulp and root mapping",
        "Advanced micro-rotary instruments for efficient treatment",
        "Virtual anesthesia and gentle local sedation techniques",
        "Post-treatment core build-ups for long-term tooth durability"
      ]
    },
    {
      id: "implants",
      title: "Dental Implants",
      shortDesc: "Premium, biological-grade titanium and zirconia implants to restore fully functional, natural-looking teeth.",
      longDesc: "Dental implants represent the absolute gold standard for replacing missing teeth. From a single missing tooth to full-arch restorations, we use guided computer surgery to precisely anchor durable biocompatible implants that fuse with your bone structure.",
      iconName: "Smile",
      costPlaceholder: "$3,000 - $4,500 per unit",
      durationPlaceholder: "Multi-stage (Guided consultation)",
      details: [
        "Computer-guided surgical planning using CBCT scans",
        "Premium biocompatible titanium & metal-free zirconia options",
        "Single, multiple, or full-arch (All-on-4) dental implant structures",
        "High-fidelity porcelain crowns crafted to match surrounding dentition"
      ]
    },
    {
      id: "whitening",
      title: "Teeth Whitening",
      shortDesc: "Professional in-office laser whitening and customized home trays for shades-lighter radiant results.",
      longDesc: "Safely accelerate your smile's brightness with medical-grade whitening systems. We combine in-office light-activated whitening gels that dissolve deep internal stains with take-home touch-up kits for stunning, long-lasting brilliance.",
      iconName: "Sun",
      costPlaceholder: "$350 - $650",
      durationPlaceholder: "60 mins",
      details: [
        "In-office laser-assisted rapid activation",
        "Enamel-safe professional formula that limits sensitivity",
        "Customized home bleaching trays with precise prescription gel",
        "Instant outcome of up to 8 shades lighter in one session"
      ]
    },
    {
      id: "orthodontics",
      title: "Orthodontics & Braces",
      shortDesc: "Custom-designed modern clear aligners and subtle brackets to create perfect, harmonious alignment.",
      longDesc: "Achieve ideal structural and cosmetic teeth alignment. We offer premium clear aligner therapy (Invisalign & boutique options) and discreet tooth-colored braces that gently move teeth into their ideal placement, correcting bites and crowding.",
      iconName: "Grid",
      costPlaceholder: "Customized treatment plans",
      durationPlaceholder: "6 - 18 months",
      details: [
        "Discreet clear aligners designed with 3D smile forecasting",
        "Cosmetic ceramic (tooth-colored) bracket systems",
        "Interceptive early orthodontics for kids and teens",
        "Long-term post-orthodontic retention planning"
      ]
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      shortDesc: "Ultra-thin porcelain veneers, composite bonding, and comprehensive smile makeovers tailored for you.",
      longDesc: "Bring balance and beauty to your facial profile. Our cosmetic treatments address chipped, spaced, small, or uneven teeth with customized porcelain veneers, aesthetic gum reshaping, and direct composite bondings that replicate natural enamel depth.",
      iconName: "Sparkles",
      costPlaceholder: "$800 - $1,800 per veneer",
      durationPlaceholder: "2 - 3 visits",
      details: [
        "Hand-sculpted ultra-thin lithium disilicate porcelain veneers",
        "Aesthetic composite bonding for minor cracks and spaces",
        "Digital Smile Design (DSD) to preview your outcome beforehand",
        "Laser-assisted cosmetic gum contouring for symmetrical symmetry"
      ]
    },
    {
      id: "pediatric",
      title: "Pediatric Dentistry",
      shortDesc: "Gentle, educational dental care to build healthy habits and happy smiles for children of all ages.",
      longDesc: "Our kid-friendly protocols ensure early-age dental visits are exciting and educational. We focus on preventive care, tooth-friendly sealants, and building strong, positive dental hygiene habits in a fun, non-threatening clinic space.",
      iconName: "Baby",
      costPlaceholder: "$100 - $200 (Pediatric Insurance Applicable)",
      durationPlaceholder: "30 - 45 mins",
      details: [
        "Fun, fear-reducing interactive check-ups",
        "Protective dental fissure sealants on new molars",
        "Gentle child-friendly hygiene cleaning and mineral therapy",
        "Myofunctional assessment for early bite development"
      ]
    },
    {
      id: "extraction",
      title: "Tooth Extraction",
      shortDesc: "Atraumatic, micro-surgical extractions including wisdom teeth removal, prioritizing comfort and quick healing.",
      longDesc: "When a tooth cannot be saved due to severe fracture or crowding, we perform gentle, atraumatic extractions. We use advanced microsurgical tools that preserve the surrounding bone socket, dramatically speeding up the healing timeline.",
      iconName: "Scissors",
      costPlaceholder: "$200 - $450",
      durationPlaceholder: "40 - 60 mins",
      details: [
        "Micro-surgical bone preservation techniques",
        "Wisdom teeth extraction including complex impactions",
        "Post-extraction PRF (platelet-rich fibrin) options for quick recovery",
        "Immediate bone grafting preparation for potential future implants"
      ]
    },
    {
      id: "emergency",
      title: "Emergency Dental Care",
      shortDesc: "Immediate diagnostic assessment and pain relief for broken teeth, trauma, and acute dental infections.",
      longDesc: "Severe toothaches, dental injuries, or lost crowns require rapid, compassionate clinical care. We maintain dedicated daily appointment blocks to ensure emergency patients are seen immediately for rapid pain relief, diagnostic scans, and stabilizer care.",
      iconName: "ShieldAlert",
      costPlaceholder: "$150 Emergency Consult",
      durationPlaceholder: "Immediate slots on-call",
      details: [
        "Same-day pain alleviation and diagnostic evaluation",
        "Immediate stabilization of avulsed (knocked-out) or broken teeth",
        "Surgical drainage of painful dental abscesses and infection containment",
        "Rapid crown re-cementation and emergency fillings"
      ]
    }
  ],
  whyChooseUs: {
    title: "Why Patient Families Choose Our Practice",
    subtitle: "We prioritize modern technology, absolute safety, and deep empathy to craft an exceptional clinical experience.",
    reasons: [
      {
        title: "Boutique Comfort Amenities",
        desc: "Step into an oasis of calm. Settle into heated message dental chairs, listen to custom Spotify lists via Bose noise-canceling headphones, and refresh with warm lavender face cloths.",
        icon: "Heart"
      },
      {
        title: "Pristine Biological Sterilization",
        desc: "Your safety is non-negotiable. We strictly exceed hospital-level autoclave sterilization guidelines, deploy state-of-the-art HEPA surgical-grade air purifiers, and run routine third-party biological audits.",
        icon: "Shield"
      },
      {
        title: "Transparent & Honest Finance",
        desc: "We build clear, direct, itemized treatment quotes before starting any care. No hidden clinical fees. We file insurance claims directly on your behalf and offer 0% APR split financing.",
        icon: "CreditCard"
      },
      {
        title: "All-in-One Multi-Specialty Care",
        desc: "From gentle child cleanings and routine cavity prevention to surgical implants and advanced porcelain smile transformations, we cover all paths of dentistry in a single modern facility.",
        icon: "Users"
      }
    ]
  },
  dentists: [
    {
      id: "sarah-alexander",
      name: "Dr. Sarah Alexander",
      specialty: "Clinical Director & Advanced Cosmetic Dentist",
      bio: "Dr. Alexander has spent over a decade delivering restorative and cosmetic smiles. She teaches postgraduate aesthetic composite workshops and specializes in minimal-prep porcelain veneers and full-mouth rehabilitations.",
      imagePath: MEDIA_CONFIG.doctorSarahPortraitUrl,
      experience: "14 Years Clinical Practice",
      languages: ["English", "Spanish"]
    },
    {
      id: "marcus-vance",
      name: "Dr. Marcus Vance",
      specialty: "Board-Eligible Implant & Oral Surgeon",
      bio: "Focusing on implant dentistry and bone tissue engineering, Dr. Vance delivers computer-guided dental implants and comfortable wisdom teeth solutions. He specializes in IV sedation dentistry.",
      imagePath: MEDIA_CONFIG.doctorMarcusPortraitUrl,
      experience: "9 Years Micro-surgery",
      languages: ["English", "German"]
    },
    {
      id: "maya-patel",
      name: "Dr. Maya Patel",
      specialty: "Specialist Orthodontist & Clear Aligner Expert",
      bio: "Dr. Patel utilizes digital 3D bite forecasts to design beautiful, balanced dental alignment plans. She specializes in comfortable clear-aligner therapies and early pediatric jaw growth guidance.",
      imagePath: MEDIA_CONFIG.doctorMayaPortraitUrl,
      experience: "11 Years Smile Alignment",
      languages: ["English", "Hindi"]
    }
  ],
  journey: {
    title: "The Patient Journey: Your Path to a Radiant Smile",
    subtitle: "We make your clinical experience predictable, fully transparent, and completely free of anxiety.",
    steps: [
      {
        stepNumber: "01",
        title: "Secure Online Booking",
        desc: "Choose a preferred time slot online or speak directly to our coordinator. Complete a quiet digital health questionnaire before your arrival."
      },
      {
        stepNumber: "02",
        title: "Aesthetic & Digital Consultation",
        desc: "Meet your clinical team. We map your teeth using 3D oral cameras and complete standard digital diagnostics while discussing your dental goals."
      },
      {
        stepNumber: "03",
        title: "Tailored Treatment Plan",
        desc: "We review itemized treatment options together. You receive precise pricing, and we map out customized scheduling with zero pressure."
      },
      {
        stepNumber: "04",
        title: "Vibrant Wellness & Care",
        desc: "Relax under warm micro-comfort blankets. We execute your care with modern precision. Receive detailed home-care guidelines and follow-up support."
      }
    ]
  },
  gallery: [
    {
      id: "case-1",
      title: "Porcelain Smile Veneers",
      description: "Restoring symmetry, length, and premium natural brightness to worn, chipped front teeth.",
      beforeLabel: "Stained & Asymmetrical",
      afterLabel: "Polished & Aligned Veneers",
      beforeImage: "", // We can use fallbacks or local image representations
      afterImage: MEDIA_CONFIG.smileShowcaseUrl,
      category: "Cosmetic"
    },
    {
      id: "case-2",
      title: "Invisible Aligner Therapy",
      description: "Correcting heavy lower tooth crowding and minor bite misalignment with clear, comfortable trays.",
      beforeLabel: "Severe Crowding & Narrow Arch",
      afterLabel: "Broad, Symmetrical Alignment",
      beforeImage: "",
      afterImage: MEDIA_CONFIG.smileShowcaseUrl,
      category: "Orthodontics"
    },
    {
      id: "case-3",
      title: "Dental Implant Restoration",
      description: "Replacing a fractured premolar tooth with a biological-grade titanium implant and handcrafted crown.",
      beforeLabel: "Missing Molar Tooth",
      afterLabel: "Full Restored Bite Function",
      beforeImage: "",
      afterImage: MEDIA_CONFIG.smileShowcaseUrl,
      category: "Implants"
    }
  ],
  testimonials: [
    {
      id: "rev-1",
      author: "David L.",
      treatment: "Full Set Porcelain Veneers",
      rating: 5,
      date: "September 2026",
      text: "The aesthetic result is breathtakingly natural. Dr. Sarah Alexander took endless care in shaping each tooth to fit my face. The practice feels like a luxury wellness spa rather than a clinical office. Highly recommended!",
      isSample: true
    },
    {
      id: "rev-2",
      author: "Samantha K.",
      treatment: "Clear Aligner Therapy & Whitening",
      rating: 5,
      date: "August 2026",
      text: "As someone who has struggled with dental phobia for years, I am so glad I found this clinic. They are remarkably gentle, explaining every stage transparently. My teeth have never looked or felt healthier.",
      isSample: true
    },
    {
      id: "rev-3",
      author: "Marcus T.",
      treatment: "Emergency Root Canal & Dental Implants",
      rating: 5,
      date: "July 2026",
      text: "I called with a cracked tooth and severe throbbing pain. They scheduled me within two hours, did a pain-free laser treatment, and set up a long-term plan for a guided implant. Superb service and fully transparent pricing.",
      isSample: true
    }
  ],
  faq: [
    {
      id: "faq-1",
      question: "Are your appointment confirmations final, and how do I schedule?",
      answer: "When you book using our template form, your request is captured and queued. Because this is a customizable client template, a coordinator would normally verify your details and coordinate insurance. The form demonstrates a fully working frontend validation state for validation, but no real calendar bookings are altered without our clinical CRM integrated.",
      category: "Appointments"
    },
    {
      id: "faq-2",
      question: "Do you accept major dental insurance policies?",
      answer: "Yes. We work in-network with the vast majority of PPO insurance providers. Our financial coordinator will pre-authorize treatments on your behalf before any procedures start, ensuring you maximize your clinical benefits with zero surprise out-of-pocket fees.",
      category: "Billing"
    },
    {
      id: "faq-3",
      question: "What makes your dental technology 'low-radiation' and safer?",
      answer: "We employ advanced direct-sensor digital radiography. This decreases ionizing radiation by up to 80% to 90% compared to traditional dental film x-rays. Additionally, our 3D CBCT imaging operates on targeted focus zones to only scan what is necessary.",
      category: "Technology"
    },
    {
      id: "faq-4",
      question: "How long do professional teeth whitening results last?",
      answer: "Typically, professional laser in-office whitening lasts between 12 to 24 months. This depends heavily on personal lifestyle habits, such as regular consumption of high-pigment items like coffee, red wine, or tobacco. We supply tailored touch-up trays to keep your smile bright.",
      category: "Treatments"
    },
    {
      id: "faq-5",
      question: "What can I expect during my very first consultation visit?",
      answer: "Your initial consultation is a premium, pressure-free evaluation. We will capture high-resolution digital scans of your teeth, conduct a comfortable periodontal review, discuss cosmetic interests, and print out a simple, clearly tiered dental wellness roadmap with fully itemized costs.",
      category: "General"
    }
  ]
};
