import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import Home from "./screens/Home";
import Atendente from "./screens/Atendente";
import Carrinho from "./screens/Carrinho";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Atendente" component={Atendente} />
          <Stack.Screen name="Carrinho" component={Carrinho} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}