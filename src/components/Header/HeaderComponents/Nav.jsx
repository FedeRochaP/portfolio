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
				<li className={location.pathname === '/' ? styles.active : ''}>
					<a onClick={() => handlePageChange('/')}>
						{navText.home}
					</a>
				</li>
				<li className={location.pathname === '/about' ? styles.active : ''}>
					<a onClick={() => handlePageChange('/about')}>
						{navText.about}
					</a>
				</li>
				<li className={location.pathname === '/work' ? styles.active : ''}>
					<a onClick={() => handlePageChange('/work')}>
						{navText.work}
					</a>
				</li>
			</ul>
		</nav>
	)
}
