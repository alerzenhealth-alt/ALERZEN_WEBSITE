import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCheckout from "@/components/BookingCheckout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, TestTube, CheckCircle, ArrowLeft, ShieldCheck, Activity } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface LabTest {
    id: string;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    deliveryTime: string;
    description?: string;
    count?: number;
    collection?: string;
    reportTime?: string;
    sampleType?: string;
    fastingRequired?: boolean;
}

const TestDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [test, setTest] = useState<LabTest | null>(null);
    const [loading, setLoading] = useState(true);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    useEffect(() => {
        const fetchTest = async () => {
            if (!id) return;

            try {
                const { data, error } = await supabase
                    .from('tests')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;

                if (data) {
                    setTest({
                        id: data.id,
                        name: data.name,
                        category: data.category || "General",
                        price: Number(data.price),
                        originalPrice: data.originalPrice ? Number(data.originalPrice) : undefined,
                        deliveryTime: data.deliveryTime || "24-48 hours",
                        description: data.description || "",
                        collection: data.collection,
                        sampleType: data.sampleType,
                        fastingRequired: data.fastingRequired
                    });
                }
            } catch (error) {
                console.error("Error fetching test details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTest();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background glass-bg-pattern medical-pattern flex flex-col">
                <Navbar />
                <div className="container mx-auto px-4 py-32 flex-1">
                    <Skeleton className="h-12 w-3/4 mb-6" />
                    <Skeleton className="h-6 w-1/2 mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Skeleton className="h-96 rounded-3xl" />
                        <div className="space-y-4">
                            <Skeleton className="h-20 w-full" />
                            <Skeleton className="h-20 w-full" />
                            <Skeleton className="h-20 w-full" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!test) {
        return (
            <div className="min-h-screen bg-background glass-bg-pattern medical-pattern flex flex-col">
                <Navbar />
                <div className="container mx-auto px-4 py-32 text-center flex-1 flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold text-[#0b3c65] mb-4">Test Not Found</h2>
                    <p className="text-gray-600 mb-8">The test you are looking for does not exist or has been removed.</p>
                    <Button onClick={() => navigate('/')} className="bg-[#0b3c65] text-white">Go Home</Button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background glass-bg-pattern medical-pattern font-sans flex flex-col">
            <Navbar />

            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Button
                        variant="ghost"
                        className="mb-8 pl-0 text-[#0b3c65] hover:text-[#be2c2d] hover:bg-transparent gap-2"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft className="w-5 h-5" /> Back
                    </Button>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Main Content */}
                        <div className="lg:col-span-8 space-y-8">
                            {/* Header Card */}
                            <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/60 shadow-xl bg-gradient-to-br from-white/95 to-[#be2c2d]/5 backdrop-blur-2xl">
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <Badge className="bg-[#0b3c65]/10 text-[#0b3c65] border-[#0b3c65]/20 px-4 py-1.5 text-sm font-bold tracking-wide uppercase px-4 py-1.5 rounded-full">
                                        {test.category}
                                    </Badge>
                                    {test.fastingRequired && (
                                        <Badge variant="outline" className="border-orange-500/50 text-orange-600 bg-orange-50 px-3 py-1.5 text-xs font-semibold rounded-full flex gap-1 items-center">
                                            <Activity className="w-3 h-3" /> Fasting Required
                                        </Badge>
                                    )}
                                </div>

                                <h1 className="text-3xl md:text-5xl font-extrabold text-[#0b3c65] mb-6 leading-tight">
                                    {test.name}
                                </h1>

                                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                    {test.description}
                                </p>

                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 bg-white/60 p-4 rounded-2xl border border-white/80 shadow-sm">
                                        <div className="p-2.5 bg-blue-100 rounded-xl text-blue-600">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Report Time</p>
                                            <p className="font-bold text-[#0b3c65]">{test.deliveryTime}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/60 p-4 rounded-2xl border border-white/80 shadow-sm">
                                        <div className="p-2.5 bg-green-100 rounded-xl text-green-600">
                                            <TestTube className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Sample Type</p>
                                            <p className="font-bold text-[#0b3c65]">{test.sampleType || 'Blood'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* What is included / Description Expanded */}
                            <div className="glass-card p-8 rounded-[2rem] border border-white/50 bg-white/80">
                                <h3 className="text-2xl font-bold text-[#0b3c65] mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-6 h-6 text-[#be2c2d]" /> Why this test?
                                </h3>
                                <p className="text-gray-600 leading-7">
                                    This comprehensive package is designed to provide you with a detailed overview of your health status.
                                    Regular screening helps in early detection of potential health issues, allowing for timely intervention and treatment.
                                    Our partner labs are NABL certified ensuring 100% accurate results.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar / Pricing Card */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="glass-card p-8 rounded-[2.5rem] border border-white/60 shadow-2xl bg-white/90 sticky top-24">
                                <div className="mb-6">
                                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">Total Price</p>
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-5xl font-extrabold text-[#be2c2d]">₹{test.price}</span>
                                        {test.originalPrice && (
                                            <span className="text-xl text-gray-400 line-through font-semibold">₹{test.originalPrice}</span>
                                        )}
                                    </div>
                                    {test.originalPrice && test.originalPrice > test.price && (
                                        <p className="text-sm font-bold text-green-600 mt-2 bg-green-50 w-fit px-3 py-1 rounded-full">
                                            You Save ₹{test.originalPrice - test.price} ({Math.round(((test.originalPrice - test.price) / test.originalPrice) * 100)}%)
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <CheckCircle className="w-4 h-4 text-green-500" /> Free Home Sample Collection
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <CheckCircle className="w-4 h-4 text-green-500" /> NABL Certified Labs
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <CheckCircle className="w-4 h-4 text-green-500" /> Smart Report on WhatsApp
                                    </div>
                                </div>

                                <Button
                                    className="w-full h-14 text-lg bg-[#be2c2d] hover:bg-[#be2c2d]/90 text-white font-bold rounded-2xl shadow-xl shadow-[#be2c2d]/25 hover:scale-[1.02] transition-transform"
                                    onClick={() => setIsCheckoutOpen(true)}
                                >
                                    Book Now
                                </Button>
                                <p className="text-xs text-center text-gray-400 mt-4">Safe & Secure Booking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <BookingCheckout
                open={isCheckoutOpen}
                onOpenChange={setIsCheckoutOpen}
                cart={test ? [test] : []}
                onConfirm={() => setIsCheckoutOpen(false)}
            />
        </div>
    );
};

export default TestDetails;
