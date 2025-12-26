import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, FileText } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            At Alerzen Health, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal and medical information.
                        </p>
                    </div>

                    <div className="space-y-10">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" />
                                1. Information We Collect
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We collect information that is necessary to provide you with our diagnostic services. This includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li><strong>Personal Identification:</strong> Name, age, gender, phone number, and address for home collection purposes.</li>
                                <li><strong>Health Information:</strong> Test requests, medical history (if provided), and diagnostic reports.</li>
                                <li><strong>Usage Data:</strong> Information about how you use our website to improve our services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-primary" />
                                2. How We Use and Protect Your Data
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Your data is used exclusively for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Processing your booking and scheduling home sample collection.</li>
                                <li>Delivering accurate diagnostic reports to you securely.</li>
                                <li>Improving our service quality and customer support.</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <strong>Data Security:</strong> We implement strict security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Your medical reports are stored on encrypted servers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Sharing of Information</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We do not sell your personal data. We may share your information with:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                                <li><strong>Partner Labs:</strong> Only unrelated sample details and test requirements are shared with NABL-certified partner labs for processing.</li>
                                <li><strong>Legal Requirements:</strong> If required by law or to protect our rights and safety.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Your Rights</h2>
                            <p className="text-gray-600 leading-relaxed">
                                You have the right to access, correct, or request deletion of your personal data. You can contact our support team at specific times to exercise these rights.
                            </p>


                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Strategic Partners & Service Disclaimer</h2>
                            <p className="text-gray-600 leading-relaxed bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                Please note that all diagnostic tests are conducted by our NABL-accredited laboratory partners, and not directly by Alerzen Health. <strong>Prima Diagnostics</strong> is our strategic partner for all testing services, ensuring the highest standards of accuracy and reliability.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:
                                <br />
                                <strong>Email:</strong> contact@alerzen.com
                                <br />
                                <strong>Phone:</strong> +91 99864 04073
                            </p>
                        </section>

                        <div className="pt-8 border-t border-gray-100 text-sm text-gray-400">
                            Last Updated: December 2025
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
};

export default PrivacyPolicy;
