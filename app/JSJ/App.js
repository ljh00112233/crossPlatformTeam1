import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectionGrid from './SelectionGrid';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>직업사진 기억하기</Text>
      <SelectionGrid />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});