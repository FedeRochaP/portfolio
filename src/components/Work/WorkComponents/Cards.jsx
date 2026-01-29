import React, { useState } from 'react';

import { Fade } from "react-awesome-reveal";

import WebIcon from '../../../assets/img/icons/web.svg';


export default function Cards({ styles, getWorkData, motion }) {
	const [currentPage, setCurrentPage] = useState(0);
	const cardsPerPage = 4;
	const allProjects = getWorkData();
	const totalPages = Math.ceil(allProjects.length / cardsPerPage);

	const startIndex = currentPage * cardsPerPage;
	const currentProjects = allProjects.slice(startIndex, startIndex + cardsPerPage);

	const handleNextPage = () => {
		if (currentPage < totalPages - 1) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<div className={styles.work__cardsContainer}>
			<div className={styles.work__cards} key={currentPage}>
				{currentProjects.map((project, index) => (
					<Fade key={`${currentPage}-${index}`} duration={1100} delay={index * 120} triggerOnce={false}>
						<div className={styles.work__card}>
							<img src={project.png} alt={project.name} />
							<div className={styles.work__cardOverlay}>
								<div className={styles.work__cardText}>
									<h4>{project.name}</h4>
									<p>{project.description}</p>
									<div className={styles.work__cardTechs}>
										{project.techs?.map((tech, techIndex) => (
											<span key={techIndex} className={styles.work__techTag}>{tech}</span>
										))}
									</div>
									{
										project.link != '' ?
											<a href={project.link} target='_blank' rel='noopener noreferrer'>
												<i class="fa-solid fa-share"></i>
											</a>
											:
											<></>
									}
								</div>
							</div>
						</div>
					</Fade>
				))}
			</div>
			{totalPages > 1 && (
				<div className={styles.work__pagination}>
					<button 
						className={`${styles.work__paginationBtn} ${currentPage === 0 ? styles.disabled : ''}`}
						onClick={handlePrevPage}
						disabled={currentPage === 0}
					>
						<i class="fa-solid fa-angle-left"></i>
					</button>
					<div className={styles.work__paginationDots}>
						{Array.from({ length: totalPages }).map((_, index) => (
							<span 
								key={index} 
								className={`${styles.work__dot} ${index === currentPage ? styles.active : ''}`}
								onClick={() => setCurrentPage(index)}
							/>
						))}
					</div>
					<button 
						className={`${styles.work__paginationBtn} ${currentPage === totalPages - 1 ? styles.disabled : ''}`}
						onClick={handleNextPage}
						disabled={currentPage === totalPages - 1}
					>
						<i class="fa-solid fa-angle-right"></i>
					</button>
				</div>
			)}
		</div>
	);
}
