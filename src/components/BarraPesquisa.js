import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import { infoprodutos } from "./InfoProdutos";

export default function BarraPesquisa() {
  const [searchValue, setSearchValue] = useState("");

  const filteredItems = infoprodutos.filter(
    (item) => item.titulo && item.titulo.includes(searchValue)
  );

  return (
    <View>
      <SearchBar
        placeholder="Pesquisar Produtos..."
        onChangeText={setSearchValue}
        value={searchValue}
        containerStyle={styles.pesquisa}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        searchIcon={{ color: "black" }}
        cancelIcon={{ color: "black" }}
        placeholderTextColor="black"
      />
      <View>
        {filteredItems.map((item) => (
          <Text style={styles.item} key={item.id}>
            {item.titulo}
          </Text>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pesquisa: {
    backgroundColor: "#f1ebf7",
    borderBottomColor: "#f1ebf7",
    borderTopColor: "#f1ebf7",
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    height: 36,
  },
  input: {
    color: "black",
  },
  item: {
    width: "96%",
    backgroundColor: "white",
    padding: 7,
    borderRadius: 5,
    marginBottom: 8,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
    color: "black",
  },
});
