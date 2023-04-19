import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import ContadorCarrinho from "./ContadorCarrinho";

function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.lado}>
        <Image style={styles.imagem} source={{ uri: props.carrinho.capa }} />
        <View>
          <Text style={styles.texto}> {props.carrinho.titulo} </Text>
          <Text style={styles.preco}> R${props.carrinho.preco.toFixed(2)}{props.carrinho.tipo} </Text>
        </View>
        <View style={styles.conta}>
          <ContadorCarrinho />
        </View>
      </View>
    </View>
  );
}

export default function PedidosCarrinho() {
  const pedidoscarrinho = [
    {
      capa: "https://panattos.com.br/uploads/produtos/2017/07/pao-frances-fermentacao-super-longa-massa-congelada.jpg",
      titulo: "Pão Frances",
      preco: 11.00,
      tipo: "Kg",
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/027/684/264552/264552_original.jpg?w=1200",
      titulo: "Bolo de Chocolate",
      preco: 14.50,
      tipo: "Un.",
    },
    {
      capa: "https://nacolher.com/wp-content/uploads/2022/08/cuca-de-banana-simples.jpg",
      titulo: "Cuca de Banana",
      preco: 12.70,
      tipo: "Un.",
    },
    {
      capa: "https://priscilapiardi.com/wp-content/uploads/2021/01/Editada-IMG_9018-scaled.jpg.webp",
      titulo: "Sonho",
      preco: 3.00,
      tipo: "Un.",
    },
    {
      capa: "https://mestredaculinaria.com.br/wp-content/uploads/2021/09/Torta-de-Limao-Simples-802x1002.png",
      titulo: "Torta de Limão",
      preco: 50.50,
      tipo: "Kg.",
    },
    {
      capa: "https://revistasaboresdosul.com.br/wp-content/uploads/2016/02/massinha-doce.jpg",
      titulo: "Chineque",
      preco: 2.50,
      tipo: "Un.",
    },
    {
      capa: "https://giassi.vtexassets.com/arquivos/ids/511082/Rosca-de-Polvilho-Salgada-Assada-Giassi-Kg--.png?v=637995027227670000",
      titulo: "Rosca",
      preco: 11.00,
      tipo: "Un.",
    },
    {
      capa: "https://comidinhasdochef.com/wp-content/uploads/2020/03/P%C3%A3o-de-Leite-Fofinho.jpg",
      titulo: "Pão de Leite",
      preco: 9.70,
      tipo: "Un.",
    },
  ];

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
    borderRadius: 2,
  },
  card: {
    padding: 8,
    backgroundColor: "#fff",
    width: "95%",
    height: 100,
    borderRadius: 0,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
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
  conta: {
    marginLeft: "auto",
  },
});
