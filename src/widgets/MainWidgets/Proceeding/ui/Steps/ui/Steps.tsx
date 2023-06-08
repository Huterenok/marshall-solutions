import { FC } from "react";

import { indexAnimation } from "../../../lib/index";

import { steps } from "widgets/MainWidgets/Proceeding/config/steps";

import {
  TopStepsContainer,
  StepItem,
  StepItemContent,
  StepItemTitle,
  StepItemSubtitle,
  StepItemIcon,
  DownStepsContainer,
  EnjoyIcon,
  DesktopStepsContainer,
  MobileStepsContainer,
} from "./Steps.styled";

import Enjoy from "../../img/enjoy.svg";

export const Steps: FC = () => {
  return (
    <>
      <DesktopStepsContainer>
        <TopStepsContainer>
          {[steps[0], steps[2], steps[4]].map((item, index) => (
            <StepItem isTop={true} key={item.title}>
              <StepItemContent data-aos={indexAnimation(index, true)}>
                <StepItemTitle>{item.title}</StepItemTitle>
                <StepItemSubtitle>{item.subtitle}</StepItemSubtitle>
                <StepItemIcon src={item.icon} />
              </StepItemContent>
            </StepItem>
          ))}
        </TopStepsContainer>
        <DownStepsContainer>
          {[steps[1], steps[3]].map((item, index) => (
            <StepItem key={item.title}>
              <StepItemContent data-aos={indexAnimation(index, false)}>
                <StepItemTitle>{item.title}</StepItemTitle>
                <StepItemSubtitle>{item.subtitle}</StepItemSubtitle>
                <StepItemIcon src={item.icon} />
              </StepItemContent>
            </StepItem>
          ))}
        </DownStepsContainer>
        <EnjoyIcon src={Enjoy} data-aos="fade-up-left" />
      </DesktopStepsContainer>

      <MobileStepsContainer>
        {steps.map((item, index) => (
          <StepItem key={item.title}>
            <StepItemContent data-aos={indexAnimation(index % 2)}>
              <StepItemIcon src={item.icon} />
              <StepItemTitle>{item.title}</StepItemTitle>
              <StepItemSubtitle>{item.subtitle}</StepItemSubtitle>
            </StepItemContent>
          </StepItem>
        ))}
      </MobileStepsContainer>
    </>
  );
};
