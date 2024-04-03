import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Role from './pages/Role.jsx';
import Weapon from './pages/Weapon.jsx';
import Boss from './pages/Boss.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<NavBar />}>
			<Route index element={<App />} />
			<Route path="/classe" element={<Role />} />
			<Route path="/equipement" element={<Weapon />} />
			<Route path="/boss" element={<Boss />} />
		</Route>,
	),
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>,
);
