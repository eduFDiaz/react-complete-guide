/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Edu", age: 32},
      {name: "Yani", age: 17},
      {name: "Consue", age: 50}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
        persons: [
          {name: newName, age: 32},
          {name: "Yaniel", age: 17},
          {name: "Consuelo", age: 50}
        ]
      }
    )
  }
  nameChangeHandler = (event) => {
    this.setState({
        persons: [
          {name: "Eduardo", age: 32},
          {name: event.target.value, age: 17},
          {name: "Consuelo", age: 50}
        ]
      }
    )
  }
  render() {
    return (
      <div className="App">
        {/* Always use .bind syntax because is more efficient */}
        <button onClick={this.switchNameHandler.bind(this,"Pedro")}>Switch!</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          click={this.switchNameHandler} 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,"Eduardito")}
          changed={this.nameChangeHandler.bind(this)}> My hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
