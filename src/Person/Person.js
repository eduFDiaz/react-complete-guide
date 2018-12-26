import React, {Component} from 'react';
import './Person.css';
import Radium from 'radium';

class Person extends Component{
    render () {
        return (
            <div className="Person">
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        );
    }
}

export default Radium(Person);