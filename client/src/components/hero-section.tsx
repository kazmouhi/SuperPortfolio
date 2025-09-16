import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { downloadCV } from "@/lib/cv-download";

// Fiverr Icon Component
const FiverrIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="-2.5 -2 24 24" 
    className={className}
    fill="currentColor"
    preserveAspectRatio="xMinYMin"
  >
    <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"/>
    <circle cx="14.375" cy="1.875" r="1.875"/>
  </svg>
);

// Upwork Icon Component
const UpworkIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.142-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3.538 0 6.405-2.867 6.405-6.405 0-3.539-2.867-6.405-6.405-6.405z"/>
  </svg>
);

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Cache-busting for background image
  const cacheBustParam = `?v=${Date.now()}`;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%), url('https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cacheBustParam}')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-2 h-2 bg-secondary rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-3 h-3 bg-primary rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse-ring" />
            <img
              src="/images/profile.jpg"
              alt="Hassan Kazmouhi"
              className="relative z-10 w-full h-full rounded-full object-cover border-4 border-background shadow-xl"
            />
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-shadow">
              <span className="block">{t("hero.greeting")}</span>
              <span className="block gradient-text">Hassan Kazmouhi</span>
            </h1>
            <p
              className="text-xl sm:text-2xl text-muted-foreground animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t("hero.title")}
            </p>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              {t("hero.description")}
            </p>
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              onClick={scrollToContact}
              className="px-8 py-3 text-lg"
              data-testid="button-contact-hero"
            >
              {t("hero.contact")}
            </Button>
            <Button
              variant="outline"
              onClick={downloadCV}
              className="px-8 py-3 text-lg"
              data-testid="button-download-cv-hero"
            >
              <i className="fas fa-download mr-2" />
              {t("hero.download_cv")}
            </Button>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-2xl"
                data-testid="link-linkedin"
              >
                <a
                  href="https://linkedin.com/in/hassan-kazmouhi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-2xl"
                data-testid="link-fiverr"
              >
                <a
                  href="https://www.fiverr.com/sanouhi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiverrIcon className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-2xl"
                data-testid="link-upwork"
              >
                <a
                  href="https://upwork.com/freelancers/hassan-kazmouhi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <UpworkIcon className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-2xl"
                data-testid="link-email"
              >
                <a href="mailto:Kazmouhi.malak@gmail.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-2xl"
                data-testid="link-phone"
              >
                <a href="tel:+212652571213">
                  <Phone className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
            <button
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              data-testid="button-scroll-down"
            >
              <i className="fas fa-chevron-down text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
