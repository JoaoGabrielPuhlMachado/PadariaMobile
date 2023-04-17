import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import ContadorAtendente from "./ContadorAtendente";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={{ uri: props.pedido.capa }} />
      <Text style={styles.texto}> {props.pedido.titulo} </Text>
      <Text style={styles.preco}> {props.pedido.preco} </Text>
      <ContadorAtendente />
    </View>
  );
}

export default function PedidosAtendente() {
  const pedidosatendente = [
    {
      capa: "https://panattos.com.br/uploads/produtos/2017/07/pao-frances-fermentacao-super-longa-massa-congelada.jpg",
      titulo: "Pão Frances",
      preco: "R$ 11,00 Kg",
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/027/684/264552/264552_original.jpg?w=1200",
      titulo: "Bolo de Chocolate",
      preco: "R$ 14,50 Un.",
    },
    {
      capa: "https://nacolher.com/wp-content/uploads/2022/08/cuca-de-banana-simples.jpg",
      titulo: "Cuca de Banana",
      preco: "R$ 12,70 Un.",
    },
    {
      capa: "https://priscilapiardi.com/wp-content/uploads/2021/01/Editada-IMG_9018-scaled.jpg.webp",
      titulo: "Sonho",
      preco: "R$ 3,00 Un.",
    },
    {
      capa: "https://mestredaculinaria.com.br/wp-content/uploads/2021/09/Torta-de-Limao-Simples-802x1002.png",
      titulo: "Torta de Limão",
      preco: "R$ 50,50 Kg",
    },
    {
      capa: "https://revistasaboresdosul.com.br/wp-content/uploads/2016/02/massinha-doce.jpg",
      titulo: "Chinique",
      preco: "R$ 2,50 Un.",
    },
    {
      capa: "https://giassi.vtexassets.com/arquivos/ids/511082/Rosca-de-Polvilho-Salgada-Assada-Giassi-Kg--.png?v=637995027227670000",
      titulo: "Rosca",
      preco: "R$ 11,00 Un.",
    },
    {
      capa: "https://comidinhasdochef.com/wp-content/uploads/2020/03/P%C3%A3o-de-Leite-Fofinho.jpg",
      titulo: "Pão de Leite",
      preco: "R$ 9,70 Un.",
    },
  ];

  return (
    <ScrollView>
      <View>
        <View style={styles.content}>
          {pedidosatendente.map((pedido) => (
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
    borderRadius: 2,
  },
  card: {
    padding: 8,
    backgroundColor: "#fff",
    width: "45%",
    height: 200,
    borderRadius: 0,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 30,
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
