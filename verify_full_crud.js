
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "http://supabasekong-wkgc4sws88gog48s8o8kksc4.72.61.241.157.sslip.io";
const SUPABASE_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc2NjY4MTE2MCwiZXhwIjo0OTIyMzU0NzYwLCJyb2xlIjoiYW5vbiJ9.uXImolqqV9hjyEjSunpVKxv-ocLz_pJg1IBZvqSdVic";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function verifyCRUD() {
    console.log("Starting CRUD Verification...");
    const testName = `CRUD Test ${Date.now()}`;
    let recordId;

    // 1. INSERT
    const { data: insertData, error: insertError } = await supabase
        .from('tests')
        .insert([{
            name: testName,
            price: 100,
            category: "Debug",
            description: "Temporary item"
        }])
        .select()
        .single(); // Expecting one row

    if (insertError) {
        console.error("❌ INSERT Failed:", insertError.message);
        return;
    }
    console.log("✅ INSERT Success. ID:", insertData.id);
    recordId = insertData.id;

    // 2. UPDATE
    const newName = testName + " UPDATED";
    const { error: updateError } = await supabase
        .from('tests')
        .update({ name: newName })
        .eq('id', recordId);

    if (updateError) {
        console.error("❌ UPDATE Failed:", updateError.message);
    } else {
        console.log("✅ UPDATE command sent.");
    }

    // 3. READ (Verify Update)
    const { data: readData, error: readError } = await supabase
        .from('tests')
        .select('*')
        .eq('id', recordId)
        .single();

    if (readError) {
        console.error("❌ READ Failed:", readError.message);
    } else if (readData.name === newName) {
        console.log("✅ READ Verified Update: Name is now", readData.name);
    } else {
        console.error("❌ READ Verification Failed: Expected", newName, "got", readData.name);
    }

    // 4. DELETE
    const { error: deleteError } = await supabase
        .from('tests')
        .delete()
        .eq('id', recordId);

    if (deleteError) {
        console.error("❌ DELETE Failed:", deleteError.message);
    } else {
        console.log("✅ DELETE command sent.");
    }

    // 5. READ (Verify Delete)
    const { data: checkData, error: checkError } = await supabase
        .from('tests')
        .select('*')
        .eq('id', recordId)
        .maybeSingle();

    if (checkData === null) {
        console.log("✅ DELETE Verified: Record is gone.");
    } else {
        console.error("❌ DELETE Verification Failed: Record still exists.");
    }
}

verifyCRUD();
