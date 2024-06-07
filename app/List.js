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
            <TouchableOpacity style={{margin:10}}>
                <Link 
                    style={{borderRadius: 10, padding: 20, textAlign: 'center', color: '#fff', backgroundColor: '#000',fontSize:30}} 
                    href='./LJH/Quiz1/Quiz1'>
                    A단계 1_3
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10}}>
                <Link 
                    style={{borderRadius: 10, padding: 20, textAlign: 'center', color: '#fff', backgroundColor: '#000',fontSize:30}} 
                    href='./LJH/Quiz2/Quiz2'>
                    A단계 2_5
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10}}>
                <Link 
                    style={{borderRadius: 10, padding: 20, textAlign: 'center', color: '#fff', backgroundColor: '#000',fontSize:30}} 
                    href='./JSJ/App'>
                    A단계 1_7
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10}}>
                <Link 
                    style={{borderRadius: 10, padding: 20, textAlign: 'center', color: '#fff', backgroundColor: '#000',fontSize:30}} 
                    href='./PJH/App'>
                    A단계 2_61
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10}}>
                <Link 
                    style={{borderRadius: 10, padding: 20, textAlign: 'center', color: '#fff', backgroundColor: '#000',fontSize:30}} 
                    href='./HSD/Home'>
                    A단계 2_61
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10}}>
                <Link 
                    style={{borderRadius: 10, padding: 20, textAlign: 'center', color: '#fff', backgroundColor: '#000',fontSize:30}} 
                    href='./LJH/Quiz1/Quiz1'>
                    전체문제풀기
                </Link>
            </TouchableOpacity>
        </Container>
    );
};
export default List;