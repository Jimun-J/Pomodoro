import { createContext, useState } from "react";

const colors = {
    peach: {
        backgroundColor: '#F6726F',
        color: "#151932"
    },
    cyan: {
        backgroundColor: '#6FF3F6',
        color: "#151932"
    },
    purple: {
        backgroundColor: '#D981F9',
        color: "#151932"
    }
}

const fonts = {
    ubuntu: {
        fontFamily: "'Ubuntu', sans-serif"
    },
    roboto: {
        fontFamily: "'Roboto Slab', serif"
    },
    nunito: {
        fontFamily: "'Nunito', sans-serif"
    }
}

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [colorTheme, setColorTheme] = useState(1);
    const [fontTheme, setFontTheme] = useState(1);
    const [color, setColor] = useState(colors.peach);
    const [font, setFont] = useState(fonts.ubuntu);

    
    const setColorScheme = () => {
        if (colorTheme === 1) {
            setColor(colors.peach);
        } else if (colorTheme === 2) {
            setColor(colors.cyan);
        } else {
            setColor(colors.purple);
        }
    }

    const setFontScheme = () => {
        if (fontTheme === 1) {
            setFont(fonts.ubuntu);
        } else if (fontTheme === 2) {
            setFont(fonts.roboto);
        } else {
            setFont(fonts.nunito);
        }
    }

    return (
        <ThemeContext.Provider 
            value={[{ color, colorTheme, setColorTheme, 
            font, fontTheme, setFontTheme }, 
            setColorScheme, setFontScheme
        ]}>
            {children}
        </ThemeContext.Provider>
    )
}

