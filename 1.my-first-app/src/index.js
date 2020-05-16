import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock.js'
const App = () => {
    const buttonText = { text: 'Click me!' };
    function getTime() {
        return (new Date()).toLocaleTimeString();
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <Clock />
            </div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
