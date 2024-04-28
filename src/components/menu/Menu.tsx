import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Menu = () => {
    return (
            <StyledMenu>
                <ul>
                    <li><a href="">Skills</a></li>
                    <li><a href=""><Icon iconId={'projectsSvg'} />Projects</a></li>
                    <li><a href="">Contact me</a></li>
                </ul>
            </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
`