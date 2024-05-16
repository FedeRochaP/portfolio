import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

// Drawer
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

// Icon
import MenuIcon from '../../../assets/img/icons/menu.svg'

export default function Menu({ styles, navText, setOpenCurtain, darkMode }) {
	const location = useLocation();
	const navigate = useNavigate();

	const handlePageChange = (path) => {
		setOpenCurtain(true);
		setTimeout(() => {
			setOpenCurtain(false);
			navigate(path);
		}, 600);
	};

	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};
	
	return (
		<div className={styles.header__menu}>
			<Button onClick={toggleDrawer(true)}>
				<img src={MenuIcon} alt="Menu" className={styles.header__menuIcon} />
			</Button>
			<Drawer open={open}
				onClose={toggleDrawer(false)}>
				<div className={`${styles.header__menuBox} ${darkMode ? styles.darkTheme : styles.lightTheme}`}
					role="presentation"
					onClick={toggleDrawer(false)}>
					<ul className={styles.header__menuList}>
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
				</div>
			</Drawer>
		</div>
	);
}