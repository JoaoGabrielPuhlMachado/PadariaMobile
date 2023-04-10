import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { DefaultTheme } from "react-native-paper";
import Biblioteca from "../src/components/Biblioteca";
import Header from "../src/components/Header";

export default function Livros() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Biblioteca />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: DefaultTheme.colors.background,
    alignItems: "center",
    paddingTop: 10,
  },
})