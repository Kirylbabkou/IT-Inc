import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button";
import {theme} from "../../../../styles/Theme";

type ProjectProps = {
    text: string;
    src: string;
}

export const Project = (props: ProjectProps) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>

            {/*<InfoWrapper>*/}
            {/*    <TextWrapper>*/}
                    <Text>{props.text}</Text>
                {/*</TextWrapper>*/}

                <ButtonWrapper>
                    <LinkButton type={"button"}>
                        <a href={"#"}>Learn More</a>
                    </LinkButton>
                </ButtonWrapper>
            {/*</InfoWrapper>*/}


        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: ${theme.colors.darkBg};
    max-width: 372px;
    margin: 30px 10px 24px 10px;
    height: 434px;
    text-align: center;
    
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 276px;
    object-fit: cover;`

const TextWrapper = styled.div``

const InfoWrapper = styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

const ButtonWrapper = styled.div`
    display: block;
    position: absolute;
    bottom: 20px;
    left: 33%;
`

const Text = styled.span`
    font-size: 16px;
    font-weight: 400;
    //opacity: 0.87;
    
`

const LinkButton = styled.button`
    background: ${theme.colors.darkBg};
    width: 130px;
    height: 42px;
    border: ${theme.colors.light} solid 2px;
    
    & a {
        color: ${theme.colors.light}
    }
`