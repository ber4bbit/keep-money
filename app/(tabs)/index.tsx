import React from "react";
import {
    Text,
    View,
    StyleSheet,
} from "react-native";
import {SharedClasses} from "@/constants/styles";
import {useStore} from "@/hooks/store/useStore";
import Transactions from "@/components/widgets/Transactions/Transactions";

export default function Home(): React.JSX.Element {
    const {items} = useStore();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={SharedClasses.titleText}>Home Tab</Text>
            </View>
            {!!items.length && <Transactions items={items} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 72,
        paddingBottom: 124,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white"
    },
    header: {

    }
})
