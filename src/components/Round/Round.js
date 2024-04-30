import { settings } from '../../configs/game'
import './Round.css';

export const Round = ({ userSelection, round})=>{
    return(
        <div className='round'>
            <h2>{ (userSelection === '') ? `Win whoever gets ${settings.winTarget} victories! Go ahead!` : `Round: #${round}`}</h2>
        </div>
    );
}

