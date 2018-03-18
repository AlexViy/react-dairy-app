import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  render() {
    return <button type="button">Add new</button>;
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-side">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-main">
          <div className="Items">
            <h1>Items</h1>
            <form>
              <input type="text"></input>
              <Button/>
            </form>
            <div className="Item">
              <p>Some new item</p>
              <button type="button">Delete</button>
            </div>
          </div>
          <div className="Comments">
            <h1>Comments</h1>
            <div className="Comment">
              <div className="Rectangle"></div>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            </div>
            <div className="NewComment">
              <div className="NewRectangle"></div>
              <form>
                <textarea></textarea>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
