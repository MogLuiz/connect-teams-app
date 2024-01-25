import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import * as S from "./styles";

export const GroupsScreen = () => (
  <S.Container>
    <Header hasBackButton />
    <Highlight title="Turmas" subtitle="jogue com a sua turma" />
  </S.Container>
);
