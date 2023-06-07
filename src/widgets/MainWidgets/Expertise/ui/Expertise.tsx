import { FC } from "react";

import { Path } from "shared/config/paths";

import { expertiseItems } from "../config/expertiseItems";
import { indexAnimation } from "../lib";

import {
  Container,
  Content,
  DiamondIcon,
  ExpertiseItem,
  ExpertiseItemIcon,
  ExpertiseItemSubtitle,
  ExpertiseItemTitle,
  ExpertiseItems,
  Title,
} from "./Expertise.styled";
import Diamond from "./img/diamond.svg";

export const Expertise: FC = () => {
  return (
    <Container id={Path.EXPERTISE}>
      <DiamondIcon src={Diamond} data-aos="fade-up-right" />
      <Content>
        <Title data-aos="zoom-in">Our Expertise</Title>
        <ExpertiseItems>
          {expertiseItems.map((item, index) => {
            return (
              <ExpertiseItem
                endOfLine={item?.endOfLine}
                key={item.title}
                data-aos={indexAnimation(index)}
              >
                <ExpertiseItemIcon src={item.icon} />
                <ExpertiseItemTitle>{item.title}</ExpertiseItemTitle>
                <ExpertiseItemSubtitle>{item.subtitle}</ExpertiseItemSubtitle>
              </ExpertiseItem>
            );
          })}
        </ExpertiseItems>
      </Content>
    </Container>
  );
};
