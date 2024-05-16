import React from 'react'

import styles from './Header.module.css'

// Components
import ThemeSwitch from './HeaderComponents/ThemeSwitch';
import Nav from './HeaderComponents/Nav';
import Flags from './HeaderComponents/Flags';
import Menu from './HeaderComponents/Menu'

// Context
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

import { navText as englishText } from '../../constants/texts_en';
import { navText as spanishText } from '../../constants/texts_es';

export default function Header({setOpenCurtain}) {

	const { darkMode, toggleDarkMode } = useTheme();
	const { language, changeLanguage } = useLanguage();

	const navText = language === 'es' ? spanishText : englishText;

	return (
		<div className={`${styles.header} ${darkMode ? styles.darkTheme : styles.lightTheme}`}>
			<Nav styles={styles} navText={navText} setOpenCurtain={setOpenCurtain}/>
			<Menu styles={styles} navText={navText} darkMode={darkMode} setOpenCurtain={setOpenCurtain}/>
			<div className={styles.header__options}>
				<Flags styles={styles} changeLanguage={changeLanguage}/>
				<ThemeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
			</div>
		</div>
	)
}
