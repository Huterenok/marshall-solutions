import styled from "styled-components";

import {
  FontFamily,
  FontSize,
  FontWeight,
  Color,
  Indent,
  Transition,
} from "shared/config/cssVariables";
import leftBar from "./img/leftBar.svg";
import rightBar from "./img/rightBar.svg";

export const Container = styled.section`
  position: relative;
`;

export const StarImg = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const LittleStar = styled.img`
  animation: starAppearing 5s;

  width: 44px;
  height: 44px;

  @keyframes starAppearing {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const LeftBar = styled.img`
  animation: leftBarAppearing 5s;

  @keyframes leftBarAppearing {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;
export const RightBar = styled.img`
  animation: rightBarAppearing 5s;

  @keyframes rightBarAppearing {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1400px) {
    padding-left: 140px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    padding-left: 0px;

    position: relative;
  }
`;

export const Information = styled.div`
  padding: 202px 0;

  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 1600px) {
    padding: 164px 0;
  }

  @media (max-width: 1000px) {
    padding: 48px 36px 36px 36px;

    order: 2;
  }
`;

export const Title = styled.div`
  max-width: 485px;

  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.BOLD};
  line-height: 80px;
  font-family: ${FontFamily.BEBAS};
  color: ${Color.GREY0};

  @media (max-width: 1200px) {
    font-size: 48px;
    line-height: 64px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const Subtitle = styled.div`
  margin-top: ${Indent.M};

  font-size: ${FontSize.S};
  font-weight: ${FontWeight.WEAK};
  line-height: 22px;
  color: ${Color.GREY100};

  @media (max-width: 1400px) {
    margin-top: ${Indent.S};
  }

  @media (max-width: 1000px) {
    margin-top: 12px;

    font-size: 16px;
    line-height: 22px;
  }
`;

export const ButtonWrapper = styled.a`
  margin-top: ${Indent.XL};

  @media (max-width: 1400px) {
    margin-top: ${Indent.M};
  }

  @media (max-width: 1000px) {
    margin-top: 48px;

    width: 100%;

    display: flex;
    justify-content: center;
  }
`;

export const GroupImg = styled.img`
  padding-left: 48px;

  @media (max-width: 1620px) {
    width: 668px;
    height: 548px;
  }
  @media (max-width: 1000px) {
    order: 1;
    width: 100%;
    height: 100%;
  }
`;

export const MouseImg = styled.img`
  position: absolute;
  left: calc(50% - 12px);
  bottom: ${Indent.XL};

  animation: moveUpDown 4s infinite;

  @media (max-width: 1000px) {
    display: none;
  }

  @keyframes moveUpDown {
    0% {
      bottom: ${Indent.XL};
    }
    50% {
      bottom: 72px;
    }
    100% {
      bottom: ${Indent.XL};
    }
  }
`;

export const TgDefaultIcon = styled.img``;
export const TgActiveIcon = styled.img`
  display: flex;
  align-items: center;

  opacity: 0;

  position: absolute;
  left: 0;
  top: 0;

  transition: ${Transition.DEFAULT};
`;
export const TgIcon = styled.a`
  position: relative;
  display: none;

  &:hover ${TgActiveIcon} {
    opacity: 1;
  }

  @media (max-width: 1000px) {
    margin-bottom: 48px;

    display: block;

    width: 100%;

    display: flex;
    justify-content: center;
  }
`;
