import React, { useState } from "react";
import UIModal from "@/components/ui/UIModal";
import UIInput from "@/components/ui/UIInput";
import UIButton from "@/components/ui/UIButton";
import DropDownPicker, {ItemType} from "react-native-dropdown-picker";
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
    const [inputTitleValue, setInputTitleValue] = useState<string>("");
    const [inputAmountValue, setInputAmountValue] = useState<number>(0);
    const [categoriesSelect, setCategoriesSelect] = useState<boolean>(false);
    const [amountTypeSelect, setAmountTypeSelect] = useState<boolean>(false);
    const [amountTypeSelectValue, setAmountTypeSelectValue] = useState<string>('');
    const [categoriesSelectValue, setCategoriesSelectValue] = useState<string>('');

    const inputTitleHandler = (value: string | number) => setInputTitleValue(value as string);

    const inputAmountHandler = (value: string | number) => setInputAmountValue(value as number);

    const { addItems, setAddItemModal, categories, amountTypes } = useStore();

    const submitItem = () => {
        const obj: IExpenseItem = {
            title: inputTitleValue,
            type: amountTypeSelectValue as EExpenseTypes.Expense | EExpenseTypes.Income,
            amount: inputAmountValue,
            category: categoriesSelectValue!,
            date: new Date().toLocaleDateString()
        };

        const array = Array.of(obj);

        addItems(array);

        setCategoriesSelectValue('');
        setAmountTypeSelectValue('');
        setAddItemModal(false);
    };

    return (
        <UIModal
            state={props.modalState}
            modalStateHandler={props.modalStateHandler}
        >
            <View style={styles.container}>
                <Text style={SharedClasses.titleText}>Add Income or Expense</Text>
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
                <DropDownPicker
                    items={categories as ItemType<string>[]}
                    open={categoriesSelect}
                    setOpen={() => setCategoriesSelect(!categoriesSelect)}
                    value={categoriesSelectValue}
                    setValue={(value) => setCategoriesSelectValue(value)}
                />
                <DropDownPicker
                    setValue={(value) => setAmountTypeSelectValue(value)}
                    value={amountTypeSelectValue}
                    items={amountTypes}
                    open={amountTypeSelect}
                    setOpen={() => setAmountTypeSelect(!amountTypeSelect)}
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
