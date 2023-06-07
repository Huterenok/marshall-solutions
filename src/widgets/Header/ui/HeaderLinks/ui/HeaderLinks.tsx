import { FC, useState } from "react";

import { HeaderLink } from "../../HeaderLink";

import { Path } from "shared/config/paths";
import { links } from "../../../config/links";

import { HeaderLinksContainer } from "./HeaderLinks.styled";

export const HeaderLinks: FC = () => {
  const [active, setActive] = useState<Path>();

  const changeActive = (path: Path) => {
    setActive(path);
  };

  return (
    <HeaderLinksContainer>
      {links.map((link) => {
        return (
          <HeaderLink
            link={link}
            isActive={active == link.path}
            key={link.path}
            onClick={changeActive}
          />
        );
      })}
    </HeaderLinksContainer>
  );
};
