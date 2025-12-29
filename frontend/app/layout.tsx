import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Header from './components/Header';
import SvgSprites from './components/SvgSprites';

import './globals.scss';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',

    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Bun Crumb',

    description: 'Library for creating HTTP servers with Bun',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Header />

                <SvgSprites />

                {children}
            </body>
        </html>
    );
}
