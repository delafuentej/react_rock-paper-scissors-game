import './Message.css';

export const Message = ({userSelection, message})=>{
   
    return(
        
        <h3 className="message">
           { (userSelection === '') ? 'VS' : message}

        </h3>
    );
}
