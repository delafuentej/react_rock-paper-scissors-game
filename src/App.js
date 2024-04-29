import React, { useState } from 'react';
import { settings } from './configs/game';
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { LiaTrophySolid } from "react-icons/lia";
import './App.css';



function App() {
    let [ game, setGame ] = useState({
      userSelection:'',
      pcSelection:'',
      round: 0,
      userScore: 0,
      pcScore: 0,
      message:'',
    });

  return (
    <div className="App">
      <h1>Game: Rock, Paper, Scissors</h1>
      
    </div>
  );
}

export default App;
