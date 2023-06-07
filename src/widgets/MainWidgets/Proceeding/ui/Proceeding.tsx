import { FC } from "react";

import { MovingRibbon } from "shared/ui/MovingRibbon/MovingRibbon";
import { Path } from "shared/config/paths";

import { indexAnimation } from "../lib";
import { steps } from "../config/steps";

import {
  ButtonWrapper,
  Container,
  DownStepsContainer,
  EnjoyIcon,
  StepItem,
  StepItemIcon,
  StepItemSubtitle,
  StepItemTitle,
  Steps,
  Title,
  TopStepsContainer,
} from "./Proceeding.styled";
import { Button, ButtonSize } from "shared/ui/Button/Button";
import Enjoy from "./img/enjoy.svg";

export const Proceeding: FC = () => {
  return (
    <Container id={Path.PROCEEDING}>
      <MovingRibbon text="How we proceed" data-aos="zoom-in" />
      <Title data-aos="zoom-in">
        Five simple steps between you and your product
      </Title>
      <Steps>
        <TopStepsContainer>
          {[steps[0], steps[2], steps[4]].map((item, index) => (
            <StepItem
              isTop={true}
              key={item.title}
              data-aos={indexAnimation(index, true)}
            >
              <StepItemTitle>{item.title}</StepItemTitle>
              <StepItemSubtitle>{item.subtitle}</StepItemSubtitle>
              <StepItemIcon src={item.icon} />
            </StepItem>
          ))}
        </TopStepsContainer>
        <DownStepsContainer>
          {[steps[1], steps[3]].map((item, index) => (
            <StepItem key={item.title} data-aos={indexAnimation(index, false)}>
              <StepItemTitle>{item.title}</StepItemTitle>
              <StepItemSubtitle>{item.subtitle}</StepItemSubtitle>
              <StepItemIcon src={item.icon} />
            </StepItem>
          ))}
        </DownStepsContainer>
        <EnjoyIcon src={Enjoy} data-aos="fade-up-left" />
      </Steps>
      <ButtonWrapper href={`#${Path.CONTACT}`} data-aos="fade-up">
        <Button size={ButtonSize.M}>Start now</Button>
      </ButtonWrapper>
    </Container>
  );
};
