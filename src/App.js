import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Eduardo", age: 32},
      {name: "Yani", age: 17},
      {name: "Consuelo", age: 50}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React developer, my name is Eduardo</h1>
        <p>This is really working!</p>
        <button>Switch!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
