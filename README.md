# ERP Frontend

เว็บแอปพลิเคชันสำหรับงานบัญชีและการจัดการธุรกิจ ครอบคลุมการ **ขาย**, **ซื้อ**, และ **คลังสินค้า**

> ⚠️ โปรเจกต์อยู่ในช่วงเริ่มต้นพัฒนา (early development) — ฟีเจอร์และโครงสร้างอาจมีการเปลี่ยนแปลง

## ภาพรวม

ระบบ ERP ฝั่ง frontend ที่ออกแบบมาเพื่อรองรับงานหลักขององค์กร ได้แก่

- 📊 **บัญชี (Accounting)** — บันทึกบัญชี รายรับรายจ่าย และรายงานทางการเงิน
- 🛒 **ขาย (Sales)** — ใบเสนอราคา ใบสั่งขาย และใบกำกับภาษี
- 📦 **ซื้อ (Purchasing)** — ใบสั่งซื้อ และการจัดการผู้ขาย (suppliers)
- 🏭 **คลังสินค้า (Inventory)** — จัดการสต็อกสินค้า รับเข้า–เบิกออก และการตรวจนับ

## เทคโนโลยีที่ใช้

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [ESLint](https://eslint.org/)

## เริ่มต้นใช้งาน

### ความต้องการของระบบ

- Node.js (แนะนำเวอร์ชัน LTS ล่าสุด)

### ติดตั้ง dependencies

```bash
npm install
```

### รันโหมดพัฒนา (development)

```bash
npm run dev
```

### build สำหรับ production

```bash
npm run build
```

### ดูตัวอย่าง production build

```bash
npm run preview
```

### ตรวจสอบ lint

```bash
npm run lint
```

## สถานะการพัฒนา

| โมดูล | สถานะ |
| --- | --- |
| บัญชี (Accounting) | 🚧 กำลังพัฒนา |
| ขาย (Sales) | 🚧 กำลังพัฒนา |
| ซื้อ (Purchasing) | 🚧 กำลังพัฒนา |
| คลังสินค้า (Inventory) | 🚧 กำลังพัฒนา |
