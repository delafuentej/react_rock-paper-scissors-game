import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import { Thumbs } from '../Thumbs/Thumbs';
import './Message.css';

    

export const Message = ({userSelection, message,  thumbsUp, thumbsDown, playClaps, playBoo})=>{

    const [showThumbs, setShowThumbs] = useState(true);
    const { texts } = useContext(LanguageContext);
    // const thumbsRef = useRef(null);
    // const { playClaps, playBoo} = useContext(AudioContext)
  

     //  to store the messages used to display thumbs in independent variables.
     const winMessage = texts.winMessage;
     const lostMessage = texts.lostMessage;

    useEffect(()=>{
        let timer;
        if (userSelection !== '' && (message === lostMessage || message === winMessage)) {
            setShowThumbs(true);
            // Starting the  timer to hide the thumbs after 3 seconds
            timer = setTimeout(() => {
                setShowThumbs(false); // Hide thumbs after 3 seconds
            }, 3000);
        } else {
            setShowThumbs(false); // Do not show thumbs if there is no selection or it is a tie
        }

        // Clear the timer if the component is disassembled or if the message changes.
        return () => clearTimeout(timer);

    },[userSelection, message, lostMessage, winMessage])
     //  Side-effect management for sound
     useEffect(() => {
        if (message === lostMessage) {
            playBoo();
        } else if (message === winMessage) {
            playClaps();
        }
    }, [message, lostMessage, winMessage, playBoo, playClaps]);

   

    return(
        <div className='msg-container'>
        <h3 className="message">
           {(userSelection === '') ? 'VS' : message}
            {/* {(message === texts.lostMessage) ? playBoo() : (message === texts.tieMessage) ?  "": playClaps()} */}
        </h3> 

        <div className='thumbs-container'>
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
