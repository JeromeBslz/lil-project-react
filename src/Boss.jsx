import bossArray from 'Boss.js';

function Boss() {
	return (
		<div>
			{bossArray.map((boss, index) => (
				<BossCard
					key={index}
					title={boss.title}
					description={boss.description}
					image={boss.image}
					reward={boss.reward}
				/>
			))}
		</div>
	);
}

export default Boss;
