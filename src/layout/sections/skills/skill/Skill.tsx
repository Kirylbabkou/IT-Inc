import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon width={"50px"} height={"50px"} iconId={props.iconId} />
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
margin-right: 30px;
height: 102px;
width: 75px;`

const SkillTitle = styled.span``