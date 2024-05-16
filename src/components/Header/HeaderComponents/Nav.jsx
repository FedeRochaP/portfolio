import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Nav({ styles, navText, setOpenCurtain }) {
	const location = useLocation();
	const navigate = useNavigate();

	const handlePageChange = (path) => {
		setOpenCurtain(true);
		setTimeout(() => {
			setOpenCurtain(false);
			navigate(path);
		}, 600);
	};

	return (
		<nav className={styles.header__nav}>
			<ul>
				<li className={location.pathname === '/portfolio-2/' ? styles.active : ''}>
					<a onClick={() => handlePageChange('/portfolio-2/')}>
						{navText.home}
					</a>
				</li>
				<li className={location.pathname === '/portfolio-2/about' ? styles.active : ''}>
					<a onClick={() => handlePageChange('/portfolio-2/about')}>
						{navText.about}
					</a>
				</li>
				<li className={location.pathname === '/portfolio-2/work' ? styles.active : ''}>
					<a onClick={() => handlePageChange('/portfolio-2/work')}>
						{navText.work}
					</a>
				</li>
			</ul>
		</nav>
	)
}
