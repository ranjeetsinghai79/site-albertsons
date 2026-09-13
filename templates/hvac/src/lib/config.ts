import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Albertsons HVAC",
    tagline: "Crafting perfect indoor climates.",
    phone: "(415) 606-0079",
    phoneHref: "tel:+14156060079",
    email: "pavan.harati@gmail.com",
    address: "MOUNTAIN HOUSE, CA",
    city: "MOUNTAIN HOUSE",
    serviceAreas: ["MOUNTAIN HOUSE"],
    license: "Licensed & Insured",
    since: "1987",
    google_rating: "4.9",
    review_count: "214",
    emergency: true,
    theme: "ember",
    niche: "hvac",
  },

  services: [
    { icon: "thermometer", title: "Mini-Split Installation", desc: "Efficiently cool and heat specific rooms with our expert mini-split installations.", urgent: false },
    { icon: "wrench", title: "Air Conditioner Repair", desc: "We quickly diagnose and fix all AC issues to restore your home's comfort.", urgent: true },
    { icon: "flame", title: "Furnace Installation", desc: "Stay warm all winter with a reliable, high-efficiency furnace installation.", urgent: false },
    { icon: "sparkles", title: "Duct Cleaning", desc: "Improve air quality and system efficiency with our thorough duct cleaning services.", urgent: false },
    { icon: "shield-check", title: "HVAC Maintenance", desc: "Extend the life of your system with our comprehensive maintenance plans.", urgent: false },
    { icon: "zap", title: "Thermostat Replacement", desc: "Upgrade your home's climate control with a modern, smart thermostat.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Mountain House, CA", stars: 5, text: "When our AC died during that awful heatwave, I was in a panic. I called Albertsons and they had someone out the same day. The technician was so professional and explained everything clearly. He had it fixed in under two hours for a very fair price. I'm so grateful for their fast, honest service!" },
    { name: "Mark D.", location: "Mountain House, CA", stars: 5, text: "We needed a new furnace before winter and got a few quotes. Albertsons felt the most trustworthy and knowledgeable. The installation was seamless, and they left our basement cleaner than they found it. Our new furnace is so quiet and our heating bills have already dropped!" },
    { name: "Jennifer P.", location: "Mountain House, CA", stars: 5, text: "I've been using Albertsons for my yearly HVAC maintenance for three years now. They are always on time, incredibly thorough, and never try to upsell me on things I don't need. It's such peace of mind knowing my system is in good hands with a local company that truly cares." }
  ],

  trustBadges: [
    "Licensed & Insured",
    "Family Owned & Operated",
    "Same-Day Service",
    "24/7 Emergency Service",
    "NATE Certified Technicians"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 2500, label: "Happy Homes Served", suffix: "+", decimals: 0 },
    { value: 35, label: "Years of Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock",       title: "Fast Response",          desc: "We respect your time and comfort, offering prompt arrivals and efficient service." },
    { icon: "dollar-sign", title: "Upfront Pricing",        desc: "No surprises or hidden fees. We provide clear, honest pricing before any work begins." },
    { icon: "award",       title: "Certified Pros",         desc: "Our technicians are highly trained, certified, and dedicated to their craft." },
    { icon: "thumbs-up",   title: "Satisfaction Guarantee", desc: "We stand behind our work, ensuring you're completely satisfied with the results." },
    { icon: "phone",       title: "Real Humans Answer",     desc: "When you call, you'll speak with a friendly, local team member ready to help." },
    { icon: "truck",       title: "Fully Equipped",         desc: "Our service vehicles are stocked to solve most issues on the first visit." }
  ],

  formServiceOptions: ["Mini-Split Installation", "Air Conditioner Repair", "Furnace Installation", "Duct Cleaning", "HVAC Maintenance", "Thermostat Replacement"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!