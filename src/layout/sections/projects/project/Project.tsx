import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";

type ProjectProps = {
    text: string;
    src: string;
}

export const Project = (props: ProjectProps) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <InfoWrapper>
                <TextWrapper>
                    <Text>{props.text}</Text>
                </TextWrapper>
                <ButtonWrapper>
                    <LinkButton type={"button"}>
                        <a href={"#"}>Learn More<Icon iconId='vector' width="15" height="9" viewBox="0 0 15 9" /></a>
                    </LinkButton>
                </ButtonWrapper>
            </InfoWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: ${theme.colors.darkBg};
    max-width: 372px;
    margin: 30px 10px 24px 10px;
    height: 434px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 276px;
    object-fit: cover;
`

const TextWrapper = styled.div`
    margin-top: 20px;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: inherit;    
`

const ButtonWrapper = styled.div`
        //display: block;
    //position: absolute;
    //bottom: 20px;
    //left: 33%;
`

const Text = styled.span`
    font-size: 16px;
`

const LinkButton = styled(Button)`
    background-color: ${theme.colors.darkBg};
    width: 130px;
    height: 42px;
    border: ${theme.colors.light} solid 2px;
    font-size: 14px;
    font-weight: 500;        
    
    & a {
        color: ${theme.colors.light};        
        
        & svg {
            margin-left: 6px;
        }
    }    
`