
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "http://supabasekong-wkgc4sws88gog48s8o8kksc4.72.61.241.157.sslip.io";
const SUPABASE_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc2NjY4MTE2MCwiZXhwIjo0OTIyMzU0NzYwLCJyb2xlIjoiYW5vbiJ9.uXImolqqV9hjyEjSunpVKxv-ocLz_pJg1IBZvqSdVic";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function testDelete() {
    console.log("Attempting to delete a non-existent item to test permissions...");
    const { error, count } = await supabase
        .from('tests')
        .delete()
        .eq('id', 'non_existent_id'); // Safe ID

    if (error) {
        console.error("Delete Failed:", error.message);
    } else {
        console.log("Delete Successful (or at least no error). Count:", count);
    }
}

testDelete();
