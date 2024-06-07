import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { router } from 'expo-router';

const MyButton = (props) => {
    return(
        <TouchableOpacity
            style = {{
                padding: 10,
                margin: 2,
                backgroundColor: 'blue',
                borderRadius: 9,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onPress={() => {router.replace(props.name);}}
        >
            <Text style = {{color: 'white', fontSize: 18}}>다음문제</Text>
        </TouchableOpacity>
    );
};

export default MyButton;