import { Text, Pressable } from 'react-native'
import React from 'react'

interface UIButtonPropsI {
    children: string | React.JSX.Element,
    classes?: {
        [key: string]: any
    }[],
    textColor?: string,
    clickHandler?: () => void
}

export default function UIButton(props: UIButtonPropsI) {
    const { children, classes, textColor, clickHandler } = props;
    const classNames = classes ? [...classes] : [];

    return (
        <Pressable
            style={
                ({ pressed }) => [{
                    opacity: pressed ? 0.2 : 1,
                },
                classNames
                ]
            }
            onPress={clickHandler ? () => clickHandler() : null}
        >
            <Text 
                style={
                    {
                        color: textColor || "black" 
                    }
                }
            >{children}</Text>
        </Pressable>
    )
}