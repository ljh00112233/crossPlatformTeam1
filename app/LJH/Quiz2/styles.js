import { StyleSheet } from 'react-native';

export const viewStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    container2: {
        alignItems:'center',
        justifyContent:'center'
    },
    contents: {
        flex: 1,
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
        fontSize: 20,
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
    },
    margin:{
        margin: 10, 
        marginTop: 20
    }
});