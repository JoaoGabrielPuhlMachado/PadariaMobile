import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import ContadorCarrinho from "./ContadorCarrinho";
import { pedidoscarrinho, total } from "./InfoPedidos";

function Card(props) {
  const preco = props.carrinho.preco;
  const contador = ContadorCarrinho.state.contador;
  const total = preco * contador;
  
  return (
    <View style={styles.card}>
      <View style={styles.lado}>
        <Image style={styles.imagem} source={{ uri: props.carrinho.capa }} />
        <View>
          <Text style={styles.texto}> {props.carrinho.titulo} </Text>
          <Text style={styles.preco}> R${props.carrinho.preco.toFixed(2)}{props.carrinho.tipo}  </Text>
          <Text style={styles.preco}> R${total} </Text>
        </View>
        <View style={styles.contador}>
          <ContadorCarrinho />
        </View>
      </View>
    </View>
  );
}

export default function PedidosCarrinho() {
  return (
    <ScrollView>
      <View>
        <View style={styles.content}>
          {pedidoscarrinho.map((carrinho) => (
            <Card carrinho={carrinho} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagem: {
    width: "25%",
    height: "95%",
    marginTop: "auto",
    marginBottom: "auto",
    borderRadius: 3,
  },
  card: {
    padding: 8,
    backgroundColor: "#fff",
    width: "95%",
    height: 100,
    borderRadius: 0,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 5,
    marginBottom: 5,
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
  lado: {
    flexDirection: "row",
    height: "100%",
  },
  content: {
    backgroundColor: "#e0dae6",
  },
  contador: {
    marginLeft: "auto",
    justifyContent: "center",
  },
});
