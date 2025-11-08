import type { Metadata } from "next";
import "./globals.css";
import React from 'react';
import { Navigation } from "@/widgets/navigation";
import { QueryProvider } from "@/shared/providers";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Footer } from "@/widgets/footer";


export const metadata: Metadata = {
  title: "Awtomobil ýollarynyň gurluşygyny dolandyrmak baradaky döwlet agentligi",
  description: "Türkmenistanyň ýol gurluşygy we ulag infrastrukturasy boýunça ýöriteleşdirilen döwlet edarasy",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <NextIntlClientProvider>
      <QueryProvider>
        <html lang={locale}>
          <head>
            <meta name="theme-color" content="#27374D" />
            <meta name="apple-mobile-web-app-title" content="Road Construction" />
          </head>
          <body className={`antialiased overflow-hidden`}>
            <div className="relative bg-white">
              <Navigation />
              <main className="relative min-h-screen z-[1]">
                {children}
              </main>
              <Footer />
            </div>
          </body>
        </html>
      </QueryProvider>
    </NextIntlClientProvider>
  );
}