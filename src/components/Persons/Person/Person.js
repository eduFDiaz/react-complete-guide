import React, {Component} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.js] Inside constructor()',props);
      }
      componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
      }
    
      componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0){
            this.inputElement.focus();
        }
      }
    render () {
        console.log('[Person.js] Inside render()');
        return (
            <div key={this.props.id} className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={(inp) => { this.inputElement = inp }}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}></input>
            </div>
        );
    }
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default Person;