/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import MyLoader from './MyLoader/MyLoader';

class App extends Component {
  state = {
    persons: [
      { id: 'sdds', name: "Eduardo", age: 32 },
      { id: 'ddgg', name: "Yaniel", age: 17 },
      { id: 'asdg', name: "Consuelo", age: 50 }
    ],
    SomeOtherState: null,
    ShowPersons: false
  };
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

    const person = {...this.state.persons[personIndex]};
    
    person.name = event.target.value;

    const persons = {...this.state.persons};

    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.ShowPersons;
    this.setState({ ShowPersons: !doesShow });
  };
  deletePersonHandler = (personIndex) => {
     //const persons = this.state.persons.slice();
     const persons = [...this.state.persons];
     persons.splice(personIndex,1);
     this.setState({persons: persons});
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };
    let persons = null;
    if (this.state.ShowPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons name!
        </button>
        {persons}
      </div>
    );
  }
}

export default App;