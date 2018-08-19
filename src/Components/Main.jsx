import React from 'react';
import Card from './Card';
import Comments from './Comments';
import Items from './Items';
import Form from './Form';

function Main() {
  return (
    <div className="App-main">
      <Card name="Items">
        <Form />
        <Items />
      </Card>
      <Card name="Comments">
        <Comments />
      </Card>
    </div>
  );
}
export default Main;