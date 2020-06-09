import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import React, { useState } from "react";

ReactDOM.render(<App />, document.getElementById('root'));





const [lionScore, setScore] = useState(0);

const [tigerScore, setTigerScore] = useStae(0);


function Game() {

    return (
        <div>
            <p>You clicked {this.state.count} times</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                Click me
        </button>
        </div>
    )

}   
