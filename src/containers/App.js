import React, { Component } from "react";
import classes from "./App.css";
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor()',props);
    this.state = {
      persons: [
        { id: "asfa1", name: "Eduardo", age: 32 },
        { id: "vasdf1", name: "Yaniel", age: 17 },
        { id: "asdf11", name: "Consuelo", age: 50 }
      ],
      otherState: "some other value",
      showPersons: false
    };
  }
  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[Update App.js] Inside shouldComponentUpdate()',nextProps,nextState);        
    return true;
    //return nextProps.persons !== this.state.persons;
    //It's returning true because the properties have changed, therefore triggering the render method
  }

  componentWillUpdate(nextProps,nextState){
    console.log('[Update App.js] Inside shouldComponentUpdate()',nextProps,nextState);
    //It's returning true because the properties have changed, therefore triggering the render method
  }

  componentDidUpdate(){
    console.log('[Update App.js] Inside componentDidUpdate');
  }
  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            />;
    }

    return (
      <div className={classes.App}>
      <button onClick={() => {this.setState({showPersons: true})}}>Show persons</button>
        <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
                 />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
