/**
 * อ่านค่า environment variables แบบ type-safe + validate ตอน startup
 * เพิ่มตัวแปรใหม่: อย่าลืม augment ใน src/vite-env.d.ts ด้วย
 */

function required(key: keyof ImportMetaEnv): string {
  const value = import.meta.env[key]
  if (!value) {
    throw new Error(`[env] Missing required environment variable: ${key}`)
  }
  return value
}

export const env = {
  apiBaseUrl: required('VITE_API_BASE_URL'),
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const
