import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.titulo}>Biblioteca</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    marginTop: -5,
    marginBottom: 10,
    alignSelf: "center",
  },
});
