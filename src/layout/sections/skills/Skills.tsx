import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import skills from "../../../assets/img/skills.webp";
import {Icon} from "../../../components/icon/Icon";
import ring from "../../../assets/img/fotoDecor/ring.svg";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme"

export const Skills = () => {
    return (
        <StyledSkills>
            <Container >
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper alignItems="center" justifyContent="space-around"  wrap="wrap-reverse">
                    <SkillsInfo>
                        <SkillsText>I have a vast experience in the following web technologies:</SkillsText>
                        <SkillsWrapper>
                            <Skill  iconId={'html'} title={"HTML 5"}/>
                            <Skill width={'44px'} viewBox={'0 0 44 44'} iconId={'css'} title={"CSS3"}/>
                            <Skill iconId={'js'} title={"JavaScript"}/>
                            <Skill iconId={'bootstrap'} title={"Bootstrap"}/>
                            {/*<Icon   iconId={'ring'} />*/}
                            {/*<Icon*/}
                            {/*    // viewBox={'0 0 40 40'} width="40" height="40"*/}
                            {/*    iconId={'test1'} />*/}
                            {/*<img src={ring} alt="ring"/>*/}
                        </SkillsWrapper>
                    </SkillsInfo>
                    <Photo src={skills} alt="Skills"/>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 450px;
    background-color: ${theme.colors.primaryBg};
    
    & ${Container} {
        background-color: ${theme.colors.light};:
    }
`

const Photo = styled.img`
    //width: 344px;
    width: calc(250px + (344 - 250) * ((100vw - 360px ) / (1440 - 360)));
    //height: 389px;
    height: calc(186px + (389 - 186) * ((100vw - 360px ) / (1440 - 360)));
    object-fit: cover; 
`

const SkillsInfo = styled.div`
    margin-top: 40px;
`

const SkillsWrapper = styled.div`
    //display: flex;
    //flex-direction: row;
    //flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(4, minmax(75px, 130px)); 
    gap: 42px;
    
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
   
    margin-top: 40px;
    
        @media ${theme.media.mobile} {
            grid-template-columns: repeat(2, minmax(75px, 130px));
            grid-template-rows: repeat(2, minmax(55px, 150px));
        }
`
const SkillsText = styled.span`
    color: ${theme.colors.secondaryFont}
    
    
`






