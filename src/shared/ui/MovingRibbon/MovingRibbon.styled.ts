import Marquee from "react-fast-marquee";
import styled from "styled-components";

import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
} from "shared/config/cssVariables";

export const Container = styled.div`
  height: 90px;
  width: 100%;

  border-bottom: 1px solid #4a494e;
`;

export const Ribbon = styled(Marquee)`
  height: 100%;

  display: flex;
  align-items: center;
`;
export const RibbonText = styled.div`
  margin-left: 48px;

  color: ${Color.BLACK};
  font-size: ${FontSize.XL};
  font-family: ${FontFamily.BEBAS};
  line-height: 40px;
  font-weight: ${FontWeight.BOLD};

  -webkit-text-stroke: 1px ${Color.GREY0};
  text-stroke: 1px ${Color.GREY0};

  @media (max-width: 1000px) {
    margin-left: 24px;

    font-size: 32px;
    line-height: 30px;
  }
`;
