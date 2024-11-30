import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import {IExpenseItem, EExpenseTypes, ECurrenciesVariants} from '@/hooks/store/useStore';

export default function TransactionsCard({item, isLast}: { item: IExpenseItem, isLast?: boolean }) {
    const {title, amount, type, currency} = item

    const currencyToRender = currency === ECurrenciesVariants.Ruble ? '₽' : '$';

    return (
        <View
            style={[
                styles.card,
                isLast && styles.borderBottom
            ]}
        >
            <Text>{title}</Text>
            <View style={styles.amountInfo}>
                <Text
                    style={[type === EExpenseTypes.Income ? styles.income : styles.expense, styles.amountNumber]}
                >
                    {type === EExpenseTypes.Income ? '+ ' : '- '}
                    {currencyToRender}
                    {amount}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: 'lightgray'
    },
    amountInfo: {

    },
    amountNumber: {
        fontWeight: 'bold',
    },
    income: {
        color: '#34AA44'
    },
    expense: {
        color: '#E6492D'
    },
    borderBottom: {
        borderBottomWidth: 0,
    }
})