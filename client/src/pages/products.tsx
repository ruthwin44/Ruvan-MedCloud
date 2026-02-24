import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const categoryColors: Record<string, string> = {
  "Digital Health": "bg-orange-100 text-gray-900 border-orange-200",
  "Surgical Equipment": "bg-orange-100 text-gray-900 border-orange-200",
  "Respiratory Care": "bg-orange-100 text-gray-900 border-orange-200",
};

const products = [
  {
    id: 1,
    name: "Anatomograph",
    description: "Advanced AI-powered anatomical visualization platform featuring 3D anatomical atlas, DICOM-based 3D model generation, AI segmentation and analysis, and interactive quiz system for medical education and clinical research.",
    category: "Digital Health",
    image: "./images/anatomograph.png",
    features: ["3D Anatomical Atlas", "DICOM Viewer", "AI Segmentation", "Medical Education"],
  },
  {
    id: 2,
    name: "Staan OT Table Glory",
    description: "Premium hydraulic surgical operating table with electro-hydraulic positioning, radiolucent tabletop, and modular accessories. Designed for multi-specialty surgical procedures with precise height and tilt adjustments.",
    category: "Surgical Equipment",
    image: "./images/staan-ot-table-glory.png",
    features: ["Electro-Hydraulic", "Radiolucent Top", "Multi-Specialty", "Modular Design"],
  },
  {
    id: 3,
    name: "Staan Discover LED",
    description: "High-performance surgical LED ceiling light with shadowless illumination, adjustable color temperature, and endoscope mode. Features unique focus technology and ergonomic sterilizable handle for optimal surgical visibility.",
    category: "Surgical Equipment",
    image: "./images/staan-discover-led.png",
    features: ["Shadowless LED", "Color Temperature Control", "Endoscope Mode", "Sterilizable Handle"],
  },
  {
    id: 4,
    name: "Origin Ventilator",
    description: "Portable life support ventilator for adult and pediatric patients with both invasive and non-invasive ventilation modes. Features intuitive touchscreen interface, comprehensive alarm management, and extended battery life for transport use.",
    category: "Respiratory Care",
    image: "./images/origin-ventilator.png",
    features: ["Invasive & Non-Invasive", "Touchscreen Display", "Portable Design", "Extended Battery"],
  },
];

export default function Products() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Catalog
            </span>
            <h1
              className="text-3xl md:text-4xl font-bold mt-3 tracking-tight"
              data-testid="text-products-title"
            >
              Medical Equipment Products
            </h1>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-xl">
              Our catalog of premium medical equipment from world-renowned
              manufacturers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card
                  className="group hover-elevate h-full flex flex-col overflow-hidden"
                  data-testid={`card-product-${product.id}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1 bg-gradient-to-b from-card to-card/80">
                    <Badge
                      variant="secondary"
                      className={`w-fit mb-3 text-xs ${categoryColors[product.category] || ""}`}
                    >
                      {product.category}
                    </Badge>
                    <h3
                      className="font-semibold text-lg mb-2"
                      data-testid={`text-product-name-${product.id}`}
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {product.features.slice(0, 4).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2 py-0.5 rounded-full border border-orange-400 text-gray-900 font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
