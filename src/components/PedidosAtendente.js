import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import ContadorAtendente from "./ContadorAtendente";
import { pedidoscarrinho } from "./InfoPedidos";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={{ uri: props.pedido.capa }} />
      <Text style={styles.texto}> {props.pedido.titulo} </Text>
      <Text style={styles.preco}> R${props.pedido.preco.toFixed(2)} {props.pedido.tipo} </Text>
      <ContadorAtendente />
    </View>
  );
}

export default function PedidosAtendente() {
  return (
    <ScrollView>
      <View>
        <View style={styles.content}>
          {pedidoscarrinho.map((pedido) => (
            <Card pedido={pedido} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagem: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "50%",
    borderRadius: 3,
  },
  card: {
    padding: 8,
    backgroundColor: "#fff",
    width: "45%",
    height: 200,
    borderRadius: 0,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 15,
    borderRadius: 3,
  },
  texto: {
    fontSize: 13,
    color: "#000",
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
  },
  preco: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#000",
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0dae6",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
