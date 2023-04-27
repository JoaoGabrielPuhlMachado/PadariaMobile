import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import BarraPesquisa from "./BarraPesquisa";
import ContadorItens from "./ContadorItens";
import { infoprodutos } from "./InfoProdutos";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={{ uri: props.pedido.capa }} />
      <Text style={styles.texto}> {props.pedido.titulo} </Text>
      <Text style={styles.preco}>
        {" "}
        R${props.pedido.preco.toFixed(2)} {props.pedido.tipo}{" "}
      </Text>
      <ContadorItens />
    </View>
  );
}

export default function PedidosItens() {
  return (
    <ScrollView>
      <View>
        <BarraPesquisa />
        <View style={styles.content}>
          {infoprodutos.map((pedido) => (
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
    backgroundColor: "#f1ebf7",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
