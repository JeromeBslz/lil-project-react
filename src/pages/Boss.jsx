import bossArray from '../boss';

function Boss() {
	return (
		<div>
			{bossArray.map((boss, index) => (
				<div
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
