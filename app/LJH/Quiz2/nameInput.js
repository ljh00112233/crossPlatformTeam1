import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.main,
}))`
    height: 60px;
    width: 80%;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.itemBackground};
    font-size: 25px;
    border: 5px solid;
`;

const Input = ({ placeholder, value, onChangeText, martName, price }) => {
    const [k, setK] = useState('');

    useEffect(() => {
        if(martName == 0){
            setK('hana');
        }else if(martName == 1){
            setK('so');
        }else{
            setK('si');
        };
    },[]);

    const b = () => {
        if(martName == 0){
            if(k == value){
                alert('correct');
            }else{
                alert('wrong');
            }
        }else if(martName == 1){
            if(k == value){
                alert('correct');
            }else{
                alert('wrong');
            }
        }else{
            if(k == value){
                alert('correct');
            }else{
                alert('wrong');
            }
        };
    };

    return <StyledInput
        placeholder={placeholder}
        maxLength={50}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        keyboardAppearance="dark" //IOS 전용
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={b}
    />;
};

export default Input;