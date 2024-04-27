import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />


        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 24px 100px 24px 100px;
    box-shadow: 0px 1px 3px 0px #00000033;
    box-shadow: 0px 2px 1px 0px #0000001F;
    box-shadow: 0px 1px 1px 0px #00000024;
`

