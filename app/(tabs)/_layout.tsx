import React from "react";
import {Tabs} from "expo-router";
import {
    StyleSheet,
    View,
    Text, TouchableOpacity, Dimensions
} from "react-native";
import Svg, { Path, Defs, Rect, Filter, FeOffset, FeGaussianBlur, FeBlend } from 'react-native-svg';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import UIButton from "@/components/ui/UIButton";
import AddItemModal from "@/components/widgets/AddItemModal/AddItemModal";
import {useStore} from "@/hooks/store/useStore";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    const {addItemModal, setAddItemModal} = useStore();

    return (
        <View style={styles.container}>
            <AddItemModal
                modalState={addItemModal}
                modalStateHandler={() => setAddItemModal(false)}
            />
            <UIButton
                classes={[styles.button]}
                clickHandler={() => setAddItemModal(true)}
            >
                <FontAwesome6 name="plus" size={20} color="white" />
            </UIButton>
            <Tabs
                screenOptions={{
                    animation: "shift",
                    tabBarStyle: {
                        borderTopWidth: 0,
                        boxShadow: '0 0 2px gray'
                    }
                }}
                tabBar={(props) => <CustomTabBar {...props} />}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        title: "Settings",
                        headerShown: false,
                        tabBarIcon: ({ color }) => <FontAwesome name="gear" size={24} color={color} />
                    }}
                />
            </Tabs>
        </View>
    )
}

const {width: screenWidth} = Dimensions.get("window");

function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.tabContainer}>
            <View style={styles.svgContainer}>
                <Svg
                    width={screenWidth}
                    height="80"
                    viewBox={`0 0 ${screenWidth} 80`}
                    style={styles.svg}
                >
                    <Path
                        d={`M${screenWidth * 0.33} 0C${screenWidth * 0.19} 0 0 0 0 0V93.5H${screenWidth}V0C${screenWidth} 0 ${screenWidth * 0.81} 0 ${screenWidth * 0.66} 0C${screenWidth * 0.59} 0 ${screenWidth * 0.57} 36 ${screenWidth * 0.5} 36C${screenWidth * 0.43} 36 ${screenWidth * 0.41} 0 ${screenWidth * 0.33} 0Z`}
                        fill="lightgray"
                    />
                </Svg>
            </View>

            {/* Tabs */}
            <View style={styles.tabBar}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
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
                                    color: isFocused ? '#673ab7' : '#222',
                                    size: 24,
                                })}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    button: {
        position: 'absolute',
        bottom: 52,
        left: '56%',
        transform: [{translateX: -51}],
        zIndex: 1,
        width: 52,
        height: 52,
        backgroundColor: 'black',
        borderRadius: '100%'
    },
    tabContainer: {
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
    },
    svg: {
        position: 'absolute',
        bottom: 0,
        // backgroundColor: 'red'
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'transparent',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
    },
});