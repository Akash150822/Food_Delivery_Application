import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://rwwnrtdxddfmtlvrblps.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3d25ydGR4ZGRmbXRsdnJibHBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NTE0MzIsImV4cCI6MjAyNjUyNzQzMn0.8WJIqrtj_9QZoPdmhwa7sRz3fsKQ21an1AQcmltkrWE"

export const supabase = createClient(supabaseUrl,supabaseAnonKey)



