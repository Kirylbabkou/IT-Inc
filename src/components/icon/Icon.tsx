import React from 'react';

import iconsSprite from "../../assets/img/icons-sprite.svg"

type IconProps = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    // position?: string
    // top?: string
    id?: string

    // xmlns?:string
}

export const Icon = (props: IconProps) => {
    return (
        <svg
            width={props.width || "30px"} height={props.height || "30px"} viewBox= {props.viewBox || "0 0 30 30"}
            // width={props} height={"30px"} viewBox= {"0 0 30 30"}

            // width={props.width } height={props.height } viewBox= {props.viewBox }
            fill="none"
             xmlns="http://www.w3.org/2000/svg"
            // position={'relative'}
            // z-index={10}  top={'26px'} left={"248px"}
            id={props.id}

            >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};

