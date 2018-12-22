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

  switchNameHandler = () => {
    console.log('It was clicked!');
    this.setState({
        persons: [
          {name: "Eduardo", age: 32},
          {name: "Yaniel", age: 17},
          {name: "Consuelo", age: 50}
        ]
      }
    )
  }
  render() {
    return (
      <div className="App">
        {/* Never use () on event calling or it will be called inmediately after rendering */}
        <button onClick={this.switchNameHandler}>Switch!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
