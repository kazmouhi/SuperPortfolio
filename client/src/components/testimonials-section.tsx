import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Mohamed Bennani",
      position: "Superviseur - APTIV Tanger",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      text: t("testimonials.testimonial1"),
      rating: 5
    },
    {
      name: "Sarah El Amrani",
      position: "Ingénieure Qualité - APTIV",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      text: t("testimonials.testimonial2"),
      rating: 5
    },
    {
      name: "Dr. Rachid Alami",
      position: "Professeur - Faculté des Sciences",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      text: t("testimonials.testimonial3"),
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-lg hover-elevate">
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
              <div className="flex text-yellow-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
