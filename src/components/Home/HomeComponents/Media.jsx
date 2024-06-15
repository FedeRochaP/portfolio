import React from 'react'

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import { container, item } from '../../../assets/css/motion'

export default function Media({ styles, motion }) {
	return (
		<motion.div className={styles.home__heroMediaIcons} 
		variants={container}
				initial="hidden"
				animate="visible">
			<motion.a variants={item} href="https://www.linkedin.com/in/federicorochacueli/" target='_blank'>
				<div className={styles.home__heroMediaIcon}>
					<LinkedInIcon />
				</div>
			</motion.a>
			<motion.a variants={item} href="mailto:federochacueli@gmail.com" target='_blank'>
				<div className={styles.home__heroMediaIcon}>
					<EmailIcon />
				</div>
			</motion.a>
			<motion.a variants={item} href="https://github.com/FedeRochaP" target='_blank'>
				<div className={styles.home__heroMediaIcon}>
					<GitHubIcon />
				</div>
			</motion.a>
			{/* <a href="https://www.behance.net/federicorocha1" target='_blank'><EmailIcon/></a> */}
		</motion.div>
	)
}
