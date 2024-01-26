import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

interface IGroupCardProps extends TouchableOpacityProps {
  title: string;
}

export const GroupCard = ({ title, ...rest }: IGroupCardProps) => (
  <S.Container {...rest}>
    <S.Icon />
    <S.Title>{title}</S.Title>
  </S.Container>
);
