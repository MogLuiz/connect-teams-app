import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

export const Input = ({ ...rest }: TextInputProps) => {
  const { COLORS } = useTheme();

  return <S.Container {...rest} placeholderTextColor={COLORS.GRAY_300} />;
};
