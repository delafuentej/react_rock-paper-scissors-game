import { settings } from '../../configs/game';
import './Reset.css';

export const Reset = ({userSelection, onClick, userScore, pcScore})=>{
    return(
        <div className='reset-game'>
            {(userSelection !== '') && (
                <button 
                    onClick= {onClick}
                    className= 'reset-btn'
                >
                    { (userScore === settings.winTarget) || (pcScore === settings.winTarget) ?
                    
                        'Play again': 'Reset'
               
                }
                </button>

            )
            
            }
            
        </div>
    );
}

