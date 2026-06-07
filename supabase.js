const SUPABASE_URL = "https://laaxwbkfxyfhwuxbttts.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhYXh3YmtmeHlmaHd1eGJ0dHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4NDg1NjksImV4cCI6MjA5NjQyNDU2OX0.IQ87zsy2v0LFoEUEkIYV_bRh_6RPIxnz9PA_MOtALbQ";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
