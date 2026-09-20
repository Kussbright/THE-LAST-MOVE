/* ============================================================
   THE LAST MOVE — Supabase Integration
   ============================================================
   To activate Supabase:
   1. Create a project at https://app.supabase.com
   2. Paste your project URL and anon public key below:
   ============================================================ */

const SUPABASE_CONFIG = {
  url: 'YOUR_SUPABASE_PROJECT_URL', // e.g. https://xyzcompany.supabase.co
  anonKey: 'YOUR_SUPABASE_ANON_KEY' // Your public anon key
};

// Simple fetch-based subscriber signup (no heavy SDK required)
async function subscribeToChannel(email) {
  if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('YOUR_SUPABASE')) {
    console.warn('Supabase credentials not configured yet.');
    return { success: false, message: 'Database not connected yet.' };
  }

  try {
    const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/subscribers`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_CONFIG.anonKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ email: email })
    });

    if (res.ok) {
      return { success: true, message: 'Subscribed successfully!' };
    } else {
      const err = await res.json();
      return { success: false, message: err.message || 'Subscription failed.' };
    }
  } catch (e) {
    console.error('Supabase subscription error:', e);
    return { success: false, message: e.message };
  }
}
