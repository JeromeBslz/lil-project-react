import { weaponArray } from '../weapon';
import './Weapon.css';

function Weapon() {
	return (
		<>
			<h2 className="weapon-title">Les armes</h2>
			<div className="grid">
				{weaponArray.map((weapon, index) => (
					<div key={index} className="weapon-card">
						<h3>{weapon.title}</h3>
						<img src={weapon.image} alt={weapon.title} />
						<p>{weapon.description}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default Weapon;
