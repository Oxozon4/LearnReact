import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = { text: 'Click me!' };
    function getTime() {
        return (new Date()).toLocaleTimeString();
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <div>Current Time:</div>
                <h3>{getTime()}</h3>
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
