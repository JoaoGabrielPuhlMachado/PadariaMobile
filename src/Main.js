import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Home from "./screens/Home";
import Itens from "./screens/Itens";
import Carrinho from "./screens/Carrinho";
import Clientes from "./screens/Clientes";
import AdicionarClientes from "./screens/AdicionarClientes";
import AdicionarItens from "./screens/AdicionarItens";
import Login from "./screens/Login";
import PerfilLogado from "./screens/PerfilLogado";
import { userState } from "./src/recoil/atoms/auth.js";

const Stack = createNativeStackNavigator();

export default function Main() {
  const currentUserState = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let access_token = null;
      try {
        access_token = await SecureStore.getItemAsync("access_token");
      } catch (e) {
        console.log(e);
      }
      if (access_token === null) {
        setUser({ access_token: null, loggedIn: false });
      } else {
        setUser({ access_token, loggedIn: true });
      }
    };

    bootstrapAsync();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {currentUserState.loggedIn ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen name="Itens" component={Itens} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="Clientes" component={Clientes} />
        <Stack.Screen
          name="AdicionarClientes"
          component={AdicionarClientes}
          options={{ headerTitle: "Adicionar Clientes" }}
        />
        <Stack.Screen
          name="AdicionarItens"
          component={AdicionarItens}
          options={{ headerTitle: "Adicionar Itens" }}
        />
        <Stack.Screen
          name="PerfilLogado"
          component={PerfilLogado}
          options={{ headerTitle: "Perfil do Atendente" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
