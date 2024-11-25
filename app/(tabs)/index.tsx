import React, { useRef } from "react";
import {
    Text,
    View,
    StyleSheet,
    Modal,
    TextInput
} from "react-native";
import { SharedClasses } from "@/constants/styles";
import { useState } from "react";
import UIButton from "@/components/ui/UIButton";

export default function Home(): React.JSX.Element {

    const [modal, setModal] = useState(false);
    const [itemText, setItemText] = useState("Item title");
    const [items, setItems] = useState<string[]>([])

    const addItem = () => {
        setItems((prev: string[]) => [...prev, itemText])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Tab</Text>
            <UIButton
                classes={[styles.addButton]}
                textColor="white"
                clickHandler={() => setModal(true)}
            >Add Item</UIButton>
            {
                items.map((item: string, index: number) => {
                    return <Text key={index}>{item}</Text>
                })
            }
            <Modal
                animationType="slide"
                visible={modal}
            >
                <View style={[
                    styles.container,
                    {
                        backgroundColor: "white"
                    }
                ]}>
                    <UIButton
                        clickHandler={() => setModal(false)}
                    >Close modal</UIButton>
                    <View style={styles.modalForm}>
                        <TextInput 
                            value={itemText}
                            onChangeText={setItemText}
                        />
                        <UIButton
                            classes={[styles.addButton]}
                            textColor="white"
                            clickHandler={() => addItem()}
                        >Add item</UIButton>
                    </View>
                </View>
            </Modal>
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
    },
    addButton: {
        backgroundColor: "black",
        padding: 12,
        marginTop: 24,
        borderRadius: 9,
    },
    modalForm: {
        marginTop: 72
    }
})