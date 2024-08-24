/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext} from 'react';

import './App.css';
//conmponents
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
import { ToggleTheme }from './components/ToggleTheme/ToggleTheme.js';
import { ToggleAudio } from './components/ToggleAudio/ToggleAudio.js';
//contexts
import { LanguageContext} from './context/LanguageContext/LanguageContext.js';
import { ThemeContext } from './context/ThemeContext/ThemeContext.js'
import { AnimationContext } from './context/AnimationContext/AnimationContext.js';
import { GameContext } from './context/GameContext/GameContext.js'



function App() {
  
//useContext
  const{ texts} = useContext(LanguageContext);
  const { theme} = useContext(ThemeContext);
  const {animationClass}= useContext(AnimationContext);
  const {game, selectIcon, isSelected, rockIcon, paperIcon, scissorsIcon}= useContext(GameContext);
 
  const { pcScore, userScore}= game;  
 
 const [isLoading, setIsLoading] = useState(false);
 

  return (
    <div className={`App ${animationClass} ${theme}`}>

      {(userScore < 5 && pcScore < 5 ) ? (
        <Header >
          <LanguagesCustomSelect />
          <ToggleTheme />
          <ToggleAudio /> 
       </Header>
      ): null}
       
          <Title />
          <Round />
          <Playground>
            <Profile>
              <User>
                <Choice
                  onClick= {selectIcon}
                  value= {texts.rock}
                  choiceIcon={rockIcon}
                  isSelected={isSelected(texts.rock)}
                  />
                <Choice
                  onClick= {selectIcon}
                  value= {texts.paper}
                  choiceIcon={paperIcon}
                  isSelected={isSelected(texts.paper)}
                />
                <Choice
                  onClick= {selectIcon}
                  value= {texts.scissors}
                  choiceIcon={scissorsIcon}
                  isSelected={isSelected(texts.scissors)}
                />
              </User>
              <Score score={userScore} />

            </Profile>

              <Message
                isLoading={isLoading} 
              />

            <Profile>
              <Computer
                setIsLoading={setIsLoading}
                isLoading={isLoading}
              >
              </Computer >
              <Score score={pcScore} />
            </Profile>
            <Reset />
          </Playground>
          </div>
      
  );
}

export default App;