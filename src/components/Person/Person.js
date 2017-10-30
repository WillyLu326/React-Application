import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = (props) => {
  const style = {
    '@media(min-width: 500px)': {
      width: '450px'
    }
  }
  return (
    <div className="Person" style={style}>
      <button className="deleteBtn" onClick={props.deleted}>Delete</button>
      <p>My name is {props.name}.</p>
      <p>My age is {props.age}.</p>  
      <input value={props.name} onChange={props.changed}/> 
    </div>
  );
}

export default Radium(Person)