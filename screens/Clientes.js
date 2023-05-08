import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { infoclientes } from "../src/components/InfoClientes";
import BarraPesquisaClientes from "../src/components/BarraPesquisaClientes";

function DadosCliente(props) {
  return (
    <View style={styles.centro}>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => props.navigation.navigate("Carrinho")}
      >
        <Text style={styles.textobotao}>Ficha: {props.cliente.ficha}</Text>
      </TouchableOpacity>
      <Text style={styles.status}>{props.cliente.status}</Text>
    </View>
  );
}

export default function Clientes({ navigation }) {
  return (
    <View style={styles.background}>
      <BarraPesquisaClientes />
      <View>
        {infoclientes.map((cliente) => (
          <DadosCliente
            cliente={cliente}
            key={cliente.id_cliente}
            navigation={navigation}
          />
        ))}
      </View>
      <View style={styles.posicao}>
        <TouchableOpacity
          style={styles.botaoadd}
          onPress={() => navigation.navigate("AdicionarClientes")}
        >
          <Text style={styles.textobotao}>Adicionar Cliente</Text>
        </TouchableOpacity>
        <View style={styles.bottomtabs}>
          <TouchableOpacity
            style={[
              styles.iritens,
              { borderRightColor: "#f1ebf7", borderRightWidth: 1 },
            ]}
            onPress={() => navigation.navigate("Itens")}
          >
            <Text style={styles.textobotao}>Itens</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.iritens,
              { borderLeftColor: "#f1ebf7", borderLeftWidth: 1 },
            ]}
            onPress={() => navigation.navigate("Clientes")}
          >
            <Text style={styles.textobotao}>Clientes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  posicao: {
    position: "absolute",
    bottom: 0,
  },
  status: {
    fontSize: 17,
  },
  centro: {
    alignItems: "center",
  },
  background: {
    backgroundColor: "#f1ebf7",
    flex: 1,
  },
  botao: {
    borderRadius: 5,
    height: 40,
    width: "50%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  botaoadd: {
    height: 45,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  iritens: {
    height: 40,
    width: "50%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textobotao: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomtabs: {
    flexDirection: "row",
  },
});
