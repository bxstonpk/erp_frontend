import axios, { AxiosError } from 'axios'
import { env } from '@/shared/config/env'

/**
 * Axios instance กลางสำหรับเรียก ERP backend
 * - baseURL มาจาก env (VITE_API_BASE_URL)
 * - request interceptor: เผื่อใส่ auth token ตอนทำ auth (branch ถัดไป)
 * - response interceptor: normalize error ให้รูปแบบเดียวกัน
 */
export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30_000,
})

// รูปแบบ error ที่ normalize แล้ว ใช้ทั้งแอป
export interface ApiError {
  status: number | null
  message: string
  // payload ดิบจาก backend (ถ้ามี) เผื่อ feature อยากอ่านรายละเอียดเพิ่ม
  data?: unknown
}

apiClient.interceptors.request.use((config) => {
  // TODO(auth): แนบ Bearer token จาก auth store เมื่อทำ auth scaffold
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const normalized: ApiError = {
      status: error.response?.status ?? null,
      message:
        (error.response?.data as { message?: string } | undefined)?.message ??
        error.message ??
        'Unknown error',
      data: error.response?.data,
    }
    return Promise.reject(normalized)
  },
)
