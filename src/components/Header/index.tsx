import * as S from "./styles";

import logoImg from "@assets/logo.png";

interface IHeaderProps {
  hasBackButton?: boolean;
}

export const Header = ({ hasBackButton = false }: IHeaderProps) => (
  <S.Container>
    {hasBackButton && (
      <S.BackButton>
        <S.BackIcon />
      </S.BackButton>
    )}
    <S.Logo source={logoImg} />
  </S.Container>
);
