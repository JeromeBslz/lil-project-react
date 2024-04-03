import roleArray from '../role';
import './Role.css';

function Role() {
    return (
        <>
            <h2 className='role-name'>Les classes dans Elden Ring</h2>
            <div className='grid'>
                {roleArray.map((role, index) => (
                    <div key={index} className='role-card'>
                        <h3>{role.name}</h3>
                        <p>{role.text}</p>
                        <img src={role.image} alt={role.name} />
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


