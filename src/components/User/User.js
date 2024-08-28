import { useContext } from 'react';
//contexts
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import { AudioContext } from '../../context/AudioContext/AudioContext';
import { GameContext } from '../../context/GameContext/GameContext';
import { ConfettiComponent } from '../Confetti/Confetti';
import ThumbsDown from '../Thumbs/ThumbsDown';
import './User.css';

export const User = ({ children})=>{
//useContexts
    const { texts } = useContext(LanguageContext);
    const { playAplause, playCongrat} = useContext(AudioContext);
    const {game, trophyIcon, thumbsDown} = useContext(GameContext);
    const {userScore, userSelection, pcScore} = game;
    console.log('thumbsDown', thumbsDown)
   
    return(
        <div className='use-card'>
            {/* userName */}
            <h2 className='user-name'>{texts.userName}</h2>
            {/* icons */}
            { 
                (pcScore === texts.winTarget) ?  (<ThumbsDown />) :
               ( userScore < texts.winTarget) ? 

               (
                <div className='user-selection'>
                    <div className="choice-grid">
                        {children}
                    </div>
                    <h3 className='user-message' >
                        {(userSelection === '') ? `${texts.selectMessage}`: `${texts.userSelectedMessage} ${userSelection.charAt(0).toUpperCase()+ userSelection.slice(1).toLowerCase()}`}
                    </h3>
                </div>

               )
               :
               
               (
                <div className='user-card'>
                    <img
                        className= "win-user-trophy"
                        src={trophyIcon}
                        alt='trophy'
                       
                    />
                    <h3 >{texts.victoryMessage}
                       {playCongrat()}
                        {playAplause()}

                    </h3>
                    <div><ConfettiComponent /></div>
                </div>
               )
            }

        </div>
    );
};

