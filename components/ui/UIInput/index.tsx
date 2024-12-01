import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import { UIInputProps } from './index.types';


export default function UIInput(props: UIInputProps) {
    const {placeholder, textColor, classes, inputRef, changeHandler, inputType} = props;

    return (
        <Animated.View
            style={[...classes || []]}
        >
            <TextInput
                placeholder={placeholder || ''}
                placeholderTextColor='black'
                style={styles.input}
                ref={inputRef || null}
                keyboardType={inputType || 'default'}
                onChangeText={changeHandler ? (value: string | number) => changeHandler(value) : undefined}
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
