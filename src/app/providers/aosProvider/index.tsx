import { ReactNode, useEffect, FC } from "react";
import AOS from "aos";
import emailJs from "@emailjs/browser";

interface AosProviderProps {
  children: ReactNode;
}

export const AosProvider: FC<AosProviderProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in",
      duration: 1000,
    });

    emailJs.init("iJSKrXXBY_y9x7n7q");
  }, []);

  return children;
};
