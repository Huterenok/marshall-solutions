import { Color, Indent, Transition } from "shared/config/cssVariables";
import styled from "styled-components";

export const HeaderContactContainer = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  @media (max-width: 1000px) {
    display: none;
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

export const HeaderTelegram = styled.a`
  position: relative;

  &:hover ${TgActiveIcon} {
    opacity: 1;
  }

  @media (max-width: 1600px) {
    width: 18px;
    height: 15px;
  }
`;

export const HeaderForm = styled.a`
  margin-left: ${Indent.XL};

  @media (max-width: 1600px) {
    margin-left: ${Indent.M};
  }
`;
