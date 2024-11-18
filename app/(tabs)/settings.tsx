import React from "react";
import {Text, View} from "react-native";
import {SharedClasses} from "@/constants/styles";

export default function Settings(): React.JSX.Element {
    return (
        <View style={SharedClasses.centeredWrapper}>
            <Text>Settings Tab</Text>
        </View>
    )
}