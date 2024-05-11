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

import { LanguagesComponent } from './components/LanguagesComponent/LanguagesComponent.js';
//import LanguagesContext
import { LanguageProvider} from './context/LanguageContext/LanguageContext.js';
//import { LanguageContext } from './context/LanguageContext/LanguageContext.js';
//import ThemeProvider:
//import { ThemeProvider } from './context/ThemeContext/ThemeContext.js';

import { ThemeComponent } from './components/ThemeComponent/ThemeComponent.js';
import { ThemeContext } from './context/ThemeContext/ThemeContext.js'

import { settings } from './configs/game';

//import imgIcons
import rock from './assets/img/rock.png';
import paper from './assets/img/paper.png';
import scissors from './assets/img/scissors.png';
import trophy from './assets/img/trophy.png';
//import sounds
import { playAudio } from './utils/utils.js';

import aplauseVictory from './assets/sounds/applause-victory.mp3'; 
import booRoundLost from './assets/sounds/boo-round-lost.mp3';
import clapsRoundWin from './assets/sounds/claps-round-win.mp3';
import congratulationsVictory from './assets/sounds/congratulations-victory.mp3';

//import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
// import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors } from "react-icons/fa";
// import { LiaTrophySolid } from "react-icons/lia";

import './App.css';


function App() {

  //const{ texts, handleLanguage} = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext);
  
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
 // 
  //console.log('texts',texts)


 
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
      ...(game.message =` ${winMessage} 
     
      `),
      // ${playAudio(clapsRoundWin)}
     

    })
    :
    setGame({
      ...(game.pcScore += 1),
      ...(game.message = `${lostMessage} 
      
      `),
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

  // audios
  //  let playAplauseVictory=()=>{
  //   new Audio(aplauseVictory).play();
  //  }
  //  let playCongratulationsVictory=()=>{
  //   new Audio(congratulationsVictory).play();
  //  }
  //  let playBooRoundLost=()=>{
  //   new Audio(booRoundLost).play();
  //  }
  //  let playClapsRoundWin=()=>{
  //   new Audio(clapsRoundWin).play();
  //  }

  return (
    <div className= {theme}>
      <LanguageProvider>
        <Header>
          <LanguagesComponent />
          <ThemeComponent />
        </Header>
          <Title />
          <Round {...game}/>
          <Playground>
            <Profile>
              <User
                  {...game}
                trophyIcon={trophy}
                playAudio={playAudio}
                  aplauseVictory = {aplauseVictory}
                  congratulationsVictory ={congratulationsVictory}
                
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
        </LanguageProvider>
        </div>
  );
}

export default App;
