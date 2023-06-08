import { ReactNode, useEffect, FC } from "react";
import AOS from "aos";

interface AosProviderProps {
  children: ReactNode;
}

export const AosProvider: FC<AosProviderProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in",
      duration: 1000,
    });
  }, []);

  return children;
};
