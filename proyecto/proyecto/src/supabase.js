import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ulqvlpivgqiehfjolxiy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscXZscGl2Z3FpZWhmam9seGl5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzMzODkyNiwiZXhwIjoyMDYyOTE0OTI2fQ.HO7pQWvOVkPcy8K92Lm6fN5W-Hn9o6jagZYwU1EzNJ0';
export const supabase = createClient(supabaseUrl, supabaseKey);