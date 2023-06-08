import styled from "styled-components";

import { Color } from "shared/config/cssVariables";

export const HeaderContainer = styled.header`
  padding: 0 157px 0 96px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 95px;

  position: fixed;

  background: ${Color.BLACK};

  z-index: 5;

  box-shadow: 0 3px 10px ${Color.BLACK};

  @media (max-width: 1600px) {
    padding: 0 96px 0 64px;
  }

  @media (max-width: 1100px) {
    padding: 0 64px 0 48px;
  }

  @media (max-width: 1000px) {
    padding: 0 24px;
    justify-content: end;
  }
`;

export const HeaderImg = styled.img`
  position: absolute;
  //FIX
  left: calc(50% - 104px);

  @media (max-width: 1600px) {
    width: 164px;
    height: 32px;

    left: calc(50% - 82px);
  }
`;

export const MenuBtn = styled.img`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    cursor: pointer;
  }
`;
