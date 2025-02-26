import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'

const supabaseUrl = process.env.SUPABASEURL;
const supabaseKey = process.env.SUPABASEKEY;


const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; 