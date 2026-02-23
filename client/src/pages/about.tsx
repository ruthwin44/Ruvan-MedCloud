import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ChevronRight,
  Target,
  Eye,
  Users,
  Award,
  Globe,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every product we distribute and every service we provide.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Transparency and honesty guide every interaction with our clients and partners.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships with healthcare providers to understand and meet their needs.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We continuously seek cutting-edge solutions to advance healthcare delivery worldwide.",
  },
];

const milestones = [
  { year: "2009", title: "Company Founded", description: "RUVAN MEDCLOUD established as a medical equipment distributor." },
  { year: "2012", title: "National Expansion", description: "Expanded distribution network across all major cities." },
  { year: "2016", title: "ISO 13485 Certified", description: "Achieved international quality management certification." },
  { year: "2019", title: "International Markets", description: "Began serving healthcare facilities in 15+ countries." },
  { year: "2022", title: "Digital Transformation", description: "Launched cloud-based ordering and inventory platform." },
  { year: "2025", title: "500+ Products", description: "Catalog expanded to over 500 medical devices and instruments." },
];

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight" data-testid="text-about-title">
              Committed to Healthcare Excellence
            </h1>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-xl">
              For over 15 years, RUVAN MEDCLOUD has been the trusted partner for healthcare facilities seeking premium medical equipment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="relative rounded-xl overflow-hidden h-80 md:h-96">
                <img
                  src="/images/about-team.png"
                  alt="RUVAN MEDCLOUD Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div className="space-y-6" {...fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight" data-testid="text-story-title">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2009, RUVAN MEDCLOUD began with a simple mission: to make premium medical equipment accessible to healthcare facilities of all sizes. What started as a small local distributor has grown into an internationally recognized partner for hospitals, clinics, and laboratories.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve over 200 hospitals across 30+ countries, offering a catalog of 500+ carefully curated medical devices from the world's most trusted manufacturers. Our team of experts ensures every product meets rigorous quality standards before reaching your facility.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  "ISO 13485 Certified",
                  "FDA Registered",
                  "24/7 Technical Support",
                  "Global Logistics Network",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div {...fadeInUp}>
              <Card className="p-8 h-full">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid="text-mission-title">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower healthcare providers with access to the world's finest medical equipment, backed by exceptional service, competitive pricing, and expert technical support, ultimately contributing to better patient outcomes.
                </p>
              </Card>
            </motion.div>
            <motion.div {...fadeInUp}>
              <Card className="p-8 h-full">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid="text-vision-title">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in medical equipment distribution, recognized for innovation, reliability, and our unwavering commitment to advancing healthcare quality across every facility we serve.
                </p>
              </Card>
            </motion.div>
          </div>

          <motion.div className="text-center max-w-2xl mx-auto mb-12" {...fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight" data-testid="text-values-title">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 text-center h-full" data-testid={`card-value-${value.title.toLowerCase()}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center max-w-2xl mx-auto mb-14" {...fadeInUp}>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Journey</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3 tracking-tight" data-testid="text-timeline-title">
              Company Milestones
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0
                    ? "md:flex-row md:text-right"
                    : "md:flex-row-reverse md:text-left"
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                </div>
                <div className="flex-1 pb-2">
                  <span className="text-sm font-medium text-primary">{milestone.year}</span>
                  <h3 className="font-semibold mt-1">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Partner With Us
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Join over 200 healthcare facilities that trust RUVAN MEDCLOUD for their medical equipment needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="mt-6" data-testid="button-about-contact">
                Get in Touch
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
