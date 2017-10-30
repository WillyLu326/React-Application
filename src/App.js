import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
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

  switchNameHandler = (newName) => {
    let persons = [...this.state.persons];
    persons[0].name = newName;
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

  styleSwitchButton = () => {
    let style = {
      backgroundColor: 'green',
      color: 'white',
      padding: '12px',
      cursor: 'pointer'
    }
    return style;
  }

  styleToggleButton = () => {
    let style = {
      backgroundColor: 'red',
      color: 'white',
      padding: '12px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }
    if (this.state.showPersons) {
      style.backgroundColor = 'pink';
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'red'
      }
    }
    return style;
  }

  stylePersonListTitle = () => {
    const style = [];
    if (this.state.persons.length <= 2) {
      style.push('blue');
    }
    if (this.state.persons.length <= 1) {
      style.push('bold');
    }
    return style.join(' ');
  }

  render() {
    return (
      <div className="App">
        <button style={this.styleSwitchButton()} onClick={this.switchNameHandler.bind(this, 'Willy Lu~!!!!')}>Switch Name</button>
        <button style={this.styleToggleButton()} onClick={this.togglePersonsHander}>Toggle Persons</button>
        <p className={this.stylePersonListTitle()}>This is person List</p>
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

export default Radium(App);
