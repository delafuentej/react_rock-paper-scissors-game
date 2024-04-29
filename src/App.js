import React, { useState } from 'react';

import { Title } from './components/Title/Title.js';
import { Playground } from './components/Playground/Playground.js';
import { Profile } from './components/Profile/Profile.js';
import { User } from './components/User/User.js';
import { Choice } from './components/Choice/Choice.js';
import { Score } from './components/Score/Score.js';
import { Round } from './components/Round/Round.js';
import { Message } from './components/Message/Message.js';
import { Computer } from './components/Computer/Computer.js';
import { Reset } from './components/Reset/Reset.js';

import { settings } from './configs/game';

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
  const { userScore, pcScore}= game;

 
  const selectIcon= (event) =>{
    event.preventDefault();
    const userSelection= event.target.parentNode.getAttribute('value');
    const options = ['rock', 'paper', 'scissors'];
    const index= Math.floor( Math.random()* options.lenght);
    const pcSelection= options[index];

    (userSelection === pcSelection) ? setGame({
      ...(game.message = tieMessage),
    }) 
    :
    (userSelection === 'rock' && pcSelection === 'scissors') ||
    (userSelection === 'paper' && pcSelection === 'rock') ||
    (userSelection === 'scissors' && pcSelection === 'paper') 
    ?
    setGame({
      ...(game.userScore += 1),
      ...(game.message = winMessage)

    })
    :
    setGame({
      ...(game.pcScore += 1),
      ...(game.message = lostMessage)
    });

    setGame({
      round: (game.round += 1),
      userSelection,
      pcSelection

    })



  }

  return (
    <div>
      <Title />
      <Playground>
        <Profile>
          <User
             trophyIcon={<LiaTrophySolid  />}
          
          >
            <Choice 
              onClick= {selectIcon}
              value='rock'
              choiceIcon={<FaRegHandRock />}
              />
            <Choice 
              onClick= {selectIcon}
              value='paper'
              choiceIcon={<FaRegHandPaper />}
            />
            <Choice
              onClick= {selectIcon}
              value='scissors'
              choiceIcon={<FaRegHandScissors />}
            />

            <Score score={userScore}/>

          </User>

        </Profile>

        <Profile>
          <Round />
          <Message />


        </Profile>
        

        <Profile>
          <Computer
            rockIcon={<FaRegHandRock />}
            paperIcon={<FaRegHandPaper />}
            scissorsIcon={<FaRegHandScissors />}
            trophyIcon={<LiaTrophySolid />}
          >

            <Score score={pcScore} />
          </Computer>

        </Profile>
        <Reset />
      </Playground>

      
      
    </div>
  );
}

export default App;
