
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dovocvwbhxclsfzmcyhi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvdm9jdndiaHhjbHNmem1jeWhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NDkwNzAsImV4cCI6MjA1OTUyNTA3MH0.IV5GOTwxfUO24aLzlto4hpP9Frt4Tx1XsllrDzQ_07E";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
