import React, {useState, useEffect} from 'react';

export const ThemeContext = React.createContext();


export const ThemeProvider= ({ children })=>{
    const [theme, setTheme ]= useState('dark');
    const [isChecked , setIsChecked]= useState(false);
    const [themeChanged,  setThemeChanged] = useState(false);
   
    // console.log('theme', theme)
    // console.log('setTheme', setTheme)

    const handleChange= (e) =>{
    
       const checked= e.target.checked;
       setIsChecked(checked);
       setTheme( checked ? 'light' : 'dark');
       setThemeChanged(true);
      
    }

    useEffect(() => {
        if (themeChanged) {
            setTimeout(() => {
                 setThemeChanged(false);
            }, 1000); // Duración de la animación
        }
    }, [themeChanged]);

    // console.log('theme', theme)
    // console.log('setTheme', setTheme)


    const data = {
        theme,
        handleChange, 
        isChecked,
        themeChanged
    }

    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>

    )
}