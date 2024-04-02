import bossArray from '../boss';
import './Boss.css';

function Boss() {
	return (
		<>
			<h2 className="boss-title">Les boss principaux</h2>
			<div className="grid">
				{bossArray.map((boss, index) => (
					<div key={index} className="boss-card">
						<h3>{boss.title}</h3>
						<img src={boss.image} alt="" />
						<p>{boss.description}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default Boss;
