import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { DefaultTheme } from "react-native-paper";
import PedidosAtendente from "../src/components/PedidosAtendente";

export default function Atendente() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <PedidosAtendente />
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