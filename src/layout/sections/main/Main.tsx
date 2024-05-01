import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper alignItems="center" justifyContent="space-between" >
                    <BlockInfo>
                        <MainSpanTitle>Hi👋, I’m a</MainSpanTitle>
                        <MainTitle>Software Developer</MainTitle>
                        <MainSpan>I’m <b>Kirill Bobkov</b>, a developer dedicated to making the world a better place one line of code at a time.</MainSpan>
                        <div>
                            <Button>Hire me</Button>
                        </div>
                    </BlockInfo>
                    <Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section`
height: 100vh;  
    color: ${theme.colors.secondary};
    
    display: flex;
    
`
const Photo = styled.img`
    width: 344px;
    height: 389px;
    object-fit: cover;
`
const BlockInfo = styled.div`
max-width: 50%;
`

const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 600;
    line-height: 58px;
    //letter-spacing: 0.18px;
    text-align: left;
    margin-bottom: 24px;
`
const MainSpan = styled.span`
   font-size: 18px;
    line-height: 28px;
    // color: ${theme.colors.secondaryFont};
    color: rgba(0,0,0,0.7)
`
const MainSpanTitle = styled.span`
    
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
`



