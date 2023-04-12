import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import Livros from "./screens/Livros";
import Filmes from "./screens/Filmes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Livros" component={Livros} />
          <Stack.Screen name="Filmes" component={Filmes} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  navegacao: {
    backgroundColor: "red",
  },
});
