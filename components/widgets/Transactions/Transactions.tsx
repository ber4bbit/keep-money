import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import TransactionsCard from './TransactionsCard/TransactionsCard';
import {IExpenseItem} from "@/hooks/store/useStore";


interface ITransactionsProps {
    items: IExpenseItem[]
}

export default function Transactions(props: ITransactionsProps) {
    /**
     * TODO: Need to write functional for "::after" element to show this when scroll reached end
     * */
    const [isAtEnd, setIsAtEnd] = React.useState<boolean>(false)
    const {items} = props;

    const itemsToRender = items.map((item, index) => (
        <TransactionsCard
            item={item}
            key={index}
        />
    ))

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.list}>
                    {itemsToRender}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        position: 'relative'
    },
    list: {
        display: 'flex',
        gap: 16
    },
    after: {
        backgroundColor: 'red',
        width: '100%',
        height: 50,
        position: 'absolute',
        bottom: 0
    }
})