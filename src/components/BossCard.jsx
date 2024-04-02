function BossCard({ title, description, image, reward }) {
	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
			<img src={image} />
			<p>{reward}</p>
		</div>
	);
}

export default BossCard;
