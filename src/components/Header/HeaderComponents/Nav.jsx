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
				<li className={location.pathname === '/portfolio/' ? styles.active : ''}>
					<a onClick={() => handlePageChange('/portfolio/')}>
						{navText.home}
					</a>
				</li>
				<li className={location.pathname === '/portfolio/about' ? styles.active : ''}>
					<a onClick={() => handlePageChange('/portfolio/about')}>
						{navText.about}
					</a>
				</li>
				<li className={location.pathname === '/portfolio/work' ? styles.active : ''}>
					<a onClick={() => handlePageChange('/portfolio/work')}>
						{navText.work}
					</a>
				</li>
			</ul>
		</nav>
	)
}
