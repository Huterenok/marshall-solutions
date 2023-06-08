import { Color, FontFamily, FontWeight } from "shared/config/cssVariables";
import styled from "styled-components";

export const Container = styled.section`
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainSubtitle = styled.p`
  margin-top: 37px;

  font-weight: ${FontWeight.WEAK};
  line-height: 22px;
  color: ${Color.GREY100};
  text-align: center;

  @media (max-width: 500px) {
    padding: 0 24px;

    font-size: 12px;
    line-height: 18px;
  }
`;

export const Logos = styled.div`
  margin-top: 18px;

  display: flex;
  align-items: center;
  gap: 100px;

  @media (max-width: 1000px) {
    padding: 0 64px;

    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
  }

  @media (max-width: 500px) {
    padding: 0;
  }
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

  @media (max-width: 1000px) {
    padding: 24px 0;
  }
`;
