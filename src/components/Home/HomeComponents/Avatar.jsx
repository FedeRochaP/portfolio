import React from 'react'

import AvatarImg from '../../../assets/img/ok.jpg'

export default function Avatar({ styles, motion }) {
	return (
		<motion.div className={styles.home__heroImg}
			initial={{ scale: 0 }}
			animate={{ rotate: 360, scale: 1.2 }}
			transition={{
				type: "spring",
				stiffness: 460,
				damping: 90
			}}>
			<img src={AvatarImg} alt="" />
		</motion.div>
	)
}
