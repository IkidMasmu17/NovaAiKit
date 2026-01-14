import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils'; // We'll create this utility soon

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'NovaKit AI Launch',
  description: 'Next.js starter kit for 2026 developers',
};

import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(outfit.variable, "antialiased font-sans")}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

