import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yfqfghkyiisgkbnjfdkx.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmcWZnaGt5aWlzZ2tibmpmZGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3Nzk1MzIsImV4cCI6MjAzMjM1NTUzMn0.3ai6l7poyBlDWv7DJx84jYYu41PuFjgEsYsbkQ5B5gc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
