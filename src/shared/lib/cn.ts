import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * รวม class names + resolve conflict ของ Tailwind (เช่น px-2 + px-4 -> px-4)
 * ใช้กับ primitive ทุกตัวเพื่อให้ override ได้ผ่าน prop className
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
