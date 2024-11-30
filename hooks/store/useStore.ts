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
    currency: ECurrenciesVariants
}

interface IStoreState {
    items: IExpenseItem[],
    addItems: (items: IExpenseItem[]) => void
}

export const useStore = create<IStoreState>((set) => ({
    items: [],
    addItems: (items: IExpenseItem[]) => set((state) => ({ items: [...state.items, ...items] }))
}))