import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Activity, Apple, TestTube, GraduationCap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TestTube,
      title: "Home Sample Collection",
      description: "Complete blood work and diagnostic tests performed at your doorstep by certified professionals.",
      status: "available",
      buttonText: "Book Now",
    },
    {
      icon: Stethoscope,
      title: "On-Call Doctor",
      description: "Immediate access to general physicians for non-emergency consultations and prescriptions.",
      status: "coming-soon",
      buttonText: "Notify Me",
    },
    {
      icon: Activity,
      title: "Physiotherapist Consultation",
      description: "Expert recovery plans and mobility exercises guided by certified physiotherapists.",
      status: "coming-soon",
      buttonText: "Notify Me",
    },
    {
      icon: Apple,
      title: "Dietician / Nutritionist",
      description: "Personalized meal planning and nutritional guidance to meet your health goals.",
      status: "coming-soon",
      buttonText: "Notify Me",
    },
    {
      icon: GraduationCap,
      title: "Foreign MBBS Studies Consultation",
      description: "Expert guidance and support for pursuing medical education abroad with comprehensive counseling.",
      status: "available",
      buttonText: "Learn More",
      externalLink: "https://wa.me/919986404073?text=Hi, I'm interested in Foreign MBBS Studies Consultation",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Healthcare Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare solutions delivered to your home with care and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative glass-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Coming Soon Badge */}
              {service.status === "coming-soon" && (
                <Badge
                  variant="secondary"
                  className="absolute top-4 right-4 bg-accent/20 text-accent-foreground border-accent/30"
                >
                  Coming Soon
                </Badge>
              )}

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>

                {/* CTA Button */}
                <Button
                  variant={service.status === "available" ? "default" : "outline"}
                  className="w-full mt-4"
                  onClick={() => {
                    if (service.status === "available") {
                      const url = (service as any).externalLink || 'https://wa.me/919986404073?text=Hi';
                      window.open(url, '_blank');
                    }
                  }}
                  disabled={service.status === "coming-soon"}
                >
                  {service.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;