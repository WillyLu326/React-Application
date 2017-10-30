import React from 'react';

const Cookpit = (props) => {

	let switchBtnStyle = {
		backgroundColor: 'green',
		color: 'white',
		padding: '16px',
		cursor: 'pointer'
	}

	let toggleBtnStyle = {

	}


	return (
		<div>
			<button style={switchBtnStyle} onClick={props.switch.bind(this, 'Willy Lu!!!')}>Switch Name</button>
			<button onClick={props.toggle}>Toggle Persons</button>
			<p>This is person List</p>
		</div>
	);
}

export default Cookpit