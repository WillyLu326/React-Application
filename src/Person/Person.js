import React from 'react';

const Person = (props) => {
  return (
    <div>
      <p>My name is {props.name}.</p>
      <p>My age is {props.age}.</p>   
    </div>
  );
}

export default Person