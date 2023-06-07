import { Color, Indent, Transition } from "shared/config/cssVariables";
import styled from "styled-components";

export const HeaderContactContainer = styled.div`
  display: flex;
  align-items: center;

  position: relative;
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

export const HeaderTelegram = styled.a`
  position: relative;

  &:hover ${TgActiveIcon} {
    opacity: 1;
  }
`;

export const HeaderForm = styled.a`
  margin-left: ${Indent.XL};
`;
