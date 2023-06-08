import { FC } from "react";

import { Steps } from "./Steps";

import { MovingRibbon } from "shared/ui/MovingRibbon/MovingRibbon";
import { Path } from "shared/config/paths";

import { ButtonWrapper, Container, Title } from "./Proceeding.styled";
import { Button, ButtonSize } from "shared/ui/Button/Button";

export const Proceeding: FC = () => {
  return (
    <Container id={Path.PROCEEDING}>
      <MovingRibbon text="How we proceed" data-aos="zoom-in" />
      <Title data-aos="zoom-in">
        Five simple steps between you and your product
      </Title>
      <Steps />
      <ButtonWrapper href={`#${Path.CONTACT}`} data-aos="fade-up">
        <Button size={ButtonSize.M}>Start now</Button>
      </ButtonWrapper>
    </Container>
  );
};
