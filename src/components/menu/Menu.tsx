import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";


export const Menu = (props: {menuItems: Array<string>}) => {
    return (
            <StyledMenu>
                <ul>
                    {props.menuItems.map((item, index) => {
                        // if (item === "Projects") {return (<><Icon iconId={'projectsSvg'} /><li key={index}><a href="">{item}</a></li></>)}
                        if (item === "Projects") {return (<li key={index}><a href=""><Icon iconId={'projectsSvg'} />{item}</a></li>)}
                        else return (<li key={index}><a href="">{item}</a></li>)
                    })}
                </ul>
            </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        text-align: center;
        font-size: 18px;
        color: ${theme.colors.secondaryFont};
        height: 26px;
    }
    li {
        margin-left: 30px;
        
        & svg {
            margin-bottom: -12px;
            //stroke: ${theme.colors.darkBg}
            
    }
    }
    
    a {
        color: ${theme.colors.darkFont}
    }
`