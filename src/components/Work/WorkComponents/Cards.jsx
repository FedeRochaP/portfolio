import React from 'react'

import { Fade } from "react-awesome-reveal";

export default function Cards({ styles, getWorkData, motion }) {
	return (
		<Fade duration={2000} delay={800}>
			<div className={styles.work__cards}>
				{getWorkData().map((img, index) => (
					<div key={index}
						className={styles.work__card}>
						<img src={img.png} alt={img.name} />
						<div className={styles.work__cardText}>
							<h4>{img.name}</h4>
							<p>{img.description}</p>
						</div>
					</div>
				))}
			</div>
		</Fade>
	)
}
