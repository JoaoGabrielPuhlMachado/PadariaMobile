import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import AddItens from "../src/components/AddItens";

export default function AdicionarItens({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <AddItens navigation={navigation} />
      </ScrollView>
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
});
