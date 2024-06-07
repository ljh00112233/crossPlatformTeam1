import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

function ImageCard({ image, onClick, isSelected }) {
  return (
    <TouchableOpacity style={[styles.card, isSelected && styles.selected]} onPress={onClick}>
      <Image source={image.src} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: 'transparent',
    margin: 10,
  },
  selected: {
    borderColor: 'blue',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageCard;