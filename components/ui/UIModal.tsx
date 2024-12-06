import React from 'react';
import {
    Keyboard,
    Modal,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import UIButton from "@/components/ui/UIButton";

interface UIModalProps {
    children: React.JSX.Element | string,
    state: boolean,
    modalStateHandler: () => void,
    animation?: "none" | "slide" | "fade" | undefined,
    classes?: {
        [key: string]: any
    }[],
}

export default function UIModal(props: UIModalProps) {
    const {
        state,
        animation,
        children,
        classes,
        modalStateHandler
    } = props;

    return (
        <Modal
            visible={state}
            animationType={animation || "slide"}
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
                    <View
                        style={[styles.modalContent, classes]}
                    >
                        <UIButton
                            classes={[styles.modalClose]}
                            clickHandler={() => modalStateHandler()}
                        >
                            <Ionicons name="close" size={24} color="white"/>
                        </UIButton>
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 56,
        position: 'relative',
        backgroundColor: '#F4F4F4'
    },
    modalClose: {
        position: 'absolute',
        top: 47,
        right: 42,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 9,
        backgroundColor: 'black',
        width: 36,
        height: 36
    }
})