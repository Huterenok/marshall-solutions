import { Color, Transition } from "shared/config/cssVariables";
import styled from "styled-components";

interface MenuProps {
  isOpened: boolean;
}
export const Container = styled.menu.attrs((props: MenuProps) => props)`
  padding: 0 24px 0 40px;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${Color.BLACK};

  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpened ? "0" : "-200%")};

  z-index: 5;
  transition: all 0.4s ease-in;
`;

export const CloseBtn = styled.img`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 26px;
  top: 34px;

  cursor: pointer;
  z-index: 5;
`;

export const MenuLinks = styled.div`
  margin-top: 64px;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
`;

export const MenuLink = styled.a`
  cursor: pointer;

  line-height: 20px;
  color: ${Color.GREY0};

  transition: ${Transition.DEFAULT};

  &:hover {
    color: ${Color.BLUE};
  }
`;
