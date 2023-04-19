import React from "react";
import { View, ScrollView } from "react-native";
import PedidosCarrinho from "../src/components/PedidosCarrinho";

export default function Carrinho() {
  return (
    <View>
      <ScrollView>
        <PedidosCarrinho />
      </ScrollView>
    </View>
  );
}