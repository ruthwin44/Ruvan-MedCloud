import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors"
                data-testid="link-footer-home"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-sm text-muted-foreground transition-colors"
                data-testid="link-footer-products"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground transition-colors"
                data-testid="link-footer-about"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors"
                data-testid="link-footer-contact"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Product Categories
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/products"
                className="text-sm text-muted-foreground transition-colors"
              >
                Digital Health
              </Link>
              <Link
                href="/products"
                className="text-sm text-muted-foreground transition-colors"
              >
                Surgical Equipment
              </Link>
              <Link
                href="/products"
                className="text-sm text-muted-foreground transition-colors"
              >
                Respiratory Care
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Contact Info
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+91994536616"
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
                data-testid="link-footer-phone"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 99453 66616</span>
              </a>
              <a
                href="mailto:ruvanpvtltd@gmail.com"
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>ruvanpvtltd@gmail.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  NO.10, 12(3479), 1st Floor, 1st Cross,
                  <br />C Block, Gayathrinagar,
                  <br />
                  Bangalore, Karnataka, India - 560021
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ruvan Medcloud Pvt Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              ISO 9001 Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
