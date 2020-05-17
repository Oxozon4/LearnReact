import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock';
import CommentDetail from './components/commentDetail'
const App = () => {
  const buttonText = { text: 'Click me!' };
  return (
    <div style={{ textAlign: 'center', minWidth: '350px', fontFamily: 'Open Sans' }}>
      <div
        style={{
          backgroundColor: 'yellow',
          color: 'black',
          width: '100%',
          height: '5vh',
          fontSize: '2rem',
          lineHeight: '-20px',
          marginBottom: '50px',
          border: '1px solid black',
        }}
      >
        <Clock />
      </div>
      <label htmlFor="name" className="label">
        Enter name:
        <input id="name" type="text" />
      </label>
      <button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
      <hr />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
