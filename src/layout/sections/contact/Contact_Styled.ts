import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {width} from "../../../styles/Common";
import {Button} from "../../../components/Button";


const Contact = styled.section` 
    min-height: 450px;
    margin: 100px 0 70px 0;

    @media ${theme.media.tablet} {
        margin: 54px 0 38px 0;
    }
`

const Photo = styled.img`
    max-width: 563px;
    ${width( 563,  250)};
    object-fit: cover;
    margin: 10px    
`
const StyledForm = styled.form`
    max-width: 613px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 32px;
        
    textarea {
        resize: none;
        height: 158px;
    }
`

const Field = styled.input`
    //margin-bottom: 20px;
    padding: 11px 19px 11px 19px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 14px;
    line-height: 207%;
    color: ${theme.colors.secondaryFont};
    
    &:focus-visible {
        outline: 1px solid rgba(0, 0, 0, 0.12);
    }      
`
const ButtonForm = styled(Button)`
    background-color: ${theme.colors.secondary};
    padding: 12px 24px;
    width: 213px;
    height: 50px;    
    text-align: center;
    
    & img {
        margin: 0 0 -5px 10px;        
    } 
        
`

export const S = {
    Contact,
    Photo,
    StyledForm,
    Field,
    ButtonForm,

}