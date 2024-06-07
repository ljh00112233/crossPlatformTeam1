import React, { useState } from "react";
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { Text, View,ScrollView } from 'react-native';
import { viewStyles } from "./styles";
import Input_name from './nameInput'
import Input_price from './priceInput';
import MyButton from '../../MyButton';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    justify-content: flex-start;
`;

const Home = () => {
    const [QText, setQText] = useState('');

    const _handleTextChange = text => {
        setQText(text);
    };

    const [QText1, setQText1] = useState('');

    const _handleTextChange1 = text => {
        setQText1(text);
    };
    
    const randomArr = [];
    for(i=0; i<15; i++){
        randomNum = Math.floor(Math.random() * 5 + 1) * 5000;
        randomArr.push(randomNum);
    };

    const [priceArr, setPriceArr] = useState(randomArr);

    const martName = [
        {id:1, name:'하나마트'},
        {id:2, name:'소망마트'},
        {id:3, name:'싱싱마트'},
    ];

    const price = [
        {id:1, name:'휴지', hana:priceArr[0], somang:priceArr[1], sing:priceArr[2]},
        {id:2, name:'물티슈', hana:priceArr[3], somang:priceArr[4], sing:priceArr[5]},
        {id:3, name:'샴푸', hana:priceArr[6], somang:priceArr[7], sing:priceArr[8]},
        {id:4, name:'린스', hana:priceArr[9], somang:priceArr[10], sing:priceArr[11]},
        {id:5, name:'바디로션', hana:priceArr[12], somang:priceArr[13], sing:priceArr[14]}
    ];

    const randomIndexArray = [];
    for (i=0; i<3; i++) {
      randomItem = Math.floor(Math.random() * price.length)
      if (randomIndexArray.indexOf(randomItem) === -1) {
        randomIndexArray.push(randomItem)
      } else {
        i--
      }
    };

    const [nameArr, setName] = useState(randomIndexArray);

    const c = [
        price[nameArr[0]].hana * 2 + price[nameArr[1]].hana + price[nameArr[2]].hana,
        price[nameArr[0]].somang * 2 + price[nameArr[1]].somang + price[nameArr[2]].somang,
        price[nameArr[0]].sing * 2 + price[nameArr[1]].sing + price[nameArr[2]].sing
    ]

    const a = c.indexOf(Math.min(...c));
    const b = Math.min(...c);

    return (
        <ThemeProvider theme={theme}>
            <ScrollView>
            <Container>
                {console.log(b)}    
                <View>
                    <Text style={viewStyles.text}>정답 입력후</Text>
                </View>
                <View>
                    <Text style={viewStyles.text}>완료버튼을 눌러주세요</Text>
                </View>               
                <View style={[viewStyles.container,{borderWidth:1, borderBottomWidth:0}]}>
                    <View style={viewStyles.contents}>
                    </View>
                    <View style={[viewStyles.contents,{borderRightWidth:1, borderLeftWidth:1}]}>
                        <Text style={viewStyles.text1}>
                            {martName[0].name}
                        </Text>
                    </View>
                    <View style={[viewStyles.contents,{borderRightWidth:1}]}>
                        <Text style={viewStyles.text1}>
                            {martName[1].name}
                        </Text>
                    </View>
                    <View style={viewStyles.contents}>
                        <Text style={viewStyles.text1}>
                            {martName[2].name}
                        </Text>
                    </View>
                </View>
                <View style={[viewStyles.container,{borderWidth:1,borderTopWidth:1}]}>
                    <View style={[viewStyles.contents,{borderRightWidth:1}]}>
                        {price.map ((item) => (
                            <Text key={item.id} style={viewStyles.text1}>
                                {item.name}
                            </Text>)
                        )}
                    </View>
                    <View style={[viewStyles.contents,{borderRightWidth:1}]}>
                        {price.map ((item) => (
                            <Text key={item.id} style={viewStyles.text1}>
                                {item.hana}
                            </Text>)
                        )}
                    </View>
                    <View style={[viewStyles.contents,{borderRightWidth:1}]}>
                        {price.map ((item) => (
                            <Text key={item.id} style={viewStyles.text1}>
                                {item.somang}
                            </Text>)
                        )}
                    </View>
                    <View style={viewStyles.contents}>
                        {price.map ((item) => (
                            <Text key={item.id} style={viewStyles.text1}>
                                {item.sing}
                            </Text>)
                        )}
                    </View>
                </View>
                <View style={viewStyles.margin}>
                    <Text style={viewStyles.text1}>
                        {price[nameArr[0]].name} 2개, {price[nameArr[1]].name}, {price[nameArr[2]].name}를 각각 1개씩 구매하려고 합니다.
                    </Text>
                </View>
                <View style={[viewStyles.container2,viewStyles.margin]}>
                    <Text style={[viewStyles.text1,viewStyles.margin]}>
                        가격이 가장 저렴한 마트는 어디인가요?
                    </Text>
                    <Input_name
                        placeholder='정답을 입력하세요!'
                        value={QText}
                        onChangeText={_handleTextChange}
                        martName={a}
                    />
                </View>
                <View style={[viewStyles.container2,viewStyles.margin]}>
                    <Text style={[viewStyles.text1,viewStyles.margin]}>
                        이 물건들의 가격의 합은?
                    </Text>
                    <Input_price
                        placeholder='정답을 입력하세요!'
                        value={QText1}
                        onChangeText={_handleTextChange1}
                        price={b}
                    />
                </View>
                {QText !== '' && QText1 !== '' && <MyButton name={'../../JSJ/App'}></MyButton>}
                
            </Container>
            </ScrollView>
        </ThemeProvider>
    );
};

export default Home;