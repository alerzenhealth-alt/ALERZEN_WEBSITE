import { db } from './db.js';

const initialTests = [
    {
        id: "1",
        name: "Complete Blood Count (CBC)",
        description: "Comprehensive analysis of blood cells including RBC, WBC, platelets, and hemoglobin levels.",
        price: 350,
        deliveryTime: "4-6 hours",
        popular: true,
        category: "Basic"
    },
    {
        id: "2",
        name: "Lipid Profile",
        description: "Cholesterol screening including Total, HDL, LDL, VLDL, and Triglycerides.",
        price: 550,
        deliveryTime: "6-8 hours",
        popular: true,
        category: "Cardiac"
    },
    {
        id: "3",
        name: "Thyroid Profile (T3, T4, TSH)",
        description: "Complete thyroid function test for metabolic health assessment.",
        price: 650,
        deliveryTime: "6-8 hours",
        popular: true,
        category: "Hormonal"
    },
    {
        id: "4",
        name: "HbA1c (Diabetes)",
        description: "3-month average blood sugar level monitoring for diabetes management.",
        price: 450,
        deliveryTime: "4-6 hours",
        popular: true,
        category: "Diabetes"
    },
    {
        id: "5",
        name: "Liver Function Test (LFT)",
        description: "Comprehensive liver health panel including SGOT, SGPT, Bilirubin, and more.",
        price: 590,
        deliveryTime: "6-8 hours",
        popular: false,
        category: "Organ"
    },
    {
        id: "6",
        name: "Kidney Function Test (KFT)",
        description: "Renal health assessment with Creatinine, Urea, Uric Acid analysis.",
        price: 590,
        deliveryTime: "6-8 hours",
        popular: false,
        category: "Organ"
    },
    {
        id: "7",
        name: "Vitamin D Test",
        description: "Measure Vitamin D levels for bone health and immunity.",
        price: 1200,
        deliveryTime: "6-8 hours",
        popular: true,
        category: "Vitamin"
    },
    {
        id: "8",
        name: "Vitamin B12 Test",
        description: "Check B12 levels for energy, neurological function, and cell production.",
        price: 800,
        deliveryTime: "6-8 hours",
        popular: true,
        category: "Vitamin"
    },
    {
        id: "9",
        name: "Full Body Checkup",
        description: "Comprehensive health screening with 60+ parameters including CBC, Lipid, Thyroid, Liver, Kidney tests.",
        price: 2499,
        deliveryTime: "6-8 hours",
        popular: true,
        category: "Package"
    },
    {
        id: "10",
        name: "Iron Studies",
        description: "Complete iron panel including serum iron, ferritin, and TIBC.",
        price: 650,
        deliveryTime: "6-8 hours",
        popular: false,
        category: "Blood Tests"
    },
    {
        id: "11",
        name: "Uric Acid",
        description: "Test for gout and kidney function assessment.",
        price: 150,
        deliveryTime: "4-6 hours",
        popular: false,
        category: "Metabolic"
    },
    {
        id: "12",
        name: "CRP (C-Reactive Protein)",
        description: "Inflammation marker for infection and chronic disease monitoring.",
        price: 450,
        deliveryTime: "4-6 hours",
        popular: false,
        category: "Inflammation"
    }
];

await db.read();
db.data.tests = initialTests;
await db.write();

console.log("Database seeded successfully!");
