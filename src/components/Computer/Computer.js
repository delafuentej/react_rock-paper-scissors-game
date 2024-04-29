import { settings } from '../../configs/game';
import './Computer.css';

export const Computer = ({rockIcon, paperIcon, scissorsIcon, trophyIcon, pcScore, userSelection, pcSelection})=>{
    return(
        <div className='computer-card'>
            <h2>
                Computer
            </h2>
            {
                (userSelection === '') ? (
                    <h3 className="wait-msg">{settings.waitingMessage}</h3>
                )
                :
                (
                    <div>
                        <h3>PC selected: {pcSelection}</h3>
                    </div>
                )


            }
            

        </div>
    );
}

