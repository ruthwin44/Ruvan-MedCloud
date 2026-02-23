import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-tight">RUVAN</span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase leading-tight">MEDCLOUD</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for premium medical equipment distribution. We provide cutting-edge healthcare solutions to facilities worldwide.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="/" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-home">Home</Link>
              <Link href="/products" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-products">Products</Link>
              <Link href="/about" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-about">About Us</Link>
              <Link href="/contact" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-contact">Contact</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Product Categories</h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="/products" className="text-sm text-muted-foreground transition-colors">Patient Monitoring</Link>
              <Link href="/products" className="text-sm text-muted-foreground transition-colors">Diagnostic Imaging</Link>
              <Link href="/products" className="text-sm text-muted-foreground transition-colors">Surgical Instruments</Link>
              <Link href="/products" className="text-sm text-muted-foreground transition-colors">Laboratory Equipment</Link>
              <Link href="/products" className="text-sm text-muted-foreground transition-colors">Respiratory Care</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Contact Info</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+1234567890" className="flex items-start gap-2.5 text-sm text-muted-foreground" data-testid="link-footer-phone">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@ruvanmedcloud.com" className="flex items-start gap-2.5 text-sm text-muted-foreground" data-testid="link-footer-email">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@ruvanmedcloud.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Medical Drive, Suite 100<br />Healthcare City, HC 10001</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} RUVAN MEDCLOUD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">ISO 13485 Certified</span>
            <span className="text-sm text-muted-foreground">FDA Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
