import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function PerfilLogado({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.view}>
        <Text style={styles.altura}>Nome do atendente</Text>
        <Text style={styles.altura}>Turno do atendente</Text>
        <Text style={styles.altura}>Idade do atendente</Text>
        <Text style={styles.altura}>Número de celular do atendente</Text>
      </View>
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
  altura: {
    backgroundColor: "white",
    marginTop: 10,
    width: 300,
    textAlign: "center",
    padding: 10,
  },
  view: {
    alignItems: "center",
  },
  background: {
    flex: 1,
    backgroundColor: "#f1ebf7",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    flex: 1,
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
