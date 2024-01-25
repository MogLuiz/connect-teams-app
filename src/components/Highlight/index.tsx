import * as S from "./styles";

type IHighlightProps = {
  title: string;
  subtitle: string;
};

export const Highlight = ({ title, subtitle }: IHighlightProps) => (
  <S.Container>
    <S.Title>{title}</S.Title>

    <S.Subtitle>{subtitle}</S.Subtitle>
  </S.Container>
);
