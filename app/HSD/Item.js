import React from "react";
import styled from "styled-components/native";
import { Link } from "expo-router";
import { Text } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  `;
const Item = () => {
    return (
        <Container>
            <Link href="/List">문제로 넘어가기</Link>
        </Container>
    );
};
export default Item;