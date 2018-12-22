import React, {Component} from 'react';
import './Person.css';

class Person extends Component{
    render () {
        return (
            <div className="person">
                <p>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Person;