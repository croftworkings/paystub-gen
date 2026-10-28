// Public, client-safe config. The anon key is MEANT to be exposed in the
// browser — it can't do anything your Supabase row-level security policies
// don't allow. Never put the service_role key here or anywhere in /public.
window.APP_CONFIG = {
  SUPABASE_URL: 'https://hxhoglbtfxxtrburlahy.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4aG9nbGJ0Znh4dHJidXJsYWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxMzg5MjUsImV4cCI6MjEwODcxNDkyNX0._u8RwPrOMMrI0Ae_77-OS4Kux9NMQ7TfeY4gOwrNMLc',
};
