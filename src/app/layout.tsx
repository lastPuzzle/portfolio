import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SettingsProvider } from '@/lib/contexts';
import { cookies } from 'next/headers';

if (typeof window !== 'undefined') {
  import('@/lib/dev/msw');
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio - Seunghyuk Lee',
  description: "Seunghyuk Lee's personal portfolio website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get('theme')?.value;
  const initialTheme =
    savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';

  const savedFont = cookieStore.get('font')?.value;
  const initialFont =
    savedFont === 'geist' || savedFont === 'system' || savedFont === 'mono'
      ? savedFont
      : 'geist';

  return (
    <html lang="ko" className={initialTheme}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getCookie(name) {
                  const value = '; ' + document.cookie;
                  const parts = value.split('; ' + name + '=');
                  if (parts.length === 2) return parts.pop().split(';').shift();
                  return null;
                }
                function setCookie(name, value, days = 365) {
                  const expires = new Date();
                  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
                  document.cookie = name + '=' + value + '; expires=' + expires.toUTCString() + '; path=/; SameSite=Lax';
                }
                const savedTheme = getCookie('theme');
                if (savedTheme === 'dark' || savedTheme === 'light') {
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(savedTheme);
                } else {
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const systemTheme = prefersDark ? 'dark' : 'light';
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(systemTheme);
                  setCookie('theme', systemTheme);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SettingsProvider
          initialSettings={{
            theme: initialTheme,
            font: initialFont,
          }}
        >
          {children}
        </SettingsProvider>
      </body>
    </html>
  );
}
