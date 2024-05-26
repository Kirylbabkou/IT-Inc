import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import skills from "../../../assets/img/skills.webp";
import {Container} from "../../../components/Container";
import {skillData} from "./SkillData";
import {S} from "./Skills_Styles"

export const Skills = () => {
    return (
        <S.Skills>
            <Container >
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper alignItems="center" justifyContent="space-around"  wrap="wrap-reverse">
                    <S.SkillsInfo>
                        <S.SkillsText>I have a vast experience in the following web technologies:</S.SkillsText>
                        <S.SkillsWrapper>
                            {skillData.map((skill, index) => (
                                <Skill iconId={skill.iconId} title={skill.title} key={index} viewBox={skill.viewBox} width={skill.width}/>
                            ))}
                        </S.SkillsWrapper>
                    </S.SkillsInfo>
                    <S.Photo src={skills} alt="Skills"/>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};








