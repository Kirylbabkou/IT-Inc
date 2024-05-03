import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import skills from "../../../assets/img/skills.webp";
import {Icon} from "../../../components/icon/Icon";
import ring from "../../../assets/img/fotoDecor/ring.svg";

export const Skills = () => {
    return (
        <StyledSkills>


            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap="wrap" alignItems="center" justifyContent="space-around">
                <div style={{
                    backgroundImage: 'red',
                }}>
                    <p>I have a vast experience in the following web technologies:</p>
                        <SkillsWrapper>
                            <Skill iconId={'html'} title={"HTML 5"}/>
                            <Skill iconId={'css'} title={"CSS3"}/>
                            <Skill iconId={'js'} title={"JavaScript"}/>
                            <Skill iconId={'bootstrap'} title={"Bootstrap"}/>
                            <Icon   iconId={'ring'} />
                            <Icon
                                // viewBox={'0 0 40 40'} width="40" height="40"
                                iconId={'test1'} />
                            <img src={ring} alt="ring"/>
                        </SkillsWrapper>
                </div>
                <Photo src={skills} alt="Skills"/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 450px;
    background: #F7F6FB;
`

const Photo = styled.img`
    width: 344px;
    height: 389px;
    object-fit: cover;
`
const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`






