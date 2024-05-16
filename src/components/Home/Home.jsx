import React from 'react'

import styles from './Home.module.css'

import { motion } from "framer-motion"

import { Fade } from "react-awesome-reveal";

// Componets
import Download from './HomeComponents/Download';
import Media from './HomeComponents/Media';
import Avatar from './HomeComponents/Avatar';

// Context
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

import { homeTexts as englishText } from '../../constants/texts_en';
import { homeTexts as spanishText } from '../../constants/texts_es';


export default function Home() {
	const { darkMode } = useTheme();

	const { language } = useLanguage();
	const homeTexts = language === 'es' ? spanishText : englishText;

	return (
		<div className={`${styles.home} ${darkMode ? styles.darkTheme : styles.lightTheme}`}>
			<div className={styles.home__container}>
				<Avatar styles={styles} motion={motion} />
				<div className={styles.home__heroText}>
					<Fade duration={1000} delay={400}>
						<h2 >{homeTexts.greating}</h2>
					</Fade>
					<Fade duration={1000} delay={600}>
						<h1 >{homeTexts.name}</h1>
					</Fade>
					<Fade duration={1000} delay={800}>
						<h3 >{homeTexts.description}</h3>
					</Fade>
				</div>
				<div className={styles.home__heroMedia}>
					<Media styles={styles} motion={motion} />
					<Fade duration={1000} delay={400}>
						<Download styles={styles} homeTexts={homeTexts} language={language} />
					</Fade>
				</div>
			</div>
		</div>
	)
}
