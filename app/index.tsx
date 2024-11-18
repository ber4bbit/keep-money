import {View, Text, StyleSheet} from "react-native";

interface StylesInterface {
    [key: string]: object;
}

export default function HomeScreen() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>wwwwww</Text>
        </View>
    )
}

const styles: StylesInterface = StyleSheet.create({
    title: {
        color: "white"
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    }
})