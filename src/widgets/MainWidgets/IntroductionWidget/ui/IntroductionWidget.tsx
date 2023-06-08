import { FC } from "react";

import { Button, ButtonSize } from "shared/ui/Button/Button";

import { Path } from "shared/config/paths";

import {
  ButtonWrapper,
  Container,
  Content,
  GroupImg,
  Information,
  MouseImg,
  StarImg,
  Subtitle,
  TgActiveIcon,
  TgDefaultIcon,
  TgIcon,
  Title,
} from "./IntroductionWidget.styled";
import Star from "./img/star.svg";
import Mouse from "./img/mouse.svg";
import Group from "./img/group.svg";
import tgDefaultIcon from "widgets/Header/ui/img/tg.svg";
import tgActiveIcon from "widgets/Header/ui/img/tgActive.svg";

export const IntroductionWidget: FC = () => {
  return (
    <Container>
      <StarImg src={Star} />
      <Content>
        <Information>
          <Title>Blockchain solutions of any complexity</Title>
          <Subtitle>
            Comprehensive solutions for your business in a decentralized network
          </Subtitle>
          {/* FIX */}
          <ButtonWrapper href={`#${Path.CONTACT}`}>
            <Button size={ButtonSize.L}>I’m looking for blockchain app</Button>
          </ButtonWrapper>
        </Information>
        <GroupImg src={Group} />
      </Content>
      <MouseImg src={Mouse} data-aos="fade-up" />
      <TgIcon href="https://t.me/scou24" target="_blank">
        <TgDefaultIcon src={tgDefaultIcon} />
        <TgActiveIcon src={tgActiveIcon} />
      </TgIcon>
    </Container>
  );
};
