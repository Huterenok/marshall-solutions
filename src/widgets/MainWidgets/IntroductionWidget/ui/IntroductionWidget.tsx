import { FC } from "react";

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

import { Button, ButtonSize } from "shared/ui/Button/Button";
import { Path } from "shared/config/paths";

import {
  ButtonWrapper,
  Container,
  Content,
  GroupImg,
  Information,
  LeftBar,
  RightBar,
  LittleStar,
  MouseImg,
  StarImg,
  Subtitle,
  TgActiveIcon,
  TgDefaultIcon,
  TgIcon,
  Title,
} from "./IntroductionWidget.styled";
import leftBar from "./img/leftBar.svg";
import rightBar from "./img/rightBar.svg";
import littleStar from "./img/littleStar.svg";
import Mouse from "./img/mouse.svg";
import Group from "./img/group.svg";
import tgDefaultIcon from "widgets/Header/ui/img/tg.svg";
import tgActiveIcon from "widgets/Header/ui/img/tgActive.svg";

export const IntroductionWidget: FC = () => {
  return (
    <Container>
      <StarImg>
        <LeftBar src={leftBar} />
        <LittleStar src={littleStar} />
        <RightBar src={rightBar} />
      </StarImg>
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
        <MouseParallaxContainer>
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <GroupImg src={Group} />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </Content>
      <MouseImg src={Mouse} />
      <TgIcon target="_blank">
        <TgDefaultIcon src={tgDefaultIcon} />
        <TgActiveIcon src={tgActiveIcon} />
      </TgIcon>
    </Container>
  );
};
