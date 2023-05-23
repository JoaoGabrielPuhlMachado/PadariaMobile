import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class ContadorCarrinho extends Component {
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
  deletar(index) {
    this.state.contador.splice(index, 1);
    this.setState({
      contador: this.state.contador,
    });
  }
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => this.deletar()}><Text style={styles.texto}>Deletar</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection: "row",marginRight: 10,alignItems: "center",}}>
          <TouchableOpacity style={[styles.button, {borderBottomLeftRadius: 5, borderTopLeftRadius: 5,}]} onPress={() => this.incrementar()}><Text>+</Text></TouchableOpacity>
          <Text style={{ backgroundColor: "#f1ebfa", padding: 8 }}>{this.state.contador}</Text>
          <TouchableOpacity style={[styles.button, {borderBottomRightRadius: 5, borderTopRightRadius: 5,}]} onPress={() => this.decrementar()}><Text>-</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    padding: 8,
    backgroundColor: "#f1ebf7",
  },
  texto: {
    alignSelf: "center",
    padding: 8,
    backgroundColor: "#f1ebf7",
    fontSize: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
});
