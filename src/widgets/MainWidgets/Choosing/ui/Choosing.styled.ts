import styled from "styled-components";

import bg from "./img/bg.png";
import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
} from "shared/config/cssVariables";

export const Container = styled.section`
  width: 100%;
  height: 610px;

  background-image: url(${bg});

  position: relative;

  scroll-margin-top: 93px;
`;

export const ChooseIcon = styled.img`
  position: absolute;
  top: 48px;
  left: 54px;
`;

export const Content = styled.div`
  padding-top: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

export const Text = styled.div`
  max-width: 370px;

  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const Title = styled.div`
  font-family: ${FontFamily.BEBAS};
  font-weight: ${FontWeight.BOLD};
  font-size: ${FontSize.XL};
  line-height: 72px;
  color: ${Color.BLACK};
`;
export const Subtitle = styled.div`
  margin-top: 8px;

  font-weight: ${FontWeight.WEAK};
  line-height: 22px;
  color: ${Color.GREY100};
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
			width: 369px;
			height: 1px;

			background: #4A494E;

			bottom: -15px;
			left: -15px;
		`
        : ""}
  }
`;
export const ChooseItemTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const ChooseItemIcon = styled.img``;
export const ChooseItemTitle = styled.div`
  font-family: ${FontFamily.BEBAS};
  font-size: ${FontSize.M};
  line-height: 22px;
  color: ${Color.BLACK};
`;
export const ChooseItemSubtitle = styled.div`
  margin-top: 16px;

  font-weight: ${FontWeight.WEAK};
  line-height: 22px;
  color: ${Color.GREY100};
`;
