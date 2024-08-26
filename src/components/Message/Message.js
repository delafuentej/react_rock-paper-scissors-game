import React,{ useContext, useState, useEffect, useLayoutEffect, useRef} from 'react';
//contexts
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import { AudioContext } from '../../context/AudioContext/AudioContext';
import { GameContext } from '../../context/GameContext/GameContext';
import { LoadingContext } from '../../context/LoadingContext/LoadingContext';
//thumbs
import { Thumbs } from '../Thumbs/Thumbs';

import './Message.css';


export const Message = ()=> {
    //useContexts
    const {isLoading} = useContext(LoadingContext)
    const { texts, languageChanged, setLanguageChanged } = useContext(LanguageContext);
    const{playBoo, playClaps} = useContext(AudioContext);
    const {game, thumbsDown, thumbsUp} = useContext(GameContext);
    const {userSelection, message, userScore} = game;

    

    //state 
    const [showThumbs, setShowThumbs] = useState(()=>{
        // Initialise state from localStorage
        const savedState = localStorage.getItem('showThumbs');
        return savedState !== null ? JSON.parse(savedState) : true;
    });

    const gameState = localStorage.gameState;
    //useRef
    const gameStateRef = useRef(gameState);
   
    

     //  to store the messages used to display thumbs in independent variables.
     const winMessage = texts.winMessage;
     const lostMessage = texts.lostMessage;
     const winMessageGame = texts.winMessageGame;


    useLayoutEffect(()=>{

        let timer;

        if ( (gameStateRef.current !== gameState) && !isLoading && !languageChanged 
            && userSelection !== '' 
            && (message === lostMessage 
            || message === winMessage)) {
           
            setShowThumbs(true);
            // to store state in localStorage
            localStorage.setItem('showThumbs', JSON.stringify(true));
            // Starting the  timer to hide the thumbs after 2 seconds
            timer = setTimeout(() => {
                setShowThumbs(false); // Hide thumbs after 2 seconds
            }, 2000);
        } else if(languageChanged ){
            setShowThumbs(false);
            localStorage.setItem('showThumbs', JSON.stringify(false));
            
            
        }else{
            setShowThumbs(false); 
            localStorage.setItem('showThumbs', JSON.stringify(false));

        }
       
        // Clear the timer if the component is disassembled or if the message changes.
        return () => clearTimeout(timer);

    },[userSelection,
        message, 
        lostMessage, 
        winMessage, 
        languageChanged, 
        setLanguageChanged, 
        isLoading, 
        gameState])


   
     //  Side-effect management for sound
     useEffect(() => {
        
        if (!isLoading && message === lostMessage && languageChanged === false && !isLoading) {
            playBoo();
        } else if (!isLoading && message === winMessage  && languageChanged === false && !isLoading) {
            playClaps();
        }
    }, [message, lostMessage, winMessage, playBoo, playClaps, isLoading]);

   

    return(
        <div className={`msg-container ${isLoading &&  (gameStateRef.current === gameState)? 'margin-top' : ''}`}>
            {(!isLoading ||  (gameStateRef.current === gameState)) && (
                <h3 className="message">
                { (userScore === 5) ? winMessageGame :(userSelection === '') ? 'VS' :  message}
              
             </h3> 
            )}
        

        <div>
          
                {showThumbs && (
                   <Thumbs
                    thumbsUp={thumbsUp}
                    thumbsDown={thumbsDown}
                    message={message}
                    texts={texts}
                   />
                )}
            </div>
              
        </div>
       
    );
};