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
            <h2 className="ui header"><a href="#">My First Blog!</a>
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
            <p>A trifecta, irish, sugar frappuccino cultivar frappuccino percolator mazagran cappuccino turkish. Aroma milk, rich crema, instant café au lait spoon grounds extraction. White siphon, instant con panna aged at black plunger pot. Saucer, wings a caffeine, black as in iced so brewed plunger pot caffeine.</p>
            <p>At doppio so, mazagran at to go aromatic, irish frappuccino rich a café au lait. Cup at doppio coffee whipped spoon et turkish ristretto single shot. Foam, qui saucer as java roast, arabica barista brewed grinder percolator. Et, to go cinnamon mazagran percolator grinder instant cup white spoon.</p>
            <p>Ristretto wings, id aromatic a single shot saucer. Froth sweet organic, coffee extra ristretto id decaffeinated foam. Aromatic trifecta, at seasonal, beans dripper sugar grounds sweet arabica. Variety so, aroma iced est froth mazagran crema.</p>
            <img src={faker.image.imageUrl()} />
            <p>
In flavour single shot plunger pot carajillo body aroma pumpkin spice. Organic, steamed, to go, doppio americano seasonal froth percolator id flavour seasonal. Extraction qui carajillo latte, arabica cappuccino so blue mountain steamed espresso. Aromatic roast frappuccino pumpkin spice coffee variety blue mountain.</p>
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
        <CommentDetail author="Thomas" timeAgo="Yesterday at 9:00AM" content="Love the topic" avatar={faker.image.avatar()} />
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
