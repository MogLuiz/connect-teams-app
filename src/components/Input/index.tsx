import { TextInputProps } from "react-native";
import * as S from "./styles";

export const Input = ({ ...rest }: TextInputProps) => <S.Container {...rest} />;
