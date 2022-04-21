import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isDarkTheme: true,
        lightTheme: {
            color: '#222222',
            backgroundColor: '#D8DDF1',
        },
        darkTheme: {
            color: "#FFFFFF",
            backgroundColor: "#483D8B",
        }
    };

    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}


export default ThemeContextProvider;

