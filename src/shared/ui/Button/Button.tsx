import { FC, MouseEvent, ReactNode } from "react";
import { ButtonBg, ButtonContainer, ButtonText } from "./Button.styled";
import { Path } from "shared/config/paths";

export enum ButtonSize {
  M = "M",
  L = "L",
}

export enum HoverColor {
  BLACK,
  WHITE,
}

interface ButtonProps {
  children: ReactNode;
  size?: ButtonSize;
  hoverColor?: HoverColor;
  submit?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  size = ButtonSize.M,
  hoverColor = HoverColor.WHITE,
  submit = false,
}) => {
  return (
    <ButtonContainer
      type={submit ? "submit" : "button"}
      size={size}
      hoverColor={hoverColor}
    >
      <ButtonText>{children}</ButtonText>
      <ButtonBg />
    </ButtonContainer>
  );
};
