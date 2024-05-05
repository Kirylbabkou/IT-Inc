import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper  alignItems="center" justifyContent="space-around" wrap={"wrap-reverse"}>
                    <BlockInfo>
                        <MainSpanTitle>Hi👋, I’m a</MainSpanTitle>
                        <MainTitle>Software Developer</MainTitle>
                        <MainSpan>I’m <b>Kirill Bobkov</b>, a developer dedicated to making the world a better place one line of code at a time.</MainSpan>
                        <div>
                            <Button>Hire me</Button>
                        </div>
                    </BlockInfo>
                    <PhotoWrapper>
                        {/*<span>*/}
                            <Icon id={'ring'} width="22" height="22" viewBox="0 0 22 22" iconId={"ring"}/>
                        {/*<span id={'ring'}><Icon width="22" height="22"                                                 viewBox="0 0 22 22" iconId={"ring"}/></span>*/}
                        <Icon id={'zigzag'} width="38" height="98" viewBox="0 0 43 98" iconId={"zigzag"}/>
                       <Icon id={'plus'} width="27" height="27" viewBox="0 0 27 27" iconId={"plus"}/>
                        <Icon id={'cube'} width="40" height="40" viewBox="0 0 40 40" iconId={"cube"}/>
                        <Icon id={'circles'} width="120" height="76" viewBox="0 0 120 76" iconId={"circles"}/>
                        {/*</span>*/}
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section`
min-height: 495px;  
    color: ${theme.colors.secondary};    
    display: flex;    
    margin: 50px 0 100px 0;    
`

const PhotoWrapper = styled.div`
//height: 100%;    

    //span {        
    //    z-index: 10;
    //}
    #ring {
        z-index: 10;
        position: relative;
        top: 26px;
        left: 224px; 
    }
    #zigzag {
        z-index: 10;
        position: relative;
        bottom: 320px;
        left: 184px;
    }
    #plus {
        z-index: 10;
        position: relative;
        bottom: 410px;
        left: 276px;
    }
    #cube {
        z-index: 10;
        position: relative;
        bottom: 400px;
        left: 486px;
    }    
    #circles {
        z-index: 10;
        position: relative;
        top: 60px;
        left: 364px;
    }
`

const Photo = styled.img`
    width: 344px;
    height: 389px;
    object-fit: cover;
    position: relative;
    margin: 50px 20px 0 0;
    
`
const BlockInfo = styled.div`
max-width: 46%;
`

const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 600;
    //line-height: 58px;    
    text-align: left;
    margin-bottom: 24px;
`
const MainSpan = styled.span`
   // color: ${theme.colors.secondaryFont};
    color: rgba(0,0,0,0.7)
`
const MainSpanTitle = styled.span`
    
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
`



