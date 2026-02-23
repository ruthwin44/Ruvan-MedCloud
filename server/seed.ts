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
  
}
