import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import { infoprodutos } from "./InfoProdutos";

export default function BarraPesquisaItens() {
  const [searchValue, setSearchValue] = useState("");
  const [display, setDisplay] = useState("none");

  const filteredItems = infoprodutos.filter((item) => {
    const normalizedSearchValue = normalize(searchValue).toLowerCase();
    const normalizedItemTitle = normalize(item.titulo).toLowerCase();

    return normalizedItemTitle.includes(normalizedSearchValue);
  });

  const unfocusDisplay = () => setDisplay("none");
  const changeValue = (text) => {
    setSearchValue(text);
    text.length > 1 ? setDisplay("flex") : setDisplay("none");
  };

  return (
    <View>
      <SearchBar
        placeholder="Pesquisar Produtos..."
        onChangeText={changeValue}
        onBlur={unfocusDisplay}
        value={searchValue}
        containerStyle={styles.pesquisa}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        searchIcon={{ color: "black" }}
        cancelIcon={{ color: "black" }}
        placeholderTextColor="black"
      />

      {filteredItems.map((item) => (
        <Text style={{ ...styles.item, display }} key={item.id}>
          {item.titulo}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  pesquisa: {
    backgroundColor: "#f1ebf7",
    borderBottomColor: "#f1ebf7",
    borderTopColor: "#f1ebf7",
    paddingBottom: 0,
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 2,
    height: 36,
  },
  input: {
    color: "black",
  },
  item: {
    width: "96%",
    backgroundColor: "white",
    padding: 7,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
    color: "black",
    borderWidth: 0,
    borderColor: 0
  },
});

function normalize(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
