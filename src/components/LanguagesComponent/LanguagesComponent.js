import React, { useContext } from 'react';

import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import './LanguagesComponent.css';




export const LanguagesComponent=()=>{

        const { handleLanguage } = useContext(LanguageContext);
    return(

        <select
            className='select'
            name='language'
            onChange= {handleLanguage}
        >
            <option 
                value='es'>
                ES
            </option>
            <option
                value='en'
                >
                EN
            </option>
            <option 
                value='de'
                >
                DE
            </option>

        </select>
    )

    
}