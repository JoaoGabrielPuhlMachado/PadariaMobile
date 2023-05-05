import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.background}>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.texto}>Login Atendente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#f1ebf7",
    justifyContent: "flex-end",
  },
  botao: {
    height: 45,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
