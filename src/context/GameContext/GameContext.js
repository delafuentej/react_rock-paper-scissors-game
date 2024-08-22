import React, { useState, createContext, useContext, useEffect } from 'react';
import { LanguageContext } from '../LanguageContext/LanguageContext';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const{texts, translations, setLanguageChanged} = useContext(LanguageContext);
    const {setIsAudioEnabled, isAudioEnabled} = useContext(AudioContext);
  const [game, setGame] = useState({
    userSelection: '',
    pcSelection: '',
    round: 0,
    userScore: 0,
    pcScore: 0,
    message: '',
  });

  const { message}= game;
  // useEffect to update the pcSelection when the language is changed
    //to solve the problem with the icons in the Computer Component
  useEffect(() => {
    const options = [texts.rock, texts.paper, texts.scissors];

    if (game.pcSelection && !options.includes(game.pcSelection)) {
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
  if (game.userSelection in optionsMap) {
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
}, [texts, game.userSelection, translations]);


  const resetGame = () => {
    setGame({
      userSelection: '',
      pcSelection: '',
      round: 0,
      userScore: 0,
      pcScore: 0,
      message: '',
    });
    setLanguageChanged(false);
   setIsAudioEnabled(isAudioEnabled);

  };

  return (
    <GameContext.Provider value={{ game, setGame, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};