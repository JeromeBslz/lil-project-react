import { weaponArray } from '../weapon';

function Weapon() {
	return (
		<div>
			{weaponArray.map((weapon, index) => (
				<div
					key={index}
					title={weapon.title}
					description={weapon.description}
					image={weapon.image}
				/>
			))}
		</div>
	);
}

export default Weapon;