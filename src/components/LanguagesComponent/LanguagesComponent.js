import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';

import './LanguagesComponent.css';

export const LanguagesComponent=()=>{

        const { handleLanguage } = useContext(LanguageContext);
    return(

        <select
            name='language'
            onChange= {handleLanguage}
        >
            <option value='es'>
                <img src='img/espana.png' className="img-flags" alt='spain-flag'/>ES
            </option>
            <option value='en'>
                <img src='img/alemania.png' className="img-flags" alt='uk-flag'/>EN
            </option>
            <option value='de'>
                <img src='img/reino-unido.png' className="img-flags" alt='germany-flag' />DE
            </option>

        </select>
    )

    
}