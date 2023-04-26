import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";

export default function AdicionarClientes({ navigation }) {
  return (
    <ScrollView style={styles.background}>
      <View>
        <View style={styles.view}>
          <Text style={styles.texto}>
            Informações do Cliente e Seus Pedidos
          </Text>
        </View>
        <TextInput label={"Nome do Cliente"} style={styles.input} />
        <TextInput label={"Número da Ficha do Cliente"} style={styles.input} />
        <View style={styles.addcliente}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Clientes")}
            style={styles.botaoadd}
          >
            <Text style={styles.texto}>Salvar Cliente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f1ebf7",
    height: 60,
    width: "100%",
    marginBottom: 20,
  },
  background: {
    backgroundColor: "white",
  },
  view: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoadd: {
    height: 45,
    width: "100%",
    backgroundColor: "#f1ebf7",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
  },
  addcliente: {
    justifyContent: "flex-end",
    height: 518,
  },
});
