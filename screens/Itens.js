import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import PedidosItens from "../src/components/PedidosItens";

export default function Atendente() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <PedidosItens />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "#f1ebf7",
    },
})