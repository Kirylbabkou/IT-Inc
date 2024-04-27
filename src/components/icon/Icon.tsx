import React from 'react';

import iconsSprite from "../../assets/img/icons-sprite.svg"

type IconProps = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconProps) => {
    return (
        <svg width={props.width || "30"} height={props.height || "30"} viewBox= {props.viewBox || "0 0 30 30"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};

