import React, {useState} from 'react';

export const ThemeContext = React.createContext();

const initialTheme = 'dark';

export const ThemeProvider= ({ children })=>{
    const [theme, setTheme ]= useState(initialTheme);

    const handleTheme= e =>{
        setTheme(e.target.value);
    }


    const data = {
        theme,
        handleTheme
    }

    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>

    )
}