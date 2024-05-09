import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';

import './Score.css';

export const Score = ({ score })=>{
    const { texts } = useContext(LanguageContext);
    return(
        <h3 className='score'>
            {`${texts.score}: ${score}`}
        </h3>
    );
};
