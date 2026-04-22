import { Image, Pressable, StyleSheet, View } from "react-native";
import { Typography } from "./typography";

export const Header = ({
  setNotes,
}: {
  setNotes: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const handleAddButtonPress = () => {
    setNotes((prevNotes) => [
      {
        id: (prevNotes.length + 1).toString(),
        title: `TESTNOTE ${prevNotes.length + 1}`,
      },
      ...prevNotes,
    ]);
  };

  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/downloaded/notes_image.png")}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />
      <Typography variant="h1">Notes</Typography>
      <Pressable style={styles.addButton} onPress={handleAddButtonPress}>
        <Image
          source={require("../../assets/downloaded/addButton.png")}
          style={{ width: 16, height: 16 }}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 12,
    marginBottom: 20,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#e7d80cd6",
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
});
