import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to={'/'}>Accueil</Link>
					</li>
					<li>
						<Link to={'/classe'}>Classes</Link>
					</li>
					<li>
						<Link to={'/equipement'}>Equipement</Link>
					</li>
					<li>
						<Link to={'/boss'}>Boss</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export default NavBar;
