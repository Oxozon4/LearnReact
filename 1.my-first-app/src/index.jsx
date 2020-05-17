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
    <div className="main">
      <div className="main-container"
      >
        <Clock />
      </div>
      <div className="main-container__comments">
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
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
