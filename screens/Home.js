import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Content>
          <Button
            style={styles.botao}
            mode="contained"
            onPress={() => navigation.navigate("Atendente")}
          >
            Atendente
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Button
            style={styles.botao}
            mode="contained"
            onPress={() => navigation.navigate("Carrinho")}
          >
            Carrinho
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 20,
  },
  card: {
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#efefef",
  },
  botao: {
    borderRadius: 5,
    backgroundColor: "#0099ff",
  },
});
