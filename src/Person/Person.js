import React, {Component} from 'react';
import './Person.css';

class Person extends Component{
    render () {
        return (
            <div className="Person">
                <h1 onClick={this.props.click} >{this.props.name}</h1>
                <p>Age: {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        );
    }
}

export default Person;