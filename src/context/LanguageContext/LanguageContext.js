import React, { useState, useEffect } from "react";

import esFlag from "../../assets/img/spain.png";
import ukFlag from "../../assets/img/uk.png";
import deFlag from "../../assets/img/germany.png";

export const LanguageContext = React.createContext();

const initialLanguage = localStorage.getItem("language") || "es";

const translations = {
  es: {
    gameName: "Juego: Piedra, papel, tijera!",
    rock: "piedra",
    paper: "papel",
    scissors: "tijera",
    userName: "Jugador",
    userScore: 0,
    pcName: "Computadora",
    winMessage: "Eres el ganador de la ronda!",
    winMessageGame: "Eres el ganador del juego! Juega de nuevo!",
    initMessageFirst: "Gana quien consiga ",
    initMessageSecond: "victorias! Adelante!",
    tieMessage: "Empate",
    selectMessage: "Selecciona una opción",
    pcSelectedMessage: "PC elige: ",
    userSelectedMessage: "Tu elección es: ",
    lostMessage: "Perdiste! Intentalo de nuevo!",
    waitingMessage: "Esperando tu elección!",
    victoryMessage: "Victoria!",
    score: "Puntuación",
    round: "Ronda",
    winTarget: 5,
    english: "Ingles",
    spanish: "Español",
    german: "Alemán",
    reset: "Reiniciar",
    playAgain: "Jugar de nuevo",
  },
  en: {
    gameName: "Game: Rock, paper, scissors!",
    rock: "rock",
    paper: "paper",
    scissors: "scissors",
    userName: "Player",
    userScore: 0,
    pcName: "Computer",
    winMessage: "You are the winner of this round!",
    winMessageGame: "You are the winner of the game! Play again!",
    initMessageFirst: "Win whoever gets ",
    initMessageSecond: "victories! Go ahead!",
    tieMessage: "It is a tie",
    selectMessage: "Select one",
    pcSelectedMessage: "PC selected: ",
    userSelectedMessage: "Your choice is: ",
    lostMessage: "You lost! Try again!",
    waitingMessage: "Waiting for your choice!",
    victoryMessage: "Victory!",
    round: "Round",
    score: "Score",
    winTarget: 5,
    english: "English",
    spanish: "Spanish",
    german: "German",
    reset: "Reset",
    playAgain: "Play again",
  },
  de: {
    gameName: "Spiel: Stein, Papier, Schere!",
    rock: "stein",
    paper: "papier",
    scissors: "schere",
    userName: "Spieler",
    userScore: 0,
    pcName: "Rechner",
    winMessage: "Sie sind der Gewinner der Runde!",
    winMessageGame: "Sie sind der Gewinner des Spiels! Spielen Sie weiter!",
    initMessageFirst: "Win whoever gets ",
    initMessageSecond: "Siege erzielt! Weiter so!",
    tieMessage: "Unentschieden",
    selectMessage: "Wählen Sie eine aus",
    pcSelectedMessage: "PC wählt: ",
    userSelectedMessage: "Ihre Auswahl ist: ",
    lostMessage: "Sie verloren! Nochmal versuchen!",
    waitingMessage: "Warten auf Ihre Wahl!",
    victoryMessage: "Sieg!",
    round: "Runde",
    score: "Ergebnis",
    winTarget: 5,
    english: "Englisch",
    spanish: "Spanisch",
    german: "Deutsch",
    reset: "Zurücksetzen",
    playAgain: "Erneut spielen",
  },
};

const options = [
  { value: "es", label: "Español", flag: esFlag },
  { value: "en", label: "English", flag: ukFlag },
  { value: "de", label: "Deutsch", flag: deFlag },
];

export const LanguageProvider = ({ children, onLanguageChange }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[initialLanguage]);
  const [selectedLanguage, setSelectedLanguage] = useState(
    options.find((opt) => opt.value === initialLanguage),
  );
  const [languageChanged, setLanguageChanged] = useState(false);

  useEffect(() => {
    localStorage.setItem("language", language);
    const newTexts = translations[language];
    setTexts(newTexts);

    if (onLanguageChange) {
      onLanguageChange(newTexts);
    }
  }, [language, onLanguageChange]);

  const handleLanguage = (option) => {
    setSelectedLanguage(option);
    setLanguage(option.value);
    setLanguageChanged(true);
  };

  const data = {
    texts,
    handleLanguage,
    options,
    selectedLanguage,
    translations,
    languageChanged,
    setLanguageChanged,
  };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
