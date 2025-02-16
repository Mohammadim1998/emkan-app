import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css";
// import AOSInit from '@/utils/aos';

export const metadata = {
  title: "گروه تجربه و توسعه امکان",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { locale } }) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}
      className={locale === "en" ? "ltr" : "rtl"}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* <AOSInit /> */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
