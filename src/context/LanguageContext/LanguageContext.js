import React, {useState} from 'react';

import esFlag from '../../assets/img/spain.png';
import ukFlag from '../../assets/img/uk.png';
import deFlag from '../../assets/img/germany.png';


export const LanguageContext = React.createContext();

const initialLanguage='es';

const translations = {
    es: {
        gameName: "Juego: Piedra, papel, tijera!",
        rock:'piedra',
        paper: 'papel',
        scissors: 'tijera',
        userName: "Jugador",
        userScore: 0,
        pcName: "Computadora",
        winMessage: "Eres el ganador de la ronda!",
        initMessageFirst: "Gana quien consiga ",
        initMessageSecond: "victorias! Adelante!",
        tieMessage: "Empate",
        selectMessage: "Selecciona una opción",
        pcSelectedMessage: "PC elige: ",
        userSelectedMessage: "Tu elección es: ",
        lostMessage: "Perdiste! Intentalo de nuevo",
        waitingMessage: "Esperando tu elección!",
        victoryMessage:"Victoria!",
        score: "Puntuación",
        round: "Ronda",
        winTarget: 5,
        english: 'Ingles',
        spanish: 'Español',
        german: 'Alemán',

    },
    en: {
        gameName: "Game: Rock, paper, scissors!",
        rock:'rock',
        paper: 'paper',
        scissors: 'scissors',
        userName: "Player",
        userScore: 0,
        pcName: "Computer",
        winMessage: "You are the winner of this round!",
        initMessageFirst: "Win whoever gets ",
        initMessageSecond: "victories! Go ahead!",
        tieMessage: "It is a tie",
        selectMessage: "Select one",
        pcSelectedMessage: "PC selected: ",
        userSelectedMessage: "Your choice is: ",
        lostMessage: "You lost! Try again!",
        waitingMessage: "Waiting for your choice!",
        victoryMessage:"Victory!",
        round: "Round",
        score: "Score",
        winTarget: 5,
        english: 'English',
        spanish: 'Spanish',
        german:'German',
    },
    de: {
        gameName: "Spiel: Stein, Papier, Schere!",
        rock:'stein',
        paper: 'papier',
        scissors: 'schere',
        userName: "Spieler",
        userScore: 0,
        pcName: "Rechner",
        winMessage: "Sie sind der Gewinner der Runde!",
        initMessageFirst: "Win whoever gets ",
        initMessageSecond: "Siege erzielt! Weiter so!",
        tieMessage: "Unentschieden",
        selectMessage: "Wählen Sie eine aus",
        pcSelectedMessage: "PC wählt: ",
        userSelectedMessage: "Ihre Auswahl ist: ",
        lostMessage: "Sie verloren! Nochmal versuchen!",
        waitingMessage: "Warten auf Ihre Wahl!",
        victoryMessage:"Sieg!",
        round: "Runde",
        score:"Ergebnis",
        winTarget: 5,
        english: 'Englisch',
        spanish: 'Spanisch',
        german: 'Deutsch',

    }
       
};

const options = [
    {value: 'es', label: 'Español', flag: esFlag},
    {value: 'en', label: 'English', flag: ukFlag},
    {value: 'de', label: 'Deutsch', flag: deFlag},
    
]


export const LanguageProvider=({children})=>{
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);
    const [selectedLanguage, setSelectedLanguage] = useState(options[0])
    


    const handleLanguage = (option)=>{
    
        setSelectedLanguage(option);
        //setLanguage(setSelectedLanguage(option.value));
        setTexts(translations[option.value])
    }
   
   



    const data ={ texts,  handleLanguage, options, selectedLanguage};


    return(
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}