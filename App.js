import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import Home from "./screens/Home";
import Itens from "./screens/Itens";
import Carrinho from "./screens/Carrinho";
import Clientes from "./screens/Clientes";
import AdicionarClientes from "./screens/AdicionarClientes";
import AdicionarItens from "./screens/AdicionarItens";
import Login from "./screens/Login";
import PerfilLogado from "./screens/PerfilLogado";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
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
            name="Login"
            component={Login}
            options={{ headerTitle: "Login do Atendente" }}
          />
          <Stack.Screen
            name="PerfilLogado"
            component={PerfilLogado}
            options={{ headerTitle: "Perfil do Atendente" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
