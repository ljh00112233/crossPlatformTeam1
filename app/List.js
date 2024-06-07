import React from "react";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`;

const List = () => {
    return (
        <Container>
            <TouchableOpacity>
                <Link 
                    style={{borderRadius: 10, padding: 20, textAlign: 'center', color: '#fff', backgroundColor: '#000',fontSize:30}} 
                    href='./LJH/Quiz1/Quiz1'>
                    문제풀기
                </Link>
            </TouchableOpacity>
            <TouchableOpacity>
                <Link 
                    style={{borderRadius: 10, padding: 20, textAlign: 'center', color: '#fff', backgroundColor: '#000',fontSize:30}} 
                    href='./LJH/Quiz2/Quiz2'>
                    문제풀기
                </Link>
            </TouchableOpacity>
            <TouchableOpacity>
                <Link 
                    style={{borderRadius: 10, padding: 20, textAlign: 'center', color: '#fff', backgroundColor: '#000',fontSize:30}} 
                    href='./JSJ/App'>
                    문제풀기
                </Link>
            </TouchableOpacity>
            <TouchableOpacity>
                <Link 
                    style={{borderRadius: 10, padding: 20, textAlign: 'center', color: '#fff', backgroundColor: '#000',fontSize:30}} 
                    href='./PJH/App'>
                    문제풀기
                </Link>
            </TouchableOpacity>
        </Container>
    );
};
export default List;