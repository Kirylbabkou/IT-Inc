import React from 'react';
import styled, {css} from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";


export const BergerMenu = (props: {menuItems: Array<string>}) => {
    return (
            <StyledBurgerMenu>
                <BurgerButton isOpen={true}>
                    <span></span>
                </BurgerButton>
                <BurgerMenuPopup isOpen={true}>
                    <ul>
                        {props.menuItems.map((item, index) => {
                            if (item === "Projects") {
                                return (<li key={index}><a href=""><Icon iconId={'projectsSvg'}/>{item}</a></li>)
                            } else return (<li key={index}><a href="">{item}</a></li>)
                        })}
                    </ul>
                </BurgerMenuPopup>

            </StyledBurgerMenu>
    );
};

const StyledBurgerMenu = styled.nav`
    
        @media ${theme.media.tablet} {
            display: none;
        }
    }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    //position: fixed;
    width: 32px;
    height: 36px;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.accent};
        
        &::before{
            content: "";
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.accent};
            transform: translateY(-10px);
        }
        &::after{
            content: "";
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.accent};
            transform: translateY(10px);
        }
    }
`
const BurgerMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: ${theme.colors.light};
    opacity: 0.9;
    top: 0;left: 0;bottom: 0;right: 0;
    z-index: 999999;
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        
    `
}

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        //justify-content: space-between;
        gap: 30px;
        text-align: center;
        font-size: 18px;
        color: ${theme.colors.secondaryFont};
        height: 26px;

        li:nth-child(2) > a {
            color: ${theme.colors.accent};
        }
        
        li {
            margin-left: 30px;
            white-space: nowrap;

            & svg {
                margin-bottom: -12px; 
                    //stroke: ${theme.colors.darkBg}            
            }
        }
        a {
            color: ${theme.colors.darkFont}
        }
`