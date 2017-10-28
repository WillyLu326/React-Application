import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 0, name: 'Willy', age: 28 },
      { id: 0, name: 'Zheng', age: 28 },
      { id: 0, name: 'Cedar', age: 25 }
    ],
    showPersons: true
  }

  render() {
    return (
      <div className="App">
        <button>Switch Name</button>
        <button>Toggle Persons</button>
      </div>
    );
  }
}

export default App;
