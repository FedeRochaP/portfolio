import React from 'react'

import { Fade } from "react-awesome-reveal";

import PersonIcon from '@mui/icons-material/Person';

export default function Description({ styles, aboutText }) {
	return (
		<div className={styles.about__description}>
			<Fade duration={1000} delay={200}>
				<div className={styles.about__title}>
					<h2>{aboutText.title}</h2>
				</div>
			</Fade>
			<div className={styles.about__text}>
				<Fade duration={1000} delay={400}>
					<p>{aboutText.about}</p>
				</Fade>
				<Fade duration={1000} delay={600}>
					<p>{aboutText.skills}</p>
				</Fade>
				<Fade duration={1000} delay={800}>
					<p>{aboutText.social}</p>
				</Fade>
			</div>
			<div className={styles.about__cards}>
				<Fade duration={1000} delay={1000}>
					<div className={styles.about__card}>
						<h3>{aboutText.experience}</h3>
						<div className={styles.about__cardText}>
							<PersonIcon />
							<p>+2 {aboutText.years}</p>
						</div>
					</div>
				</Fade>
				{/* <Fade duration={1000} delay={1200}>
					<div className={styles.about__card}>
						<h3>{aboutText.experience}</h3>
						<div className={styles.about__cardText}>
							<PersonIcon />
							<p>+2 {aboutText.years}</p>
						</div>
					</div>
				</Fade> */}
			</div>
		</div>
	)
}
