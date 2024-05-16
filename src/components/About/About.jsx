import React from 'react'

import styles from './About.module.css'
import { motion } from "framer-motion"

// Components
import Avatar from './AboutComponents/Avatar';
import Description from './AboutComponents/Description';
import Skills from './AboutComponents/Skills';

// Data
import iconsData from './AboutData/iconsData';

// Context
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

import { aboutText as englishText } from '../../constants/texts_en';
import { aboutText as spanishText } from '../../constants/texts_es';



export default function About() {
	const { darkMode } = useTheme();

	const { language } = useLanguage();
	const aboutText = language === 'es' ? spanishText : englishText;

	return (
		<div className={`${styles.about} ${darkMode ? styles.darkTheme : styles.lightTheme}`}>
			<div className={styles.about__container}>
				{/* <div className={styles.about__leftSide}>
					<Avatar styles={styles} />
				</div> */}
				<div className={styles.about__rightSide}>
					<Description styles={styles} aboutText={aboutText}/>
					<Skills styles={styles} aboutText={aboutText} iconsData={iconsData} motion={motion}/>
				</div>
			</div>
		</div>
	)
}
