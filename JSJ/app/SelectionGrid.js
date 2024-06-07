import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ImageCard from './ImageCard';

const images = [
  { src: require('./assets/images/blackboard.png'), alt: 'Blackboard' },
  { src: require('./assets/images/kitchen_tools.png'), alt: 'Kitchen Tools' },
  { src: require('./assets/images/hairdryer.png'), alt: 'Hair Dryer' },
  { src: require('./assets/images/pos.png'), alt: 'POS Machine' },
  { src: require('./assets/images/stethoscope.png'), alt: 'Stethoscope' },
  { src: require('./assets/images/tank.png'), alt: 'Tank' },
];

function SelectionGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <View style={styles.grid}>
      {images.map((image, index) => (
        <ImageCard
          key={index}
          image={image}
          onClick={() => handleImageClick(image)}
          isSelected={selectedImage === image}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default SelectionGrid;