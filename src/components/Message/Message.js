import { useContext, useState, useEffect, useLayoutEffect} from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import { AudioContext } from '../../context/AudioContext/AudioContext';
import { Thumbs } from '../Thumbs/Thumbs';


import './Message.css';

export const Message = ({userSelection, message,  thumbsUp, thumbsDown,  userScore, isLoading})=>{
   
    const { texts, languageChanged, setLanguageChanged } = useContext(LanguageContext);

    const{playBoo, playClaps} = useContext(AudioContext);

    const [showThumbs, setShowThumbs] = useState(true);
    

     //  to store the messages used to display thumbs in independent variables.
     const winMessage = texts.winMessage;
     const lostMessage = texts.lostMessage;
     const winMessageGame = texts.winMessageGame;


    useLayoutEffect(()=>{

        let timer;

        if ( !isLoading && !languageChanged && userSelection !== '' && (message === lostMessage || message === winMessage)) {
           
            setShowThumbs(true);
            // Starting the  timer to hide the thumbs after 3 seconds
            timer = setTimeout(() => {
                setShowThumbs(false); // Hide thumbs after 3 seconds
            }, 2000);
        } else if(languageChanged){
            setShowThumbs(false);
            
            
        }else{
            setShowThumbs(false); 
        }
       
        // Clear the timer if the component is disassembled or if the message changes.
        return () => clearTimeout(timer);

    },[userSelection, message, lostMessage, winMessage, languageChanged, setLanguageChanged, isLoading])


   
     //  Side-effect management for sound
     useEffect(() => {
        
        if (!isLoading && message === lostMessage && languageChanged === false && !isLoading) {
            playBoo();
        } else if (!isLoading && message === winMessage  && languageChanged === false && !isLoading) {
            playClaps();
        }
    }, [message, lostMessage, winMessage, playBoo, playClaps, isLoading]);

   

    return(
        <div className={`msg-container ${isLoading ? 'margin-top' : ''}`}>
            {!isLoading && (
                <h3 className="message">
                { (userScore === 5) ? winMessageGame :(userSelection === '') ? 'VS' : message}
              
             </h3> 
            )}
        

        <div>
          
                {showThumbs && (
                   <Thumbs
                    thumbsUp={thumbsUp}
                    thumbsDown={thumbsDown}
                    message={message}
                    texts={texts}
                   />
                )}
            </div>
              
        </div>
       
    );
}
