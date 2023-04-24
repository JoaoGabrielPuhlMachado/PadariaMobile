import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { DefaultTheme } from "react-native-paper";

export default function Clientes({ navigation }) {
  return (
    <View style={styles.padrao}>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Text style={styles.texto}>Cliente 001</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Text style={styles.texto}>Cliente 002</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Text style={styles.texto}>Cliente 003</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Text style={styles.texto}>Cliente 004</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Text style={styles.texto}>Cliente 005</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.add}>
        <TouchableOpacity
          style={styles.botaoadd}
          onPress={() => navigation.navigate("Adicionar Clientes")}
        >
          <Text style={styles.texto}>Adicionar Cliente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  add: {
    alignItems: "center",
  },
  padrao: {
    backgroundColor: DefaultTheme.colors.background,
  },
  card: {
    height: 673,
    flexDirection: "column",
    alignItems: "center",
  },
  botao: {
    borderRadius: 5,
    height: 40,
    width: "50%",
    backgroundColor: "#e0dae6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  botaoadd: {
    height: 45,
    width: "100%",
    backgroundColor: "#e0dae6",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
