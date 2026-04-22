import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components/header";
import { Notes } from "./components/notes";
import { NoteItemInterface } from "./interfaces/NoteItemInterface";

export default function Index() {
  const [notes, setNotes] = useState<NoteItemInterface[]>([
    { id: "1", title: "Note 1" },
    { id: "2", title: "Note 2" },
    { id: "3", title: "Note 3" },
  ]);
  const [newNoteText, setNewNoteText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Header setNotes={setNotes} />
      <View>
        <TextInput
          value={newNoteText}
          onChangeText={setNewNoteText}
          placeholder="Type your note here..."
          style={styles.textInput}
        />
      </View>
      <Notes notes={notes} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 12,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#d8c4c4",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
});
