// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme

    const toggleTheme = () => {
        console.log('Toggling theme from', theme, 'to', theme === 'light' ? 'dark' : 'light');
        setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
    };

    console.log('Current theme:', theme);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
