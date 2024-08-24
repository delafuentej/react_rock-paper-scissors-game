import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import { GameContext } from '../../context/GameContext/GameContext';
//import { settings } from '../../configs/game';
import './Reset.css';

export const Reset = ()=>{
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
                    
                        'Play again': 'Reset'
               
                }
                </button>

            )
            
            }
            
        </div>
    );
}

