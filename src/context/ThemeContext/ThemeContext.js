import React, {useState} from 'react';

export const ThemeContext = React.createContext();


export const ThemeProvider= ({ children })=>{
    const [theme, setTheme ]= useState('dark');
    const [isChecked , setIsChecked]= useState(false);
   
    console.log('theme', theme)
    console.log('setTheme', setTheme)

    const handleChange= (e) =>{
    
       const checked= e.target.checked;
       setIsChecked(checked);
       setTheme( checked ? 'light' : 'dark');
      
    }

    // console.log('theme', theme)
    // console.log('setTheme', setTheme)


    const data = {
        theme,
        handleChange, 
        isChecked
    }

    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>

    )
}