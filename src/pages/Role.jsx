import roleArray from '../role';
import './Role.css';

function Role() {
	return (
		<>
			<h2 className="role-name">Les classes</h2>
			<div className="grid">
				{roleArray.map((role, index) => (
					<div key={index} className="role-card">
						<h3>{role.name}</h3>
						<p>{role.text}</p>
						<div className="image-and-stats">
							<img src={role.image} alt={role.name} />
							<ul>
								<li>Stats de base :</li>
								<li>{role.niveau}</li>
								<li>{role.vigueur}</li>
								<li>{role.esprit}</li>
								<li>{role.endurance}</li>
								<li>{role.force}</li>
								<li>{role.dextérité}</li>
								<li>{role.intelligence}</li>
								<li>{role.foi}</li>
								<li>{role.esotérisme}</li>
							</ul>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default Role;

// import classArray from '../class';

// function Class() {
// 	return (
// 		<div>
// 			{classArray.map((item, index) => (
// 				<div
// 					key={index}
// 					name={item.name}
// 					text={item.text}
// 					image={item.image}
// 				/>

// 			))}
// 		</div>
// 	);
// }
