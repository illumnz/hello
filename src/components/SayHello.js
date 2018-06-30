import React, { Component } from 'react';
class SayHello extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    render() {
        return (
            <div>
                <h1>Hi, {this.props.name}</h1>
                <h1>age, {this.props.age}</h1>
            </div>
        );
    }
}

export default SayHello;
