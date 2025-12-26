import chatIcon from "@/assets/icon-chat.png";
import homeDeliveryIcon from "@/assets/icon-home-delivery.png";
import digitalReportsIcon from "@/assets/icon-digital-reports.png";

const ProcessSteps = () => {
  const steps = [
    {
      icon: chatIcon,
      title: "Just Say Hi",
      description: "Message us on WhatsApp. No boring forms to fill.",
    },
    {
      icon: homeDeliveryIcon,
      title: "We Come to You",
      description: "Our expert technicians collect samples from your home in BTM Layout & surroundings.",
    },
    {
      icon: digitalReportsIcon,
      title: "Digital Reports",
      description: "Receive certified reports directly on your phone.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Smart Diagnostics, Zero Friction.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your health tests done has never been this simple. No apps, no hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative glass-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg shadow-md">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-muted to-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={step.icon} alt={step.title} className="w-12 h-12 object-contain" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
