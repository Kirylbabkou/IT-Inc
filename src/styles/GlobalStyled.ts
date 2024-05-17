import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: "Be Vietnam Pro", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.primaryBg};
        line-height: 1.2 ;
        min-width: 360px;
        border: solid 1px green;
    }
    
    a,
    a:visited{
        text-decoration: none;
        //color: ${theme.colors.light}
        cursor: pointer;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        //border: none;
        background-color: unset;
        cursor: pointer;
        color: ${theme.colors.light}
    }
    
    span {
        font-size: 18px;
        line-height: 28px;
    }
    
    section:nth-of-type(even) h2 {
        color: ${theme.colors.accent} ;
        margin-bottom: 30px;
    }
    section:nth-of-type(odd) h2 {
        margin-top: 30px;
    }
    
`