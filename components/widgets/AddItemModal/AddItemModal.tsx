import React from 'react';
import UIModal from "@/components/ui/UIModal";
import UIInput from "@/components/ui/UIInput";
import {
    StyleSheet,
    Text,
    View
} from "react-native";
import {SharedClasses} from "@/constants/styles";

export default function AddItemModal(props: { modalState: boolean, modalStateHandler: () => void }) {
    return (
        <UIModal
            state={props.modalState}
            modalStateHandler={props.modalStateHandler}
        >
            <View style={styles.container}>
                <Text style={SharedClasses.titleText}>Add Item</Text>
                <UIInput
                    placeholder='Enter a name'
                    classes={[styles.input]}
                />
            </View>
        </UIModal>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 310,
        height: '100%'
    },
    input: {
        width: '100%',
        height: 42,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 9,
        marginTop: 24
    }
})

