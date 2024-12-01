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
import {useStore} from "@/hooks/store/useStore";
import Transactions from "@/components/widgets/Transactions/Transactions";

export default function Home(): React.JSX.Element {
    const {items, addItemModal, setAddItemModal} = useStore();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={SharedClasses.titleText}>Home Tab</Text>
                <UIButton
                    classes={[styles.addButton]}
                    textColor="white"
                    clickHandler={() => setAddItemModal(true)}
                >Add Item</UIButton>
            </View>
            {!!items.length && <Transactions items={items} />}
            <AddItemModal
                modalState={addItemModal}
                modalStateHandler={() => setAddItemModal(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 72,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white"
    },
    header: {

    },
    addButton: {
        backgroundColor: "black",
        marginTop: 24,
        borderRadius: 9,
        width: 80,
        height: 42,
    }
})
