import { settings } from '../../configs/game';
import { ConfettiComponent } from '../Confetti/Confetti';

// import  congratulationsVictory from '../../assets/sounds/congratulations-victory.mp3';
// import  aplauseVictory from '../../assets/sounds/applause-victory.mp3'; 
import './User.css';

export const User = ({userScore, userSelection, trophyIcon, children, playAudio, aplauseVictory, congratulationsVictory})=>{
   
    return(
        <div className='user-card'>
            <h2>{settings.userName}</h2>
            {
               ( userScore < settings.winTarget) ? (
                <div>
                    <div className="choice-grid">
                        {children}
                    </div>
                    <h3>
                        {(userSelection === '') ? 'Select one': `Your choice is: ${userSelection}`}
                    </h3>
                </div>

               ):
               (
                <div>
                    <img
                        className= "win-user-trophy"
                        src={trophyIcon}
                        alt='trophy'
                       
                    />
                    <h3>Victory! {`${playAudio(aplauseVictory)} ${playAudio(congratulationsVictory)}`}</h3>
                    <div><ConfettiComponent /></div>
                </div>
               )
            }

        </div>
    );
};

