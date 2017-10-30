import React from 'react';
import Radium from 'radium';

const Cookpit = (props) => {

	let switchBtnStyle = {
		backgroundColor: 'green',
		color: 'white',
		padding: '16px',
		cursor: 'pointer'
	}

	let toggleBtnStyle = {
		backgroundColor: 'pink',
		color: 'white',
		padding: '16px',
		cursor: 'pointer',
		':hover': {
			backgroundColor: 'lightgreen',
			color: 'black'
		}
	}


	return (
		<div>
			<button style={switchBtnStyle} onClick={props.switch.bind(this, 'Willy Lu!!!')}>Switch Name</button>
			<button style={toggleBtnStyle} onClick={props.toggle}>Toggle Persons</button>
			<p>This is person List</p>
		</div>
	);
}

export default Radium(Cookpit)