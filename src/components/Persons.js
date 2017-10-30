import React from 'react';

import Person from './Person/Person';

const Persons = (props) => {
	return (
		props.persons.map((person, index) => {
			return (
				<Person 
					name={person.name} 
					age={person.age} 
					key={person.id}
					changed={(event) => props.changed(event, index)}
					deleted={(event) => props.deleted(event, index)} />
			);
		})
	);
}

export default Persons