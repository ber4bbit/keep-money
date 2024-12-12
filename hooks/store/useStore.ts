import {create} from 'zustand/react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';

export enum EExpenseTypes {
    Income = 'income',
    Expense = 'expense',
}

export enum ECurrenciesVariants {
    Ruble = 'ruble',
    Dollar = 'dollar',
}

export interface IExpenseItem {
    type: EExpenseTypes,
    title: string,
    amount: number,
    category: string,
    date: string,
}

export interface ICategoryItem {
    label: string,
    value: string,
    icon?: React.JSX.Element
}

export type TAmountType = Omit<ICategoryItem, 'icon'>

interface IStoreState {
    items: IExpenseItem[],
    categories: ICategoryItem[],
    amountTypes: TAmountType[],
    addItemModal: boolean,
    currency: ECurrenciesVariants,
    addItems: (items: IExpenseItem[]) => void,
    setAddItemModal: (isOpen: boolean) => void,
    setCurrency: (isRuble: boolean) => void,
}

export const useStore = create<IStoreState>((set) => ({
    items: [
        {
            type: EExpenseTypes.Income,
            title: 'Salary',
            amount: 50000,
            category: 'Transport',
            date: '09.12.2024'
        },
        {
            type: EExpenseTypes.Income,
            title: 'Salary',
            amount: 50000,
            category: 'Transport',
            date: '09.12.2024'
        },
        {
            type: EExpenseTypes.Income,
            title: 'Salary',
            amount: 50000,
            category: 'Transport',
            date: '09.12.2024'
        },
        {
            type: EExpenseTypes.Income,
            title: 'Salary',
            amount: 50000,
            category: 'Transport',
            date: '09.12.2024'
        },
        {
            type: EExpenseTypes.Income,
            title: 'Salary',
            amount: 50000,
            category: 'Transport',
            date: '09.12.2024'
        },
        {
            type: EExpenseTypes.Income,
            title: 'Salary',
            amount: 50000,
            category: 'Transport',
            date: '09.12.2024'
        },
        {
            type: EExpenseTypes.Income,
            title: 'Salary',
            amount: 50000,
            category: 'Transport',
            date: '09.12.2024'
        },
        {
            type: EExpenseTypes.Income,
            title: 'Salary',
            amount: 50000,
            category: 'Transport',
            date: '09.12.2024'
        }
    ],
    categories: [
        {
            label: 'Food',
            value: 'food',
        },
        {
            label: 'Transport',
            value: 'transport'
        },
        {
            label: 'Salary',
            value: 'salary'
        }
    ],
    amountTypes: [
        {
            label: 'Income',
            value: 'income'
        },
        {
            label: 'Expense',
            value: 'expense'
        }
    ],
    addItemModal: false,
    currency: ECurrenciesVariants.Ruble,
    addItems: (items: IExpenseItem[]) => set((state) => ({ items: [...state.items, ...items] })),
    setAddItemModal: (isOpen: boolean) => set(() => ({addItemModal: isOpen})),
    setCurrency: (isRuble: boolean) => set(() => ({
        currency: isRuble ? ECurrenciesVariants.Ruble : ECurrenciesVariants.Dollar
    })),
}))
