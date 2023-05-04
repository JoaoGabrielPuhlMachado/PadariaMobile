import React from "react";
import { View, ScrollView } from "react-native";
import PedidosCarrinho from "../src/components/PedidosCarrinho";

export default function Carrinho({ navigation }) {
  return (
    <View>
      <ScrollView>
        <PedidosCarrinho navigation={navigation} />
      </ScrollView>
    </View>
  );
}
