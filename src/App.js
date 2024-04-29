import React, { useState } from 'react';
import { settings } from './configs/game';
import {Playground } from './components/Playground/Playground.js';
import { Profile } from './components/Profile/Profile.js';
import { User } from './components/User/User.js';
import { Choice } from './components/Choice/Choice.js';
import { Round } from './components/Round/Round.js';
import { Message } from './components/Message/Message.js';
import { Computer } from './components/Computer/Computer.js';
import { Reset } from './components/Reset/Reset.js';


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
      <Playground>
        <Profile>
          <User>
            <Choice />
            <Choice />
            <Choice />

          </User>

        </Profile>

        <Profile>
          <Round />
          <Message />


        </Profile>
        

        <Profile>
          <Computer>



          </Computer>

        </Profile>
        <Reset />
      </Playground>

      
      
    </div>
  );
}

export default App;
