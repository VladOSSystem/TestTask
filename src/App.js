import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Films from './components/Films'
const App = () => {

  return (
    <div className="App">
      <Films/>
    </div>
  );
}

export default App;
