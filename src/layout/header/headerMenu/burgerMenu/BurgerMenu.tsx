import React, {useState} from 'react';
import {S} from "../HeaderMenu_Styles"
import {Menu} from '../menu/Menu';


export const BurgerMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
            <S.BurgerMenu>
                <S.BurgerButton isOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    <span></span>
                </S.BurgerButton>
                <S.BurgerMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                    <Menu menuItems={props.menuItems} />
                </S.BurgerMenuPopup>
            </S.BurgerMenu>
    );
};

