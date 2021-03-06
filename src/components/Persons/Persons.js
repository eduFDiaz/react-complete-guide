import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component{
    constructor(props){
        super(props);
        console.log('[Persons.js] Inside constructor()',props);
      }
      componentWillMount(){
        console.log('[Persons.js] Inside componentWillMount()');
      }
    
      componentDidMount(){
        console.log('[Persons.js] Inside componentDidMount()');
      }

      componentWillReceiveProps(nextProps){
        console.log('[Update Persons.js] Inside componentWillReceiveProps()',nextProps);
      }

      shouldComponentUpdate(nextProps,nextState){
        console.log('[Update Persons.js] Inside shouldComponentUpdate()',nextProps,nextState);        
        return nextProps !== this.props.persons;
        //It's returning true because the properties have changed, therefore triggering the render method
      }

      componentDidUpdate(){
        console.log('[Update Persons.js] Inside componentDidUpdate');
      }
    
    render(){
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                position={index}
                key={person.id}
                changed={event => this.props.changed(event, person.id)}
              />
            });
    }
}
export default Persons;