import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';


import './Title.css';

export const Title = ()=>{
    const { texts } = useContext(LanguageContext);
    return(
        <div className='title'>
            <h1>{texts.gameName}</h1>

        </div>
    );
}

