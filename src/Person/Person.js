import React, {Component} from 'react';

class Person extends Component{
    render () {
        return (
            <div>
                <p>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Person;