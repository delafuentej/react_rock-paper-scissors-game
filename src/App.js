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
//import imgIcons
import rock from './assets/img/rock.png';
import paper from './assets/img/paper.png';
import scissors from './assets/img/scissors.png';
import trophy from './assets/img/trophy.png';
//import sounds

//import aplauseVictory from './assets/sounds/aplause-victory.mp3'; 
// import booRoundLost from './assets/sounds/boo-round-lost.mp3';
// import clapsRoundWin from './assets/sounds/claps-round-win.mp3';
// import congratulationsVictory from 'assets/sounds/congratulations-victory.mp3';
// console.log('aplauseVictory',aplauseVictory)



//import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
// import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors } from "react-icons/fa";
// import { LiaTrophySolid } from "react-icons/lia";

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
    if(pcScore < winTarget){
      const userSelection= event.target.parentNode.getAttribute('value');
      const options = ['rock', 'paper', 'scissors'];
      const index = Math.floor( Math.random()* options.length);
      const pcSelection= options[index];
    console.log('pcSelection', pcSelection);

    (userSelection === pcSelection) ? setGame({
      ...(game.message = tieMessage),
    }) 
    :
    ((userSelection === 'rock' && pcSelection === 'scissors') ||
    (userSelection === 'paper' && pcSelection === 'rock') ||
    (userSelection === 'scissors' && pcSelection === 'paper') )
    ?
    setGame({
      ...(game.userScore += 1),
      ...(game.message =` ${winMessage}`),
     

    })
    :
    setGame({
      ...(game.pcScore += 1),
      ...(game.message = `${lostMessage}`),
      
    });

     setGame({
      ...game,
      round: (game.round += 1),
      userSelection,
      pcSelection

    })
 
    }
    
  }

  const resetGame= () =>{
    setGame({
      userSelection:'',
      pcSelection:'',
      round: 0,
      userScore: 0,
      pcScore: 0,
      message:'',
    })
  };


  return (
    <div>
      <Title />
      <Round {...game}/>
      <Playground>
        <Profile>
          <User
              {...game}
             trophyIcon={trophy}
          
          >
            <Choice
               {...game} 
              onClick= {selectIcon}
              value='rock'
              choiceIcon={rock}
              />
            <Choice
               {...game}
              onClick= {selectIcon}
              value='paper'
              choiceIcon={paper}
            />
            <Choice
               {...game}
              onClick= {selectIcon}
              value='scissors'
              choiceIcon={scissors}
            />
          </User>
          <Score score={userScore}/>

        </Profile>

          <Message
            {...game}
            
            /* thumbsUp = {<BsHandThumbsUp />}
            thumbsDown = {<BsHandThumbsDown />}  */

          
            
          />


      
        

        <Profile>
          <Computer
            {...game}
            rockIcon={rock}
            paperIcon={paper}
            scissorsIcon={scissors}
            trophyIcon={trophy}
          >
          
          </Computer>
          <Score score={pcScore} />
          

        </Profile>
        <Reset
          {...game} 
          onClick= {resetGame}
        />
      </Playground>

    </div>
  );
}

export default App;
