import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
// import github from "../../assets/img/icons-sprite.svg"
import bgImg from "../../assets/img/bgImgWave.png"

export const Footer = () => {
    return (
        <StyledFooter>
            <SocialLinkList>
                <span>My social media links:</span>
                <SocialIconLink>
                    <img src="../../assets/img/linkedin.png" alt="" />
                </SocialIconLink>
            </SocialLinkList>
            <ProjectLink>
                <span>More projects I’ve worked on</span>
                <SocialIconLink>
                    <Icon iconId={"github"} />
                    <span>@john-doe on github</span>
                </SocialIconLink>
            </ProjectLink>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
//background-image: url("../../assets/img/bgImgWave.png");
    background: #343D68;
`

const SocialLinkList = styled.ul``

const ProjectLink = styled.a``

const SocialIconLink = styled.div``