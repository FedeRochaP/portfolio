import React from 'react'

// Flag Icon
import arFlag from '../../../assets/img/flags/ar-flag.svg'
import usFlag from '../../../assets/img/flags/us-flag.svg'

export default function Flags({styles, changeLanguage}) {
	const handleLanguageChange = (newLanguage) => {
		changeLanguage(newLanguage);
	};

	return (
		<div className={styles.header__languages}>
			<img src={arFlag} alt="es" onClick={() => handleLanguageChange('es')} />
			<img src={usFlag} alt="en" onClick={() => handleLanguageChange('en')} />
		</div>
	)
}
