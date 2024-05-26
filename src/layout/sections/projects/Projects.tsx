import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import {Container} from "../../../components/Container";
import {S} from "./Projects_Styles"
import {projectData} from "./ProjectData"



export const Projects = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle><Icon iconId={'projectsWhite'} />Projects</SectionTitle>
                <S.ProjectText>A select number of projects</S.ProjectText>
                <FlexWrapper wrap="wrap" justifyContent="space-around">
                    {projectData.map((p, index) => (
                        <Project src={p.src} srcSet={p.srcSet} text={p.text} key={index} />
                    ))}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};



