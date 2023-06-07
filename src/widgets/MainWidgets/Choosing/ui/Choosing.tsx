import { FC } from "react";

import { Path } from "shared/config/paths";

import { chooseItems } from "../config/chooseItems";

import {
  ChooseIcon,
  ChooseItems,
  Content,
  Subtitle,
  Title,
  Text,
  ChooseItem,
  ChooseItemIcon,
  ChooseItemSubtitle,
  ChooseItemTitle,
  Container,
  ChooseItemTop,
} from "./Choosing.styled";
import DontGiveUp from "./img/dontgiveup.svg";

export const Choosing: FC = () => {
  return (
    <Container id={Path.CHOOSING}>
      <ChooseIcon src={DontGiveUp} data-aos="fade-up-right" />
      <Content>
        <Text data-aos="fade-right">
          <Title>Why choose us?</Title>
          <Subtitle>
            We adhere to the philosophy of mutually beneficial cooperation
          </Subtitle>
        </Text>
        <ChooseItems>
          {chooseItems.map((item) => (
            <ChooseItem
              isOnTop={item.isOnTop}
              data-aos="fade-right"
              key={item.title}
            >
              <ChooseItemTop>
                <ChooseItemIcon src={item.icon} />
                <ChooseItemTitle>{item.title}</ChooseItemTitle>
              </ChooseItemTop>
              <ChooseItemSubtitle>{item.subtitle}</ChooseItemSubtitle>
            </ChooseItem>
          ))}
        </ChooseItems>
      </Content>
    </Container>
  );
};
