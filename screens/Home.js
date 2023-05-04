import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.botao,
            { borderRightColor: "#f1ebf7", borderRightWidth: 1 },
          ]}
          onPress={() => navigation.navigate("Itens")}
        >
          <Text style={styles.texto}>Itens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.botao,
            { borderLeftColor: "#f1ebf7", borderLeftWidth: 1 },
          ]}
          onPress={() => navigation.navigate("Clientes")}
        >
          <Text style={styles.texto}>Clientes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#f1ebf7",
    justifyContent: "flex-end",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
