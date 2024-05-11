import './Header.css';

export const Header= ({children})=>{
    return(
        <header className='wrapper'>
            {children}
        </header>
    )
}