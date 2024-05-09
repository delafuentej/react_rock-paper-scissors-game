import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';

//import { settings } from '../../configs/game';
import './Reset.css';

export const Reset = ({userSelection, onClick, userScore, pcScore})=>{
        const {texts} = useContext(LanguageContext);
    return(
        <div className='reset-game'>
            {(userSelection !== '') && (
                <button 
                    onClick= {onClick}
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

