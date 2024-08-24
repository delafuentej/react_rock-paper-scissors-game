import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
 import { GameContext } from '../../context/GameContext/GameContext';

import './Round.css';

export const Round = ()=>{
    const {texts} = useContext(LanguageContext);
     const {game} = useContext(GameContext);
    const {userSelection, round} = game;
    
    return(
        <div className='round'>
            <h2>{ (userSelection === '') ? `${texts.initMessageFirst} ${texts.winTarget} ${texts.initMessageSecond}` : `${texts.round}: #${round}`}</h2>
        </div>
    );
}

