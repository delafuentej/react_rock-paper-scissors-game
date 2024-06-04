import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';

import './Message.css';

    

export const Message = ({userSelection, message,  thumbsUp, thumbsDown, playClaps, playBoo})=>{



    const { texts } = useContext(LanguageContext);
    // const { playClaps, playBoo} = useContext(AudioContext)
  
    console.log('tieMessage',texts.tieMessage)
    console.log('winMessage',texts.winMessage)
    console.log('lostMessage',texts.lostMessage)

   
    return(
        <div className='msg-container'>
        <h3 className="message">
           {(userSelection === '') ? 'VS' : message}
            {(message === texts.lostMessage) ? playBoo() : (message === texts.tieMessage) ?  "": playClaps()}
        </h3> 
        
        <div className='thumbs-container'>
           {((userSelection !=='') && (message === texts.lostMessage))  ? 
           <div className='thumbs' >
            {thumbsDown}
           </div> : 

            ((userSelection !=='') && (message === texts.tieMessage)) ?

            "" :
            ((userSelection !=='')) ?
            <div className='thumbs'>
            {thumbsUp}
           </div>
           :
           ""
        
            }   
       
        </div>
            
           
             
        </div>
       
    );
}
