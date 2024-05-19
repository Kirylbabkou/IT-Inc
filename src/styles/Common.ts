import {theme} from "./Theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Be Vietnam Pro"};
    font-weight: ${weight || 400};
    
    // color: ${color || theme.colors.light};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`
export const width = (Wmax: number , Wmin: number) => ` 
    width: calc(${Wmin}px + (${Wmax} - ${Wmin}) * ((100vw - 360px ) / (1440 - 360)));
`
export const height = (Hmax: number , Hmin: number) => ` 
    height: calc(${Hmin}px + (${Hmax} - ${Hmin}) * ((100vw - 360px ) / (1440 - 360)));
`