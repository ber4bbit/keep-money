import React from 'react';
import {StyleSheet, TextInput} from "react-native";
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';

interface UIInputProps {
    placeholder?: string,
    textColor?: string,
    classes?: {
        [key: string]: any
    }[],
}

export default function UIInput(props: UIInputProps) {
    const {placeholder, textColor, classes} = props;

    return (
        <Animated.View
            style={[...classes || []]}
        >
            <TextInput
                placeholder={placeholder || ''}
                placeholderTextColor='black'
                style={styles.input}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 9
    }
})