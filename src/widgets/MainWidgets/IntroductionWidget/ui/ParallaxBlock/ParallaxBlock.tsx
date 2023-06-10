import { FC } from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import {
  GroupBigStar,
  GroupCircle,
  GroupSmallStar,
  GroupPanel,
  GroupRocket,
  CustomMouseParallaxContainer,
} from "./ParallaxBlock.styled";
import Circle from "../img/group/bublik.svg";
import Rocket from "../img/group/rocket.svg";
import Panel from "../img/group/panel.svg";
import BigStar from "../img/group/bigStar.svg";
import SmallStar from "../img/group/smallStar.svg";

export const ParallaxBlock: FC = (props) => {
  return (
    <CustomMouseParallaxContainer containerStyle={{ overflow: "visible" }}>
      <MouseParallaxChild factorX={0.3} factorY={0.1}>
        <GroupCircle src={Circle} />
      </MouseParallaxChild>
      <MouseParallaxChild factorX={0.2} factorY={0.1}>
        <GroupBigStar src={BigStar} />
      </MouseParallaxChild>
      <MouseParallaxChild factorX={0.1} factorY={0.05}>
        <GroupPanel src={Panel} />
      </MouseParallaxChild>
      <MouseParallaxChild factorX={0.2} factorY={0.1}>
        <GroupRocket src={Rocket} />
      </MouseParallaxChild>
      <MouseParallaxChild factorX={0.2} factorY={0.1}>
        <GroupSmallStar src={SmallStar} />
      </MouseParallaxChild>
    </CustomMouseParallaxContainer>
  );
};
