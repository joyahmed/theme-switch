import React, { lazy } from 'react';
const ThemeSwitch = lazy(
	() => import('@/_components/ThemeSwitch')
);

const HomePage = () => {
	return (
		<div className='flex items-center justify-center h-screen w-screen bg-gray-200 dark:bg-black'>
			<nav className='fixed top-0 left-0 flex items-center justify-center w-screen h-14'>
				<ThemeSwitch />
			</nav>
			<h1 className='text-blue-900 dark:text-white'>
				Dark/Light Theme
			</h1>
		</div>
	);
};

export default HomePage;
