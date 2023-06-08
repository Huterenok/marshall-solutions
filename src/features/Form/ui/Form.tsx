import { FC } from "react";

import { Button, ButtonSize, HoverColor } from "shared/ui/Button/Button";

import { inputs } from "../config";

import {
  ButtonWrapper,
  Container,
  FileInput,
  FileInputBack,
  FileInputContainer,
  FileInputIcon,
  InputData,
  LiteralInput,
  LiteralInputContainer,
} from "./Form.styled";
import paperclip from "./img/paperclip.svg";

export const Form: FC = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target.elements.username.value);
    console.log(event.target.username.value);
  };

  return (
    <Container>
      <InputData>
        <LiteralInputContainer>
          {inputs.map((item) => (
            <LiteralInput
              key={item[1]}
              type="text"
              name={item[1]}
              placeholder={item[0]}
            />
          ))}
        </LiteralInputContainer>
        <FileInputContainer>
          <FileInputIcon src={paperclip} />
          <FileInputBack>
            Attach request
            <FileInput type="file" placeholder="Attach request" />
          </FileInputBack>{" "}
          (file in the format .pdf, .docx, .doc, .txt, .prequestages size up to
          1 Mb)
        </FileInputContainer>
      </InputData>
      <ButtonWrapper>
        <Button submit={true} size={ButtonSize.M} hoverColor={HoverColor.BLACK}>
          Send
        </Button>
      </ButtonWrapper>
    </Container>
  );
};
