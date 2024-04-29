import React, { useState } from 'react';
import { settings } from './configs/game';
import { Computer } from './components/Computer/Computer.js'
import { User } from './components/User/User.js';

import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors } from "react-icons/fa";
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

  const { winMessage, tieMessage, lostMessage, winTarget } = settings;

  return (
    <div>
      <h1>Game: Rock, Paper, Scissors</h1>
      < User />
      <Computer 
        rockIcon= {<FaRegHandRock />}
        paperIcon= {<FaRegHandPaper />}
        scissorsIcon = {<FaRegHandScissors />}
        trophyIcon = {<LiaTrophySolid />}

      />
      
    </div>
  );
}

export default App;
