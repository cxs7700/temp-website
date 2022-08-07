import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Button = ({ children, type, onClick, classes }) => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (type === 'primary') {
		return (
			<button
				onClick={onClick}
				type="button"
				className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${
					mounted && theme === 'dark' ? 'bg-white text-black hover:bg-slate-600' : 'bg-black text-white'
				}  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100`}
			>
				{children}
			</button>
		);
	}
	return (
		<button
			onClick={onClick}
			type="button"
			className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
				mounted && theme === 'dark' ? 'hover:bg-slate-600 text-white' : 'hover:bg-slate-100'
			} hover:scale-105 active:scale-100  tablet:first:ml-0 ${classes}`}
		>
			{children}
		</button>
	);
};

export default Button;
