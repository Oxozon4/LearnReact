/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/button-has-type */
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock';

const App = () => {
  const buttonText = { text: 'Click me!' };
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          backgroundColor: 'yellow',
          color: 'black',
          width: '100%',
          height: '5vh',
          fontSize: '2rem',
          lineHeight: '-40px',
          marginBottom: '50px',
        }}
      >
        <Clock />
      </div>
      <label htmlFor="name" className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button type="reset" style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
