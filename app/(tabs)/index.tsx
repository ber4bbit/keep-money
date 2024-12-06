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
            <View>
                <Text style={SharedClasses.titleText}>Dashboard</Text>
            </View>
            {!!items.length && <Transactions items={items} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 72,
        paddingBottom: 142,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F4F4F4"
    }
})
