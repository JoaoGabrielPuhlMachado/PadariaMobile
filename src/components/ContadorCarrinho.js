import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

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
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            marginRight: 10,
            alignItems: "center",
          }}
        >
          <Button title="+" onPress={() => this.incrementar()} />
          <Text style={{ backgroundColor: "#eeeeee", padding: 8,}}>{this.state.contador}</Text>
          <Button title="-" onPress={() => this.decrementar()} />
        </View>
      </View>
    );
  }
}
