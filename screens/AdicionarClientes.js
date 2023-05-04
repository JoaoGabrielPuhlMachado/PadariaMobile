import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";

export default function AdicionarClientes({ navigation }) {
  return (
    <View style={styles.background}>
      <View>
        <View style={styles.view}>
          <Text style={styles.texto}>
            Informações do Cliente e Seus Pedidos
          </Text>
        </View>
        <TextInput label={"Nome do Cliente"} style={styles.input} />
        <TextInput label={"Número da Ficha do Cliente"} style={styles.input} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Clientes")}
          style={styles.botaoadd}
        >
          <Text style={styles.texto}>Salvar Cliente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 60,
    width: "100%",
    marginBottom: 10,
  },
  background: {
    backgroundColor: "#f1ebf7",
    justifyContent: "space-between",
    flex: 1,
  },
  view: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoadd: {
    height: 45,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
