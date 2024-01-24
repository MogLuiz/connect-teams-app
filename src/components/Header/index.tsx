import * as S from "./styles";

import logoImg from "@assets/logo.png";

export const Header = () => (
  <S.Container>
    <S.Logo source={logoImg} />
  </S.Container>
);
