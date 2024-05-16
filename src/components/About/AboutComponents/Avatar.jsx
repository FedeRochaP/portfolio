import React from 'react'

import ok from '../../../assets/img/ok.jpg'

export default function Avatar({ styles }) {
	return (
		<div className={styles.about__img}>
			<img src={ok} alt="" />
		</div>
	)
}