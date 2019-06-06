import React from 'react';
import './App.css';
import logo from './logo.svg';
import Concepts from './components/concepts';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Reacting to Concepts</h1>
            </header>

            <Concepts />
        </div>
    );
}

export default App;
