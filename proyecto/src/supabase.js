// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bnuvwhuycdirdfcuzizu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJudXZ3aHV5Y2RpcmRmY3V6aXp1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzMzOTE0MCwiZXhwIjoyMDYyOTE1MTQwfQ.-6juShTDOtvrQ0Q8EwnVG3KTmCaAjE9IUZ-xfFC_4Us';
export const supabase = createClient(supabaseUrl, supabaseKey);