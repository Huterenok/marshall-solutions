import { FC } from "react";

import {
  IntroductionWidget,
  Expertise,
  Proceeding,
  Choosing,
  Contact,
} from "widgets/MainWidgets";
import { UP } from "features";

import { MainContainer } from "./MainPage.styled";

export const MainPage: FC = () => {
  return (
    <MainContainer>
      <IntroductionWidget />
      <Expertise />
      <Proceeding />
      <Choosing />
      <Contact />
      <UP />
    </MainContainer>
  );
};
