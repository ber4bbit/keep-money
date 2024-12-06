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
        />
    ))

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                {itemsToRender}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
    },
    list: {
        display: 'flex',
        gap: 16
    }
})