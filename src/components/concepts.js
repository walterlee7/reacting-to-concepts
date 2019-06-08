import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import intro from './markup/intro.md';
import dataDisplay from './markup/dataDisplay.md';
import jsxInDepth from './markup/jsxInDepth.md';
import dynamicUI from './markup/dynamicUI.md';



class Concepts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markup: []
        };
    }

    async componentDidMount() {
        let concept = [intro, dataDisplay, jsxInDepth, dynamicUI];
        let conceptArray = [];

        for (let i = 0; i < concept.length; i++) {
            await fetch(concept[i]).then(
                (res) => res.text()
            ).then((text) => {
                conceptArray.push(text);
            })
        }

        this.setState({
            markup: conceptArray
        })

    }

    render() {
        return (
            <div className="concept-container">
                <div className="concept">
                    {this.state.markup.map((post, index) => <ReactMarkdown source={post} key={index} />)}
                </div>
            </div>
        );
    }
}

export default Concepts;