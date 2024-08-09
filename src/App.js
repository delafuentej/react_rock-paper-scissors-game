import React, { useState, useContext, useEffect } from 'react';

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
import { LanguageContext} from './context/LanguageContext/LanguageContext.js';

import {ToggleTheme }from './components/ToggleTheme/ToggleTheme.js'
import { ThemeContext } from './context/ThemeContext/ThemeContext.js'

import { ToggleAudio } from './components/ToggleAudio/ToggleAudio.js';

// import { AudioContext } from './context/AudioContext/AudioContext.js';


import useSound from 'use-sound';

import  audioVictory from './assets/sounds/applause-victory.mp3'; 
import  audioBoo from './assets/sounds/boo-round-lost.mp3';
import  audioClaps from './assets/sounds/claps-round-win.mp3';
import  audioCongrat from './assets/sounds/congratulations-victory.mp3';



//import imgIcons
import rockIcon from './assets/img/rock.png';
import paperIcon from './assets/img/paper.png';
import scissorsIcon from './assets/img/scissors.png';
import trophyIcon from './assets/img/trophy.png';

import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";

import './App.css';


function App() {
  
 
//useContext
  const{ texts, translations } = useContext(LanguageContext)

  const { theme } = useContext(ThemeContext);
  // const { isAudioEnabled, toggleAudio} = useContext(AudioContext);


   let [ game, setGame ] = useState({
    userSelection:'',
    pcSelection:'',
    round: 0,
    userScore: 0,
    pcScore: 0,
    message:'',
  });


  const { userScore, pcScore, message}= game;

// state for handling audio
 const [isAudioEnabled, setIsAudioEnabled]= useState(false);
 const [isAudioChecked, setIsAudioChecked ]= useState(false);


  //playSounds
  const [playClaps] = useSound(audioClaps, {soundEnabled: isAudioEnabled});
  const [playBoo] = useSound(audioBoo,  {soundEnabled: isAudioEnabled});
  const [playCongrat] = useSound(audioCongrat, {soundEnabled: isAudioEnabled});
  const [playAplause] = useSound(audioVictory,  {soundEnabled: isAudioEnabled});

    //handleChangeAudio
    const handleChangeAudio=(e)=>{
      const audioChecked= e.target.checked;
      // console.log('audioChecked', audioChecked)
     
      setIsAudioChecked(audioChecked);
      setIsAudioEnabled(audioChecked);
      //  console.log('audioChecked', isAudioChecked)
      // console.log('isAudioEnabled', isAudioEnabled)
    }

    // useEffect to update the pcSelection when the language is changed
    //to solve the problem with the icons in the Computer Component
    useEffect(() => {
      const options = [texts.rock, texts.paper, texts.scissors];
     
     
      if (game.pcSelection && !options.includes(game.pcSelection)) {
          // If pcSelection does not match the new language, we update it.
          const newPcSelection = options[Math.floor(Math.random() * options.length)];
          setGame(prevState => ({
              ...prevState,
              pcSelection: newPcSelection
          }));
      }

     
  }, [texts, game.pcSelection]); 

 // useEffect to update the message when the language is changed.
 useEffect(() => {
  //  Mapping of messages from the old state to the new language
  const messageMap = {
    [translations['es'].winMessage]: texts.winMessage,
    [translations['es'].tieMessage]: texts.tieMessage,
    [translations['es'].lostMessage]: texts.lostMessage,
    [translations['en'].winMessage]: texts.winMessage,
    [translations['en'].tieMessage]: texts.tieMessage,
    [translations['en'].lostMessage]: texts.lostMessage,
    [translations['de'].winMessage]: texts.winMessage,
    [translations['de'].tieMessage]: texts.tieMessage,
    [translations['de'].lostMessage]: texts.lostMessage,
  };

  // If the current message is in the mapping, it is updated.
  if (message in messageMap) {
    setGame(prevState => ({
      ...prevState,
      message: messageMap[message],
    }));
  }
}, [texts, message]);




  // useEffect(()=>{
  //   let newMessage = game.message;
  //   if (game.message) {
  //     if (game.message === texts.winMessage || game.message === texts.tieMessage || game.message === texts.lostMessage) {
  //       newMessage = texts[Object.keys(texts).find(key => texts[key] === game.message)];
  //   }
  // }


  //   if (newMessage !== game.message) {
  //       setGame(prevState => ({
  //           ...prevState,
  //           message: newMessage
  //       }));
  //   }
  // },[game.message])
  
  // Se ejecuta cada vez que texts cambia


   const selectIcon= (event) =>{
    event.preventDefault();
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
}
};


  //   (userSelection === pcSelection) ? setGame({
  //     ...(game.message = texts.tieMessage),
  //   }) 
  //   :
  //   ((userSelection === texts.rock && pcSelection === texts.scissors) ||
  //   (userSelection === texts.paper && pcSelection === texts.rock) ||
  //   (userSelection === texts.scissors && pcSelection === texts.paper) )
  //   ? 
  //   setGame({
  //     ...(game.userScore += 1),
  //     ...(game.message =` ${texts.winMessage}`),
  //   })
  //   :
  //   setGame({
  //     ...(game.pcScore += 1),
  //     ...(game.message = `${texts.lostMessage}`),
  //     // ...(game.pcScore += 1),
  //     // ...(game.message = `${texts.lostMessage}`),
     
      
  //   });

  //    setGame({
  //     ...game,
  //     round: (game.round += 1),
  //     userSelection,
  //     pcSelection,
  //   })
  //   } 
  // } 

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
    <div className='App'>
     
        <Header>
          <LanguagesCustomSelect />
          <ToggleTheme 
           
          />
          <ToggleAudio 
             handleChangeAudio={handleChangeAudio}
             isAudioChecked={isAudioChecked}
          />
          {/* <button
            onClick={toggleAudio}
          >
            {isAudioEnabled ? 'Turn off': 'Turn on'}
          </button> */}
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
        </div>
       
  );
}

export default App;
