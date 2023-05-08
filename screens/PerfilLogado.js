import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function PerfilLogado({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.view}>
        <Text style={styles.posicao}>Nome do atendente</Text>
        <Text style={styles.posicao}>Turno do atendente</Text>
        <Text style={styles.posicao}>Idade do atendente</Text>
        <Text style={styles.posicao}>Número de celular do atendente</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.additem,
            { borderRightColor: "#f1ebf7", borderRightWidth: 1 },
          ]}
          onPress={() => navigation.navigate("Itens")}
        >
          <Text style={styles.textobotao}>Itens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.additem,
            { borderLeftColor: "#f1ebf7", borderLeftWidth: 1 },
          ]}
          onPress={() => navigation.navigate("Clientes")}
        >
          <Text style={styles.textobotao}>Clientes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  posicao: {
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
  additem: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textobotao: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
