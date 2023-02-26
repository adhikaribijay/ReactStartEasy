import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vinfoikgwizrqnhjzxhs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbmZvaWtnd2l6cnFuaGp6eGhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NDE3MDEsImV4cCI6MTk5MjAxNzcwMX0.68VuM-jsdkPnpvIwMaZrXVHzYM8m2r1Pc82iLpdHnIk';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;