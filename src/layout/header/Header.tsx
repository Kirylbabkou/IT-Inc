import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const items = ["Skills", "Projects", "Contact me"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justifyContent="space-between" alignItems="center" >
                <Logo/>
                <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    
    padding: 24px 20px 24px 20px;
    box-shadow: 0px 1px 3px 0px #00000033;
    box-shadow: 0px 2px 1px 0px #0000001F;
    box-shadow: 0px 1px 1px 0px #00000024;
    background-color: ${theme.colors.light};
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 99999;
`

