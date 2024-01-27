import { useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { GroupCard } from "@components/GroupCard";

export const GroupsScreen = () => {
  const [groups, setGroups] = useState<string[]>(["Galera da Rocket"]);

  return (
    <S.Container>
      <Header hasBackButton />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </S.Container>
  );
};
