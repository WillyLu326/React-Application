import React from 'react';
import Radium from 'radium';
import './Cookpit.css'

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

	const titleClasses = [];
	if (props.persons.length <= 2) {
		titleClasses.push('blue');
	}
	if (props.persons.length <= 1) {
		titleClasses.push('bold');
	}

	return (
		<div>
			<button style={switchBtnStyle} onClick={props.switch.bind(this, 'Willy Lu!!!')}>Switch Name</button>
			<button style={toggleBtnStyle} onClick={props.toggle}>Toggle Persons</button>
			<p className={titleClasses.join(' ')}>This is person List</p>
		</div>
	);
}

export default Radium(Cookpit)