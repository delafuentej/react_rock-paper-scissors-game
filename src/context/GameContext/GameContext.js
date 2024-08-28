import React, { useState, createContext, useContext, useEffect } from 'react';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import { AudioContext } from '../AudioContext/AudioContext';

import rockIcon from '../../assets/img/rock.png';
import paperIcon from '../../assets/img/paper.png';
import scissorsIcon from '../../assets/img/scissors.png';
import trophyIcon from '../../assets/img/trophy.png';

import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";

//thumbs
const thumbsUp= <BsHandThumbsUp/>;
const thumbsDown = <BsHandThumbsDown />;


export const GameContext = createContext();

export const GameProvider = ({ children }) => {

    const{texts, translations, setLanguageChanged} = useContext(LanguageContext);
    const {setIsAudioEnabled, isAudioEnabled} = useContext(AudioContext);

    const [isHovered, setIsHovered] = useState(false);

   


   // Function to load the game state from localStorage
    const loadGameFromLocalStorage = () => {
        const savedGame = localStorage.getItem('gameState');
        const initialState = {
          userSelection: '',
          pcSelection: '',
          round: 0,
          userScore: 0,
          pcScore: 0,
          message: '',
        }
        try{
          return savedGame ? JSON.parse(savedGame) : initialState
        }catch(error){
          console.error("Error parsing gameState from localStorage:", error);
         
        }
        
      };
    // function to load the game state from localStorage
  const [game, setGame] = useState(loadGameFromLocalStorage);

  const { message, pcSelection,pcScore, userScore, userSelection}= game;

  // Save the game state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(game));
}, [game]);
  // useEffect to update the pcSelection when the language is changed
    //to solve the problem with the icons in the Computer Component
  useEffect(() => {
    const options = [texts.rock, texts.paper, texts.scissors];

    if (pcSelection && !options.includes(pcSelection)) {
      const newPcSelection = options[Math.floor(Math.random() * options.length)];
      setGame(prevState => ({
        ...prevState,
        pcSelection: newPcSelection
      }));
    }
  }, [texts, pcSelection]);

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
  if (message in messageMap &&  messageMap[message] !== game.message) {
    setGame(prevState => ({
      ...prevState,
      message: messageMap[message],
    }));
  }
}, [texts, message]);


// useEffect to update the userSelection when the language is changed.
useEffect(() => {
    const optionsMap = {
      [translations['es'].rock]: texts.rock,
      [translations['es'].paper]: texts.paper,
      [translations['es'].scissors]: texts.scissors,
      [translations['en'].rock]: texts.rock,
      [translations['en'].paper]: texts.paper,
      [translations['en'].scissors]: texts.scissors,
      [translations['de'].rock]: texts.rock,
      [translations['de'].paper]: texts.paper,
      [translations['de'].scissors]: texts.scissors,
    };
    // If the current userSelection matches one of the old translations, update it
  if (userSelection in optionsMap) {
    setGame(prevState => ({
      ...prevState,
      userSelection: optionsMap[game.userSelection],
    }));
  } else {
    // If it doesn't match, you might want to clear it or handle it accordingly
    setGame(prevState => ({
      ...prevState,
      userSelection: '', // or handle differently if needed
    }));
  }
}, [texts, userSelection, translations]);


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

 // Logic for determining whether an icon is selected
 const isSelected = (iconValue) => {
  return userSelection === iconValue;
};

const updateGameState = (newState) => {
  if (JSON.stringify(game) !== JSON.stringify(newState)) {
      setGame(newState);
  }
};
const handleMouseLeave = (event) => {
  event.preventDefault();
  setIsHovered(false);
};

const handleMouseEnter = (event) => {
  event.preventDefault()
  setIsHovered(true);
};
  const resetGame = () => {
    const initialState = {
      userSelection: '',
      pcSelection: '',
      round: 0,
      userScore: 0,
      pcScore: 0,
      message: '',
    };
    setGame(initialState);
    setLanguageChanged(false);
    setIsAudioEnabled(isAudioEnabled);
   // Clear game state from localStorage
   localStorage.removeItem('gameState'); 

  };

  const data ={ game, 
                setGame, 
                resetGame, 
                isSelected, 
                selectIcon, 
                rockIcon, 
                paperIcon, 
                scissorsIcon, 
                trophyIcon,
                thumbsUp,
                thumbsDown,
                isHovered,
                setIsHovered,
                handleMouseEnter,
                handleMouseLeave
            };

  return (
    <GameContext.Provider value={data}>
      {children}
    </GameContext.Provider>
  );
};