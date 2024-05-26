import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {font, height, width} from "../../../styles/Common";


const Projects = styled.section`
    min-height: 450px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.lightOpacity};    
    margin-top: 70px;
    text-align: center;
`

const ProjectText = styled.span`
    line-height: 50px;
`
// Project

const Project = styled.div`
    background-color: ${theme.colors.darkBg};
    width: min-content;
    margin: 30px 10px 24px 10px;
    ${height( 434,  327)};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    
`

const Image = styled.img`
    ${width( 372,  266)};      
    ${height( 276,  166)};
    object-fit: cover;
`

const TextWrapper = styled.div`
    margin: 20px 10px 0;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: inherit;    
`

const ButtonWrapper = styled.div`
        
`

const Text = styled.span`
   ${font({lineHeight: 1.8, Fmax: 16, Fmin: 14})}
`

const LinkButton = styled(Button)`
    background-color: ${theme.colors.darkBg};
    width: 130px;
    height: 42px;
    border: ${theme.colors.light} solid 2px;
    font-size: 14px;
    font-weight: 500;        
    
    & a {
        color: ${theme.colors.light};        
        
        & svg {
            margin-left: 6px;
        }
    }    
`

export const S = {
    Projects,
    ProjectText,
    Project,
    Image,
    TextWrapper,
    InfoWrapper,
    ButtonWrapper,
    LinkButton,
    Text
}