import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils'; // We'll create this utility soon

// import { SessionProvider } from "next-auth/react" // We'll add this later if needed for client side
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'NovaKit AI Launch v2',
  description: 'Future Scientific SaaS Boilerplate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(orbitron.variable, "antialiased font-sans bg-background text-foreground selection:bg-cyan-500/30")}>
        {children}
      </body>
    </html>
  );
}


