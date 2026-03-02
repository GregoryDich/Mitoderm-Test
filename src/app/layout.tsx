import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MitoDerm - הכשרות והשתלמויות מקצועיות",
  description:
    "MitoDerm - הכשרות והשתלמויות מקצועיות בתחום האסתטיקה, טריכולוגיה ואקסוזומים. הצטרפו לסדנאות וקורסים מקצועיים עם טכנולוגיות מתקדמות.",
  keywords: [
    "MitoDerm",
    "אקסוזומים",
    "טריכולוגיה",
    "קוסמטיקה רפואית",
    "השתלמות",
    "קורס מקצועי",
    "אסתטיקה",
  ],
  openGraph: {
    title: "MitoDerm - הכשרות והשתלמויות מקצועיות",
    description:
      "הצטרפו להכשרות והשתלמויות מקצועיות בתחום האסתטיקה עם טכנולוגיות אקסוזומים מתקדמות",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
