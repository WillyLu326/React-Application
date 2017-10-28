import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 0, name: 'Willy', age: 28 },
      { id: 1, name: 'Zheng', age: 28 },
      { id: 2, name: 'Cedar', age: 25 }
    ],
    showPersons: true
  }

  togglePersonsHander = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    return (
      <div className="App">
        <button>Switch Name</button>
        <button onClick={this.togglePersonsHander}>Toggle Persons</button>

        {
          this.state.showPersons ? (
            <div>
              {this.state.persons.map(person => {
                return (
                  <Person name={person.name} age={person.age} key={person.id} />
                );
              })}
            </div>
          ) : null
        }


      </div>
    );
  }
}

export default App;
