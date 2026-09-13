import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Albertsons",
    tagline: "Your local home comfort artisans.",
    phone: "(415) 606-0079",
    phoneHref: "tel:+14156060079",
    email: "pavan.harati@gmail.com",
    address: "MOUNTAIN HOUSE, CA",
    city: "MOUNTAIN HOUSE",
    serviceAreas: ["MOUNTAIN HOUSE"],
    since: "1987",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ember",
    niche: "hvac",
  },

  services: [
    { icon: "sparkles", title: "Mini-Split Installation", desc: "Enjoy efficient, zoned cooling and heating with a modern mini-split system.", urgent: false },
    { icon: "wrench", title: "Central AC Repair", desc: "We quickly diagnose and fix any issue to restore your home's central air.", urgent: true },
    { icon: "flame", title: "Furnace Installation", desc: "Stay warm all winter with a reliable, high-efficiency furnace installation.", urgent: false },
    { icon: "shield-check", title: "HVAC System Tune-Up", desc: "Extend the life of your system and improve efficiency with our comprehensive tune-up.", urgent: false },
    { icon: "hammer", title: "Ductwork Repair & Sealing", desc: "Improve air quality and system performance by sealing leaks in your ductwork.", urgent: false },
    { icon: "zap", title: "Smart Thermostat Installation", desc: "Upgrade your home's climate control for convenience and energy savings.", urgent: false }
  ],

  testimonials: [
    { name: "Jessica M.", location: "MOUNTAIN HOUSE, CA", stars: 5, text: "When our AC went out during that awful heatwave, I was panicking. I called Albertsons and they had a technician at our house within two hours. He was so professional, found the problem quickly, and had it fixed the same afternoon. The price was exactly what he quoted. I'm so grateful for their fast, honest service!" },
    { name: "David R.", location: "MOUNTAIN HOUSE, CA", stars: 5, text: "We decided to replace our old furnace before winter and chose Albertsons based on their local reputation. The entire process was seamless, from the initial consultation to the final installation. The team was respectful of our home, cleaned up perfectly, and our new furnace is incredibly quiet and efficient. Highly recommend them for any big HVAC project." },
    { name: "Sarah B.", location: "MOUNTAIN HOUSE, CA", stars: 5, text: "I had Albertsons come out for a routine HVAC system tune-up, and I'm so glad I did. The technician was thorough and explained everything he was doing. He even found a small issue that could have become a major problem later. It's clear they take pride in their work and genuinely care about their customers. It's peace of mind worth every penny." }
  ],

  trustBadges: [
    "Licensed & Insured",
    "Family Owned & Operated",
    "Upfront Pricing",
    "Mountain House Local",
    "Satisfaction Guaranteed"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 35, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock",       title: "Fast Response",          desc: "We prioritize your comfort with prompt arrivals for service and repair calls." },
    { icon: "dollar-sign", title: "Upfront Pricing",        desc: "You'll receive a clear, honest quote before any work begins, with no hidden fees." },
    { icon: "award",       title: "Certified Pros",         desc: "Our technicians are highly trained and certified to handle all your HVAC needs expertly." },
    { icon: "thumbs-up",   title: "Satisfaction Guarantee", desc: "We stand behind our craftsmanship and aren't happy until you are completely satisfied." },
    { icon: "phone",       title: "Real Humans Answer",     desc: "When you call us, you'll speak with a friendly, local team member, not a machine." },
    { icon: "truck",       title: "Fully Equipped",         desc: "Our service vehicles are stocked to solve most issues on the first visit." }
  ],

  formServiceOptions: ["Mini-Split Installation", "Central AC Repair", "Furnace Installation", "HVAC System Tune-Up", "Ductwork Repair & Sealing", "Smart Thermostat Installation"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges