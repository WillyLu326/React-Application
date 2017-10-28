import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <button className="deleteBtn" onClick={props.deleted}>Delete</button>
      <p>My name is {props.name}.</p>
      <p>My age is {props.age}.</p>  
      <input /> 
    </div>
  );
}

export default Person