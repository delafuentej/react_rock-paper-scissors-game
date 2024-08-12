import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
// import { AudioContext } from '../../context/AudioContext/AudioContext';


//import { settings } from '../../configs/game';


import './Computer.css';
import HourglassComponent from '../Hourglass/HourglassComponent';





export const Computer = ({rockIcon, paperIcon, scissorsIcon, trophyIcon, pcScore, userSelection, pcSelection, playBoo, className})=>{
   
            const { texts } = useContext(LanguageContext);

    return(
        <div className='computer-card'>
            <h2 className='computer-name className'>
                {texts.pcName}
            </h2>
            
               {(pcScore < texts.winTarget) ? 
                    (userSelection === '') ? (
                <div className='hourglass'>  
                   <HourglassComponent />
                    <h3 className="wait-msg">{texts.waitingMessage}</h3>
                    
                </div>)
                :
                (
                    <div className='img-container'>
                        <img
                            className= 'img-icon'
                            src= {
                                (pcSelection === texts.rock) ? rockIcon : (pcSelection === texts.paper) ?  
                            paperIcon : (pcSelection === texts.scissors) ? 
                            scissorsIcon: 
                           ''
                        }
                            alt= 'icon'
                        />
                        <h3>{texts.pcSelectedMessage} {pcSelection.charAt(0).toUpperCase()+ pcSelection.slice(1).toLowerCase()}
                        
                        </h3>
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
                    <h3 className='win-computer-msg'>{texts.victoryMessage}
                        {playBoo()}
                    </h3>
                </div>
            )}
        </div>
    );
};

