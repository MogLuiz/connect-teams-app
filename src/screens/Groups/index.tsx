import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { GroupCard } from "@components/GroupCard";

export const GroupsScreen = () => (
  <S.Container>
    <Header hasBackButton />
    <Highlight title="Turmas" subtitle="jogue com a sua turma" />
    <GroupCard title="Galera do Ignite" />
  </S.Container>
);
