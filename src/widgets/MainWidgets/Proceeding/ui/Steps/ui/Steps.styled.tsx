import {
  FontFamily,
  FontSize,
  Color,
  FontWeight,
} from "shared/config/cssVariables";
import styled from "styled-components";

export const DesktopStepsContainer = styled.div`
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

    @media (max-width: 1200px) {
      width: 865px;
    }
    @media (max-width: 1060px) {
      width: 800px;
      left: calc(50% - 410px);
    }
  }

  @media (max-width: 1200px) {
    padding: 0 16px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const TopStepsContainer = styled.div`
  max-width: 1135px;

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
  position: relative;
  max-width: 250px;
  width: 100%;

  &::after {
    content: "";

    width: 24px;
    height: 24px;

    border-radius: 50%;
    background-color: #d9d9d9;

    position: absolute;
    top: ${(props) => (props.isTop ? "160px" : "-81px")};
    right: 50%;

    @media (max-width: 1200px) {
      top: ${(props) => (props.isTop ? "168px" : "-70px")};
    }

    @media (max-width: 1000px) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    max-width: 220px;
  }

  @media (max-width: 1000px) {
    margin-top: 24px;

    max-width: 100%;

    display: flex;
    justify-content: start;
  }
`;

export const StepItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StepItemTitle = styled.div`
  max-width: 200px;

  font-family: ${FontFamily.BEBAS};
  font-size: ${FontSize.M};
  line-height: 22px;
  color: ${Color.GREY0};

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 18px;
  }
  @media (max-width: 1000px) {
    margin-left: 48px;

    max-width: 100%;
  }
`;

export const StepItemSubtitle = styled.div`
  margin-top: 16px;

  max-width: 251px;

  font-weight: ${FontWeight.WEAK};
  font-size: ${FontSize.S};
  line-height: 22px;
  color: ${Color.GREY100};

  @media (max-width: 1000px) {
    max-width: 100%;

    font-size: 14px;
    line-height: 20px;
  }
`;

export const StepItemIcon = styled.img`
  position: absolute;
  top: -24px;
  right: 0;

  @media (max-width: 1200px) {
    width: 32;
    height: 48px;

    top: -18px;
    right: 0;
  }

  @media (max-width: 1000px) {
    width: 24px;
    height: 36px;

    top: -8px;
    left: 0;
  }
`;

export const EnjoyIcon = styled.img`
  position: absolute;
  right: -200px;
  bottom: 0px;

  @media (max-width: 1600px) {
    right: -150px;
    bottom: -50px;
  }
  @media (max-width: 1500px) {
    display: none;
  }
`;

export const MobileStepsContainer = styled.div`
  display: none;

  @media (max-width: 1000px) {
    padding: 0 24px;

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 24px;
  }
`;
