import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WhiteDuke - AI Tutor for Bac & GCE A-Level',
  description: 'Your adaptive AI tutor for Baccalaureate and GCE A-Level preparation. Personalized quizzes, study plans, and AI coaching.',
  openGraph: {
    title: 'WhiteDuke - AI Tutor',
    description: 'Your adaptive AI tutor for Bac & GCE A-Level',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
