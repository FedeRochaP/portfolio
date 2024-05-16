import React from 'react'

import AvatarImg from '../../../assets/img/fede.jpeg'

export default function Avatar({ styles }) {
	return (
		<div className={styles.about__img}>
			<img src={AvatarImg} alt="" />
		</div>
	)
}