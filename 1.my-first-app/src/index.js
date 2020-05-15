import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <>
            <div>Hello There!</div>
            <div>General Kenobi..</div>
        </>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);