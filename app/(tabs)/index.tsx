import React from "react";
import {
    Text,
    View,
    StyleSheet,
} from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {SharedClasses} from "@/constants/styles";
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
            </View>
            {!!items.length && <Transactions items={items} />}
            {/*<AddItemModal*/}
            {/*    modalState={addItemModal}*/}
            {/*    modalStateHandler={() => setAddItemModal(false)}*/}
            {/*/>*/}
            {/*<UIButton*/}
            {/*    classes={[styles.addButton]}*/}
            {/*    textColor="white"*/}
            {/*    clickHandler={() => setAddItemModal(true)}*/}
            {/*>*/}
            {/*    <FontAwesome6 name="plus" size={20} color="white" />*/}
            {/*</UIButton>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 72,
        paddingBottom: 92,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white"
    },
    header: {

    },
    addButton: {
        backgroundColor: "black",
        marginTop: 24,
        borderRadius: '50%',
        width: 52,
        height: 52,
        position: 'absolute',
        bottom: 18,
    }
})
