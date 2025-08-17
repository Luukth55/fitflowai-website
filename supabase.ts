import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bbqonfpwjjsneqzfvfsw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJicW9uZnB3ampzbmVxemZ2ZnN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxNzYwNDAsImV4cCI6MjA2ODc1MjA0MH0.Zh6zPnkBQmxMfQcHY9304GWu4oWwG4BYS8wp465qyfY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)