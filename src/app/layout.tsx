import type { Metadata } from "next";
import { GeistMono } from 'geist/font';
import "./globals.css";
import { CookieConsent } from "../../components/ui/cookie-consent"
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: "NYCre8ive Studio | Web Design & Development",
  description: "NYCre8ive Studio is a web design and development company that specializes in creating beautiful, functional websites for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className} antialiased`}>
        {children}
        <Toaster 
          position="bottom-right"
          theme="dark"
          closeButton
          richColors
        />
        <CookieConsent />
      </body>
    </html>
  );
}
