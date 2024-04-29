import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItems="center" justifyContent="space-around">
                <div>
                    <MainSpanTitle>Hi👋, I’m a</MainSpanTitle>
                    <MainTitle>Software Developer</MainTitle>
                    <MainSpan>I’m John Doe, a developer dedicated to making the world a better place one line of code at a time.</MainSpan>
                    <div>
                        <Button>Hire me</Button>
                    </div>
                </div>
                    <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
min-height: 500px;
    background: #F7F6FB;
    color: #343D68;

`

const Photo = styled.img`
    width: 344px;
    height: 389px;
    object-fit: cover;
`
const MainTitle = styled.h1`
    font-size: 48px;
    //font-family: Be Vietnam;
    
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0.18px;
    text-align: left;
    color: #343D68
`
const MainSpan = styled.span`
   
`
const MainSpanTitle = styled.span`
    color: #343D68;
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
`



