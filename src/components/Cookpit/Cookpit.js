import React from 'react';

const Cookpit = (props) => {

	return (
		<div>
			<button onClick={props.switch.bind(this, 'Willy Lu!!!')}>Switch Name</button>
			<button>Toggle Persons</button>
			<p>This is person List</p>
		</div>
	);
}

export default Cookpit