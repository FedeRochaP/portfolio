import React from 'react'

import { Fade } from "react-awesome-reveal";

export default function Skills({ styles, aboutText, iconsData }) {
	return (
		<div className={styles.about__skills}>
			<Fade duration={1000} delay={200}>
				<div className={styles.about__title}>
					<h2>{aboutText.titleSkills}</h2>
				</div>
			</Fade>

			<div className={styles.about__icons}>
				{iconsData.map((icon, index) => (
					<Fade key={index} duration={1100} delay={index * 100} triggerOnce>
						<div className={styles.about__icon}>
							<img src={icon.svg} alt={icon.name} />
							<p>{icon.name}</p>
						</div>
					</Fade>
				))}
			</div>
		</div>
	)
}
