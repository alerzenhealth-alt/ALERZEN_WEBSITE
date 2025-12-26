import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Plus, Trash, Package, Pencil } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Test {
    id: string;
    name: string;
    price: number;
}

interface HealthPackage {
    id: string;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    description?: string;
}

const PackageManager = () => {
    const [packages, setPackages] = useState<HealthPackage[]>([]);
    const [availableTests, setAvailableTests] = useState<Test[]>([]);
    const [isCreating, setIsCreating] = useState(false);

    // Form State
    const [packageName, setPackageName] = useState("");
    const [packagePrice, setPackagePrice] = useState<number>(0);
    const [originalPrice, setOriginalPrice] = useState<number>(0);
    const [selectedTests, setSelectedTests] = useState<string[]>([]);
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetchPackages();
        fetchTests();
    }, []);

    const fetchPackages = async () => {
        try {
            const { data, error } = await supabase
                .from('tests')
                .select('*')
                .ilike('category', '%Package%') // Only fetch packages
                .order('created_at', { ascending: false });

            if (error) throw error;

            if (data) {
                const formattedPackages = data.map(p => ({
                    id: p.id,
                    name: p.name,
                    category: p.category || "Package",
                    price: Number(p.price),
                    originalPrice: p.originalPrice ? Number(p.originalPrice) : undefined,
                    description: p.description || ""
                }));
                setPackages(formattedPackages);
            }
        } catch (error) {
            console.error("Error fetching packages:", error);
            toast.error("Failed to fetch packages");
        }
    };

    const fetchTests = async () => {
        try {
            // Fetch all tests (not packages) to allow selecting them for a bundle
            const { data, error } = await supabase
                .from('tests')
                .select('id, name, price')
                .neq('category', 'Package')
                .order('name');

            if (data) {
                setAvailableTests(data.map(t => ({ id: t.id, name: t.name, price: Number(t.price) })));
            }
        } catch (error) {
            console.error("Error fetching tests:", error);
        }
    };

    const [editingId, setEditingId] = useState<string | null>(null);

    const handleCreatePackage = async () => {
        if (!packageName) {
            toast.error("Please enter a package name");
            return;
        }

        // Generate description with integrated tests if description is manually empty, otherwise append
        let finalDescription = description;
        if (selectedTests.length > 0) {
            const selectedTestNames = availableTests
                .filter(t => selectedTests.includes(t.id))
                .map(t => t.name)
                .join(", ");

            const includesText = `Includes: ${selectedTestNames}`;
            finalDescription = finalDescription ? `${finalDescription}. ${includesText}` : includesText;
        }

        const packageData = {
            name: packageName,
            category: "Package",
            price: packagePrice,
            originalPrice: originalPrice,
            description: finalDescription,
            popular: true,
            deliveryTime: "24-48 hours",
            reportTime: "6-12 hours"
        };

        try {
            let error;
            if (editingId) {
                // Update existing package
                const { error: updateError } = await supabase
                    .from('tests')
                    .update(packageData)
                    .eq('id', editingId);
                error = updateError;
                toast.success("Package updated successfully");
            } else {
                // Create new package
                const { error: insertError } = await supabase
                    .from('tests')
                    .insert([packageData]);
                error = insertError;
                toast.success("Package created successfully");
            }

            if (error) throw error;

            // Immediate re-fetch to update UI
            await fetchPackages();

            setIsCreating(false);
            setEditingId(null);
            resetForm();
        } catch (error: any) {
            console.error("Error saving package:", error);
            toast.error(error.message || "Failed to save package");
        }
    };

    const handleEditPackage = (pkg: HealthPackage) => {
        setPackageName(pkg.name);
        setPackagePrice(pkg.price);
        setOriginalPrice(pkg.originalPrice || 0);
        setDescription(pkg.description?.split(". Includes:")[0] || pkg.description || ""); // Try to strip auto-generated part for cleaner editing

        // Note: Re-selecting individual tests from a flattened description string is hard/impossible 
        // without a separate relational table. For now, we leave selectedTests empty or let user re-select.
        // A better approach later would be a 'package_tests' junction table.
        setSelectedTests([]);

        setEditingId(pkg.id);
        setIsCreating(true);
    };

    const handleDeletePackage = async (id: string) => {
        if (!confirm("Delete this package?")) return;
        try {
            const { error } = await supabase.from('tests').delete().eq('id', id);
            if (error) throw error;

            // Optimistic Update
            setPackages(prev => prev.filter(p => p.id !== id));
            toast.success("Package deleted");
        } catch (error) {
            console.error("Delete failed:", error);
            toast.error("Failed to delete package");
        }
    };

    const resetForm = () => {
        setPackageName("");
        setPackagePrice(0);
        setOriginalPrice(0);
        setSelectedTests([]);
        setDescription("");
        setEditingId(null);
    };

    const toggleTestSelection = (testId: string) => {
        setSelectedTests(prev =>
            prev.includes(testId) ? prev.filter(id => id !== testId) : [...prev, testId]
        );
    };

    // Calculate total price of selected tests automatically for reference
    const calculatedTotal = selectedTests.reduce((sum, testId) => {
        const test = availableTests.find(t => t.id === testId);
        return sum + (test?.price || 0);
    }, 0);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Health Packages Manager</h2>
                <Button onClick={() => { setIsCreating(!isCreating); resetForm(); }}>
                    {isCreating ? "Cancel" : <><Plus className="w-4 h-4 mr-2" /> Create Package</>}
                </Button>
            </div>

            {isCreating && (
                <Card className="border-primary/20 bg-primary/5">
                    <CardHeader>
                        <CardTitle>{editingId ? "Edit Package" : "Create New Package"}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Package Name</Label>
                                <Input value={packageName} onChange={(e) => setPackageName(e.target.value)} placeholder="e.g., Full Body Checkup" />
                            </div>
                            <div className="space-y-2">
                                <Label>Description (Optional base text)</Label>
                                <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Marketing blurb..." />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Select Tests to Include (Total Value: ₹{calculatedTotal})</Label>
                            <p className="text-xs text-muted-foreground mb-2">Selected tests will be listed in the package description.</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-60 overflow-y-auto p-2 border rounded-md bg-white">
                                {availableTests.map(test => (
                                    <div key={test.id} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`test-${test.id}`}
                                            checked={selectedTests.includes(test.id)}
                                            onCheckedChange={() => toggleTestSelection(test.id)}
                                        />
                                        <label htmlFor={`test-${test.id}`} className="text-sm cursor-pointer truncate" title={test.name}>
                                            {test.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Selling Price</Label>
                                <Input type="number" value={packagePrice} onChange={(e) => setPackagePrice(parseFloat(e.target.value) || 0)} />
                            </div>
                            <div className="space-y-2">
                                <Label>Original Price (MRP)</Label>
                                <Input type="number" value={originalPrice} onChange={(e) => setOriginalPrice(parseFloat(e.target.value) || 0)} />
                            </div>
                        </div>

                        <Button onClick={handleCreatePackage} className="w-full">
                            {editingId ? "Update Package" : "Create Package"}
                        </Button>
                    </CardContent>
                </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {packages.map(pkg => (
                    <Card key={pkg.id} className="relative group">
                        <CardHeader>
                            <CardTitle className="flex justify-between items-start">
                                <span>{pkg.name}</span>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => handleEditPackage(pkg)}>
                                        <Pencil className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-destructive opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => handleDeletePackage(pkg.id)}>
                                        <Trash className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-4 line-clamp-3">{pkg.description}</p>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-2xl font-bold text-primary">₹{pkg.price}</span>
                                {pkg.originalPrice && (
                                    <span className="text-sm text-gray-400 line-through">₹{pkg.originalPrice}</span>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PackageManager;
