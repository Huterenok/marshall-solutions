import { Color, FontFamily, FontWeight } from "shared/config/cssVariables";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainSubtitle = styled.p`
  margin-top: 37px;

  font-weight: ${FontWeight.WEAK};
  line-height: 22px;
  color: ${Color.GREY100};
`;

export const Logos = styled.div`
  margin-top: 18px;

  display: flex;
  align-items: center;
  gap: 100px;
`;
export const Logo = styled.img``;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${FontFamily.BEBAS};
  font-weight: ${FontWeight.BOLD};
  font-size: 28px;
  line-height: 40px;

  color: ${Color.BLACK};
`;

export const Subtitle = styled.p`
  margin-top: 8px;

  font-weight: ${FontWeight.WEAK};
  line-height: 22px;
  color: ${Color.GREY100};
`;

export const FormContainer = styled.div`
  margin-top: 56px;
  padding: 48px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1170px;
  width: 100%;

  background-color: ${Color.GREY0};

  border-radius: 16px;
`;
