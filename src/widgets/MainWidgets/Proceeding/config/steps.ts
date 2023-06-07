import { IStep } from "../types";

import first from "../ui/img/first.svg";
import second from "../ui/img/second.svg";
import third from "../ui/img/third.svg";
import fourth from "../ui/img/fourth.svg";
import fifth from "../ui/img/fifth.svg";

export const steps: IStep[] = [
  {
    title: "Сomprehend Client’s Requirements",
    subtitle:
      "We discuss the project’s details and expectations to set ROIs clearly",
    icon: first,
  },
  {
    title: "Determine optimal technological solutions",
    subtitle:
      "Find the best technologies to use as per the details of the projects",
    icon: second,
  },
  {
    title: "Create a Roadmap",
    subtitle:
      "Make a complete Project Roadmap that mentions delivery dates and processes",
    icon: third,
  },
  {
    title: "Design and development",
    subtitle:
      "Start the implementation process by working on the design and development phase of the project",
    icon: fourth,
  },
  {
    title: "Testnet & Deployment",
    subtitle:
      "Ensure 100% security with in-depth testing to fix the remaining defects during development",
    icon: fifth,
  },
];
