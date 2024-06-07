import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectionGrid from './SelectionGrid';
import MyButton from '../MyButton_next';
import MyButtonPrev from '../MyButton_prev';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>직업사진 기억하기</Text>
      <SelectionGrid />
      <View style={{flexDirection: 'row'}}>
        <MyButtonPrev name={'../List'}></MyButtonPrev>
        <MyButton name={'../../JSJ/App'}></MyButton>
      </View>
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