import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {SharedClasses} from "@/constants/styles";

export default function Home(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Tab</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 72,
        alignItems: "center",
        backgroundColor: "white"
    },
    title: {
        fontSize: 24
    }
})