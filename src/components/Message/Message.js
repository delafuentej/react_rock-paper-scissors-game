import { useContext, useState, useEffect} from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import { Thumbs } from '../Thumbs/Thumbs';


import './Message.css';
 

    

export const Message = ({userSelection, message,  thumbsUp, thumbsDown, playClaps, playBoo, userScore})=>{

    // console.log('userSelection',userSelection)
    // console.log('message', message)
    const { texts, languageChanged, setLanguageChanged } = useContext(LanguageContext);

    // console.log('languageChanged', languageChanged)
    
    const [showThumbs, setShowThumbs] = useState(true);
    

     //  to store the messages used to display thumbs in independent variables.
     const winMessage = texts.winMessage;
     const lostMessage = texts.lostMessage;
     const winMessageGame = texts.winMessageGame;


    useEffect(()=>{

        let timer;

       
        if (!languageChanged && userSelection !== '' && (message === lostMessage || message === winMessage)) {
           
            setShowThumbs(true);
            // Starting the  timer to hide the thumbs after 3 seconds
            timer = setTimeout(() => {
                setShowThumbs(false); // Hide thumbs after 3 seconds
            }, 3000);
        } else if(languageChanged){
            setShowThumbs(false);
            
            
        }else{
            setShowThumbs(false); 
        }
       
        // Clear the timer if the component is disassembled or if the message changes.
        return () => clearTimeout(timer);

    },[userSelection, message, lostMessage, winMessage, languageChanged, setLanguageChanged])



     //  Side-effect management for sound
     useEffect(() => {
        if (message === lostMessage && languageChanged === false) {
            playBoo();
        } else if (message === winMessage  && languageChanged === false) {
            playClaps();
        }
    }, [message, lostMessage, winMessage, playBoo, playClaps]);

   

    return(
        <div className='msg-container'>
        <h3 className="message">
           {(userScore === 5) ? winMessageGame :(userSelection === '') ? 'VS' : message}
         
        </h3> 

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
