import { MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceArea = () => {
  const faqs = [
    {
      question: "How do I book a blood test in BTM Layout?",
      answer: "Simply message Alerzen Health on WhatsApp. Our team will guide you through the process and schedule a convenient time for home sample collection.",
    },
    {
      question: "Are the reports accurate?",
      answer: "Yes, all samples are processed at our partner NABL-certified labs, ensuring the highest standards of accuracy and reliability.",
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve BTM Layout Stage 1 & 2, Koramangala, HSR Layout, and surrounding areas in South Bangalore. Contact us to confirm service availability in your area.",
    },
    {
      question: "How long does it take to get reports?",
      answer: "Most routine tests deliver reports within 24 hours. Specialized tests may take 2-3 days. You'll receive digital reports directly on WhatsApp.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Service Area */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Serving Bangalore's Tech Hub.
              </h2>
              <p className="text-lg text-muted-foreground">
                Premium home diagnostics for the modern professional.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Primary Service Areas:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      BTM Layout Stage 1 & Stage 2
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      Koramangala (All Blocks)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      HSR Layout
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      JP Nagar & Surrounding Areas
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-primary">Not in the list?</strong> We're expanding fast! 
                  Message us on WhatsApp to check if we serve your area.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-muted-foreground">
                Everything you need to know about our service.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary-light hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
