import { FC } from "react";

import { HeaderLinks } from "../HeaderLinks";
import { HeaderContact } from "../HeaderContact";

import { HeaderContainer, HeaderImg } from "./Header.styled";
import Logo from "../img/logo.svg";

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderLinks />
      <HeaderImg src={Logo} />
      <HeaderContact />
    </HeaderContainer>
  );
};
