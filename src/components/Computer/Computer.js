import { settings } from '../../configs/game';
import './Computer.css';

export const Computer = ({rockIcon, paperIcon, scissorsIcon, trophyIcon, pcScore, userSelection, pcSelection})=>{
    return(
        <div className='computer-card'>
            <h2>
                Computer
            </h2>
            
               {(pcScore < settings.winTarget) ? 
                    (userSelection === '') ? (
                    <h3 className="wait-msg">{settings.waitingMessage}</h3>
                )
                :
                (
                    <div>
                        <img
                            src= {(pcSelection === 'rock') ? rockIcon : (pcSelection === 'paper') ? paperIcon : (pcSelection ==='scissors') ? scissorsIcon: ""}
                            alt= 'icon'
                        />
                        <h3>PC selected: {pcSelection}</h3>
                    </div>
                
               )
             :
            (
                <div>
                    <img
                        src={trophyIcon}
                        alt='trophy'
                    />
                    <h3>Victory!</h3>
                </div>
            )}
        </div>
    );
};

