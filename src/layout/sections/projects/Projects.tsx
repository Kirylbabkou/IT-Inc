import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import project1Img from "../../../assets/img/project1.webp";
import project2Img from "../../../assets/img/project2.webp";
import project3Img from "../../../assets/img/project3.webp";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";



export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle><Icon iconId={'projectsWhite'} />Projects</SectionTitle>
                <ProjectText>A select number of projects</ProjectText>
                <FlexWrapper wrap="wrap" justifyContent="space-around">
                    <Project src={project1Img} text={"Made a social media manager template using HTML 5, CSS and JS."}/>
                    <Project src={project2Img} text={"Made a simple card page using HTML 5 and  CSS 3"}/>
                    <Project src={project3Img} text={"Made an I.P address tracking website."}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 450px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.lightOpacity};    
    margin-top: 70px;
    text-align: center;
`

const ProjectText = styled.span`
    line-height: 50px;
`

