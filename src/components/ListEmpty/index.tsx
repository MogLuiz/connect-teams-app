import * as S from "./styles";

type IListEmptyProps = {
  message: string;
};

export const ListEmpty = ({ message }: IListEmptyProps) => (
  <S.Container>
    <S.Message>{message}</S.Message>
  </S.Container>
);
