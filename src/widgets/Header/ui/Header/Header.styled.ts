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
`;

export const HeaderImg = styled.img`
  position: absolute;
  //FIX
  left: calc(50% - 104px);
`;
