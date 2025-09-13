import { Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

// Fiverr Icon Component
const FiverrIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="-2.5 -2 24 24"
    className={className}
    fill="currentColor"
    preserveAspectRatio="xMinYMin"
  >
    <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z" />
    <circle cx="14.375" cy="1.875" r="1.875" />
  </svg>
);

// Upwork Icon Component
const UpworkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.142-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.014-2.439-5.467-5.439-5.467z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "#about", label: t("footer.about") },
    { href: "#skills", label: t("footer.skills") },
    { href: "#projects", label: t("footer.projects") },
    { href: "#experience", label: t("footer.experience") },
    { href: "#contact", label: t("footer.contact") },
  ];

  const services = [
    t("footer.automation"),
    t("footer.programming"),
    t("footer.data_analysis"),
    t("footer.web_development"),
    t("footer.consulting"),
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">
              Hassan Kazmouhi
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/hassan-kazmouhi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://fiverr.com/hassan_kazmouhi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-fiverr"
              >
                <FiverrIcon className="h-5 w-5" />
              </a>
              <a
                href="https://upwork.com/freelancers/hassan-kazmouhi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-upwork"
              >
                <UpworkIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:Kazmouhi.malak@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+212652571213"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.quick_links")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                    data-testid={`footer-link-${link.href.slice(1)}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
