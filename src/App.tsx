import React from 'react';
import {
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to='/charactersheet'>Character Sheet</Link>
      <Link to='/combat'>Combat Assistant (Master)</Link>
    </div>
  );
}

export default App;
