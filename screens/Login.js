import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function Login({ navigation }) {
  return (
    <View style={styles.background}>
      <View>
        <TextInput label={"Nome do atendente"} style={styles.input} />
        <TextInput label={"Email"} style={styles.input} />
        <TextInput label={"Senha"} style={styles.input} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("PerfilLogado")}
          style={styles.botaoadd}
        >
          <Text style={styles.texto}>Fazer Login</Text>
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
    marginTop: 10,
  },
  background: {
    backgroundColor: "#f1ebf7",
    justifyContent: "space-between",
    flex: 1,
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
