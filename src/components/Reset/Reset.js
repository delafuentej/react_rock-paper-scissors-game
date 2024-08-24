import { useContext } from 'react';
//contexts
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import { GameContext } from '../../context/GameContext/GameContext';

import './Reset.css';

export const Reset = ()=>{
    //useContexts
        const {texts} = useContext(LanguageContext);
        const {game, resetGame} = useContext(GameContext);
        const {userSelection,userScore, pcScore}= game;
       
    return(
        <div className='reset-game'>
            {(userSelection !== '') && (
                <button 
                    onClick= {resetGame}
                    className= 'reset-btn'
                >
                    { (userScore === texts.winTarget) || (pcScore === texts.winTarget) ?
                    
                        texts.playAgain : texts.reset
               
                }
                </button>

            )
            
            }
            
        </div>
    );
}

