import React from 'react'

// Icons
import DownloadIcon from '@mui/icons-material/Download';

import CVes from '../../../assets/pdf/CV Federico Rocha - Español.pdf'
import CVen from '../../../assets/pdf/CV Federico Rocha - English.pdf'

export default function Download({ styles, homeTexts, language }) {
	const pdfPath = language === 'es' ? CVes : CVen;
	const pdfName = language === 'es' ? 'CV Federico Rocha - Español' : 'CV Federico Rocha - English';

	return (
		<div className={styles.home__mediaBtns}>
			<p>Curriculum Vitae</p>
			<a href={pdfPath} download={pdfName}>{homeTexts.download} <DownloadIcon /></a>
		</div>
	)
}
