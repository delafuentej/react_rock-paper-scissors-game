import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
// import { AudioContext } from '../../context/AudioContext/AudioContext';
import { ConfettiComponent } from '../Confetti/Confetti';


import '../../App.css'
import './User.css';

export const User = ({ userScore, userSelection, trophyIcon, children, playAplause, playCongrat })=>{


    const { texts } = useContext(LanguageContext);
   
    // const { playAplause, playCongrat} = useContext(AudioContext);

   
    return(
        <div className='use-card'>
            <h2 className='user-name'>{texts.userName}</h2>
            {
               ( userScore < texts.winTarget) ? (
                <div className='user-selection'>
                    <div className="choice-grid">
                        {children}
                    </div>
                    <h3 className='user-message' >
                        {(userSelection === '') ? `${texts.selectMessage}`: `${texts.userSelectedMessage} ${userSelection.charAt(0).toUpperCase()+ userSelection.slice(1).toLowerCase()}`}
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
                    <h3>{texts.victoryMessage}
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

