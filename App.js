import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Drawer, Provider as PaperProvider } from 'react-native-paper';
import Home from './screens/Home';
import Livros from './screens/Livros';
import Filmes from './screens/Filmes';
import Series from './screens/Series';

const Stack = createNativeStackNavigator()

 function MyDrawer() {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section title="Menu">
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  );
};

export default function App() {
  return (
    <PaperProvider>
      <MyDrawer />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Livros" component={Livros} />
          <Stack.Screen name="Series" component={Series} />
          <Stack.Screen name="Filmes" component={Filmes} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}