import '@/app/globals.scss';
import { Inter } from 'next/font/google';
import ThemeToggle from '@/app/components/ThemeToggle/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog Project',
  description: 'A Next.js blog project with SCSS styling',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <header>
          <ThemeToggle />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
