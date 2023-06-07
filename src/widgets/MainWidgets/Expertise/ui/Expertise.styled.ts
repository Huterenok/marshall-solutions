import styled from "styled-components";

import Bg from "./img/bg.png";
import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
} from "shared/config/cssVariables";

export const Container = styled.section`
  height: 100%;

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
`;

export const ExpertiseItems = styled.div`
  margin-top: 48px;

  max-width: 1170px;
  width: 100%;
  height: 497px;

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
  }
`;

interface ExpertiseItemProps {
  endOfLine: boolean;
}

export const ExpertiseItem = styled.div.attrs(
  (props: ExpertiseItemProps) => props
)`
  max-width: 321px;
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
  }
`;

export const ExpertiseItemIcon = styled.img``;

export const ExpertiseItemTitle = styled.div`
  margin-top: 24px;

  font-family: ${FontFamily.BEBAS};
  color: ${Color.ORANGE};
  font-size: ${FontSize.M};
  font-weight: ${FontWeight.NORMAL};
  line-height: 22px;
`;

export const ExpertiseItemSubtitle = styled.div`
  margin-top: 16px;

  color: ${Color.GREY100};
  font-size: ${FontSize.S};
  font-weight: ${FontWeight.WEAK};
  line-height: 22px;
`;
