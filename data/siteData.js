/* ──────────────────────────────────────────────────────────
   data/siteData.js
   All dummy copy lives here — edit once, reflected everywhere.
   ────────────────────────────────────────────────────────── */

export const siteInfo = {
  name: 'Aurelian Dental',
  tagline: 'Where Artistry Meets Dentistry',
  phone: '(212) 555-0198',
  email: 'concierge@aureliandental.com',
  address: '742 Fifth Avenue, Suite 1200, New York, NY 10019',
  hours: 'Mon – Fri: 8 AM – 6 PM · Sat: 9 AM – 2 PM',
  copyright: `© ${new Date().getFullYear()} Aurelian Dental. All rights reserved.`,
};

export const navLinks = [
  { label: 'Home',         href: '#hero' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Contact',      href: '#contact' },
];

export const heroContent = {
  headline: 'Your Smile,\nPerfected.',
  subheadline:
    'Experience bespoke cosmetic and restorative dentistry within an atmosphere of quiet luxury. Every treatment is meticulously tailored to reveal your most radiant, confident self.',
  cta: 'Reserve a Consultation',
};

export const aboutContent = {
  sectionLabel: 'Our Story',
  headline: 'Decades of Excellence,\nOne Patient at a Time',
  paragraphs: [
    'Since our inception, Aurelian Dental has evolved into Manhattan’s premier destination for bespoke dental artistry. Our philosophy transcends traditional dentistry: we seamlessly merge cutting-edge clinical technology with an uncompromising dedication to your absolute comfort.',
    'Each clinician in our studio brings decades of refined expertise in cosmetic, restorative, and implant disciplines. Whether crafting delicate porcelain veneers or undertaking complex full-arch rehabilitations, our singular focus is delivering results that feel effortlessly, breathtakingly natural.',
  ],
  stats: [
    { value: '25+', label: 'Years of Practice' },
    { value: '15K', label: 'Smiles Transformed' },
    { value: '98%', label: 'Patient Satisfaction' },
    { value: '12',  label: 'Specialist Doctors' },
  ],
};

export const services = [
  {
    icon: '✦',
    title: 'Cosmetic Artistry',
    description:
      'Hand-layered porcelain veneers, bespoke smile design, and advanced whitening protocols for an effortlessly luminous appearance.',
  },
  {
    icon: '⟡',
    title: 'Implantology',
    description:
      'Precision-guided placement of premium titanium and zirconia fixtures, restoring both flawless aesthetics and structural integrity.',
  },
  {
    icon: '◈',
    title: 'Invisalign & Alignment',
    description:
      'Discreet, advanced clear aligner therapies and lingual systems designed to elegantly harmonize your bite and smile architecture.',
  },
  {
    icon: '❖',
    title: 'Restorative Care',
    description:
      'Meticulously milled crowns, bridges, and full-mouth rehabilitations crafted from the world\'s finest dental ceramics.',
  },
  {
    icon: '✧',
    title: 'Preventive Wellness',
    description:
      'Comprehensive periodontal care, digital diagnostic screenings, and personalized longevity plans to preserve your oral health.',
  },
  {
    icon: '◇',
    title: 'Sedation & Comfort',
    description:
      'From soothing ambient environments to advanced IV sedation, every visit is curated to be entirely tranquil and stress-free.',
  },
];

export const testimonials = [
  {
    name: 'Victoria Harrington',
    role: 'Fashion Director',
    quote:
      'Aurelian Dental redefined my expectations. My bespoke veneers are so exquisitely crafted that even my closest confidants simply assume I have extraordinary genetics. The clinical team is truly world-class.',
    rating: 5,
  },
  {
    name: 'James Whitfield',
    role: 'Tech Executive',
    quote:
      'I have visited elite practices globally, yet nothing eclipses the caliber of care provided here. From the moment the elevator doors open, the concierge experience is flawless and deeply personalized.',
    rating: 5,
  },
  {
    name: 'Sophia Chen',
    role: 'Concert Pianist',
    quote:
      'After years of harboring dental anxiety, the serene environment at Aurelian transformed my perspective. The tailored sedation protocols ensure every visit is profoundly calming and painless.',
    rating: 5,
  },
  {
    name: 'Marcus DeVille',
    role: 'Architect',
    quote:
      'The obsession with detail is astonishing. Dr. Laurent dedicated over an hour solely to analyzing the light dynamics and shade matching for my ceramics. The result is absolute architectural perfection.',
    rating: 5,
  },
];

export const galleryImages = [
  {
    alt: 'Elegant reception area with imported marble accents and bespoke lighting',
    gradient: 'from-gold-200 via-cream to-gold-100',
    label: 'The Reception',
  },
  {
    alt: 'State-of-the-art treatment suite featuring panoramic Manhattan skyline views',
    gradient: 'from-charcoal-100 via-ivory to-charcoal-50',
    label: 'Treatment Suite',
  },
  {
    alt: 'Private relaxation lounge with warm ambient lighting and cashmere throws',
    gradient: 'from-gold-100 via-ivory to-gold-50',
    label: 'Relaxation Lounge',
  },
  {
    alt: 'Advanced digital imaging center equipped with low-dose 3D technology',
    gradient: 'from-charcoal-50 via-cream to-gold-100',
    label: 'Imaging Center',
  },
  {
    alt: 'Intimate consultation room appointed with mid-century designer furnishings',
    gradient: 'from-gold-300 via-gold-100 to-cream',
    label: 'Consultation Room',
  },
  {
    alt: 'A curated gallery showcasing award-winning smile transformations',
    gradient: 'from-ivory via-gold-50 to-cream',
    label: 'Smile Gallery',
  },
];

export const contactContent = {
  sectionLabel: 'Private Consultation',
  headline: 'Begin Your Transformation',
  description:
    'Schedule your private assessment today. Our patient concierge will ensure every nuance of your visit is flawlessly orchestrated — from your initial inquiry to the final, radiant reveal.',
  formFields: [
    { name: 'name',    label: 'Full Name',      type: 'text',     placeholder: 'Victoria Harrington' },
    { name: 'email',   label: 'Email Address',   type: 'email',    placeholder: 'victoria@example.com' },
    { name: 'phone',   label: 'Phone Number',    type: 'tel',      placeholder: '(212) 555-0198' },
    { name: 'service', label: 'Primary Interest', type: 'select',  placeholder: 'Select a clinical focus',
      options: ['Cosmetic Artistry', 'Implantology', 'Invisalign & Alignment', 'Restorative Care', 'Preventive Wellness', 'Sedation & Comfort'],
    },
    { name: 'message', label: 'Your Objectives',    type: 'textarea', placeholder: 'Please share your aspirations for your smile…' },
  ],
};

