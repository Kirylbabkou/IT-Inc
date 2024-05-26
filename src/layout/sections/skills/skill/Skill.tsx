import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Skills_Styles"

type SkillPropsType = {
    width?: string
    iconId: string
    title: string
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <Icon width={props.width || "44px"} viewBox={props.viewBox ||'0 0 44 44'} height={"44px"} iconId={props.iconId} />
            <S.SkillTitle>{props.title}</S.SkillTitle>
        </S.Skill>
    );
};

