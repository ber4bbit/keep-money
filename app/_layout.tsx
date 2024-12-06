import {Stack} from 'expo-router';
import {StatusBar} from "react-native";
import React from "react";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{headerShown: false}}
            />
        </Stack>
    );
}
