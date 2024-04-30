import './Message.css';

export const Message = ({userSelection, message})=>{
    return(
        <div className="message">
           { (userSelection === '') ? 'VS' : message}

        </div>
    );
}
