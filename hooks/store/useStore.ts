import {create} from 'zustand/react';

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
    category: string
}

export interface ICategoryItem {
    label: string,
    value: string
}

interface IStoreState {
    items: IExpenseItem[],
    categories: ICategoryItem[],
    addItemModal: boolean,
    currency: ECurrenciesVariants,
    addItems: (items: IExpenseItem[]) => void,
    setAddItemModal: (isOpen: boolean) => void,
    setCurrency: (isRuble: boolean) => void,
}

export const useStore = create<IStoreState>((set) => ({
    items: [],
    categories: [
        {
            label: 'Food',
            value: 'food'
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
    addItemModal: false,
    currency: ECurrenciesVariants.Ruble,
    addItems: (items: IExpenseItem[]) => set((state) => ({ items: [...state.items, ...items] })),
    setAddItemModal: (isOpen: boolean) => set(() => ({addItemModal: isOpen})),
    setCurrency: (isRuble: boolean) => set(() => ({
        currency: isRuble ? ECurrenciesVariants.Ruble : ECurrenciesVariants.Dollar
    })),
}))
