import { FC, useState } from "react";

import { Menu } from "widgets/Menu";
import { HeaderLinks } from "../HeaderLinks";
import { HeaderContact } from "../HeaderContact";

import { HeaderContainer, HeaderImg, MenuBtn } from "./Header.styled";
import Logo from "../img/ms_logo_v2.svg";
import MenuOpen from "../img/menuOpen.svg";

export const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <HeaderLinks />
      <HeaderImg src={Logo} />
      <HeaderContact />
      <MenuBtn src={MenuOpen} onClick={() => setIsOpened(true)} />
      <Menu isOpened={isOpened} setIsOpened={setIsOpened} />
    </HeaderContainer>
  );
};
