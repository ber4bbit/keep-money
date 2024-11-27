import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';

interface UIButtonPropsI {
    children: string | React.JSX.Element,
    classes?: {
        [key: string]: any
    }[],
    textColor?: string,
    clickHandler?: () => void
}

export default function UIButton(props: UIButtonPropsI) {
    const {children, classes, textColor, clickHandler} = props;
    const classNames = classes ? [...classes] : [];

    const opacity = useSharedValue(1);

    const handlePressIn = () => opacity.value = withTiming(0.2, {duration: 150})

    const handlePressOut = () => opacity.value = withTiming(1, {duration: 150})

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }))

    return (
        <Animated.View
            style={[animatedStyle, ...classNames]}
        >
            <Pressable
                style={styles.button}
                onPress={clickHandler ? () => clickHandler() : null}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
            >
                <Text
                    style={
                        {
                            color: textColor || "black"
                        }
                    }
                >{children}</Text>
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})