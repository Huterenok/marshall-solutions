import { FC, useRef } from "react";

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
import { sendEmail } from "../lib";

export const Form: FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = () => {
    sendEmail(formRef.current!);
  };

  return (
    <Container ref={formRef} onSubmit={handleSubmit}>
      <InputData>
        <LiteralInputContainer>
          {inputs.map((item) => (
            <LiteralInput
              key={item[1]}
              type="text"
              name={item[1]}
              placeholder={item[0]}
              required={true}
            />
          ))}
        </LiteralInputContainer>
        <FileInputContainer>
          <FileInputIcon src={paperclip} />
          <FileInputBack>
            Attach request
            <FileInput name="file" type="file" placeholder="Attach request" />
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
