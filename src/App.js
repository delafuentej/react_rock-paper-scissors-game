import React, { useState, useContext } from 'react';

import { Header } from './components/Header/Header.js';
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

import { LanguagesCustomSelect } from './components/LanguagesCustomSelect/LanguagesCustomSelect.js';
//import LanguagesContext

import { LanguageContext } from './context/LanguageContext/LanguageContext.js';


import {ToggleTheme }from './components/ToggleTheme/ToggleTheme.js'
import { ThemeContext } from './context/ThemeContext/ThemeContext.js'




//import imgIcons
import rockIcon from './assets/img/rock.png';
import paperIcon from './assets/img/paper.png';
import scissorsIcon from './assets/img/scissors.png';
import trophyIcon from './assets/img/trophy.png';
//import sounds

import useSound from 'use-sound';

import aplauseVictory from './assets/sounds/applause-victory.mp3'; 
import booRoundLost from './assets/sounds/boo-round-lost.mp3';
import clapsRoundWin from './assets/sounds/claps-round-win.mp3';
import congratulationsVictory from './assets/sounds/congratulations-victory.mp3';

import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
// import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors } from "react-icons/fa";
// import { LiaTrophySolid } from "react-icons/lia";

import './App.css';


function App() {

  const{ texts } = useContext(LanguageContext)
  //console.log('texts app', texts)

  const { theme } = useContext(ThemeContext);
  
   let [ game, setGame ] = useState({
    userSelection:'',
    pcSelection:'',
    round: 0,
    userScore: 0,
    pcScore: 0,
    message:'',
  });


  const { userScore, pcScore}= game;
 // 
  //console.log('texts',texts)

// 
  //playSounds
  const [playClaps] = useSound(clapsRoundWin);
  const [playBoo] = useSound(booRoundLost);
  const [playCongrat] = useSound(congratulationsVictory);
  const [playAplause] = useSound(aplauseVictory);
  
  

   const selectIcon= (event) =>{
    event.preventDefault();
    if(pcScore < texts.winTarget){
      const userSelection= event.target.parentNode.getAttribute('value');
      const options = [texts.rock, texts.paper, texts.scissors];
      const index = Math.floor( Math.random()* options.length);
      const pcSelection= options[index];
   // console.log('pcSelection', pcSelection);

    (userSelection === pcSelection) ? setGame({
      ...(game.message = texts.tieMessage),
    }) 
    :
    ((userSelection === texts.rock && pcSelection === texts.scissors) ||
    (userSelection === texts.paper && pcSelection === texts.rock) ||
    (userSelection === texts.scissors && pcSelection === texts.paper) )
    ? 
    setGame({
      ...(game.userScore += 1),
      ...(game.message =` ${texts.winMessage}`),
    })
    :
    setGame({
      ...(game.pcScore += 1),
      ...(game.message = `${texts.lostMessage}`),
      //${playAudio(booRoundLost)}
      
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
    <div className= {theme}>
     
        <Header>
          <LanguagesCustomSelect />
          <ToggleTheme />
        </Header>
          <Title />
          <Round {...game}/>
          <Playground>
            <Profile>
              <User
                  {...game}
                  trophyIcon={trophyIcon}
                  playAplause = {playAplause}
                  playCongrat = {playCongrat}
                 
                
              >
                <Choice
                  {...game} 
                  onClick= {selectIcon}
                  value= {texts.rock}
                  choiceIcon={rockIcon}
                  />
                <Choice
                  {...game}
                  onClick= {selectIcon}
                  value= {texts.paper}
                  choiceIcon={paperIcon}
                />
                <Choice
                  {...game}
                  onClick= {selectIcon}
                  value= {texts.scissors}
                  choiceIcon={scissorsIcon}
                />
              </User>
              <Score score={userScore}/>

            </Profile>

              <Message
                {...game}
                playClaps={playClaps}
                playBoo={playBoo}
                thumbsUp = {<BsHandThumbsUp />}
                thumbsDown = {<BsHandThumbsDown />} 

              
                
              />


          
            

            <Profile>
              <Computer
                {...game}
                rockIcon={rockIcon}
                paperIcon={paperIcon}
                scissorsIcon={scissorsIcon}
                trophyIcon={trophyIcon}
                playBoo={playBoo}
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
