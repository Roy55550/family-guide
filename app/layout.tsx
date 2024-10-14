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
  other: {
    'impact-site-verification': '09fbd5e4-51ad-4569-ae9f-ab6389f20130'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name='impact-site-verification' content='09fbd5e4-51ad-4569-ae9f-ab6389f20130' />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
