import styled from "styled-components";

import bg from "./img/bg.png";
import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
} from "shared/config/cssVariables";

export const Container = styled.section`
  padding: 0 24px;

  width: 100%;
  height: 610px;

  background-image: url(${bg});

  position: relative;

  scroll-margin-top: 93px;

  @media (max-width: 1000px) {
    padding-bottom: 36px;

    height: 100%;
  }
`;

export const ChooseIcon = styled.img`
  position: absolute;
  top: 48px;
  left: 54px;

  @media (max-width: 1600px) {
    width: 124px;
    height: 168px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Content = styled.div`
  padding-top: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  max-width: 370px;

  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Title = styled.div`
  width: 100%;

  font-family: ${FontFamily.BEBAS};
  font-weight: ${FontWeight.BOLD};
  font-size: ${FontSize.XL};
  line-height: 72px;
  color: ${Color.BLACK};

  @media (max-width: 1600px) {
    font-size: 48px;
    line-height: 60px;
  }

  @media (max-width: 1000px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const Subtitle = styled.div`
  margin-top: 8px;

  font-weight: ${FontWeight.WEAK};
  line-height: 22px;
  color: ${Color.GREY100};

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const ChooseItems = styled.div`
  max-width: 800px;

  display: flex;
  flex-wrap: wrap;
  gap: 48px;

  position: relative;

  &::after {
    content: "";

    width: 1px;
    height: 514px;

    background: #4a494e;

    position: absolute;
    top: -15px;
    left: 46%;

    @media (max-width: 1025px) {
      top: -15px;
      left: 47%;

      height: 110%;
    }

    @media (max-width: 1000px) {
      top: -15px;
      left: 49%;

      height: 110%;
    }
    @media (max-width: 600px) {
      top: -15px;
      left: 49%;

      height: 105%;
    }
  }

  @media (max-width: 1000px) {
    padding: 0 24px;

    width: 100%;

    justify-content: space-around;
    gap: 30px;
  }

  @media (max-width: 500px) {
    padding: 0;
  }
`;

interface ChooseItemProps {
  isOnTop: boolean;
}
export const ChooseItem = styled.div.attrs((props: ChooseItemProps) => props)`
  max-width: 350px;

  display: flex;
  flex-direction: column;
  align-items: start;

  position: relative;

  &::after {
    content: "";
    position: absolute;

    ${(props) =>
      props.isOnTop
        ? `
			width: 105%;
			height: 1px;

			background: #4A494E;

			bottom: -15px;
			left: -15px;

			@media (max-width: 850px) {
				width: 108%;

				left: -6%;
			}

		`
        : ""}
  }

  @media (max-width: 850px) {
    max-width: 45%;
  }

  @media (max-width: 600px) {
    max-width: 40%;
  }
`;
export const ChooseItemTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ChooseItemIcon = styled.img`
  @media (max-width: 1000px) {
    width: 20px;
    height: 24px;
  }
`;

export const ChooseItemTitle = styled.div`
  font-family: ${FontFamily.BEBAS};
  font-size: ${FontSize.M};
  line-height: 22px;
  color: ${Color.BLACK};

  @media (max-width: 1000px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const ChooseItemSubtitle = styled.div`
  margin-top: 16px;

  font-weight: ${FontWeight.WEAK};
  line-height: 22px;
  color: ${Color.GREY100};

  @media (max-width: 1000px) {
    margin-top: 8px;

    font-size: 12px;
    line-height: 18px;
  }
`;
