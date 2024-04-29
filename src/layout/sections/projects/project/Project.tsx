import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button";

type ProjectProps = {
    text: string;
    src: string;
}

export const Project = (props: ProjectProps) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Text>{props.text}</Text>
            <div>
                <Button type={"button"}>
                    {/*<a href={"#"}>Learn More</a>*/}
                    Learn More
                </Button>
            </div>

        </StyledProject>
    );
};

const StyledProject = styled.div`
    background: #262C4D;
    max-width: 372px;
    margin: 0 auto;
    min-height: 434px;
    text-align: center;
`

const Image = styled.img`
    width: 100%;
height: 276px;
object-fit: cover;`

const Text = styled.span`
`

// const LinkButton = styled.button``