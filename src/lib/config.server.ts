import process from 'node:process'

// Read Cloudflare runtime environment values inside a function, not at module scope.
export function getServerConfig() {
  return { nodeEnv: process.env.NODE_ENV || 'development' }
}
