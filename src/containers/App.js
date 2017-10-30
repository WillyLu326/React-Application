import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from './../components/Persons';
import Cookpit from './../components/Cookpit/Cookpit';

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
    if (!persons || persons.length === 0) return ;
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

  render() {
    return (
      <StyleRoot>
        <div className="App">
          <Cookpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            switch={this.switchNameHandler}
            toggle={this.togglePersonsHander}/>
          {
            this.state.showPersons ? (
              <Persons 
                persons={this.state.persons}
                changed={this.changeNameHandler}
                deleted={this.deletePersonHanlder}/>
            ) : null
          }
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
