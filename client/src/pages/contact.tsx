import { Card } from "@/components/ui/card";
import { PhoneCall, AtSign, Building2, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: PhoneCall,
    title: "Phone",
    value: "+91 99453 66616",
    href: "tel:+91994536616",
  },
  {
    icon: AtSign,
    title: "Email",
    value: "ruvanpvtltd@gmail.com",
    href: "mailto:ruvanpvtltd@gmail.com",
  },
  {
    icon: Building2,
    title: "Address",
    value: "NO.10, 12(3479), 1st Floor, 1st Cross,\nC Block, Gayathrinagar,\nBangalore, Karnataka, India - 560021",
  },
  {
    icon: CalendarClock,
    title: "Business Hours",
    value: "Monday - Saturday\n10:00 AM - 6:00 PM",
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-12">
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

      <section className="py-6 md:py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-300" />
                <Card
                  className="relative p-8 h-full border-orange-200/60 bg-gradient-to-br from-white via-orange-50/30 to-orange-100/40 shadow-[0_8px_30px_rgba(249,115,22,0.12),_0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(249,115,22,0.2),_0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300"
                  data-testid={`card-contact-${info.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(249,115,22,0.35)]">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1.5">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-muted-foreground whitespace-pre-line hover:text-orange-600 transition-colors"
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
