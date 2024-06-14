'use client';

import { ThemeProvider } from 'next-themes';

interface NextThemeProviderProps {
	children: React.ReactNode;
}

const NextThemeProvider = ({ children }: NextThemeProviderProps) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
		>
			{children}
		</ThemeProvider>
	);
};

export default NextThemeProvider;
