import React, { Component } from 'react';
import './index.css';

class DesktopThree extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="header">Indira Gandhi International Airport</h1>
        <div className="terminals">
          <div className="terminal">Terminal 1</div>
          <div className="terminal">Terminal 2</div>
          <button className="add-terminal">+ Add Terminal</button>
        </div>
        <div className="terminal-dialog">
          <input type="text" placeholder="Terminal Title" />
          <textarea placeholder="Description"></textarea>
          <button>Upload Image</button>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  }
}

export default DesktopThree;
