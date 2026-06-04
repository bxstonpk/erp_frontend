import { QueryClient } from '@tanstack/react-query'

/**
 * QueryClient กลางของแอป — ตั้ง default ที่เหมาะกับงาน ERP
 * (ข้อมูลส่วนใหญ่ไม่ต้อง refetch ทุกครั้งที่สลับหน้าต่าง)
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000, // 1 นาที
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})
