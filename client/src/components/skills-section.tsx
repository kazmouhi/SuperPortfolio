import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/components/language-provider";
import { useEffect, useRef, useState } from "react";

export default function SkillsSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: "C/C++", level: 90 },
    { name: "C# / .NET", level: 85 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 85 },
    { name: "JavaScript/HTML/CSS", level: 75 }
  ];

  const specializedSkills = [
    {
      icon: "fas fa-robot",
      title: t("skills.automation"),
      description: t("skills.automation_desc")
    },
    {
      icon: "fas fa-chart-line",
      title: t("skills.data_analysis"),
      description: "R, MATLAB, SPSS, Modélisation statistique"
    },
    {
      icon: "fas fa-microchip",
      title: t("skills.embedded"),
      description: t("skills.embedded_desc")
    },
    {
      icon: "fas fa-database",
      title: t("skills.database"),
      description: "SQL Server, Optimisation des requêtes"
    }
  ];

  const certifications = [
    {
      icon: "fas fa-certificate",
      title: "Microsoft Office Specialist",
      description: "Word & Excel 2016",
      date: "Mai 2019",
      color: "green"
    },
    {
      icon: "fas fa-network-wired",
      title: "CLA: Programming Essentials in C",
      description: "Cisco Networking Academy",
      date: "2018-2019",
      color: "blue"
    },
    {
      icon: "fas fa-graduation-cap",
      title: t("skills.diploma"),
      description: t("skills.diploma_desc"),
      date: "2018-2020",
      color: "purple"
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            {t("skills.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>
        
        {/* Skills categories */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">{t("skills.technical")}</h3>
            
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={isVisible ? skill.level : 0} 
                    className="h-2 transition-all duration-1000 ease-out"
                    style={{ transitionDelay: `${index * 200}ms` }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Specialized Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">{t("skills.specialized")}</h3>
            
            <div className="grid gap-4">
              {specializedSkills.map((skill) => (
                <Card key={skill.title} className="p-6 hover:shadow-lg transition-all duration-300 hover-elevate">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <i className={`${skill.icon} text-primary text-xl`} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">{t("skills.certifications")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.title} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover-elevate">
                <div className={`p-4 bg-${cert.color}-100 dark:bg-${cert.color}-900/30 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <i className={`${cert.icon} text-${cert.color}-600 text-xl`} />
                </div>
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
                <p className="text-xs text-muted-foreground mt-2">{cert.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
