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
  Title,
} from "./IntroductionWidget.styled";
import Star from "./img/star.svg";
import Mouse from "./img/mouse.svg";
import Group from "./img/group.svg";

export const IntroductionWidget: FC = () => {
  return (
    <Container>
      <StarImg src={Star} />
      <Content>
        <Information>
          <Title>
            Blockchain solutions of <br />
            any complexity
          </Title>
          <Subtitle>
            Comprehensive solutions for your business in a<br />
            decentralized network
          </Subtitle>
          {/* FIX */}
          <ButtonWrapper href={`#${Path.CONTACT}`}>
            <Button size={ButtonSize.L}>I’m looking for blockchain app</Button>
          </ButtonWrapper>
        </Information>
        <GroupImg src={Group} />
      </Content>
      <MouseImg src={Mouse} />
    </Container>
  );
};
