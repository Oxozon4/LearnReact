import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock';
import CommentDetail from './components/commentDetail';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';
import "./index.css";

const App = () => {
  const buttonText = { text: 'Click me!' };
  return (
    <div style={{ textAlign: 'center', minWidth: '350px', fontFamily: 'Open Sans' }}>
      <div className="main-container"
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
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post!" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 2:00AM" content="I like the subject" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" content="I like the writing" avatar={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
