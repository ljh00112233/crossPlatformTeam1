import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);
    return (
        <Container>
            <Title>문제풀이</Title>
            {items.map((item) => (
                <ItemLink key={item._id} href={"/topic/" + item.name}>
                    {item.name}
                </ItemLink>
            ))}
        </Container>
    );
};