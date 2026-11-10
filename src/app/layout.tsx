import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Nemo · Vị trí", description: "Chọn địa điểm và tạo tọa độ trong phạm vi dưới 150 mét.", robots: { index: false, follow: false } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="vi"><body>{children}</body></html>; }
