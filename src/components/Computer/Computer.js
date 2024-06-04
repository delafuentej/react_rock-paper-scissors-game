import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
// import { AudioContext } from '../../context/AudioContext/AudioContext';


//import { settings } from '../../configs/game';
import { Hourglass } from 'react-loader-spinner';

import './Computer.css';





export const Computer = ({rockIcon, paperIcon, scissorsIcon, trophyIcon, pcScore, userSelection, pcSelection, playBoo})=>{
   
            const { texts } = useContext(LanguageContext);
            //console.log('computer component texts',texts)
            // const {playBoo}= useContext(AudioContext);
   
    return(
        <div className='computer-card'>
            <h2>
                {texts.pcName}
            </h2>
            
               {(pcScore < texts.winTarget) ? 
                    (userSelection === '') ? (
                <>  
                    <Hourglass
                    visible={true}
                    height="60"
                    width="60"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#0a2647', '#67f806dc']}
                />
                    <h3 className="wait-msg">{texts.waitingMessage}</h3>
                    
                </>)
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
                        <h3>{texts.pcSelectedMessage} {pcSelection}
                        
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
                    <h3>{texts.victoryMessage}
                        {playBoo()}
                    </h3>
                </div>
            )}
        </div>
    );
};

