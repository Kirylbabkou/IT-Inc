import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Projects_Styles"

type ProjectProps = {
    text: string;
    src: string;
    srcSet?: string;
}

export const Project = (props: ProjectProps) => {
    return (
        <S.Project>
            <S.Image src={props.src} srcSet={props.srcSet} alt=""/>
            <S.InfoWrapper>
                <S.TextWrapper>
                    <S.Text>{props.text}</S.Text>
                </S.TextWrapper>
                <S.ButtonWrapper>
                    <S.LinkButton type={"button"}>
                        <a href={"#"}>Learn More<Icon iconId='vector' width="15" height="9" viewBox="0 0 15 9" /></a>
                    </S.LinkButton>
                </S.ButtonWrapper>
            </S.InfoWrapper>
        </S.Project>
    );
};

