import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';

import './Round.css';

export const Round = ({ userSelection, round})=>{
    const {texts} = useContext(LanguageContext);
    return(
        <div className='round'>
            <h2>{ (userSelection === '') ? `${texts.initMessageFirst} ${texts.winTarget} ${texts.initMessageSecond}` : `${texts.round}: #${round}`}</h2>
        </div>
    );
}

