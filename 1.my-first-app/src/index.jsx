import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock';
import CommentDetail from './components/commentDetail';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';
import "./index.css";

const App = () => {
  return (
    <div className="main">
      <div className="main-container"
      >
        <Clock />
      </div>
      <div className="ui teal inverted menu">
        <div className="container" style={{margin: 'auto'}}>
            <div className="title item">
                <h1 className="ui inverted header">Blog <span className="sub header">This is my blog. It's awesome (believe me, I've read it).</span></h1>

            </div>
            </div>
            </div>
            <article>
            <h2 className="ui header"><a href="#">My First Bacon Blog!</a>
                <div className="sub header">Written by <a href="#">Marcin Hebda</a> on May 18, 2020.
                <span className="ui right floated medium labels">
                <div className="ui label">
                    <i className="tag icon"></i> Internet
                </div>
                <div className="ui label">
                    <i className="tag icon"></i> Business
                </div>
                    </span>
                </div>
            </h2>
            <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit culpa.</p>
            <p>Boudin aliqua adipisicing rump corned beef. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>
            <p>Pork drumstick turkey fugiat. Tri-tip elit turducken pork chop in. Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>
        </article>
        <div className="ui divider"></div>
    <div className="ui teal large inverted menu footer" >
        <div className="ui footer container">
                        <p className="copyright item" style={{margin: 'auto'}}>© Copyright none at all.</p>
                    </div>
                    </div>
        <hr />
        <h3>--Comments Section--</h3>
        <div className="main-container__comments-box">
      <div className="main-container__comments">
        <CommentDetail author="Max" timeAgo="Yesterday at 8:30AM" content="Dude, thats awesome!" avatar={faker.image.avatar()} />
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
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
