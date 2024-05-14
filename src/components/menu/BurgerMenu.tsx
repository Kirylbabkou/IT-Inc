import React from 'react';
import styled, {css} from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";
import {Button} from "../Button";


export const BurgerMenu = (props: {menuItems: Array<string>}) => {
    return (
            <StyledBurgerMenu>
                <BurgerButton isOpen={false}>
                    <span></span>
                </BurgerButton>
                <BurgerMenuPopup isOpen={false}>
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
    display: none;
        @media ${theme.media.tablet} {
            display: block;
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
    width: 50%;
    min-width: 360px;
    height: 50vh;
    box-shadow: 0 1px 3px 0 #00000033;

        // @media ${theme.media.mobile} {
        //     width: 100vw;
        //     height: 100vh;
        // }

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

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
const BurgerButton = styled(Button)<{isOpen: boolean}>`
    position: fixed;
    top: 25px; 
    left: 32px; 
    bottom: 0;
    right: 0;
    width: 36px;
    height: 36px;
    z-index: 9999999;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.accent};

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgb(255, 255, 255, 0);
        `}
        
        &::before{
            display: block;
            content: "";
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.accent};
            transform: translateY(-12px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: translateY(2px) rotate(-45deg);
        `}
        }
        &::after{
            display: block;
            content: "";
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.accent};
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: translateY(0) rotate(45deg);
        `}
        }
    }
`
