import { Indent } from "shared/config/cssVariables";
import styled from "styled-components";

export const HeaderLinksContainer = styled.div`
  display: flex;
  gap: ${Indent.XL};

  @media (max-width: 1600px) {
    gap: 24px;
  }

  @media (max-width: 1100px) {
    gap: 20px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
