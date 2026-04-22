import { FlatList, StyleSheet } from "react-native";
import { NoteItemInterface } from "../interfaces/NoteItemInterface";
import { NoteItem } from "./noteItem";

interface Props {
  notes: NoteItemInterface[];
}

export const Notes = ({ notes }: Props) => {
  const renderNotes = ({ item }: { item: NoteItemInterface }) => {
    return (
      <NoteItem text={item.title} onDelete={() => {}} />
    );
  };

  return (
    <FlatList
      data={notes}
      renderItem={renderNotes}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    padding: 20,
  },
  noteItem: {
    marginBottom: 10,
  },
});
