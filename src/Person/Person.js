import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <p>My name is {props.name}.</p>
      <p>My age is {props.age}.</p>  
      <input /> 
    </div>
  );
}

export default Person