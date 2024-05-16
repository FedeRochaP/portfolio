import React from 'react'

import { Fade } from "react-awesome-reveal";

import { container, item } from '../../../assets/css/motion'

export default function Skills({ styles, aboutText, iconsData, motion }) {
	return (
		<div className={styles.about__skills}>
			<Fade duration={1000} delay={200}>
				<div className={styles.about__title}>
					<h2>{aboutText.titleSkills}</h2>
				</div>
			</Fade>

			<motion.div className={`container ${styles.about__icons}`}
				variants={container}
				initial="hidden"
				animate="visible">
				{iconsData.map((icon, index) => (
					<motion.div key={index} className={`item ${styles.about__icon}`} variants={item}>
						<img src={icon.svg} alt={icon.name} />
						<p>{icon.name}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}
