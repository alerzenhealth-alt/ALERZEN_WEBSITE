import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Clock, CreditCard, Syringe } from "lucide-react";

const FAQ = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Everything you need to know about our home diagnostic services.
                    </p>
                </div>

                <div className="grid gap-8">
                    {/* General Section */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <Syringe className="w-5 h-5" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Services & Collection</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How does home sample collection work?</AccordionTrigger>
                                <AccordionContent>
                                    Once you book a test, our certified phlebotomist will visit your home at your scheduled time. They will follow strict hygiene protocols to collect your blood/urine sample. The sample is then securely transported to our NABL-accredited labs for testing.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is there a charge for home collection?</AccordionTrigger>
                                <AccordionContent>
                                    Home collection is FREE for orders above ₹499. For orders below this amount, a nominal convenience fee may apply depending on your location in Bangalore.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Do I need to fast before my test?</AccordionTrigger>
                                <AccordionContent>
                                    It depends on the test. For tests like Fasting Blood Sugar, Lipid Profile, or Thyroid packages, 10-12 hours of overnight fasting is usually required. Our team will guide you specifically based on your booked tests.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Reports Section */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                <Clock className="w-5 h-5" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Reports & Timing</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-4">
                                <AccordionTrigger>When will I get my report?</AccordionTrigger>
                                <AccordionContent>
                                    Most routine test reports (like CBC, Sugar, Thyroid) are delivered via WhatsApp and Email within 6-12 hours of sample collection. Specialized tests may take 24-48 hours.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>Are the reports valid for doctor consultation?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, absolutely. All our tests are processed in NABL and CAP accredited laboratories (like Orange Health, Metropolis, etc.). Our reports are recognized by doctors and hospitals across India.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Payment Section */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Payments</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-6">
                                <AccordionTrigger>How do I pay?</AccordionTrigger>
                                <AccordionContent>
                                    You can pay online via UPI, Credit/Debit Card, or Net Banking at the time of booking. We also accept Cash on Collection, but digital payment is preferred for a contactless experience.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger>Can I cancel my booking?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, you can cancel or reschedule your booking up to 2 hours before the scheduled slot without any charges. Please contact our support team for assistance.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                <div className="mt-12 text-center bg-gray-100 rounded-xl p-8">
                    <HelpCircle className="w-8 h-8 mx-auto text-gray-400 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Still have questions?</h3>
                    <p className="text-gray-500 mb-4">We're here to help you 24/7.</p>
                    <a
                        href="https://wa.me/919986404073"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                        Chat with us on WhatsApp
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FAQ;
