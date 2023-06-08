import { FC, useState } from "react";

import { links } from "widgets/Header/config/links";

import { CloseBtn, Container, MenuLink, MenuLinks } from "./Menu.styled";
import MenuClose from "./img/menuClose.svg";
import { Path } from "shared/config/paths";

interface MenuProps {
  isOpened: boolean;
  setIsOpened: (arg: boolean) => void;
}

export const Menu: FC<MenuProps> = ({ isOpened, setIsOpened }) => {
  const closeMenu = () => {
    setIsOpened(false);
  };

  return (
    <Container isOpened={isOpened}>
      <CloseBtn src={MenuClose} onClick={closeMenu} />
      <MenuLinks>
        {links.map((link) => (
          <MenuLink href={`#${link.path}`} onClick={closeMenu} key={link.path}>
            {link.text}
          </MenuLink>
        ))}
      </MenuLinks>
    </Container>
  );
};
