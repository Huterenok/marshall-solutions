import styled from "styled-components";

import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
} from "shared/config/cssVariables";

export const Container = styled.section`
  padding-bottom: 48px;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  scroll-margin-top: 93px;
`;

export const Title = styled.div`
  margin-top: 12px;

  font-weight: ${FontWeight.WEAK};
  font-size: ${FontSize.S};
  line-height: 22px;
  color: ${Color.GREY100};
`;

export const Steps = styled.div`
  margin-top: 54px;

  position: relative;
  max-width: 1135px;
  width: 100%;

  &::after {
    content: "";

    width: 875px;
    height: 1px;

    background-color: #d9d9d9;

    position: absolute;
    top: 50%;
    left: calc(50% - 445px);
  }
`;

export const TopStepsContainer = styled.div`
  width: 1135px;

  display: flex;
  justify-content: space-between;

  position: relative;
`;

export const DownStepsContainer = styled.div`
  padding-top: 115px;

  display: flex;
  justify-content: center;
  gap: 174px;

  position: relative;
`;

interface StepItemProps {
  isTop: boolean;
}

export const StepItem = styled.div.attrs(
  (props: StepItemProps = { isTop: false }) => props
)`
  display: flex;
  flex-direction: column;
  align-items: start;

  position: relative;

  &::after {
    content: "";

    width: 24px;
    height: 24px;

    border-radius: 50%;
    background-color: #d9d9d9;

    position: absolute;
    top: ${(props) => (props.isTop ? "160px" : "-81px")};
    right: 50%;
  }
`;

export const StepItemTitle = styled.div`
  max-width: 200px;

  font-family: ${FontFamily.BEBAS};
  font-size: ${FontSize.M};
  line-height: 22px;
  color: ${Color.GREY0};
`;

export const StepItemSubtitle = styled.div`
  margin-top: 16px;

  max-width: 251px;

  font-weight: ${FontWeight.WEAK};
  font-size: ${FontSize.S};
  line-height: 22px;
  color: ${Color.GREY100};
`;

export const StepItemIcon = styled.img`
  position: absolute;
  top: -24px;
  right: 0;
`;

export const ButtonWrapper = styled.a`
  margin-top: 60px;
`;

export const EnjoyIcon = styled.img`
  position: absolute;
  right: -200px;
  bottom: 0px;
`;
