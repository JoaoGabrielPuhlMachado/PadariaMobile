import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import PedidosItens from "../src/components/PedidosItens";

export default function Itens({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <PedidosItens />
      </ScrollView>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f1ebf7",
  },
  iritens: {
    height: 40,
    width: "50%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomtabs: {
    flexDirection: "row",
  },
  textobotao: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
