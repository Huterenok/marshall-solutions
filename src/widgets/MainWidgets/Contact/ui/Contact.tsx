import { FC } from "react";

import { Form } from "features/Form";
import { MovingRibbon } from "shared/ui/MovingRibbon/MovingRibbon";
import { Path } from "shared/config/paths";

import { logos } from "../config/logos";

import {
  Container,
  Logo,
  Logos,
  Text,
  Subtitle,
  FormContainer,
  MainSubtitle,
  Title,
} from "./Contact.styled";

export const Contact: FC = () => {
  return (
    <Container id={Path.CONTACT}>
      <MovingRibbon text="Technology stack" />
      <MainSubtitle>
        We use the latest and most reliable technologies to create your products
      </MainSubtitle>
      <Logos>
        {logos.map((logo) => (
          <Logo key={logo} src={logo} />
        ))}
      </Logos>
      <FormContainer>
        <Text>
          <Title>Contact US</Title>
          <Subtitle>We’ll definitely answer</Subtitle>
        </Text>
        <Form />
      </FormContainer>
    </Container>
  );
};
