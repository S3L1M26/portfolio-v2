import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import ThemeProvider from '@/components/ThemeProvider'
import { siteConfig } from '@/config/content'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="relative min-h-screen">
            <div className="relative z-10 flex min-h-screen flex-col">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 