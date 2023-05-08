import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import AddItens from "../src/components/AddItens";

export default function AdicionarItens({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <AddItens navigation={navigation} />
      </ScrollView>
      <View style={styles.viewbotao}>
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
  viewbotao: {
    flexDirection: "row",
  },
  textobotao: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
