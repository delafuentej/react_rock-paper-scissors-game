import { settings } from '../../configs/game';
import './User.css';

export const User = ({userScore, userSelection, trophyIcon, children})=>{
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
                    <h3>Victory!</h3>
                </div>
               )
            }

        </div>
    );
};

