import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  type?: S.ButtonTypeStyleProps;
}

export const Button = ({ title, type = "PRIMARY", ...rest }: IButtonProps) => (
  <S.Container type={type} {...rest}>
    <S.Title>{title}</S.Title>
  </S.Container>
);
