import styled from "styled-components";
import {font} from "../styles/Common";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: center;
    font-weight: 500;
    //font-size: 20px;
    ${font({Fmax: 25, Fmin: 20})}
    
    & svg {
        margin-bottom: -12px;
        margin-right: 12px;
    }

    @media ${theme.media.tablet} {
        font-weight: 600;
    }
    
`