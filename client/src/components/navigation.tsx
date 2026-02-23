import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Mail } from "lucide-react";
import logoImage from "@assets/RuvanMedcloud_Logo_1771857148689.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="hidden md:block bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-6 flex-wrap">
            <a href="tel:+91994536616" className="flex items-center gap-1.5 opacity-90" data-testid="link-phone-top">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 99453 66616</span>
            </a>
            <a href="mailto:ruvanpvtltd@gmail.com" className="flex items-center gap-1.5 opacity-90" data-testid="link-email-top">
              <Mail className="w-3.5 h-3.5" />
              <span>ruvanpvtltd@gmail.com</span>
            </a>
          </div>
          <span className="opacity-75 hidden lg:block">Trusted Medical Equipment Distribution</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-md border-b"
            : "bg-background border-b"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 h-20 md:h-24">
          <Link href="/" data-testid="link-logo">
            <img src={logoImage} alt="Ruvan Medcloud" className="h-20 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    location === link.href
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button size="icon" variant="ghost" data-testid="button-mobile-menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <img src={logoImage} alt="Ruvan Medcloud" className="h-20 w-auto" />
                </div>
                <nav className="flex-1 p-4 space-y-1">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                      <span
                        className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                          location === link.href
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground"
                        }`}
                        data-testid={`link-mobile-${link.label.toLowerCase()}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
                <div className="p-4 border-t space-y-3">
                  <a href="tel:+91994536616" className="flex items-center gap-2 text-sm text-muted-foreground px-4">
                    <Phone className="w-4 h-4" />
                    +91 99453 66616
                  </a>
                  <a href="mailto:ruvanpvtltd@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground px-4">
                    <Mail className="w-4 h-4" />
                    ruvanpvtltd@gmail.com
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
