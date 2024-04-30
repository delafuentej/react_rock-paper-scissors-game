import './Score.css';

export const Score = ({ score })=>{
    return(
        <h3 className='score'>
            {`Score: ${score}`}
        </h3>
    );
};
