import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import {
    IExpenseItem,
    EExpenseTypes,
    ECurrenciesVariants,
    useStore
} from '@/hooks/store/useStore';

export default function TransactionsCard({item, isLast}: { item: IExpenseItem, isLast?: boolean }) {
    const {title, amount, type, category} = item;

    const {categories, currency} = useStore();

    const categoryValue = categories.find((item) => item.value === category)?.label

    const currencyToRender = currency === ECurrenciesVariants.Ruble ? '₽' : '$';

    return (
        <View
            style={[
                styles.card,
                isLast && styles.borderBottom
            ]}
        >
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.amountInfo}>
                    <Text
                        style={[type === EExpenseTypes.Income ? styles.income : styles.expense, styles.amountNumber]}
                    >
                        {type === EExpenseTypes.Income ? '+ ' : '- '}
                        {amount}
                        {currencyToRender}
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.category}>{categoryValue}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        display: 'flex',
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: 'lightgray',
        gap: 12
    },
    amountInfo: {

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    body: {
        display: 'flex',
    },
    category: {
        color: 'gray',
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