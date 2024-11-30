import React from 'react';
import {StyleSheet, View} from 'react-native';
import TransactionsCard from './TransactionsCard/TransactionsCard';
import {IExpenseItem} from "@/hooks/store/useStore";


interface ITransactionsProps {
    items: IExpenseItem[]
}

export default function Transactions(props: ITransactionsProps) {
    const {items} = props

    const itemsToRender = items.map((item, index) => (
        <TransactionsCard
            item={item}
            key={index}
            isLast={index === items.length - 1}
        />
    ))

    return (
        <View style={styles.container}>
            {itemsToRender}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 12,
        borderRadius: 5,
        boxShadow: '0 0 4px lightgray'
    }
})