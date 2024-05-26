import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    display: flex;
    //padding: 24px 20px 24px 20px;
    padding: 24px 0 24px 0;
    box-shadow: 0 1px 3px 0 #00000033;
    background-color: ${theme.colors.light};
    position: sticky;
    top: 0; left: 0; right: 0;
    z-index: 99999;
    min-height: 72px;

    @media ${theme.media.tablet} {
        
        div > div:first-child >svg {
            display: none;
        }
    }  
`
export const S = {
    Header
};