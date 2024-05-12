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
                <FlexWrapper justifyContent="space-around" alignItems="center" wrap="wrap">
                    <SocialLinkListWrapper>
                        <FooterText>My social media links:</FooterText>
                        <SocialLinkList>
                            <SocialIconItem>
                                <SocialIconLink>
                                    <Icon iconId="gmail"/>
                                </SocialIconLink>
                            </SocialIconItem>
                            <SocialIconItem>
                                <SocialIconLink>
                                    <Icon iconId="linkedin"/>
                                </SocialIconLink>
                            </SocialIconItem>
                            <SocialIconItem>
                                <SocialIconLink>
                                    <Icon iconId="twitter"/>
                                </SocialIconLink>
                            </SocialIconItem>
                            <SocialIconItem>
                                <SocialIconLink>
                                    <Icon iconId="whatsapp"/>
                                </SocialIconLink>
                            </SocialIconItem>
                        </SocialLinkList>
                    </SocialLinkListWrapper>

                    <ProjectLink>
                        <FooterText>More projects I’ve worked on</FooterText>
                        <SocialIconLink>
                            <Icon iconId="github" />
                            <ContactGitText>@john-doe on github</ContactGitText>
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
    display: grid;
    grid-template-columns: repeat(1, 1fr);
//    display: flex;
//    justify-content: space-between;//    
    color: ${theme.colors.light};
`
const SocialLinkListWrapper = styled.div`
`

const FooterText = styled.span`    
    font-size: 20px;
    font-weight: 500;
    line-height: 29.22px;
    text-align: center;
    margin:  0 0 34px 0;
`

const SocialLinkList = styled.ul`
    display: flex;
    align-items: center;
    margin: 34px 0 0 0;
    li:not(:first-child) {
        margin-left: 65px;
    }
`

const SocialIconItem = styled.li``

const ProjectLink = styled.div`
display: flex;
flex-direction: column;
    text-align: center;
`

const SocialIconLink = styled.a` 
    display: flex;
    justify-content: center;
`
const ContactGitText = styled.span`
    margin-left: 22px;
    color: ${theme.colors.lightOpacity}
`