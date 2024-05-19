import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    width?: string
    iconId: string
    title: string
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon width={props.width || "44px"} viewBox={props.viewBox ||'0 0 44 44'} height={"44px"} iconId={props.iconId} />
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
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