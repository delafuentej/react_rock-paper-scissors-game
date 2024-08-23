/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext} from 'react';

import './App.css';
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
import {ToggleTheme }from './components/ToggleTheme/ToggleTheme.js';
import { ToggleAudio } from './components/ToggleAudio/ToggleAudio.js';

import { LanguageContext} from './context/LanguageContext/LanguageContext.js';
import { ThemeContext } from './context/ThemeContext/ThemeContext.js'
import { AnimationContext } from './context/AnimationContext/AnimationContext.js';
import {GameContext} from './context/GameContext/GameContext.js'


//import imgIcons
import rockIcon from './assets/img/rock.png';
import paperIcon from './assets/img/paper.png';
import scissorsIcon from './assets/img/scissors.png';
import trophyIcon from './assets/img/trophy.png';

import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";



function App() {
  
//useContext
  const{ texts, setLanguageChanged} = useContext(LanguageContext);
  const { theme} = useContext(ThemeContext);
  const {animationClass}= useContext(AnimationContext);
  const {game, resetGame,setGame}= useContext(GameContext);


const { pcScore, userScore, userSelection}= game;  
 

 const [isLoading, setIsLoading] = useState(false);
 

  
   const selectIcon= (event) =>{
   
    event.preventDefault();
    if(pcScore >= texts.winTarget) return;

    if(pcScore < texts.winTarget){
      const userSelection= event.target.parentNode.getAttribute('value');
      const options = [texts.rock, texts.paper, texts.scissors];
      const index = Math.floor( Math.random()* options.length);
      const pcSelection= options[index];

   // console.log('pcSelection', pcSelection);

   let newMessage = '';
   let newUserScore = userScore;
   let newPcScore = pcScore;

   if (userSelection === pcSelection) {
    newMessage = texts.tieMessage;
  } else if (
    (userSelection === texts.rock && pcSelection === texts.scissors) ||
    (userSelection === texts.paper && pcSelection === texts.rock) ||
    (userSelection === texts.scissors && pcSelection === texts.paper)
  ) {
    newMessage = texts.winMessage;
    newUserScore += 1;
  } else {
    newMessage = texts.lostMessage;
    newPcScore += 1;
  }

  setGame(prevState => ({
    ...prevState,
    userSelection,
    pcSelection,
    round: prevState.round + 1,
    userScore: newUserScore,
    pcScore: newPcScore,
    message: newMessage
  }));
  setLanguageChanged(false);
  
}
};

//    // Logic for determining whether an icon is selected
   const isSelected = (iconValue) => {
    return userSelection === iconValue;
};
 

  return (
    <div className={`App ${animationClass} ${theme}`}>

      {(userScore < 5 && pcScore < 5 ) ? (
         <Header >
         <LanguagesCustomSelect />
         <ToggleTheme 
         />
         <ToggleAudio />
        
       </Header>
      ): null}
       
      
          <Title />
          <Round {...game} />
          <Playground>
            <Profile>
              <User
                  {...game}
                  trophyIcon={trophyIcon}
              >
                <Choice
                  {...game} 
                  onClick= {selectIcon}
                  value= {texts.rock}
                  choiceIcon={rockIcon}
                  isSelected={isSelected(texts.rock)}
                  />
                <Choice
                  {...game}
                  onClick= {selectIcon}
                  value= {texts.paper}
                  choiceIcon={paperIcon}
                  isSelected={isSelected(texts.paper)}
                />
                <Choice
                  {...game}
                  onClick= {selectIcon}
                  value= {texts.scissors}
                  choiceIcon={scissorsIcon}
                  isSelected={isSelected(texts.scissors)}
                />
              </User>
              <Score score={userScore} />

            </Profile>

              <Message
                {...game}
                thumbsUp = {<BsHandThumbsUp />}
                thumbsDown = {<BsHandThumbsDown />} 
                userScore= {userScore}
                isLoading={isLoading}
                
               
                
              />

            <Profile>
              <Computer
                {...game}
                rockIcon={rockIcon}
                paperIcon={paperIcon}
               scissorsIcon={scissorsIcon}
                trophyIcon={trophyIcon}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                
              >
              
              </Computer >
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