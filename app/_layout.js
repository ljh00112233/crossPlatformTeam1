import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);
    return (
        <Stack screenOptions={{
            cardStyle: {backgroundColor: '#ffffff'},
            headerStyle: {
                height: 110,
                backgroundColor: '#95a5a6',
                borderBottomWidth: 5,
                borderBottomColor: '#34495e',
            },
            headerTitleStyle: {color: '#ffffff', fontSize: 24},
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen name='index' options={{
                headerTitle: '문제풀기',
            }}
            />
            <Stack.Screen name='LJH/Quiz1/Quiz1' options={{
                headerTitle: '문제',
            }}
            />
            <Stack.Screen name='LJH/Quiz1/Item' options={{
                headerTitle: '직업 맞추기',
            }}
            />
            <Stack.Screen name='List' options={{
                headerTitle: '문제선택',
            }}
            />
            <Stack.Screen name='LJH/Quiz1/reHome' options={{
                headerTitle: '3초 뒤 돌아갑니다',
            }}
            />
            <Stack.Screen name='LJH/Quiz2/Quiz2' options={{
                headerTitle: '문제',
            }}
            />
            <Stack.Screen name='LJH/Quiz2/Home' options={{
                headerTitle: '문제',
            }}
            />
            <Stack.Screen name='JSJ/App' options={{
                headerTitle: '문제',
            }}
            />
            <Stack.Screen name='JSJ/SelectionGrid' options={{
                headerTitle: '문제',
            }}
            />
            <Stack.Screen name='PJH/App' options={{
                headerTitle: '문제',
            }}
            />
        </Stack>
    )
}