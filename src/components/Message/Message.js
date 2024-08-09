import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';

import './Message.css';

    

export const Message = ({userSelection, message,  thumbsUp, thumbsDown, playClaps, playBoo})=>{

    const [showThumbs, setShowThumbs] = useState(true);
    const { texts } = useContext(LanguageContext);
    // const thumbsRef = useRef(null);
    // const { playClaps, playBoo} = useContext(AudioContext)
  
    // console.log('tieMessage',texts.tieMessage)
    // console.log('winMessage',texts.winMessage)
    // console.log('lostMessage',texts.lostMessage)


    useEffect(()=>{
        let timer;
        if (userSelection !== '' && (message === texts.lostMessage || message === texts.winMessage)) {
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

    },[userSelection, message, texts.lostMessage, texts.winMessage])

   
    // useEffect(() => {
    //     const thumbsElement = thumbsRef.current;

    //     if (thumbsElement) {
    //         const handleAnimationEnd = () => {
    //             thumbsElement.remove(); // Removes the element from the DOM
    //         };

    //         thumbsElement.addEventListener('animationend', handleAnimationEnd);

    //         // Clears the event when the component is disassembled
    //         return () => {
    //             thumbsElement.removeEventListener('animationend', handleAnimationEnd);
    //         };
    //     }
    // }, [showThumbs]);

    return(
        <div className='msg-container'>
        <h3 className="message">
           {(userSelection === '') ? 'VS' : message}
            {(message === texts.lostMessage) ? playBoo() : (message === texts.tieMessage) ?  "": playClaps()}
        </h3> 

        <div className='thumbs-container'>
                {showThumbs && (
                    <div className='thumbs'>
                        {message === texts.lostMessage ? thumbsDown : thumbsUp}
                    </div>
                )}
            </div>
              
        </div>
       
    );
}
