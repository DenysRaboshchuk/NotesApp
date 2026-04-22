import { View, StyleSheet } from "react-native";
import { Typography } from "./typography";

interface NoteProps {
  text: string;
  onDelete: () => void;
}

export const NoteItem = ({ text, onDelete }: NoteProps) => {
  return (
    <View style={styles.noteItem}>
      <Typography variant="body">{text}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#d8c4c4",
    borderRadius: 8,
    padding: 12,
  },
});
