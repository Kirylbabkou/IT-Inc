import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {height, width} from "../../../styles/Common";

const Skills = styled.section`
    min-height: 450px;
    background-color: ${theme.colors.primaryBg};
    
    & ${Container} {
        background-color: ${theme.colors.light};:
    }
`

const Photo = styled.img`    
    ${width( 388,  250)};    
    ${height( 389,  204)};
    object-fit: cover; 
`

const SkillsInfo = styled.div`
    margin-top: 40px;
`

const SkillsWrapper = styled.div`
  
    display: grid;
    grid-template-columns: repeat(4, minmax(75px, 130px)); 
    gap: 42px;    
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
   
    margin-top: 40px;
    
        @media ${theme.media.mobile} {
            grid-template-columns: repeat(2, minmax(75px, 220px));
            grid-template-rows: repeat(2, minmax(55px, 118px));
            
            & svg {
                width: 70px;
                height: 74px;
            }
        }
`
const SkillsText = styled.span`
    color: ${theme.colors.secondaryFont}
`
// Skill

const Skill = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
height: 102px;
width: 75px;
align-items: center;
`

const SkillTitle = styled.span`
font-size: 16px;
`

export const S = {
    Skills,
    Photo,
    SkillsInfo,
    SkillsWrapper,
    SkillsText,
    Skill,
    SkillTitle
}