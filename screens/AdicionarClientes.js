import React from "react";
import { View, ScrollView } from "react-native";
import PedidosCarrinho from "../src/components/PedidosCarrinho";

export default function AdicionarClientes() {
  return (
    <View>
      <ScrollView>
        <PedidosCarrinho />
      </ScrollView>
    </View>
  );
}