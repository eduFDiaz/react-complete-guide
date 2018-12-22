import React, {Component} from 'react';
import './Person.css';

class Person extends Component{
    render () {
        return (
            <div className="person">
                <h1 onClick={this.props.click} >{this.props.name}</h1>
                <p>Age: {this.props.age}</p>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Person;