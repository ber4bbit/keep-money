import React, {useState} from 'react';
import UIModal from "@/components/ui/UIModal";
import UIInput from "@/components/ui/UIInput";
import UIButton from "@/components/ui/UIButton";
import {
    StyleSheet,
    Text,
    View
} from "react-native";
import {SharedClasses} from "@/constants/styles";
import {useStore, IExpenseItem, EExpenseTypes, ECurrenciesVariants} from "@/hooks/store/useStore";

export default function AddItemModal(props: { modalState: boolean, modalStateHandler: () => void }) {
    const [inputValue, setInputValue] = useState('');

    const inputHandler = (value: string) => setInputValue(value);

    const {addItems} = useStore();

    const submitItem = (value: string)=> {
       const obj: IExpenseItem = {
           title: value,
           type: EExpenseTypes.Income,
           currency: ECurrenciesVariants.Ruble,
           amount: 200
        }

        const array = Array.of(obj)

        addItems(array)
    }

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
                    changeHandler={inputHandler}
                />
                <UIButton
                    classes={[styles.submitBtn]}
                    textColor='white'
                    clickHandler={() => submitItem(inputValue)}
                >Submit</UIButton>
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
    },
    submitBtn: {
        backgroundColor: 'black',
        width: 72,
        height: 42,
        borderRadius: 9
    }
})

