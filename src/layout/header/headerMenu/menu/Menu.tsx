import React from 'react';
import {Icon} from "../../../../components/icon/Icon";

export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <ul>
            {props.menuItems.map((item, index) => {
                if (item === "Projects") {
                    return (<li key={index}><a href=""><Icon iconId={'projectsSvg'}/>{item}</a></li>)
                } else return (<li key={index}><a href="">{item}</a></li>)
            })}
        </ul>
    );
};



