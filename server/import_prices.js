import csv from 'csv-parser';
import fs from 'fs';
import { db } from './db.js';

const results = [];

console.log("Starting import...");

fs.createReadStream('server/data/price_list.csv')
    .pipe(csv())
    .on('data', (data) => {
        // Clean keys (remove BOM or whitespace)
        const cleanData = {};
        Object.keys(data).forEach(key => {
            cleanData[key.trim().replace(/^\ufeff/, '')] = data[key]?.trim();
        });

        if (cleanData.NAME && cleanData['MRP TO SHOW']) {
            const price = parseFloat(cleanData['MRP TO SHOW']);
            let originalPrice = undefined;

            if (cleanData['TO SCRATCH']) {
                originalPrice = parseFloat(cleanData['TO SCRATCH'].replace(/[₹,]/g, ''));
            }

            results.push({
                id: cleanData['TEST CODE'] || Date.now().toString() + Math.random().toString(36).substr(2, 9),
                name: cleanData.NAME,
                category: cleanData.department || "General",
                price: isNaN(price) ? 0 : price,
                original_price: isNaN(originalPrice) ? undefined : originalPrice,
                description: cleanData['REQUIRED SAMPLE'] || "",
                popular: false
            });
        }
    })
    .on('end', async () => {
        console.log(`Parsed ${results.length} tests.`);
        await db.read();

        // Merge or Replace? Let's append for now, or maybe replace if ID matches?
        // The user said "PRICE LIST1 has all the price details", implying it's the master list.
        // I will replace existing tests with this new list to avoid duplicates if they are re-importing.
        // But I should keep any that are NOT in the list? No, usually "all details" means this is the source of truth.
        // I'll append for safety but filter duplicates by ID if possible.
        // Actually, let's just replace the `tests` array to be clean, as this seems to be the initial population.
        // Wait, I already have some dummy data.

        // Let's use a map to merge based on ID (TEST CODE).
        const testMap = new Map();
        db.data.tests.forEach(t => testMap.set(t.id, t));
        results.forEach(t => testMap.set(t.id, t));

        db.data.tests = Array.from(testMap.values());

        await db.write();
        console.log("Database updated successfully.");
    });
