import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { downloadCV } from "@/lib/cv-download";
import { useToast } from "@/hooks/use-toast";

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

export default function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Success",
      description: t("contact.success"),
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">{t("contact.get_in_touch")}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:Kazmouhi.malak@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      Kazmouhi.malak@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.phone")}</p>
                    <a href="tel:+212652571213" className="text-muted-foreground hover:text-primary transition-colors">
                      +212 652 57 12 13
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.location")}</p>
                    <p className="text-muted-foreground">Tanger, Maroc</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div>
              <h4 className="font-medium mb-4">{t("contact.follow_me")}</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-elevate"
                  data-testid="social-linkedin"
                >
                  <a href="https://linkedin.com/in/hassan-kazmouhi" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-elevate"
                  data-testid="social-fiverr"
                >
                  <a href="https://fiverr.com/hassan_kazmouhi" target="_blank" rel="noopener noreferrer">
                    <FiverrIcon className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-elevate"
                  data-testid="social-upwork"
                >
                  <a href="https://upwork.com/freelancers/hassan-kazmouhi" target="_blank" rel="noopener noreferrer">
                    <UpworkIcon className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-elevate"
                  data-testid="social-email"
                >
                  <a href="mailto:Kazmouhi.malak@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-elevate"
                  data-testid="social-phone"
                >
                  <a href="tel:+212652571213">
                    <Phone className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* CV Download */}
            <Card className="p-6">
              <h4 className="font-medium mb-3">{t("contact.download_cv")}</h4>
              <p className="text-sm text-muted-foreground mb-4">{t("contact.cv_description")}</p>
              <Button 
                onClick={downloadCV}
                className="w-full"
                data-testid="button-download-cv"
              >
                <Download className="h-4 w-4 mr-2" />
                {t("contact.download")}
              </Button>
            </Card>
          </div>
          
          {/* Contact form */}
          <Card className="p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">{t("contact.send_message")}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">{t("contact.first_name")}</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">{t("contact.last_name")}</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="subject">{t("contact.subject")}</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <Button type="submit" className="w-full" data-testid="button-send-message">
                {t("contact.send")}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
