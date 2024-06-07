import React, { useState } from "react";
import styled from "styled-components/native";
import { Link, router } from 'expo-router';
import { Text, Image, Alert, TouchableOpacity } from "react-native";
import { viewStyles } from './styles';
import Input from './Input'
import { allJob } from "./image";

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`;

const Item = () => {
    const [a, setA] = useState(0);

    const [problem, setProblem] = useState('');

    const _handleTextChange = text => {
        setProblem(text);
    };

    const _correct = () => {
        Alert.alert(
            '정답!',
            '',
            [{text: '확인', onPress: () => {
                if(a===8){
                    router.replace('../Quiz2/Quiz2'); //문제 끝 다음 넘어감
                }else{
                    {setA(a+1); setProblem('');}
                }
            }   
            }],
            {cancelable: false},
        )
    };

    const _wrong = () => {
        Alert.alert(
            '오답!',
            `${allJob[a].name.toString()}`,
            [{text: '확인', onPress: () => {
                if(a===8){
                    router.replace('../Quiz2/Quiz2'); //문제 끝 다음 넘어감
                }else{
                    {setA(a+1); setProblem('');}
                }
            }   
            }],
            {cancelable: false},
        )
    };

    const _judge = () => {
        if(problem === allJob[a].name.toString()){
            _correct();
        }else{
            _wrong();
        }
    };

    return (
        <Container>
            <Text style={viewStyles.text1}>정답을 입력하고 키패드의 완료를 눌러주세요</Text>
            <Image source={allJob[a].picture} style={[viewStyles.itemPicture, viewStyles.first]}/>
            {/* <Text>{Job[a].name.toString()}</Text> */}
            <Input 
                placeholder='정답을 입력하세요!' 
                value={problem}
                onChangeText={_handleTextChange}
                onSubmitEditing={_judge}
            />
            <TouchableOpacity>
                <Link 
                    style={[viewStyles.text1,viewStyles.textColor]}
                    href='./reHome'
                >
                    3초 그림 다시보기
                </Link>
            </TouchableOpacity>
        </Container>
    );
};

export default Item;