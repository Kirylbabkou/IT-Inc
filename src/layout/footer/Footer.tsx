import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import bgImg from "../../assets/img/bgImgWave.png"
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container >
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
            </Container>
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
    color: ${theme.colors.light};

    @media ${theme.media.tablet} {
        min-height: 260px;
    }
    
     ${FlexWrapper} {
    @media ${theme.media.tablet} {
        justify-content: start;
    }         
}
`
const SocialLinkListWrapper = styled.div`
    margin-right: 50px;        
    
        @media ${theme.media.tablet} {
            margin-top: 30px;
        }    
`

const FooterText = styled.span`    
    ${font({weight: 500, lineHeight: 1.8, Fmax: 20, Fmin: 18})}
    text-align: center;
    margin:  0 0 34px 0;

    @media ${theme.media.tablet} {
        margin-bottom: 12px;
        font-weight: 400;
    }
`

const SocialLinkList = styled.ul`
    display: flex;
    align-items: center;
    margin: 34px 0 0 0;
    li:not(:first-child) {
        margin-left: 60px;
    }
    
        @media ${theme.media.tablet} {
            margin-top: 12px;
        }
`

const SocialIconItem = styled.li``

const ProjectLink = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

        @media ${theme.media.tablet} {
            margin-top: 28px;
        }

        @media ${theme.media.mobile} {
            margin-top: 0;
        }
`

const SocialIconLink = styled.a` 
    display: flex;
    justify-content: center;
`
const ContactGitText = styled.span`
    margin-left: 22px;
    color: ${theme.colors.lightOpacity}
`