import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(true);

	const toggleDarkMode = () => {
		setDarkMode(prevMode => !prevMode);
	};

	useEffect(() => {
		document.body.style.backgroundColor = darkMode ? '#15202B' : '#ffffff';
	}, [darkMode]);

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
