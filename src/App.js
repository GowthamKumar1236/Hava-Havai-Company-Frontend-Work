import React, { useState } from 'react';
import DesktopOne from './components/DesktopOne';
import DesktopTwo from './components/DesktopTwo';
import DesktopThree from './components/DesktopThree';
import Airports from './components/Airports';
import './App.css';

const App = () => {
  const [airports, setAirports] = useState([
    { id: 1, name: 'Indira Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
    { id: 2, name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
    { id: 3, name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
    { id: 4, name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
    { id: 5, name: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14 },
  ]);

  const addAirport = (airport) => {
    setAirports([...airports, { id: airports.length + 1, ...airport }]);
  };

  const deleteAirport = (id) => {
    setAirports(airports.filter(airport => airport.id !== id));
  };

  return (
    <div className="app-container">
      <DesktopOne />
      <DesktopTwo />
      <DesktopThree />
      <Airports airports={airports} addAirport={addAirport} deleteAirport={deleteAirport} />
    </div>
  );
};

export default App;
