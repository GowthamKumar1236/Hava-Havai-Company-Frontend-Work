import React, { Component } from 'react';
import './index.css';

class DesktopTwo extends Component {
  render() {
    return (
      <div className="details-container">
        <h2>Indira Gandhi International Airport</h2>
        <div className="terminals">
          <div className="terminal">Terminal 1</div>
          <div className="terminal">Terminal 2</div>
        </div>
        <div className="services">
          <div className="service">
            <h3>Lost & Found</h3>
            <button>Upload Image</button>
          </div>
          <div className="service">
            <h3>Lounge</h3>
          </div>
          <div className="service">
            <h3>Money Exchange</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopTwo;
