import styled from "styled-components";

import { Transition } from "shared/config/cssVariables";

export const Icon = styled.img``;
export const IconActive = styled.img`
  opacity: 0;

  position: absolute;
  top: 0;
  left: 0;
  transition: ${Transition.DEFAULT};
`;

export const ButtonUp = styled.button`
  background: transparent;

  position: fixed;
  right: 80px;
  bottom: 48px;

  cursor: pointer;
  z-index: 5;

  &:hover ${IconActive} {
    transition: ${Transition.DEFAULT};
    opacity: 1;
  }
`;
