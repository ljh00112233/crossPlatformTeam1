import React, {useEffect} from "react";
import styled from "styled-components/native";
import { Text, Image, View } from 'react-native';
import { Link, router } from 'expo-router';
import { viewStyles } from './styles';
import { Job, Job1, Job2 } from './image'

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`;

const Home = () => {
    useEffect(() => {
        setTimeout(() => {router.navigate('./Item');}, 3000);
    },[]);

    const img = Job.map((i) => (<Image key={i.id} source={i.picture} style={viewStyles.homePicture}/>));
    const name = Job.map((i) => ( <Text key={i.id} style = {viewStyles.text}>{i.name}</Text>));
    const img1 = Job1.map((i) => (<Image key={i.id} source={i.picture} style={viewStyles.homePicture}/>));
    const name1 = Job1.map((i) => ( <Text key={i.id} style = {viewStyles.text}>{i.name}</Text>));
    const img2 = Job2.map((i) => (<Image key={i.id} source={i.picture} style={viewStyles.homePicture}/>));
    const name2 = Job2.map((i) => ( <Text key={i.id} style = {viewStyles.text}>{i.name}</Text>));

    return (
            <Container>
                <View style = {[viewStyles.container, viewStyles.part]}>
                    <View style = {viewStyles.contents}>
                        {img}
                    </View>
                </View>
                <View style = {[viewStyles.container, viewStyles.part]}>
                    <View style = {viewStyles.contents}>
                        {name}
                    </View>
                </View>
                <View style = {[viewStyles.container, viewStyles.part]}>
                    <View style = {viewStyles.contents}>
                        {img1}
                    </View>
                </View>
                <View style = {[viewStyles.container, viewStyles.part]}>
                    <View style = {viewStyles.contents}>
                        {name1}
                    </View>
                </View>
                <View style = {[viewStyles.container, viewStyles.part]}>
                    <View style = {viewStyles.contents}>
                        {img2}
                    </View>
                </View>
                <View style = {[viewStyles.container, viewStyles.part]}>
                    <View style = {viewStyles.contents}>
                        {name2}
                    </View>
                </View>
            </Container>
    );
};

export default Home;