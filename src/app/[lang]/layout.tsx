import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import '../globals.css';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'he' }, { lang: 'ru' }];
}

const baseUrl = 'https://mitoderm.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const meta: Record<string, { title: string; description: string; keywords: string }> = {
    he: {
      title: 'הכשרות מקצועיות | מיטודרם - הדור הבא של האסתטיקה',
      description: 'הכשרות מקצועיות לקוסמטיקאיות ואסתטיקאיות. מערכת V-Tech - אקסוזומים סינתטיים + PDRN | מיטודרם ישראל',
      keywords: 'אקסוזומים, V-Tech, מיטודרם, הכשרות מקצועיות, קוסמטיקה, טריכולוגיה',
    },
    en: {
      title: 'Professional Training | Mitoderm - Next Generation Aesthetics',
      description: 'Professional training for cosmetologists and aestheticians. V-Tech System - synthetic exosomes + PDRN | Mitoderm Israel',
      keywords: 'exosomes, V-Tech, Mitoderm, professional training, cosmetology, trichology',
    },
    ru: {
      title: 'Профессиональное обучение | Митодерм - Новое поколение эстетики',
      description: 'Профессиональное обучение для косметологов и эстетистов. Система V-Tech - синтетические экзосомы + PDRN | Митодерм Израиль',
      keywords: 'экзосомы, V-Tech, Митодерм, профессиональное обучение, косметология, трихология',
    },
  };

  const m = meta[lang] || meta.en;

  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: `${baseUrl}/${lang}/event`,
      languages: { he: `${baseUrl}/he/event`, en: `${baseUrl}/en/event`, ru: `${baseUrl}/ru/event` },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${baseUrl}/${lang}/event`,
      siteName: 'Mitoderm',
      type: 'website',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const messages = await getMessages();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(lang as any)) {
    notFound();
  }

  setRequestLocale(lang);

  return (
    <html lang={lang}>
      <NextIntlClientProvider messages={messages}>
        <body
          className="font-rubik"
          dir={lang === 'he' ? 'rtl' : 'ltr'}
        >
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
