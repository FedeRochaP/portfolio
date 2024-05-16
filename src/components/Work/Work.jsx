import React, { useState } from 'react'

import styles from './Work.module.css'

import { motion } from "framer-motion"

// Components
import Description from './WorkComponents/Description';
import Cards from './WorkComponents/Cards';

// Data
import getWorkData from './WorkData/workData';

// Context
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

import { workText as englishText } from '../../constants/texts_en';
import { workText as spanishText } from '../../constants/texts_es';

export default function Work() {
	const { darkMode } = useTheme();

	const { language } = useLanguage();
	const workText = language === 'es' ? spanishText : englishText;

	return (
		<div className={`${styles.work} ${darkMode ? styles.darkTheme : styles.lightTheme}`}>
			<div className={styles.work__container}>
				<Description styles={styles} workText={workText}/>
				<Cards styles={styles} getWorkData={getWorkData} motion={motion}/>
			</div>
		</div>
	)
}
