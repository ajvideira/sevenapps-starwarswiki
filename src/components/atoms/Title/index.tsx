import React from "react";
import { Text } from "react-native";
import { TitleText } from "./styles";

type TitleProps = {
  children: string;
};

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <TitleText>{children}</TitleText>;
};
