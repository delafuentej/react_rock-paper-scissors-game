import './User.css';

export const User = ({children})=>{
    return(
        <div className='user-card'>
            <p>User</p>
            {children}

        </div>
    );
}

