import * as S from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";

export const NewGroupScreen = () => (
  <S.Container>
    <Header hasBackButton />

    <S.Content>
      <S.Icon />

      <Highlight
        title="Nova turma"
        subtitle="crie a turma para adicionar as pessoas"
      />

      <Button title="Criar" />
    </S.Content>
  </S.Container>
);
