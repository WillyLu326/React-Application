import React from 'react';

const Cookpit = () => {
	return (
		<div>
			<button style={this.styleSwitchButton()} onClick={this.switchNameHandler.bind(this, 'Willy Lu~!!!!')}>Switch Name</button>
			<button style={this.styleToggleButton()} onClick={this.togglePersonsHander}>Toggle Persons</button>
			<p className={this.stylePersonListTitle()}>This is person List</p>
		</div>
	);
}

export default Cookpit