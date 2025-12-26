import { Shield, Users, Sparkles } from "lucide-react";

const TrustSection = () => {
  const features = [
    {
      icon: Shield,
      title: "NABL Accredited Partners",
      description: "We partner only with the city's top certified labs for accurate and reliable results.",
    },
    {
      icon: Users,
      title: "Expert Phlebotomists",
      description: "Experienced, vaccinated, and highly trained staff ensure a comfortable sample collection experience.",
    },
    {
      icon: Sparkles,
      title: "Hygiene First",
      description: "Single-use sealed kits for every patient. Your safety is our top priority.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="labs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Why Trust Alerzen?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your health deserves the best. We ensure premium quality at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl glass-card hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5000+", label: "Tests Completed" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "4-8hrs", label: "Report Delivery" },
            { value: "30min", label: "Response Time" },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
