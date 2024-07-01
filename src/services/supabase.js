import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rbuquiinvgcbxlxdamjf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJidXF1aWludmdjYnhseGRhbWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyODgzNzAsImV4cCI6MjAzNDg2NDM3MH0.WzUDKK9078JawEHhM2aTkbAkO2IHpxpM8ZBX3uyUgT4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
