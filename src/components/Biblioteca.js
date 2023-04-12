import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import Contador from "./Contador";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={{ uri: props.livro.capa }} />
      <Text style={styles.texto}> {props.livro.titulo} </Text>
      <Text style={styles.preco}> {props.livro.preco} </Text>
      <Contador />
    </View>
  );
}

export default function Biblioteca() {
  const biblioteca = [
    {
      capa: "https://m.media-amazon.com/images/I/71+ldJlrc8S.jpg",
      titulo: "O lar da SRTA Peregrine para Crianças Peculiares",
      preco: "R$ 50,00",
    },
    {
      capa: "https://m.media-amazon.com/images/I/616V5SRtbgL.jpg",
      titulo: "Cidade dos Etéreos",
      preco: "R$ 77,99",
    },
    {
      capa: "https://m.media-amazon.com/images/I/71PE8H-b3JL.jpg",
      titulo: "Biblioteca de Almas",
      preco: "R$ 69,99",
    },
    {
      capa: "https://m.media-amazon.com/images/I/416bD83OPZL.jpg",
      titulo: "Mapa dos Dias",
      preco: "R$ 44,90",
    },
    {
      capa: "https://www.intrinseca.com.br/blog/wp-content/uploads/2019/05/capa-br-703x1024.jpg",
      titulo: "A Convenção das Aves",
      preco: "R$ 32,50",
    },
    {
      capa: "https://m.media-amazon.com/images/I/51sYlC41fmL.jpg",
      titulo: "As Desolações do Recanto do Demônio",
      preco: "R$ 17,87",
    },
  ];

  return (
    <ScrollView>
      <View>
        <View style={styles.content}>
          {biblioteca.map((livro) => (
            <Card livro={livro} />
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
    height: "70%",
    borderRadius: 2,
  },
  card: {
    padding: 8,
    backgroundColor: "#fff",
    width: "45%",
    height: 350,
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
