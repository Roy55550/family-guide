import './globals.css';
import type { Metadata } from "next";
import { inter } from './fonts';

export const metadata: Metadata = {
  title: "Family Edition",
  description: "Navigate Life's Relationships with Expert Guidance",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
