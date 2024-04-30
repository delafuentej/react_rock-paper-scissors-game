import './Round.css';

export const Round = ({ userSelection, round})=>{
    return(
        <div className='round'>
            { (userSelection === '') ? 'No rounds yet!' : `Round: #${round}`}
        </div>
    );
}

