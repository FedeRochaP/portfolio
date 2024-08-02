import React from 'react';

// import { Fade } from "react-awesome-reveal";

import WebIcon from '../../../assets/img/icons/web.svg';
import LeftArrow from '../../../assets/img/icons/left-arrow.svg';
import RightArrow from '../../../assets/img/icons/right-arrow.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


export default function Cards({ styles, getWorkData, motion }) {
	return (
		// <Fade duration={2000} delay={800}>
		<Swiper
			modules={[Navigation]}
			navigation={{ // Configuración de los botones de navegación
				nextEl: `.${styles.work__arrowNext}`,
				prevEl: `.${styles.work__arrowPrev}`,
			}}
			loop={false} // Desactiva el loop si no deseas un bucle infinito
			className={`${styles.work__cards} fadeInDelayed`}
		>
			{getWorkData().map((img, index) => (
				<SwiperSlide key={index}>
					<div className={styles.work__card}>
						<img src={img.png} alt={img.name} />
						<div className={styles.work__cardText}>
							<h4>{img.name}</h4>
							<p>{img.description}</p>
							{
								img.link != '' ?
									<a href={img.link} target='_blank'>
										<img src={WebIcon} alt="" />
									</a>
									:
									<></>
							}
						</div>
					</div>
				</SwiperSlide>
			))}
			{/* Botones de navegación */}
			<div className={styles.work__arrowBtns}>
				<div className={styles.work__arrowNext}>
					<img src={RightArrow} alt="" />
				</div>
				<div className={styles.work__arrowPrev}>
					<img src={LeftArrow} alt="" />
				</div>
			</div>
		</Swiper>
		// </Fade>
	);
}
