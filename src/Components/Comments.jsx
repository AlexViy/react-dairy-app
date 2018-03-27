import React, { Component } from 'react';

class Comments extends Component {
  render() {
    return (
      <div className="Comments">
        <h1 className="Card-title"></h1>
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
    );
  }
}

export default Comments;