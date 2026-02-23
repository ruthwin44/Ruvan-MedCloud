import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronRight,
  Shield,
  Truck,
  HeartPulse,
  Award,
  ArrowRight,
  Star,
  Users,
  Package,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

const categories = [
  {
    title: "Patient Monitoring",
    description: "Advanced vital signs monitoring systems for ICU, OR, and general wards.",
    image: "/images/product-monitoring.png",
    icon: HeartPulse,
  },
  {
    title: "Diagnostic Imaging",
    description: "State-of-the-art MRI, CT, X-Ray, and ultrasound imaging equipment.",
    image: "/images/product-imaging.png",
    icon: Shield,
  },
  {
    title: "Surgical Instruments",
    description: "Precision surgical tools and instrument sets for all specialties.",
    image: "/images/product-surgical.png",
    icon: Award,
  },
  {
    title: "Laboratory Equipment",
    description: "Automated analyzers and diagnostic equipment for clinical labs.",
    image: "/images/product-laboratory.png",
    icon: Package,
  },
];

const stats = [
  { value: "500+", label: "Products", icon: Package },
  { value: "200+", label: "Hospitals Served", icon: Users },
  { value: "15+", label: "Years Experience", icon: Star },
  { value: "30+", label: "Countries", icon: Globe },
];

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "All products are ISO certified and meet international quality standards for medical equipment.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Efficient logistics network ensuring timely delivery of equipment to your facility.",
  },
  {
    icon: HeartPulse,
    title: "Expert Support",
    description: "Dedicated technical support team for installation, training, and after-sales service.",
  },
  {
    icon: Award,
    title: "Trusted Brands",
    description: "Authorized distributor for leading global medical equipment manufacturers.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-medical.png"
            alt="Medical Equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
              <HeartPulse className="w-4 h-4" />
              Trusted Medical Equipment Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight" data-testid="text-hero-title">
              Advancing Healthcare Through{" "}
              <span className="text-blue-400">Premium Equipment</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              RUVAN MEDCLOUD delivers cutting-edge medical devices and equipment to healthcare facilities worldwide, ensuring superior patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/products">
                <Button size="lg" className="bg-white text-gray-900 font-semibold" data-testid="button-hero-products">
                  Explore Products
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white backdrop-blur-sm bg-white/5" data-testid="button-hero-contact">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-5 text-center bg-background/95 backdrop-blur-sm" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold tracking-tight">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center max-w-2xl mx-auto mb-14" {...fadeInUp}>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight" data-testid="text-categories-title">
              Medical Equipment Categories
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              We offer a comprehensive range of premium medical equipment across all major categories to serve your healthcare facility needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href="/products">
                  <Card className="group cursor-pointer relative h-72 md:h-80" data-testid={`card-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-md" />
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-md bg-white/15 backdrop-blur-sm flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      </div>
                      <p className="text-white/75 text-sm leading-relaxed">{category.description}</p>
                      <div className="flex items-center gap-1.5 mt-3 text-sm font-medium text-blue-300 group-hover:gap-2.5 transition-all">
                        View Products <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-card to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div className="text-center max-w-2xl mx-auto mb-14" {...fadeInUp}>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight" data-testid="text-features-title">
              Your Trusted Medical Equipment Partner
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              We are committed to delivering excellence in medical equipment distribution with unmatched service quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="relative rounded-xl overflow-hidden"
            {...fadeInUp}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-blue-600" />
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight" data-testid="text-cta-title">
                Ready to Upgrade Your Medical Equipment?
              </h2>
              <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto leading-relaxed">
                Contact our team today to discuss your requirements and get a customized quote for your healthcare facility.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-gray-900 font-semibold" data-testid="button-cta-contact">
                    Get a Free Quote
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="border-white/30 text-white backdrop-blur-sm bg-white/5" data-testid="button-cta-products">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
