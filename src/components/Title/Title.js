import { settings } from '../../configs/game';
import './Title.css';

export const Title = ()=>{
    return(
        <div className='title'>
            <h1>{settings.gameName}</h1>

        </div>
    );
}

