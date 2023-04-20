import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class ContadorAtendente extends Component {
  state = {
    contador: 0,
  };
  incrementar() {
    this.setState({ contador: this.state.contador + 1 });
  }
  decrementar() {
    if (this.state.contador > 0) {
      this.setState({ contador: this.state.contador - 1 });
    }
  }
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          justifyContent: "space-between",
          margin: 0,
          width: "100%",
          height: 20,
        }}
      >
        <Text style={styles.contador}>{this.state.contador}</Text>
        <View style={{ flexDirection: "row", marginRight: 10 }}>
          <TouchableOpacity style={[styles.button, {borderBottomLeftRadius: 5, borderTopLeftRadius: 5}]} onPress={() => this.incrementar()}><Text>+</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {borderBottomRightRadius: 5, borderTopRightRadius: 5, marginLeft: 1,}]} onPress={() => this.decrementar()}><Text>-</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contador: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 6,
    paddingTop: 6,
    backgroundColor: "#eee",
    marginLeft: 10,
    borderRadius: 3,
  },
  button: {
    padding: 8,
    backgroundColor: "#e0dae6",
  },
});
