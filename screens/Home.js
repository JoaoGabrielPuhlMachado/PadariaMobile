import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { DefaultTheme } from "react-native-paper";

export default function Home({ navigation }) {
  return (
        <View style={styles.card}>
          <TouchableOpacity
            style={[
              styles.botao,
              { borderRightColor: "white", borderRightWidth: 1 },
            ]}
            onPress={() => navigation.navigate("Itens")}
          >
            <Text style={styles.texto}>Itens</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("Clientes")}
          >
            <Text style={styles.texto}>Clientes</Text>
          </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
  },
  card: {
    height: 1390,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: DefaultTheme.colors.background,
  },
  botao: {
    borderRadius: 5,
    height: 40,
    width: "50%",
    backgroundColor: "#e0dae6",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
