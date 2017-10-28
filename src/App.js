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

  switchNameHandler = () => {
    let persons = [...this.state.persons];
    persons[0].name = 'Willy Lu!!!';
    this.setState({ persons: persons });
  }

  togglePersonsHander = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  deletePersonHanlder = (event, index) => {
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  changeNameHandler = (event, index) => {
    let person = {...this.state.persons[index]};
    person.name = event.target.value;
    let persons = [...this.state.persons];
    persons[index] = person;
    this.setState({ persons: persons });
  }

  render() {
    return (
      <div className="App">
        <button>Switch Name</button>
        <button onClick={this.togglePersonsHander}>Toggle Persons</button>
        {
          this.state.showPersons ? (
            <div>
              {this.state.persons.map((person, index) => {
                return (
                  <Person name={person.name} 
                          age={person.age} 
                          key={person.id}
                          changed={(event) => this.changeNameHandler(event, index)}
                          deleted={(event) => this.deletePersonHanlder(event, index)} />
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
