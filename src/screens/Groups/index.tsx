import { useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import * as S from "./styles";

export const GroupsScreen = () => {
  const [groups, setGroups] = useState([]);

  return (
    <S.Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
    </S.Container>
  );
};
