import './Choice.css';

export const Choice = ({value, choiceIcon, onClick})=>{
    return(
        <div 
            value={value}
            onClick= {onClick}
            >
            <div className='choice-icon'>
                {choiceIcon}
               {console.log(value)}
            </div>
        </div>
    );
}

