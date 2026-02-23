import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 99453 66616",
    href: "tel:+91994536616",
    gradient: "from-blue-500/15 to-cyan-500/15",
    iconColor: "text-blue-500",
  },
  {
    icon: Mail,
    title: "Email",
    value: "ruvanpvtltd@gmail.com",
    href: "mailto:ruvanpvtltd@gmail.com",
    gradient: "from-violet-500/15 to-purple-500/15",
    iconColor: "text-violet-500",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "NO.10, 12(3479), 1st Floor, 1st Cross,\nC Block, Gayathrinagar,\nBangalore, Karnataka, India - 560021",
    gradient: "from-emerald-500/15 to-teal-500/15",
    iconColor: "text-emerald-500",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Monday - Saturday\n10:00 AM - 6:00 PM",
    gradient: "from-amber-500/15 to-orange-500/15",
    iconColor: "text-amber-500",
  },
];

export default function Contact() {
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
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact Us</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight" data-testid="text-contact-title">
              Get in Touch With Our Team
            </h1>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-xl">
              Have questions about our products or need a quote? Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className={`p-6 h-full bg-gradient-to-br ${info.gradient}`} data-testid={`card-contact-${info.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`w-6 h-6 ${info.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1.5">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-muted-foreground whitespace-pre-line hover:text-foreground transition-colors"
                          data-testid={`link-contact-${info.title.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {info.value}
                        </p>
                      )}
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
