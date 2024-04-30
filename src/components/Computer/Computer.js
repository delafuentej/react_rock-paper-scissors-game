
import { settings } from '../../configs/game';
import { Hourglass } from 'react-loader-spinner';


import './Computer.css';





export const Computer = ({rockIcon, paperIcon, scissorsIcon, trophyIcon, pcScore, userSelection, pcSelection})=>{
    return(
        <div className='computer-card'>
            <h2>
                Computer
            </h2>
            
               {(pcScore < settings.winTarget) ? 
                    (userSelection === '') ? (
                <>  
                    <Hourglass
                    visible={true}
                    height="60"
                    width="60"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#0a2647', '#ffffff']}
                />
                    <h3 className="wait-msg">{settings.waitingMessage}</h3>
                    
                </>)
                :
                (
                    <div className='img-container'>
                        <img
                            className= 'img-icon'
                            src= {(pcSelection === 'rock') ? rockIcon : (pcSelection === 'paper') ?  
                            paperIcon : (pcSelection ==='scissors') ? 
                            scissorsIcon: 
                           ''
                        }
                            alt= 'icon'
                        />
                        <h3>PC selected: {pcSelection}</h3>
                    </div>
                    
                
               )
             :
            (
                <div>
                    <img
                        className='win-computer-trophy'
                        src={trophyIcon}
                        alt='trophy'
                    />
                    <h3>Victory!</h3>
                </div>
            )}
        </div>
    );
};

