import styled from "styled-components";

import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
} from "shared/config/cssVariables";

export const Container = styled.section`
  padding-bottom: 48px;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  scroll-margin-top: 93px;
`;

export const Title = styled.div`
  margin-top: 12px;

  font-weight: ${FontWeight.WEAK};
  font-size: ${FontSize.S};
  line-height: 22px;
  color: ${Color.GREY100};

  @media (max-width: 1000px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const ButtonWrapper = styled.a`
  margin-top: 60px;
`;

export const EnjoyIcon = styled.img`
  position: absolute;
  right: -200px;
  bottom: 0px;

  @media (max-width: 1600px) {
    right: -150px;
    bottom: -50px;
  }
  @media (max-width: 1500px) {
    display: none;
  }
`;
