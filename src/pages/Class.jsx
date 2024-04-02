import classArray from '../class';

function Class() {
	return (
		<div>
			{classArray.map((item, index) => (
				<div
					key={index}
					name={item.name}
					text={item.text}
					image={item.image}
				/>

			))}			
		</div>
	);
}	

export default Class;
