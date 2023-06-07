import {
  FontFamily,
  FontSize,
  FontWeight,
  Color,
  Indent,
} from "shared/config/cssVariables";
import styled from "styled-components";

export const Container = styled.section`
  position: relative;
`;

export const StarImg = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  padding-left: 240px;

  display: flex;
  justify-content: center;
`;

export const Information = styled.div`
  padding: 202px 0;

  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Title = styled.div`
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.BOLD};
  line-height: 80px;
  font-family: ${FontFamily.BEBAS};
  color: ${Color.GREY0};
`;

export const Subtitle = styled.div`
  margin-top: ${Indent.M};

  font-size: ${FontSize.S};
  font-weight: ${FontWeight.WEAK};
  line-height: 22px;
  color: ${Color.GREY100};
`;

export const ButtonWrapper = styled.a`
  margin-top: ${Indent.XL};
`;

export const GroupImg = styled.img``;

export const MouseImg = styled.img`
  position: absolute;
  left: calc(50% - 12px);
  bottom: ${Indent.XL};
`;
