import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { userState } from "../src/recoil/atoms/auth.js";
import LoginApi from "../src/api/login";
const loginapi = new LoginApi();

export default function Login({ navigation }) {
  const setUser = useSetRecoilState(userState);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState(null);

  const login = async () => {
    try {
      const data = await loginApi.login(username, password);
      setUser({
        loggedIn: true,
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      });
      await SecureStore.setItemAsync("access_token", data.access_token);
    } catch (error) {
      setUser({ loggedIn: false, access_token: null, refresh_token: null });
      setErrorMsg("Usuário ou senha inválidos!");
      await SecureStore.deleteItemAsync("access_token");
    }
  };

  return (
    <View style={styles.background}>
      <View>
        <TextInput
          value={username}
          onChangeText={setUsername}
          label={"Nome do atendente"}
          style={styles.input}
        />
        <TextInput
          value={password}
          label={"Senha"}
          onChangeText={setPassword}
          style={styles.input}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => login()} style={styles.botaoadd}>
          <Text style={styles.texto}>Fazer Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 60,
    width: "100%",
    marginTop: 10,
  },
  background: {
    backgroundColor: "#f1ebf7",
    justifyContent: "space-between",
    flex: 1,
  },
  botaoadd: {
    height: 45,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
