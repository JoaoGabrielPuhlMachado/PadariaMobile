import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ContadorCarrinho from "./ContadorCarrinho";
import { infoprodutos } from "./InfoProdutos";

function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.lado}>
        <Image style={styles.imagem} source={{ uri: props.carrinho.capa }} />
        <View>
          <Text style={styles.texto}>{props.carrinho.titulo}</Text>
          <Text style={styles.preco}>
            R${props.carrinho.preco.toFixed(2).replace(".", ",")}
            {props.carrinho.tipo}
          </Text>
        </View>
        <View style={styles.contador}>
          <ContadorCarrinho />
        </View>
      </View>
    </View>
  );
}

export default function PedidosCarrinho({ navigation }) {
  return (
    <ScrollView style={styles.background}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Adicionar Itens")}
          style={styles.additem}
        >
          <Text style={styles.textobotao}>Adicionar Itens</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {infoprodutos.map((carrinho) => (
          <Card carrinho={carrinho} key={carrinho.id} />
        ))}
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Clientes")}
          style={styles.addcliente}
        >
          <Text style={styles.textobotao}>Salvar Cliente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f1ebf7",
  },
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
    borderRadius: 3,
    marginTop: 5,
    marginBottom: 5,
  },
  texto: {
    fontSize: 13,
    color: "#000",
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
  },
  addcliente: {
    height: 45,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  additem: {
    height: 45,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  textobotao: {
    fontSize: 20,
    fontWeight: "bold",
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
    backgroundColor: "#f1ebf7",
  },
  contador: {
    marginLeft: "auto",
    justifyContent: "center",
  },
});
