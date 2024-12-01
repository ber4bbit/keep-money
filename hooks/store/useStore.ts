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
    addItemModal: boolean,
    addItems: (items: IExpenseItem[]) => void,
    setAddItemModal: (isOpen: boolean) => void
}

export const useStore = create<IStoreState>((set) => ({
    items: [],
    addItemModal: false,
    addItems: (items: IExpenseItem[]) => set((state) => ({ items: [...state.items, ...items] })),
    setAddItemModal: (isOpen: boolean) => set(() => ({addItemModal: isOpen}))
}))
