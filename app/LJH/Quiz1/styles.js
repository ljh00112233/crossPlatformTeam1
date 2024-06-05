import { StyleSheet } from 'react-native';

export const viewStyles = StyleSheet.create({
    container: {
        flex:2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    contents: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    part:{
        backgroundColor: 'skyblue',
    },
    homePicture:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
    },
    itemPicture:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 30,
    },
    text1: {
        fontSize: 18,
    },
    text2: {
        fontSize: 10,
    },
    a: {
        opacity:0
    },
    textColor: {
        color: '#fff',
        backgroundColor: '#000',
        padding: 10,
    }
});