
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "http://supabasekong-wkgc4sws88gog48s8o8kksc4.72.61.241.157.sslip.io";
const SUPABASE_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc2NjY4MTE2MCwiZXhwIjo0OTIyMzU0NzYwLCJyb2xlIjoiYW5vbiJ9.uXImolqqV9hjyEjSunpVKxv-ocLz_pJg1IBZvqSdVic";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function testInsert() {
    console.log("Attempting to insert a test item...");
    // Use a random UUID to avoid "invalid input syntax"
    const randomUUID = crypto.randomUUID();

    // Note: Node < 19 needs crypto imported, but @supabase/supabase-js might polyfill? 
    // Let's just use null ID if DB generates it, or a mock UUID string.

    const { data, error } = await supabase
        .from('tests')
        .insert([{
            // id: ... let supabase generate
            name: "Test Permission Item",
            price: 100,
            category: "Debug",
            description: "Temporary item to check permissions"
        }])
        .select();

    if (error) {
        console.error("Insert Failed:", error.message);
    } else {
        console.log("Insert Successful:", data);
        // Clean up
        if (data && data[0] && data[0].id) {
            await supabase.from('tests').delete().eq('id', data[0].id);
            console.log("Cleanup Successful");
        }
    }
}

testInsert();
