import styled from "styled-components";

import { Color, FontWeight } from "shared/config/cssVariables";

export const Container = styled.form`
  margin-top: 48px;

  max-width: 780px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${Color.GREY0};

  border-radius: 16px;
`;

export const InputData = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const LiteralInputContainer = styled.div`
  max-width: 270px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FileInputContainer = styled.div`
  max-width: 330px;
  width: 100%;

  font-weight: ${FontWeight.WEAK};
  line-height: 22px;
  color: ${Color.GREY100};

  position: relative;
`;

export const FileInputIcon = styled.img`
  position: absolute;
  top: 8px;
  left: -38px;
`;

interface FileInputBackProps {
  isActive: boolean;
}
export const FileInputBack = styled.p.attrs(
  (props: FileInputBackProps) => props
)`
  position: relative;
  display: inline-block;

  color: ${(props) =>
    props.isActive
      ? `background: linear-gradient(93.78deg, #3264f8 0%, #f02ee5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent`
      : "#ec8132"};

  &:hover {
    background: linear-gradient(93.78deg, #3264f8 0%, #f02ee5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

export const FileInput = styled.input`
  opacity: 0;

  position: absolute;
  top: 0;
  left: 0;
`;

export const LiteralInput = styled.input`
  padding: 8px 16px;

  background-color: ${Color.GREY0};

  border-bottom: 1px solid #a4abbb;
`;

export const ButtonWrapper = styled.div`
  margin-top: 48px;
`;
