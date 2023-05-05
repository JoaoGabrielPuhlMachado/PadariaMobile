import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import { infoclientes } from "./InfoClientes";

export default function BarraPesquisaClientes() {
  const [searchValue, setSearchValue] = useState("");
  const [display, setDisplay] = useState("none");

  const filteredClientes = infoclientes.filter((cliente) => {
    const normalizedSearchValue = normalize(searchValue).toLowerCase();
    const normalizedClienteTitle = normalize(cliente.ficha).toLowerCase();

    return normalizedClienteTitle.includes(normalizedSearchValue);
  });

  const unfocusDisplay = () => setDisplay("none");
  const changeValue = (text) => {
    setSearchValue(text);
    text.length > 1 ? setDisplay("flex") : setDisplay("none");
  };

  return (
    <View>
      <SearchBar
        placeholder="Pesquisar Cliente pela Ficha..."
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
      <View>
        {filteredClientes.map((cliente) => (
          <Text style={{ ...styles.cliente, display }} key={cliente.id_cliente}>
            {cliente.ficha}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "#f1ebf7",
  },
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
  cliente: {
    width: "96%",
    backgroundColor: "white",
    padding: 7,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
    color: "black",
  },
});

function normalize(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
