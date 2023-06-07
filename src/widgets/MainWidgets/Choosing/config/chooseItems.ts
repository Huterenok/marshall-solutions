import { IChooseItem } from "../types";

import star1 from "../ui/img/star1.svg";
import star2 from "../ui/img/star2.svg";

export const chooseItems: IChooseItem[] = [
  {
    title: "Personalization",
    subtitle:
      "Our professionals are capable of comprehending the needs of every client and to provide an appropriate solution",
    icon: star1,
    isOnTop: true,
  },
  {
    title: "Intellectual Property Rights",
    subtitle:
      "We transfer the control over Intellectual Property Rights to the client",
    icon: star2,
    isOnTop: true,
  },
  {
    title: "Interoperability",
    subtitle:
      "We involve in cross-domain interaction with high-quality execution of extant functionalities that are combined within the web app architecture",
    icon: star2,
    isOnTop: true,
  },
  {
    title: "Innovation",
    subtitle:
      "The use of advanced technologies as elemental components allows our experts to provide solutions that have the potential to change the industry",
    icon: star1,
    isOnTop: true,
  },
  {
    title: "Deep technology expertise",
    subtitle:
      "In our team, we have experts who are the top players in different niches and provides an excellent chance to develop effective solutions for complex problems",
    icon: star1,
    isOnTop: false,
  },
  {
    title: "Adaptability",
    subtitle:
      "We adapt to your needs by keeping track of all the tickets raised and giving each one appropriate attention. It allows us to offer favorable results for our clientele",
    icon: star2,
    isOnTop: false,
  },
];
