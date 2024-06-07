import React from "react";
import { Text } from "react-native";
import { Link } from "expo-router";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  padding-top: 50px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const ItemLink = styled(Link)`
  font-size: 20px;
  margin: 50px 0;
  text-align: center;
`;

const items = [
    {_id: 1, name: "A단계 1_3"},
    {_id: 2, name: "A단계 2_61"},
    {_id: 3, name: "A단계 1_7"},
    {_id: 4, name: "A단계 4_15"},
];

const List = () => {
    return (
        <Container>
            <Title>문제풀이</Title>
            {items.map((item) => (
                <ItemLink key={item._id} href={"/topic/" + item.name}>
                    {item.name}
                </ItemLink>
            ))}
        </Container>
    );
};

export default List;