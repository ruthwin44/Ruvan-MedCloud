import { db } from "./db";
import { products } from "@shared/schema";

const seedProducts = [
  {
    name: "ProVital 5000 Patient Monitor",
    description: "Advanced multi-parameter patient monitoring system with 15-inch touchscreen display. Monitors ECG, SpO2, NIBP, temperature, and respiratory rate with real-time trend analysis.",
    category: "Patient Monitoring",
    image: "/images/product-monitoring.png",
    features: ["15-inch Touchscreen", "Multi-parameter", "Wireless Connectivity", "Battery Backup"],
  },
  {
    name: "CardioTrack Pro ECG System",
    description: "12-lead diagnostic ECG system with automated interpretation and cloud-based data storage. Features high-resolution waveform display and comprehensive reporting.",
    category: "Patient Monitoring",
    image: "/images/product-monitoring.png",
    features: ["12-Lead ECG", "Auto Interpretation", "Cloud Storage", "PDF Reports"],
  },
  {
    name: "UltraScan HD Ultrasound",
    description: "Premium portable ultrasound system with crystal-clear imaging for general, cardiac, and OB/GYN applications. Lightweight design with extended battery life.",
    category: "Diagnostic Imaging",
    image: "/images/product-imaging.png",
    features: ["HD Imaging", "Portable Design", "Multi-probe", "8hr Battery"],
  },
  {
    name: "DigiRay X500 Digital X-Ray",
    description: "High-resolution digital radiography system with advanced image processing. Designed for general radiography with exceptional detail and low dose technology.",
    category: "Diagnostic Imaging",
    image: "/images/product-imaging.png",
    features: ["Low Dose", "Digital Processing", "PACS Compatible", "Auto Positioning"],
  },
  {
    name: "PrecisionCut Surgical Kit",
    description: "Comprehensive surgical instrument set featuring premium stainless steel tools for general surgery. Autoclavable and ergonomically designed for precision.",
    category: "Surgical Instruments",
    image: "/images/product-surgical.png",
    features: ["Stainless Steel", "Autoclavable", "Ergonomic Grip", "Lifetime Warranty"],
  },
  {
    name: "EndoVision 4K Endoscope System",
    description: "Ultra-high definition 4K endoscopy system with advanced light source and image processing. Provides exceptional visualization for minimally invasive procedures.",
    category: "Surgical Instruments",
    image: "/images/product-surgical.png",
    features: ["4K Resolution", "LED Light Source", "Image Recording", "Compact Design"],
  },
  {
    name: "AutoLab 3000 Hematology Analyzer",
    description: "Fully automated 5-part differential hematology analyzer with 60 samples per hour throughput. Features advanced flagging and quality control systems.",
    category: "Laboratory Equipment",
    image: "/images/product-laboratory.png",
    features: ["60 Tests/Hour", "5-Part Differential", "Auto QC", "Barcode Reader"],
  },
  {
    name: "ChemPro 200 Chemistry Analyzer",
    description: "Benchtop clinical chemistry analyzer with random access capability and comprehensive test menu. Ideal for small to medium laboratories.",
    category: "Laboratory Equipment",
    image: "/images/product-laboratory.png",
    features: ["200 Tests/Hour", "Random Access", "Compact Size", "ISE Module"],
  },
  {
    name: "AirFlow Pro Ventilator",
    description: "Advanced ICU ventilator with multiple ventilation modes including SIMV, CPAP, and BiPAP. Features intuitive touchscreen interface and comprehensive alarm management.",
    category: "Respiratory Care",
    image: "/images/product-respiratory.png",
    features: ["Multiple Modes", "Touchscreen", "O2 Blender", "Data Export"],
  },
  {
    name: "OxyPure Oxygen Concentrator",
    description: "Medical-grade oxygen concentrator delivering up to 10 LPM continuous flow. Quiet operation suitable for hospital and home healthcare settings.",
    category: "Respiratory Care",
    image: "/images/product-respiratory.png",
    features: ["10 LPM Flow", "Low Noise", "Portable", "Auto Purity"],
  },
  {
    name: "MedSupply Essential Kit",
    description: "Comprehensive medical supply starter kit including disposable examination supplies, wound care materials, and essential consumables for clinical settings.",
    category: "Medical Supplies",
    image: "/images/product-supplies.png",
    features: ["Sterile Packed", "FDA Approved", "Bulk Available", "Fast Delivery"],
  },
  {
    name: "SafeGuard PPE Collection",
    description: "Premium personal protective equipment collection including surgical masks, face shields, gowns, and gloves. Meets international safety standards.",
    category: "Medical Supplies",
    image: "/images/product-supplies.png",
    features: ["CE Certified", "Bulk Pricing", "Multi-size", "Disposable"],
  },
];

export async function seedDatabase() {
  const existing = await db.select().from(products);
  if (existing.length === 0) {
    await db.insert(products).values(seedProducts);
    console.log("Database seeded with", seedProducts.length, "products");
  } else {
    console.log("Database already has", existing.length, "products, skipping seed");
  }
}
