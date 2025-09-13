import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      type: "current",
      title: t("experience.aptiv_current_title"),
      period: "Juin 2022 - Présent",
      description: t("experience.aptiv_current_desc"),
      tags: ["C#", "TIA Portal", "Cognex"]
    },
    {
      type: "previous",
      title: t("experience.aptiv_prev_title"),
      period: "Avril - Octobre 2021",
      description: t("experience.aptiv_prev_desc"),
      tags: ["C++", "Automation", "Testing"]
    },
    {
      type: "internship",
      title: t("experience.ista_title"),
      period: "Avril - Mai 2020",
      description: t("experience.ista_desc"),
      tags: ["UML", "Merise", "SQL"]
    },
    {
      type: "internship",
      title: t("experience.saham_title"),
      period: "Juin - Juillet 2020",
      description: t("experience.saham_desc"),
      tags: ["Excel", "Gestion", "Service Client"]
    }
  ];

  const education = [
    {
      title: t("experience.license_title"),
      description: t("experience.license_desc"),
      institution: "Faculté des Sciences Aïn Chock - Casablanca",
      period: "2020 - En cours"
    },
    {
      title: t("experience.technician_title"),
      description: t("experience.technician_desc"),
      institution: "ISTA Maamoura - Kénitra",
      period: "2018 - 2020"
    }
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "current": return "default";
      case "internship": return "secondary";
      default: return "outline";
    }
  };

  const getBadgeLabel = (type: string) => {
    switch (type) {
      case "current": return "Actuel";
      case "internship": return "Stage";
      default: return "";
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            {t("experience.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Left side (odd indices) */}
                  {index % 2 === 0 && (
                    <div className="flex-1 pr-8 text-right">
                      <Card className="p-6 shadow-lg hover-elevate">
                        <div className="flex items-center justify-end space-x-2 mb-2">
                          {getBadgeLabel(exp.type) && (
                            <Badge variant={getBadgeVariant(exp.type)}>
                              {getBadgeLabel(exp.type)}
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3 justify-end">
                          {exp.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    </div>
                  )}
                  
                  {/* Timeline marker */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background ${
                    exp.type === "current" ? "bg-primary" : "bg-muted"
                  }`} />
                  
                  {/* Right side (even indices) */}
                  {index % 2 === 1 && (
                    <div className="flex-1 pl-8">
                      <Card className="p-6 shadow-lg hover-elevate">
                        <div className="flex items-center space-x-2 mb-2">
                          {getBadgeLabel(exp.type) && (
                            <Badge variant={getBadgeVariant(exp.type)}>
                              {getBadgeLabel(exp.type)}
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    </div>
                  )}
                  
                  {/* Fill empty space */}
                  {index % 2 === 0 && <div className="flex-1 pl-8" />}
                  {index % 2 === 1 && <div className="flex-1 pr-8" />}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Education section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">{t("experience.education")}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover-elevate">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{edu.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{edu.description}</p>
                    <p className="text-xs text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
