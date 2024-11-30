import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';

interface UIInputProps {
    placeholder?: string,
    textColor?: string,
    classes?: {
        [key: string]: any
    }[],
    inputRef?: any,
    changeHandler?: (value: string) => void
}

export default function UIInput(props: UIInputProps) {
    const {placeholder, textColor, classes, inputRef, changeHandler} = props;

    return (
        <Animated.View
            style={[...classes || []]}
        >
            <TextInput
                placeholder={placeholder || ''}
                placeholderTextColor='black'
                style={styles.input}
                ref={inputRef || null}
                onChangeText={changeHandler ? (value: string) => changeHandler(value) : undefined}
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