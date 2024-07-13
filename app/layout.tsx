import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { lazy } from 'react';
import './globals.css';
const NextThemeProvider = lazy(
	() => import('@/providers/NextThemeProvider')
);

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next Repo',
	description: 'A repo containing reusable components for fast use'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<NextThemeProvider>
					<main>{children}</main>
				</NextThemeProvider>
			</body>
		</html>
	);
}
