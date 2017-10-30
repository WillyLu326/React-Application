import React from 'react';

import Person from './Person/Person';

const Persons = (props) => {
	return (
		props.persons.map(person, person => {
			return (
				<Person name={person.name} 
				age={person.age} 
				key={person.id}
				changed={(event) => this.changeNameHandler(event, index)}
				deleted={(event) => this.deletePersonHanlder(event, index)} />
			);
		})
	);
}

export default Persons