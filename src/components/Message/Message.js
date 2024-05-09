import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';

import './Message.css';

export const Message = ({userSelection, message})=>{

    const { texts } = useContext(LanguageContext);
   
    return(
        
        <h3 className="message">
           { (userSelection === '') ? 'VS' : (message === texts.winMessage) ? texts.winMessage : (message === texts.lostMessage) ? texts.lostMessage : texts.tieMessage}

        </h3>
    );
}
