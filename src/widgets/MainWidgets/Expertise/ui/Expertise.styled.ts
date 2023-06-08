import styled from "styled-components";

import Bg from "./img/bg.png";
import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
} from "shared/config/cssVariables";

export const Container = styled.section`
  background-image: url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  scroll-margin-top: 95px;
`;

export const DiamondIcon = styled.img`
  position: absolute;
  top: 0;
  left: 61px;

  @media (max-width: 1600px) {
    width: 168px;
    height: 168px;

    top: 48px;
    left: 14px;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const Content = styled.div`
  padding: 40px 0;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.BOLD};
  font-family: ${FontFamily.BEBAS};
  line-height: 40px;
  color: ${Color.BLACK};

  @media (max-width: 1000px) {
    font-size: 48px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const ExpertiseItems = styled.div`
  margin-top: 48px;

  max-width: 1170px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 54px;

  position: relative;

  &::after {
    content: "";

    width: 100%;
    height: 1px;
    background: #4a494e;

    position: absolute;
    left: 0;
    top: 48%;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    margin-top: 48px;
    padding: 0 120px;

    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    gap: 42px;
  }
  @media (max-width: 500px) {
    padding: 0 60px;
  }
`;

interface ExpertiseItemProps {
  endOfLine: boolean;
}

export const ExpertiseItem = styled.div.attrs(
  (props: ExpertiseItemProps) => props
)`
  max-width: 295px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;

  position: relative;

  &::after {
    content: "";

    ${(props) =>
      !props.endOfLine
        ? `height: 100%;
    width: 1px;
    background: #4a494e;

    position: absolute;
    top: -8px;
    right: -24px;`
        : ""}

    @media (max-width: 1000px) {
      display: none;
    }
  }

  &::before {
    @media (max-width: 1000px) {
      content: "";

      width: 130%;
      height: 1px;

      position: absolute;
      bottom: -21px;
      left: -15%;

      background: #4a494e;
    }
  }

  @media (max-width: 1000px) {
    margin-top: 12px;

    width: 100%;
    max-width: 600px;

    &:last-child {
      &::before {
        display: none;
      }
    }
  }
`;

export const ExpertiseItemIcon = styled.img`
  @media (max-width: 1000px) {
    position: absolute;
    top: -16px;
    left: -80px;
  }

  @media (max-width: 700px) {
    width: 36px;
    height: 36px;

    top: -8px;
    left: -48px;
  }
`;

export const ExpertiseItemTitle = styled.div`
  margin-top: 24px;

  font-family: ${FontFamily.BEBAS};
  color: ${Color.ORANGE};
  font-size: ${FontSize.M};
  font-weight: ${FontWeight.NORMAL};
  line-height: 22px;

  @media (max-width: 1000px) {
    margin-top: 0px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const ExpertiseItemSubtitle = styled.div`
  margin-top: 16px;

  color: ${Color.GREY100};
  font-size: ${FontSize.S};
  font-weight: ${FontWeight.WEAK};
  line-height: 22px;

  @media (max-width: 500px) {
    margin-top: 8px;

    font-size: 12px;
    line-height: 18px;
  }
`;
