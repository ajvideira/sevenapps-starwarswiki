import React from 'react';
import { TextInputProps } from 'react-native';
import { InputContainer, TextInputField } from './styles';

type InputProps = TextInputProps & {
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
};

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <InputContainer {...props}>
      <TextInputField {...props} />
    </InputContainer>
  );
};
