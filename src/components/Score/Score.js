import './Score.css';

export const Score = ({ score })=>{
    return(
        <div className='score'>
            {`Score: ${score}`}
        </div>
    );
};
