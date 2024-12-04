import React from "react";
import {Tabs} from "expo-router";
import {
    StyleSheet,
    View
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import UIButton from "@/components/ui/UIButton";
import AddItemModal from "@/components/widgets/AddItemModal/AddItemModal";
import {useStore} from "@/hooks/store/useStore";

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
                    animation: "shift"
                }}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    button: {
        position: 'absolute',
        bottom: 56,
        left: '56%',
        transform: [{translateX: -50}],
        zIndex: 1,
        width: 52,
        height: 52,
        backgroundColor: 'black',
        borderRadius: '100%'
    }
})