import React from "react";
import { TouchableOpacity, Text } from "react-native";

const MyButton = (props) => {
    return(
        <TouchableOpacity
            style = {{
                padding: 15,
                margin: 2,
                backgroundColor: 'blue',
                borderRadius: 9,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onPress={() => {props.onPress()}}
        >
            <Text style = {{color: 'white', fontSize: 24}}>{props.title}</Text>
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title: '확인',
};

export default MyButton;