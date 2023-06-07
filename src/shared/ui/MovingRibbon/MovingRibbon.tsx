import { FC } from "react";

import { Container, Ribbon, RibbonText } from "./MovingRibbon.styled";

interface MovingRibbonProps {
  text: string;
}

export const MovingRibbon: FC<MovingRibbonProps> = ({ text }) => {
  return (
    <Container>
      <Ribbon speed={100} loop={0}>
        {[0, 1, 2, 3, 4, 5, 6].map((item) => (
          <RibbonText key={item}>{text}</RibbonText>
        ))}
      </Ribbon>
    </Container>
  );
};
