import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import Svg, {Path} from "react-native-svg";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";

const {width: screenWidth} = Dimensions.get("window");

/**
 * Value of d attribute of Path for create tab bar form
 * with responsive values that based on width of device screen
 * */
const pathDAttr = `M${screenWidth * 0.33} 0C${screenWidth * 0.19} 0 0 0 0 0V93.5H${screenWidth}V0C${screenWidth} 0
    ${screenWidth * 0.81} 0 ${screenWidth * 0.66} 0C${screenWidth * 0.59} 0 ${screenWidth * 0.57} 36 ${screenWidth * 0.5}
    36C${screenWidth * 0.43} 36 ${screenWidth * 0.41} 0 ${screenWidth * 0.33} 0Z`;

export default function TabBar({state, descriptors, navigation}: BottomTabBarProps) {

    /**
     * @beta Need to refactor this
     * */
    const tabsToRender = state.routes.map((route, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
            }
        };

        return (
            <TouchableOpacity
                key={index}
                onPress={onPress}
                style={styles.tabItem}
            >
                {options.tabBarIcon &&
                    options.tabBarIcon({
                        color: isFocused ? '#000000' : '#BBBBBB',
                        size: 24,
                        focused: isFocused
                    })}
            </TouchableOpacity>
        );
    })

    return (
        <View style={styles.container}>
            <View style={styles.svgContainer}>
                <Svg
                    width={screenWidth}
                    height="80"
                    viewBox={`0 0 ${screenWidth} 80`}
                    style={styles.svgContent}
                >
                    <Path
                        d={pathDAttr}
                        fill="white"
                    />
                </Svg>
            </View>
            <View style={styles.tabBar}>{tabsToRender}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        alignItems: 'center',
    },
    svgContainer: {
        position: 'absolute',
        width: '100%',
        height: 80,
        shadowColor: '#37474F',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.6,
        shadowRadius: 3
    },
    svgContent: {
        position: 'absolute',
        bottom: 0,
    },
    tabBar: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'transparent',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
})