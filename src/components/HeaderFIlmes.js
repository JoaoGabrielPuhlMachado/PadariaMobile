import { StyleSheet, View, Text } from "react-native";

export default function HeaderFilmes() {
  return (
    <View>
      <Text style={styles.titulo}>Filmes</Text>
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
