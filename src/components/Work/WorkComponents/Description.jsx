import React from 'react'

import { Fade } from "react-awesome-reveal";

export default function Description({ styles, workText }) {
	return (
		<div className={styles.work__description}>
			<Fade duration={1000} delay={400}>
				<div className={styles.work__title}>
					<h2>{workText.work}</h2>
				</div>
			</Fade>
			<Fade duration={1000} delay={600}>
				<p>{workText.description}</p>
			</Fade>
		</div>
	)
}
