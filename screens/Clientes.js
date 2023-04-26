import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { DefaultTheme } from "react-native-paper";
import { infoclientes } from "../src/components/InfoClientes";

function DadosCliente(props) {
  return (
    <View style={styles.centro}>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => props.navigation.navigate("Carrinho")}
      >
        <Text style={styles.texto}>Ficha: {props.cliente.ficha}</Text>
      </TouchableOpacity>
      <Text style={styles.status}>{props.cliente.status}</Text>
    </View>
  );
}

export default function Clientes({ navigation }) {
  return (
    <View style={styles.padrao}>
      <View>
        {infoclientes.map((cliente) => (
          <DadosCliente cliente={cliente} navigation={navigation} />
        ))}
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
  status: {
    fontSize: 17,
  },
  centro: {
    alignItems: "center",
  },
  padrao: {
    backgroundColor: DefaultTheme.colors.background,
    flex: 1,
    justifyContent: "space-between",
  },
  botao: {
    borderRadius: 5,
    height: 40,
    width: "50%",
    backgroundColor: "#f1ebf7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  botaoadd: {
    height: 45,
    width: "100%",
    backgroundColor: "#f1ebf7",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
