import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React developer, my name is Eduardo</h1>
        <p>This is really working!</p>
        <Person name="Edu" age="32"/>
        <Person name="Yani" age="17"> My hobbies: Racing</Person>
        <Person name="Consuelo" age="50"/>
      </div>
    );
  }
}

export default App;
