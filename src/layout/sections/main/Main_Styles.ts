import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {Button} from "../../../components/Button";


const Main = styled.section`
    min-height: 495px;  
    color: ${theme.colors.secondary};    
    display: flex;    
    margin: 50px 0 100px 0;

    & div > div {
        @media ${theme.media.tablet} {        
            flex-direction: column-reverse;       
        }
    }
`

const PhotoWrapper = styled.div`
  position: relative;
    width: 384px;
    height: 420px;
    z-index: -1;  
    
    #ring {
        z-index: 1;
        position: absolute;
        bottom: 0;
        left: 46px; 
    }
    #zigzag {
        z-index: 1;
        position: absolute;
        top: -20px;
        left: 34px;
    }
    #plus {
        z-index: 1;
        position: absolute;
        top: -38px;
        left: 156px;
    }
    #cube {
        z-index: 1;
        position: absolute;
        top: -38px;
        right: 0;
    }    
    #circles {
        z-index: 1;
        position: absolute;
        bottom: -34px;
        left: 268px;
    }

    @media ${theme.media.mobile} {
        width: 260px;
        height: 300px;

        #ring {
            width: 14px;
            height: 14px;
            bottom: -10px;
            left: 8px;
        }
        #zigzag {
            width: 23px;
            height: 60px;
            top: -20px;
            left: -10px;
        }
        #plus {
            width: 15px;
            height: 16px;
            top: -34px;
            left: 112px;
            transform: rotate(-15deg);
        }
        #cube {
            width: 24px;
            height: 24px;
            top: -32px;
            right: -14px;
        }
        #circles {
            width: 105px;
            height: 65px;
            bottom: -32px;
            left: 182px;
        }
    }
`

const Photo = styled.img`
    width: 296px;
    height: 384px;
    object-fit: cover;
    position: absolute;
    bottom: 26px;
    right: 16px;
    z-index: 0;
        @media ${theme.media.mobile} {
            width: 234px;
            height: 288px;
            bottom: 12px;
            right: 0;
        }
`
const BlockInfo = styled.div`
    width: 46%;
    @media ${theme.media.tablet} {
        width: 100%;
        margin-top: 50px;
    }
`

const MainSpanTitle = styled.span`    
    ${font({weight: 600, Fmax: 32, Fmin: 22})}
`
const MainTitle = styled.h1`
    ${font({weight: 600, Fmax: 48, Fmin: 29})}
    text-align: left;
    margin-bottom: 24px;
`
const MainSpan = styled.span` 
    color: rgba(0,0,0,0.7)
`

const MainButton = styled(Button)`
    background-color: ${theme.colors.accent};
    width: 98px;
    height: 42px;
    padding: 8px 16px 8px 16px; 
    margin-top: 30px;

    @media ${theme.media.tablet} {
        width: 114px;
        height: 48px;
    }
`

export const S = {
    Main,
    PhotoWrapper,
    Photo,
    BlockInfo,
    MainSpanTitle,
    MainButton,
    MainTitle,
    MainSpan
}