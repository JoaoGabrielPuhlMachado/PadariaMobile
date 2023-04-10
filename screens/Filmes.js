import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import BibliotecaFilmes from '../src/components/BibliotecaFilmes';
import HeaderFilmes from '../src/components/HeaderFIlmes';

export default function Filmes () {
  return (
    <View style={styles.container}>
      <HeaderFilmes />
      <ScrollView>
        <BibliotecaFilmes />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10
  },
})
