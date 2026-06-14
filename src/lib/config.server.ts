import process from "node:process";

// Server-only config. The .server.ts suffix prevents Vite from bundling
// this file into the client — values here never reach the browser.
//
// On Cloudflare Workers, env binds at REQUEST time. Module-scope reads
// (e.g. `const x = process.env.X`) resolve to undefined — always read
// process.env INSIDE a function or handler.
//
// When to use which env-access pattern:
//   - .server.ts module (this file): server-only helpers reused across
//     handlers. Wrap reads in a function so they run per-request.
//   - inline process.env inside a createServerFn handler: one-off reads
//     not reused elsewhere.
//   - import.meta.env.VITE_FOO: PUBLIC config readable from both client
//     and server (analytics IDs, public URLs). Define in .env with the
//     VITE_ prefix. Never put secrets here — they ship to the browser.

/**
 * Environment Variables:
 * - NODE_ENV: 'development' | 'production' | 'test'
 * - VITE_FORMSPREE_ID: Formspree form ID for contact form (format: f/xxxxx)
 */

export function getServerConfig() {
  const nodeEnv = process.env.NODE_ENV || 'development';
  const formspreeId = process.env.VITE_FORMSPREE_ID;

  // Validate critical environment variables for production
  if (nodeEnv === 'production') {
    if (!formspreeId || formspreeId === 'YOUR_FORM_ID') {
      console.warn(
        '⚠️ WARNING: VITE_FORMSPREE_ID is not properly configured for production.\n' +
        'Contact form submissions will fail. Please set VITE_FORMSPREE_ID environment variable.\n' +
        'Format: f/your_formspree_id (from https://formspree.io/)'
      );
    }
  }

  return {
    nodeEnv,
    formspreeId,
    // Add server-only values here, e.g.:
    //   databaseUrl: process.env.DATABASE_URL,
    //   stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  };
}
