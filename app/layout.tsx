import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GPT-5 Assistant ? Kh? n?ng c?a t?i',
  description: 'Tr? l? AI cho c?ng vi?c ph?t tri?n ph?n m?m',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-dvh bg-gradient-to-b from-brand-50 to-white text-gray-900 antialiased">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-lg bg-brand-600/90 shadow-sm ring-1 ring-brand-700/20" />
              <span className="text-lg font-semibold tracking-tight">GPT-5 Assistant</span>
            </div>
            <nav className="flex items-center gap-5 text-sm text-gray-600">
              <a href="#features" className="hover:text-gray-900">T?nh n?ng</a>
              <a href="#demo" className="hover:text-gray-900">Demo</a>
              <a href="#contact" className="hover:text-gray-900">Li?n h?</a>
            </nav>
          </header>
          <main className="pt-12">{children}</main>
          <footer id="contact" className="mt-20 border-t border-gray-200 pt-6 text-sm text-gray-600">
            <p>Tri?n khai tr?n Vercel ? ? {new Date().getFullYear()}</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
