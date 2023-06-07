import { FC } from "react";

import { Path } from "shared/config/paths";

import { Button, ButtonSize } from "shared/ui/Button/Button";

import {
  HeaderContactContainer,
  HeaderForm,
  HeaderTelegram,
  TgActiveIcon,
  TgDefaultIcon,
} from "./HeaderContact.styled";
import icon from "../../img/tg.svg";
import activeIcon from "../../img/tgActive.svg";

export const HeaderContact: FC = () => {
  return (
    <HeaderContactContainer>
      {/* FIX */}
      <HeaderTelegram href="https://t.me/scou24" target="_blank">
        <TgDefaultIcon src={icon} />
        <TgActiveIcon src={activeIcon} />
      </HeaderTelegram>
      <HeaderForm href={`#${Path.CONTACT}`}>
        <Button size={ButtonSize.M}>Let's do it</Button>
      </HeaderForm>
    </HeaderContactContainer>
  );
};
