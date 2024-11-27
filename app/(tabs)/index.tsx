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

    const ListItem = (props: { text: string, key: number }) => (
        <View key={props.key} style={styles.listItem}>
            <Text>{props.text}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Tab</Text>
            <UIButton
                classes={[styles.addButton]}
                textColor="white"
                clickHandler={() => setModal(true)}
            >Add Item</UIButton>
            {
                items.map((item: string, index: number) =>
                    <ListItem text={item} key={index} />
                )
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
                            style={styles.addInput}
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
        paddingVertical: 12,
        display: "flex",
        alignItems: "center",
        marginTop: 24,
        borderRadius: 9,
        width: 80
    },
    listItem: {
        marginVertical: 6,
        backgroundColor: "red",
        width: 200
    },
    modalForm: {
        marginTop: 72,
        display: "flex",
        alignItems: "center"
    },
    addInput: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        width: 300,
        padding: 12,
        borderRadius: 9
    }
})
