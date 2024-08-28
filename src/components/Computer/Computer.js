import {  useContext, useEffect,useState, useRef} from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import { AudioContext } from '../../context/AudioContext/AudioContext';
import { GameContext } from '../../context/GameContext/GameContext';

//import { settings } from '../../configs/game';


import './Computer.css';
import HourglassComponent from '../Hourglass/HourglassComponent';
import {Loading} from '../Loading/Loading';
import { LoadingContext } from '../../context/LoadingContext/LoadingContext';
import ThumbsDown from '../Thumbs/ThumbsDown';




export const Computer = ()=>{
            const {isLoading, setIsLoading} = useContext(LoadingContext);
            const { texts } = useContext(LanguageContext);
            const {playBoo} = useContext(AudioContext);
            const {rockIcon, paperIcon, scissorsIcon, trophyIcon, game, thumbsDown} = useContext(GameContext);
            const {pcScore, pcSelection, userSelection, userScore}= game;

          

            const [showThumbsDown,  setShowThumbsDown] = useState(false);
        
                // useEffect para manejar el retraso en la visibilidad
                useEffect(() => {
                    const timer = setTimeout(() => {
                        setShowThumbsDown(true);
                    }, 2000); // 2000 ms = 2 segundos
            
                    // Cleanup para el temporizador
                    return () => clearTimeout(timer);
                }, []); 
        
           

            // useRef
            const gameState = localStorage.gameState;
            const gameStateRef = useRef(gameState); 

            useEffect(() => {
                let timer; 
                if (userSelection !== '') {
                    setIsLoading(true);
                   timer = setTimeout(() => {
                    setIsLoading(false)
                  }, 350);
                }
                  // Cleanup function to reset loading state if userSelection changes again
                  return () => {
                    clearTimeout(timer);
                   
                  };
               
              }, [userSelection]);


    return(
        <div className='computer-card'>
            {/* computer name */}
            <h2 className='computer-name'>
                {texts.pcName}
            </h2>
            {/* icons */}
            
            {   
                (userScore === texts.winTarget) ?  (showThumbsDown && <ThumbsDown />) :

                (pcScore < texts.winTarget) ? 
                    (userSelection === '') ? 

                    (
                        <div className='hourglass'>  
                        <HourglassComponent />
                            <h3 className="wait-msg">{texts.waitingMessage}</h3>
                            
                        </div>
                    )
                : 
                    ( isLoading && (gameStateRef.current !== gameState)) ? 

                        (
                            <div>
                                <Loading />
                            </div>
                        
                        )
                    :
                
                        (
                            <div>
                                <img
                                    className= 'img-icon'
                                    src= {
                                        (pcSelection === texts.rock) ? rockIcon : 
                                        (pcSelection === texts.paper) ?   paperIcon : 
                                        (pcSelection === texts.scissors) ? scissorsIcon: 
                                        ''
                                }
                                    alt= 'icon'
                                />
                                <h3 
                                    className='pc-selection'>{texts.pcSelectedMessage} {pcSelection.charAt(0).toUpperCase()+ pcSelection.slice(1).toLowerCase()}
                                </h3>
                            </div>
                    
                
                        )
                    :

                        (
                            <div>
                                <img
                                    className='win-computer-trophy'
                                    src={trophyIcon}
                                    alt='trophy'
                                />
                                <h3 className='win-computer-msg'>{texts.victoryMessage}
                                    {playBoo()}
                                </h3>
                            </div>
                        )
                    
            }

        </div>
    );
};

