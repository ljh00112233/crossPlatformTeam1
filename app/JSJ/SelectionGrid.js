import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import ImageCard from './ImageCard';

const images = [
  { src: require('./assets/images/blackboard.png'), alt: '칠판', correct: '칠판' },
  { src: require('./assets/images/kitchen_tools.png'), alt: '주방도구', correct: '주방도구' },
  { src: require('./assets/images/hairdryer.png'), alt: '드라이어기', correct: '드라이어기' },
  { src: require('./assets/images/pos.png'), alt: '포스기', correct: '포스기' },
  { src: require('./assets/images/stethoscope.png'), alt: '청진기', correct: '청진기' },
  { src: require('./assets/images/tank.png'), alt: '탱크', correct: '탱크' },
];

function SelectionGrid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setFeedback('');
    setUserInput('');
  };

  const handleCheckAnswer = () => {
    if (selectedImage) {
      if (userInput.toLowerCase() === selectedImage.correct.toLowerCase()) {
        setFeedback('정답입니다!');
      } else {
        setFeedback('오답입니다');
      }
    } else {
      setFeedback('이미지를 선택해주세요.');
    }
  };

  return (
    <View style={styles.container}>
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
      {selectedImage && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="정답을 입력하세요"
            value={userInput}
            onChangeText={setUserInput}
          />
          <Button title="정답 확인" onPress={handleCheckAnswer} />
        </View>
      )}
      {feedback && <Text style={styles.feedback}>{feedback}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  feedback: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SelectionGrid;
