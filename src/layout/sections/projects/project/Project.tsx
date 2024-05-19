import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";
import {font, height, width} from "../../../../styles/Common";

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
    width: min-content;
    margin: 30px 10px 24px 10px;
    ${height( 434,  327)};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    
`

const Image = styled.img`
    ${width( 372,  266)};      
    ${height( 276,  166)};
    object-fit: cover;
`

const TextWrapper = styled.div`
    margin: 20px 10px 0;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: inherit;    
`

const ButtonWrapper = styled.div`
        
`

const Text = styled.span`
   ${font({lineHeight: 1.8, Fmax: 16, Fmin: 14})}
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