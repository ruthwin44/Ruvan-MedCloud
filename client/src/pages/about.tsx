import { Card } from "@/components/ui/card";
import {
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
    description:
      "We maintain the highest standards in every product we distribute and every service we provide.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "Transparency and honesty guide every interaction with our clients and partners.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build lasting relationships with healthcare providers to understand and meet their needs.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description:
      "We continuously seek cutting-edge solutions to advance healthcare delivery worldwide.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Us
            </span>
            <h1
              className="text-3xl md:text-4xl font-bold mt-3 tracking-tight"
              data-testid="text-about-title"
            >
              Our Story
            </h1>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-xl">
              Founded in 2021, Ruvan Medcloud began with a simple mission: to
              make premium medical equipment accessible to healthcare facilities
              of all sizes. What started as a small local distributor has grown
              into an internationally recognized partner for hospitals, clinics,
              and laboratories.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-xl">
              Today, we serve over 50 hospitals across 30+ cities, offering
              curated medical devices from the world's most trusted
              manufacturers. Our team of experts ensures every product meets
              rigorous quality standards before reaching your facility.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "ISO 9001:2015 Certified",
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
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/8 via-card to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div {...fadeInUp}>
              <Card className="p-8 h-full">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  data-testid="text-mission-title"
                >
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower healthcare providers with access to the world's
                  finest medical equipment, backed by exceptional service,
                  competitive pricing, and expert technical support, ultimately
                  contributing to better patient outcomes.
                </p>
              </Card>
            </motion.div>
            <motion.div {...fadeInUp}>
              <Card className="p-8 h-full">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  data-testid="text-vision-title"
                >
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in medical equipment distribution,
                  recognized for innovation, reliability, and our unwavering
                  commitment to advancing healthcare quality across every
                  facility we serve.
                </p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            {...fadeInUp}
          >
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight"
              data-testid="text-values-title"
            >
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
                <Card
                  className="p-6 text-center h-full"
                  data-testid={`card-value-${value.title.toLowerCase()}`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
