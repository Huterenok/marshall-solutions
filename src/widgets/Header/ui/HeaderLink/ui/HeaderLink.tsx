import { FC } from "react";

import { ILink } from "../../../types";
import { Path } from "shared/config/paths";

import { HeaderLinkContainer } from "./HeaderLink.styled";

interface HeaderLinkProps {
  link: ILink;
  isActive: boolean;
  onClick: (path: Path) => void;
}

export const HeaderLink: FC<HeaderLinkProps> = ({
  link,
  isActive,
  onClick,
}) => {
  return (
    <HeaderLinkContainer
      onClick={() => onClick(link.path)}
      href={`#${link.path}`}
      isActive={isActive}
      type=""
    >
      {link.text}
    </HeaderLinkContainer>
  );
};
