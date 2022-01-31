import React from "react";
import ReactDOM from "react-dom"
import faker from "faker"

const App = function() {

return (
  <div className="ui container comments">
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} ></img>
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam Jones
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00pm</span>  </div>
      </div>
      <div className="text">
        Nice!
      </div>
    </div>
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} ></img>
      </a>
      <div className="content">
        <a href="/" className="author">
 Jones Antha</a>
        <div className="metadata">
          <span className="date">Today at 4:00pm</span>  </div>
      </div>
      <div className="text">
        Nice!
      </div>
    </div>
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} ></img>
      </a>
      <div className="content">
        <a href="/" className="author">
Tim        </a>
        <div className="metadata">
          <span className="date">Today at 8:00pm</span>  </div>
      </div>
      <div className="text">
        Eyyyy
      </div>
    </div>
  </div>
)
}

//equivalent to 
/* 
const App = () => {
  return <div>Hi there!</div>
}
*/

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)