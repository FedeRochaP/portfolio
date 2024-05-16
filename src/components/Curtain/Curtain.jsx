import React from 'react';

import { useTheme } from '../../context/ThemeContext';

import styles from './Curtain.module.css'

const Curtain = ({ isOpen }) => {

	const { darkMode } = useTheme();

	return (
		<div className={`${styles.courtain} ${isOpen ? styles.courtainOpen : styles.courtainClose} ${darkMode ? styles.darkTheme : styles.lightTheme}`} />
	);
};

export default Curtain;
