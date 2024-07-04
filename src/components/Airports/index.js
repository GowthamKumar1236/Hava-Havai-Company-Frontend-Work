import React, { useState } from 'react';
import './index.css';

const Airports = ({ airports, addAirport, deleteAirport }) => {
  const [newAirport, setNewAirport] = useState({ name: '', country: '', code: '', terminals: '' });

  const handleAddAirport = () => {
    if (newAirport.name && newAirport.country && newAirport.code && newAirport.terminals) {
      addAirport(newAirport);
      setNewAirport({ name: '', country: '', code: '', terminals: '' });
    }
  };

  return (
    <div className="airports-container">
      <h2>Airports</h2>
      <div className="airport-list">
        {airports.map(airport => (
          <div key={airport.id} className="airport-item">
            <span>{airport.name}</span>
            <span>{airport.country}</span>
            <span>{airport.code}</span>
            <span>{airport.terminals}</span>
            <button onClick={() => deleteAirport(airport.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-airport">
        <input
          type="text"
          placeholder="Name"
          value={newAirport.name}
          onChange={(e) => setNewAirport({ ...newAirport, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Country"
          value={newAirport.country}
          onChange={(e) => setNewAirport({ ...newAirport, country: e.target.value })}
        />
        <input
          type="text"
          placeholder="Code"
          value={newAirport.code}
          onChange={(e) => setNewAirport({ ...newAirport, code: e.target.value })}
        />
        <input
          type="number"
          placeholder="Terminals"
          value={newAirport.terminals}
          onChange={(e) => setNewAirport({ ...newAirport, terminals: e.target.value })}
        />
        <button onClick={handleAddAirport}>Add Airport</button>
      </div>
    </div>
  );
};

export default Airports;
