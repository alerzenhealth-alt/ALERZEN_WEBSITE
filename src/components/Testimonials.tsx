import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "BTM Layout Stage 2",
      rating: 5,
      text: "Super convenient! The technician arrived on time, was very professional, and I got my reports the same evening. No more waiting in crowded labs!",
      date: "2 weeks ago"
    },
    {
      name: "Rajesh Kumar",
      location: "Koramangala",
      rating: 5,
      text: "Booking via WhatsApp was so easy. The whole process was smooth and hassle-free. Highly recommend Alerzen for home sample collection.",
      date: "1 month ago"
    },
    {
      name: "Anita Desai",
      location: "BTM Layout",
      rating: 5,
      text: "Excellent service for my elderly parents. The staff was gentle and patient. Digital reports were accurate and delivered quickly. Thank you Alerzen!",
      date: "3 weeks ago"
    },
    {
      name: "Vikram Reddy",
      location: "JP Nagar",
      rating: 5,
      text: "Best diagnostic service in Bangalore! No app downloads, no complicated forms. Just message and they come home. Reports are from NABL certified labs too.",
      date: "1 week ago"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from families across Bangalore who trust Alerzen for their healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-card hover:shadow-xl transition-all duration-300 animate-slide-up hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;