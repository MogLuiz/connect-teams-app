import * as S from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export const NewGroupScreen = () => (
  <S.Container>
    <Header hasBackButton />

    <S.Content>
      <S.Icon />

      <Highlight
        title="Nova turma"
        subtitle="crie a turma para adicionar as pessoas"
      />

      <Input placeholder="Nome da turma" />

      <Button title="Criar" style={{ marginTop: 20 }} />
    </S.Content>
  </S.Container>
);
