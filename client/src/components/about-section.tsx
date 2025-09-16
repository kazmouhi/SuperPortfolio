import { Card } from "@/components/ui/card";
import { User, MapPin, Mail,Linkedin , Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

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

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {t("about.paragraph1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.paragraph2")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.paragraph3")}
              </p>
            </div>

            {/* Personal info cards */}
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-sm">
                      Kazmouhi.malak@gmail.com
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t("about.phone")}
                    </p>
                    <p className="font-semibold">+212 652 57 12 13</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-3">
                  <Linkedin className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Fiverr</p>
                    <a 
                      href="https://www.fiverr.com/sanouhi/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-sm hover:text-primary transition-colors"
                    >
                      @San_Ouhi
                    </a>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-3">
                  <FiverrIcon className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Fiverr</p>
                    <a 
                      href="https://www.linkedin.com/in/hassan-kazmouhi/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-sm hover:text-primary transition-colors"
                    >
                      @hassan-kazmouhi
                    </a>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-3">
                  <UpworkIcon className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Upwork</p>
                    <a 
                      href="https://www.upwork.com/freelancers/~018257999031f609c9?mp_source=share" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-sm hover:text-primary transition-colors"
                    >
                      @hassan-kazmouhi
                    </a>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t("about.location")}
                    </p>
                    <p className="font-semibold">Tanger, Maroc</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Image and achievements */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="/images/profile2.jpg"
                alt="Hassan Kazmouhi programming workspace"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </div>

            {/* Achievement stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center p-4 hover-elevate">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">
                  {t("about.years_experience")}
                </div>
              </Card>
              <Card className="text-center p-4 hover-elevate">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  {t("about.projects")}
                </div>
              </Card>
              <Card className="text-center p-4 hover-elevate">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">
                  {t("about.technologies")}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
