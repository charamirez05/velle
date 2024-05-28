import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yfqfghkyiisgkbnjfdkx.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmcWZnaGt5aWlzZ2tibmpmZGt4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjc3OTUzMiwiZXhwIjoyMDMyMzU1NTMyfQ.UFikhchZEmp-bU67Fp9Hr5-OYTJpcaLycvOp4CaarV0";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
