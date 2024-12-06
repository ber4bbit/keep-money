import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ECurrenciesVariants, EExpenseTypes, IExpenseItem, useStore} from '@/hooks/store/useStore';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TransactionsCard({item}: { item: IExpenseItem }) {
    const {title, amount, type, category, date} = item;

    const {categories, currency} = useStore();

    const categoryValue = categories.find((item) => item.value === category)?.label

    const currencyToRender = currency === ECurrenciesVariants.Ruble ? '₽' : '$';

    return (
        <View
            style={[
                styles.card,
                type === EExpenseTypes.Income ? styles.cardIncome : styles.cardExpense
            ]}
        >
            <View
                style={[
                    styles.categoryIcon,
                    type === EExpenseTypes.Income ? styles.categoryIconIncome : styles.categoryIconExpense
                ]}
            >
                <FontAwesome5 name="bus" size={24} color="#fff"/>
            </View>
            <View style={styles.info}>
                <View style={styles.infoColumn}>
                    <Text
                        style={[
                            styles.title,
                            type === EExpenseTypes.Income ? styles.colorIncome : styles.colorExpense
                        ]}
                    >{title}</Text>
                    <Text style={type === EExpenseTypes.Income ? styles.colorIncome : styles.colorExpense}>{date}</Text>
                </View>
                <View style={[styles.infoColumn, styles.alignRight]}>
                    <Text
                        style={[
                            styles.title,
                            type === EExpenseTypes.Income ? styles.colorIncome : styles.colorExpense
                        ]}
                    >{amount}{currencyToRender}</Text>
                    <Text style={type === EExpenseTypes.Income ? styles.colorIncome : styles.colorExpense}>{categoryValue}</Text>
                </View>
            </View>
        </View>
    );
}

/**
 * @beta Need to remove a lot of styles to shared classes
 * like Flex Containers and Typography
 * */
const styles = StyleSheet.create({
    card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingLeft: 16,
        paddingRight: 16,
        paddingVertical: 16,
        borderRadius: 20,
    },
    cardIncome: {
        backgroundColor: '#D9E7E5'
    },
    cardExpense: {
        backgroundColor: '#E6E2E6'
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    infoColumn: {
        display: 'flex',
        gap: 6
    },
    alignRight: {
        alignItems: 'flex-end'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    colorIncome: {
        color: '#42887C'
    },
    colorExpense: {
        color: '#836F81'
    },
    categoryIcon: {
        width: 64,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
    },
    categoryIconIncome: {
        backgroundColor: '#42887C'
    },
    categoryIconExpense: {
        backgroundColor: '#836F81'
    }
})