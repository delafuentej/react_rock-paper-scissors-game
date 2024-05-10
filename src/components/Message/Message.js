import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';

import './Message.css';

export const Message = ({userSelection, message})=>{
    console.log('message',message)
    const { texts } = useContext(LanguageContext);
    console.log('tieMessage',texts.tieMessage)
    console.log('winMessage',texts.winMessage)
    console.log('lostMessage',texts.lostMessage)

   
    return(
        
        <h3 className="message">
           { (userSelection === '') ? 'VS' : message}

        </h3>
    );
}
