import styled from "styled-components";

import {
  Color,
  FontFamily,
  FontSize,
  Transition,
} from "shared/config/cssVariables";
import { ButtonSize, HoverColor } from "./Button";

export const ButtonText = styled.div`
  font-family: ${FontFamily.BEBAS};
  color: ${Color.WHITE};
  font-size: ${FontSize.M};
  font-weight: 400;

  transition: ${Transition.DEFAULT};
  z-index: 3;

  @media (max-width: 1600px) {
    font-size: ${FontSize.S};
  }
`;

export const ButtonBg = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 15px;

  background: ${Color.PURPLE_GRADIENT};

  position: absolute;
  left: 0;
  top: 0;

  transition: ${Transition.DEFAULT};
`;

interface ButtonContainerProps {
  size: ButtonSize;
  hoverColor: HoverColor;
}

export const ButtonContainer = styled.button.attrs(
  (props: ButtonContainerProps) => props
)`
  max-width: 250px;
  width: ${(props) => (props.size == ButtonSize.M ? "218px" : "250px")};
  height: ${(props) => (props.size == ButtonSize.M ? "39px" : "47px")};

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => (props.hoverColor == 1 ? Color.GREY0 : Color.BLACK)};

  border-radius: 16px;

  position: relative;
  cursor: pointer;
  transition: ${Transition.DEFAULT};

  &:hover ${ButtonText} {
    background: ${Color.PURPLE_GRADIENT};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &:hover ${ButtonBg} {
    opacity: 0;
  }

  @media (max-width: 1600px) {
    width: ${(props) => (props.size == ButtonSize.M ? "168px" : "200px")};
    height: ${(props) => (props.size == ButtonSize.M ? "32px" : "40px")};
  }
`;
