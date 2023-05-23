import { StyleSheet, Image, Text, View } from "react-native";
import BarraPesquisaItens from "./BarraPesquisaItens";
import ContadorItens from "./ContadorItens";
import { infoprodutos } from "./InfoProdutos";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={{ uri: props.pedido.capa }} />
      <Text style={styles.texto}>{props.pedido.titulo} </Text>
      <Text style={styles.preco}>
        R${props.pedido.preco.toFixed(2).replace(".", ",")} {props.pedido.tipo}
      </Text>
      <ContadorItens />
    </View>
  );
}

export default function PedidosItens() {
  return (
    <View>
      <BarraPesquisaItens />
      <View style={styles.content}>
        {infoprodutos.map((pedido) => (
          <Card pedido={pedido} key={pedido.id} />
        ))}
      </View>
    </View>
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
    backgroundColor: "white",
    width: "46.5%",
    height: 200,
    borderRadius: 0,
    marginLeft: "1.5%",
    marginRight: "1.5%",
    marginTop: 12,
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
