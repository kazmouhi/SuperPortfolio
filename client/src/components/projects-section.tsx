import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      category: "automation",
      title: t("projects.project1_title"),
      description: t("projects.project1_desc"),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["C#", "Cognex", "TIA Portal"],
      badge: "Automatisation"
    },
    {
      id: 2,
      category: "data",
      title: t("projects.project2_title"),
      description: t("projects.project2_desc"),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["R", "MATLAB", "SPSS"],
      badge: "Analyse de données"
    },
    {
      id: 3,
      category: "web",
      title: t("projects.project3_title"),
      description: t("projects.project3_desc"),
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["ASP.NET", "SQL Server", "JavaScript"],
      badge: "Web"
    },
    {
      id: 4,
      category: "data",
      title: t("projects.project4_title"),
      description: t("projects.project4_desc"),
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Python", "TensorFlow", "Pandas"],
      badge: "Machine Learning"
    },
    {
      id: 5,
      category: "automation",
      title: t("projects.project5_title"),
      description: t("projects.project5_desc"),
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Keyence", "C++", "OpenCV"],
      badge: "Vision Industrielle"
    },
    {
      id: 6,
      category: "web",
      title: t("projects.project6_title"),
      description: t("projects.project6_desc"),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["HTML5", "Tailwind CSS", "JavaScript"],
      badge: "Portfolio"
    }
  ];

  const filters = [
    { id: "all", label: t("projects.all") },
    { id: "automation", label: t("projects.automation") },
    { id: "data", label: t("projects.data_analysis") },
    { id: "web", label: t("projects.web") }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>
        
        {/* Project filter tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted p-1 rounded-lg">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "ghost"}
                onClick={() => setActiveFilter(filter.id)}
                className="px-6 py-2 font-medium transition-all duration-200"
                data-testid={`filter-${filter.id}`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="project-card overflow-hidden shadow-lg hover-elevate"
              data-testid={`project-card-${project.id}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{project.badge}</Badge>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
