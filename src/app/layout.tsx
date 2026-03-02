import type { Metadata } from 'next';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'MitoDerm - Professional Training & Events',
  description: 'הכשרות והשתלמויות מקצועיות בקוסמטיקה רפואית - MitoDerm',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
