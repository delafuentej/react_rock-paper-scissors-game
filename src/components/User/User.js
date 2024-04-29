import './User.css';

export const User = ({userScore, userSelection, trophyIcon, children})=>{
    return(
        <div className='user-card'>
            <h2>User</h2>
            {children}

        </div>
    );
}

