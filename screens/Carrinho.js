import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { DefaultTheme } from "react-native-paper";
import PedidosCarrinho from "../src/components/PedidosCarrinho";

export default function Carrinho() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <PedidosCarrinho />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10,
  },
})