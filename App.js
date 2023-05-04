import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import Home from "./screens/Home";
import Itens from "./screens/Itens";
import Carrinho from "./screens/Carrinho";
import Clientes from "./screens/Clientes";
import AdicionarClientes from "./screens/AdicionarClientes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Itens" component={Itens} />
          <Stack.Screen name="Carrinho" component={Carrinho} />
          <Stack.Screen name="Clientes" component={Clientes} />
          <Stack.Screen name="Adicionar Clientes" component={AdicionarClientes} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}