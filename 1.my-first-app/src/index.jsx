import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock';
import faker from 'faker';
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
      <div style={{textAlign: 'left'}} className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar"  src={faker.image.avatar()}/>
          </a>
          <div className="content">
            <a href="/" className="author">
              Sam
            </a>
            <div className="metadata">
              <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice blog post!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
