import React from "react";
import {
    Text,
    View,
    StyleSheet,
} from "react-native";
import {SharedClasses} from "@/constants/styles";
import {useState} from "react";
import UIButton from "@/components/ui/UIButton";
import AddItemModal from "@/components/widgets/AddItemModal/AddItemModal";

export default function Home(): React.JSX.Element {
    const [modal, setModal] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={SharedClasses.titleText}>Home Tab</Text>
            <UIButton
                classes={[styles.addButton]}
                textColor="white"
                clickHandler={() => setModal(true)}
            >Add Item</UIButton>
            <AddItemModal
                modalState={modal}
                modalStateHandler={() => setModal(false)}
            />
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
    addButton: {
        backgroundColor: "black",
        marginTop: 24,
        borderRadius: 9,
        width: 80,
        height: 42,
    }
})
