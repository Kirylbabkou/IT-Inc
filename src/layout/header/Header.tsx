import React from 'react';
import {S} from './Header_Styles'
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {BurgerMenu} from "./headerMenu/burgerMenu/BurgerMenu";

const items = ["Skills", "Projects", "Contact me"]

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justifyContent="space-between" alignItems="center" >
                    <Logo/>
                    {width < breakpoint
                        ? <BurgerMenu menuItems={items} />
                        : <DesktopMenu menuItems={items} />}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


