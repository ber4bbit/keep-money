import React, { useState } from "react";
import UIModal from "@/components/ui/UIModal";
import UIInput from "@/components/ui/UIInput";
import UIButton from "@/components/ui/UIButton";
import { StyleSheet, Text, View } from "react-native";
import { SharedClasses } from "@/constants/styles";
import {
    useStore,
    IExpenseItem,
    EExpenseTypes,
    ECurrenciesVariants,
} from "@/hooks/store/useStore";
import { EUIInputTypes } from "@/components/ui/UIInput/index.types";

export default function AddItemModal(props: {
    modalState: boolean;
    modalStateHandler: () => void;
}) {
    const [inputTitleValue, setInputTitleValue] = useState("");
    const [inputAmountValue, setInputAmountValue] = useState(0);

    const inputTitleHandler = (value: string | number) => setInputTitleValue(value as string);

    const inputAmountHandler = (value: string | number) => setInputAmountValue(value as number);

    const { addItems, setAddItemModal } = useStore();

    const submitItem = () => {
        const obj: IExpenseItem = {
            title: inputTitleValue,
            type: EExpenseTypes.Income,
            currency: ECurrenciesVariants.Ruble,
            amount: inputAmountValue,
        };

        const array = Array.of(obj);

        addItems(array);

        setAddItemModal(false)
    };

    return (
        <UIModal
            state={props.modalState}
            modalStateHandler={props.modalStateHandler}
        >
            <View style={styles.container}>
                <Text style={SharedClasses.titleText}>Add Item</Text>
                <UIInput
                    placeholder="Enter a name"
                    classes={[styles.input]}
                    changeHandler={inputTitleHandler}
                />
                <UIInput
                    placeholder="Ener an amount of expense"
                    classes={[styles.input]}
                    changeHandler={inputAmountHandler}
                    inputType={EUIInputTypes.Numeric}
                />
                <UIButton
                    classes={[styles.submitBtn]}
                    textColor="white"
                    clickHandler={() => submitItem()}
                >
                    Submit
                </UIButton>
            </View>
        </UIModal>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: 310,
        height: "100%",
    },
    input: {
        width: "100%",
        height: 42,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 9,
        marginTop: 24,
    },
    submitBtn: {
        backgroundColor: "black",
        width: 72,
        height: 42,
        borderRadius: 9,
    },
});
