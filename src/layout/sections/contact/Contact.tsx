import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import contact from "../../../assets/img/contact.webp"

export const Contact = () => {
    return (
        <StyledContact>
            <FlexWrapper>
                <Photo src={contact} alt="Contact" />

            </FlexWrapper>

        </StyledContact>
    );
};

const StyledContact = styled.div``
const Photo = styled.img`
    width: 344px;
    height: 389px;
    object-fit: cover;
`