import { StyleSheet, Image, Text, View, ScrollView } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={{ uri: props.filme.capa }} />
      <View style={styles.flextext}>
        <Text style={styles.nome}> {props.filme.titulo} </Text>
        <Text style={styles.texto}> {props.filme.data} </Text>
        <Text style={styles.texto}> {props.filme.duracao} </Text>
      </View>
    </View>
  );
}

export default function BibliotecaFilmes() {
  const bibliotecafilme = [
    {
      capa: "https://br.web.img3.acsta.net/pictures/18/12/05/16/28/3718855.jpg",
      titulo: "Homem-Aranha no Aranhaverso",
      data: "10/01/2019",
      duracao: "1h 56m",
    },
    {
      capa: "https://static.wikia.nocookie.net/harrypotter/images/9/9c/Capa_Harry_Potter_e_a_Pedra_Filosofal_%28filme%29.jpg/revision/latest?cb=20130101153136&path-prefix=pt-br",
      titulo: "Harry Potter e a Pedra Filosofal",
      data: "23/11/2001",
      duracao: "2h 32m",
    },
    {
      capa: "https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg",
      titulo: "Vingadores Ultimato",
      data: "25/04/2019",
      duracao: "3h 2m",
    },
    {
      capa: "https://upload.wikimedia.org/wikipedia/pt/2/28/Black_Panther_2018.jpg",
      titulo: "Pantera Negra",
      data: "15/02/2018",
      duracao: "2h 15m",
    },
    {
      capa: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41GWL0CPFcL._AC_UF1000,1000_QL80_.jpg",
      titulo: "Cavalo de Guerra",
      data: "06/01/2012",
      duracao: "2h 26m",
    },
    {
      capa: "https://static.wikia.nocookie.net/barbie/images/8/8b/Barbie_em_o_Quebra-Nozes.jpg/revision/latest?cb=20150223202221&path-prefix=pt-br",
      titulo: "Barbie e o Quebra-Nozes",
      data: "02/10/2001",
      duracao: "1h 20m",
    },
  ];

  return (
    <ScrollView>
      <View>
        <View style={styles.content}>
          {bibliotecafilme.map((filme) => (
            <Card filme={filme} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flextext: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    margin: 0,
  },
  imagem: {
    width: "100%",
    height: "70%",
    resizeMode: "stretch",
  },
  card: {
    backgroundColor: "#fff",
    width: "44%",
    height: 350,
    borderRadius: 0,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
  },
  texto: {
    fontSize: 14,
    color: "#000",
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
  },
  nome: {
    fontSize: 14,
    color: "#000",
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    fontWeight: "bold",
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
