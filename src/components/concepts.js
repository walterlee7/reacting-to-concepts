import React, { Component } from 'react';
import test from './markup/test.md'


class Concepts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markup: []
        };
    }

    componentDidMount() {
        let concept = { test };

        for (let i = 0; concept.length < i; i++) {
            fetch(concept)
        }
    }

    render() {
        return (
            <div className="concept-container">
                <div>React is...</div>
                <div className="concept-container">
                    <div>{test}</div>
                </div>
            </div>

        );
    }
}

export default Concepts;