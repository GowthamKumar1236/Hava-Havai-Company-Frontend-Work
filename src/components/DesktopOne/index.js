import React, { Component } from 'react';
import './index.css';

class DesktopOne extends Component {
  render() {
    return (
      <div className="container">
        <h1>hava havai</h1>
        <div className="sidebar">
          <div className="menu-item">Home</div>
          <div className="menu-item">Dashboard</div>
          <div className="menu-item">Services</div>
          <div className="menu-item">Others</div>
        </div>
        <div className="content">
          <h2>Airports</h2>
          <button>+ Add new</button>
        </div>
        <h1 className="header">Airports</h1>
        <div className="form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Code" />
          <input type="text" placeholder="Terminals" />
          <button>Add Airport</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Code</th>
              <th>Terminals</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr>
              <td>Indira Gandhi International Airport</td>
              <td>India</td>
              <td>DEL</td>
              <td>3</td>
              <td className="actions">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DesktopOne;
