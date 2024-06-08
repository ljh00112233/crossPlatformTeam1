import React from "react";
import styled from "styled-components/native";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import MyButton from '../MyButton_next';
import MyButtonPrev from '../MyButton_prev';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Column = styled.View`
  flex-direction: column;
`;

const ImageContainer = styled.View`
  margin: 15px; /* 이미지 간격 조정 */
`;

const imageStyle = { width: 100, height: 100 };

const ImageClick = (imageName) => {
  alert(`${imageName}`);
};

const Home = () => {
  return (
    <Container>
      <Text>변비에 좋은 식품을 찾아보세요.</Text>
      <Row>
      <Column>
        <ImageContainer>
        <TouchableOpacity onPress={() => ImageClick("정답입니다")}>
          <Image source={require("./image/강낭콩.png")} style={imageStyle} />
          </TouchableOpacity>
        </ImageContainer>
        <ImageContainer>
        <TouchableOpacity onPress={() => ImageClick("오답입니다")}>
          <Image source={require("./image/돼지고기.png")} style={imageStyle} />
          </TouchableOpacity>
        </ImageContainer>
        <ImageContainer>
        <TouchableOpacity onPress={() => ImageClick("정답입니다")}>
          <Image source={require("./image/땅콩.png")} style={imageStyle} />
          </TouchableOpacity>
        </ImageContainer>
        <ImageContainer>
        <TouchableOpacity onPress={() => ImageClick("오답입니다")}>
          <Image source={require("./image/빵.png")} style={imageStyle} />
          </TouchableOpacity>
        </ImageContainer>
        <ImageContainer>
        <TouchableOpacity onPress={() => ImageClick("정답입니다")}>
          <Image source={require("./image/양배추.png")} style={imageStyle} />
          </TouchableOpacity>
        </ImageContainer>
      </Column>
      <Column>
      <ImageContainer>
        <TouchableOpacity onPress={() => ImageClick("정답입니다")}>
          <Image source={require("./image/오이.png")} style={imageStyle} />
          </TouchableOpacity>
        </ImageContainer>
        <ImageContainer>
        <TouchableOpacity onPress={() => ImageClick("정답입니다")}>
          <Image source={require("./image/자두.png")} style={imageStyle} />
          </TouchableOpacity>
        </ImageContainer>
        <ImageContainer>
        <TouchableOpacity onPress={() => ImageClick("오답입니다")}>
          <Image source={require("./image/치킨.png")} style={imageStyle} />
          </TouchableOpacity>
        </ImageContainer>
        <ImageContainer>
        <TouchableOpacity onPress={() => ImageClick("오답입니다")}>
          <Image source={require("./image/커피.png")} style={imageStyle} />
          </TouchableOpacity>
        </ImageContainer>
        <ImageContainer>
        <TouchableOpacity onPress={() => ImageClick("정답입니다")}>
          <Image source={require("./image/키위.png")} style={imageStyle} />
          </TouchableOpacity>
        </ImageContainer>
      </Column>
    </Row>
    <View style={{flexDirection: 'row'}}>
        <MyButtonPrev name={'../List'}></MyButtonPrev>
    </View>
    </Container>
  );
};

export default Home;
