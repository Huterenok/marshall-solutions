import { FC } from "react";
import { upFunction } from "../lib/upFunction";

import { ButtonUp, Icon, IconActive } from "./UP.styled";
import UPicon from "./img/UP.svg";
import activeUPicon from "./img/activeUP.svg";

export const UP: FC = () => {
  return (
    <ButtonUp onClick={upFunction}>
      <Icon src={UPicon} />
      <IconActive src={activeUPicon} />
    </ButtonUp>
  );
};
