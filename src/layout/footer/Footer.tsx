import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import github from "../../assets/img/icons-sprite.svg"
import bgImg from "../../assets/img/bgImgWave.png"
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            {/*<Container >*/}
                <FlexWrapper justifyContent="space-between" alignItems="center">
                    <SocialLinkList>
                        <span>My social media links:</span>
                        <SocialIconItem>
                            <SocialIconLink>
                                <img src="../../assets/img/linkedin.png" alt="" />
                            </SocialIconLink>
                        </SocialIconItem>
                        <SocialIconItem>
                            <SocialIconLink>
                                <img src="../../assets/img/linkedin.png" alt="" />
                            </SocialIconLink>
                        </SocialIconItem>
                        <SocialIconItem>
                            <SocialIconLink>
                                <img src="../../assets/img/linkedin.png" alt="" />
                            </SocialIconLink>
                        </SocialIconItem>
                        <SocialIconItem>
                            <SocialIconLink>
                                <Icon iconId={github} />
                            </SocialIconLink>
                        </SocialIconItem>
                    </SocialLinkList>
                    <ProjectLink>
                        <span>More projects I’ve worked on</span>
                        <SocialIconLink>
                            <Icon iconId={github} />
                            <span>@john-doe on github</span>
                        </SocialIconLink>
                    </ProjectLink>
                </FlexWrapper>
            {/*</Container>*/}

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background: url("${bgImg}");
    background-size: cover;
    background-repeat: round;
    min-height: 360px;
//    display: flex;
//    justify-content: space-between;//    
    color: ${theme.colors.light};
`

const SocialLinkList = styled.ul`
align-items: center;
`

const SocialIconItem = styled.li``

const ProjectLink = styled.a``

const SocialIconLink = styled.div``