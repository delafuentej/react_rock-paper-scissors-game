import './User.css';

export const User = ({userScore, userSelection, trophyIcon, children})=>{
    return(
        <div className='user-card'>
            <p>User</p>
            {children}

        </div>
    );
}

