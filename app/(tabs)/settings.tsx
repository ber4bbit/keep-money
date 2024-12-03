import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Switch
} from "react-native";
import {useStore} from "@/hooks/store/useStore";
import {SharedClasses} from "@/constants/styles";

export default function Settings(): React.JSX.Element {
    const {setCurrency} = useStore();

    return (
        <View
            style={[SharedClasses.centeredWrapper, styles.container]}>
            <View>
                <Switch
                    value={false}
                    onValueChange={(value: boolean) => setCurrency(value)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 72,
        paddingHorizontal: 56
    }
})