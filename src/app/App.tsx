import { FC } from "react";

import { AosProvider } from "./providers";

import { MainPage } from "pages";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";

import "./styles/global.css";
import { Body } from "./styles/app.styled";
import Aos from "aos";

const App: FC = () => {
  return (
    <AosProvider>
      <Body>
        <Header />
        <MainPage />
        <Footer />
      </Body>
    </AosProvider>
  );
};

export default App;
