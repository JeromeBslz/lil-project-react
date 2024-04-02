import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
	return (
		<>
			<nav className="header">
				<ul className="ul">
					<li>
						<Link to={'/'} className="link">
							Accueil
						</Link>
					</li>
					<li>
						<Link to={'/classe'} className="link">
							Classes
						</Link>
					</li>
					<li>
						<Link to={'/equipement'} className="link">
							Équipements
						</Link>
					</li>
					<li>
						<Link to={'/boss'} className="link">
							Boss
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export default NavBar;
